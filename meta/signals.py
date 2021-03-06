# -*- coding: utf-8 -*-

from django.db.models import signals
from django.template.defaultfilters import slugify

from external.mendeley import mendeley

# Não é signal, apenas função acessória.
#XXX Trocar de lugar, eventualmente.
def citation_html(reference):
    '''Retorna citação formatada em HTML.

    Citação é gerada através do objeto que o Mendeley API retorna com os 
    campos.
    '''
    citation = u''
    keys = ['year', 'authors', 'title', 'publication_outlet', 'volume',
            'issue', 'pages', 'doi', 'pmid', 'url']
    # Padroniza None para keys que não existem.
    for key in keys:
        # Verifica se doi existe e inclui na citação.
        if key == 'doi':
            if 'identifiers' in reference:
                if 'doi' in reference['identifiers']:
                    citation += u', doi:<a href="http://dx.doi.org/%s">%s</a>' % (reference['identifiers']['doi'], reference['identifiers']['doi'])
        # Verifica se pmid existe e inclui na citação.
        elif key == 'pmid':
            if 'identifiers' in reference:
                if 'pmid' in reference['identifiers']:
                    citation += u', pmid:<a href="http://www.ncbi.nlm.nih.gov/pubmed/%s">%s</a>' % (reference['identifiers']['pmid'], reference['identifiers']['pmid'])
        elif key in reference:
            # Ano.
            if key == 'year':
                citation += u'<strong>%s</strong> ' % reference['year']
            # Autores.
            elif key == 'authors':
                authors = []
                for author in reference['authors']:
                    forenames = author['forename'].split()
                    initials = [name[:1] for name in forenames]
                    initials = ''.join(initials)
                    final = u'%s %s' % (author['surname'], initials)
                    authors.append(final)
                authors = ', '.join(authors)
                citation += u'%s.' % authors
            # Título.
            elif key == 'title':
                citation += u' <em>%s</em>.' % reference['title']
            # Revista.
            elif key == 'publication_outlet':
                citation += u' %s' % reference['publication_outlet']
            elif key == 'volume':
                citation += u', %s' % reference['volume']
            elif key == 'issue':
                citation += u'(%s)' % reference['issue']
            elif key == 'pages':
                citation += u': %s' % reference['pages']
            elif key == 'url':
                # Lidar com múltiplos urls por citação.
                first_url = reference['url'].split('\n')[0]
                citation += u', url:<a href="%s">%s</a>' % (first_url, 
                        first_url)
    return citation

def citation_pre_save(signal, instance, sender, **kwargs):
    '''Cria citação em HTML a partir da bibkey.

    Usa o ID da entrada (= Mendeley ID) para pegar os dados da referência via 
    Mendeley API.
    Manda o objeto para função que gera o html com a citação da referência.
    Salva a citação no banco.

    Notar que múltiplos urls são separados por um \n

    Nome de autor agora é dicionário com 'forename' e 'surname'

    EXEMPLO DE REFERÊNCIA DO MENDELEY API:
    {
        "title":"Embryonic, larval, and juvenile development of the sea biscuit Clypeaster subdepressus (Echinodermata: Clypeasteroida).",
        "type":"Journal Article",
        "volume":"5",
        "issue":"3",
        "url":"http:\/\/www.ncbi.nlm.nih.gov\/pubmed\/20339592\nhttp:\/\/www.ncbi.nlm.nih.gov\/pubmed\/20339592",
        "pages":"e9654",
        "year":"2010",
        "abstract":"Sea biscuits and sand dollars diverged from other irregular echinoids approximately 55 million years ago and rapidly dispersed to oceans worldwide.",
        "authors":[
            {"forename": "Bruno Cossermelli", "surname": "Vellutini"},
            {"forename": "Alvaro Esteves", "surname": "Migotto"}
            ],
        "editors":[],
        "tags":["phd"],
        "keywords":[],
        "publication_outlet":"PloS one",
        "identifiers":{
            "doi":"10.1371\/journal.pone.0009654",
            "issn":"1932-6203",
            "pmid":"20339592"
            },
        "discipline":{
            "discipline":"Biological Sciences",
            "subdiscipline":"Embryology"}
            }
    '''
    reference_id = instance.name
    reference = mendeley.document_details(reference_id)
    citation = citation_html(reference)
    instance.citation = citation

def slug_pre_save(signal, instance, sender, **kwargs):
    '''Cria slug antes de salvar.'''
    if not instance.slug:
        slug = slugify(instance.name)
        instance.slug = slug

def update_count(signal, instance, sender, **kwargs):
    '''Atualiza o contador de fotos e vídeos.'''
    #TODO Incluir os outros modelos!
    ## Many 2 Many
    # Authors
    authors = instance.author_set.all()
    if authors:
        for author in authors:
            author.counter()
    # Sources
    sources = instance.source_set.all()
    if sources:
        for source in sources:
            source.counter()
    # Taxa
    taxa = instance.taxon_set.all()
    if taxa:
        for taxon in taxa:
            taxon.counter()
    # Tags
    tags = instance.tag_set.all()
    if tags:
        for tag in tags:
            tag.counter()
    # References
    references = instance.reference_set.all()
    if references:
        for reference in references:
            reference.counter()
    # Tours
    tours = instance.tour_set.all()
    if tours:
        for tour in tours:
            tour.counter()
    ## Foreign Key
    # Size
    if instance.size:
        instance.size.counter()
    # Sublocation
    if instance.sublocation:
        instance.sublocation.counter()
    # City
    if instance.city:
        instance.city.counter()
    # State
    if instance.state:
        instance.state.counter()
    # Country
    if instance.country:
        instance.country.counter()

def makestats(signal, instance, sender, **kwargs):
    '''Cria objeto stats se não existir.'''
    if not instance.stats:
        from meta.models import Stats
        newstats = Stats()
        newstats.save()
        instance.stats = newstats

def set_position(signal, instance, sender, **kwargs):
    '''Cria objeto com posição no tour, se não existir.'''
    #TODO Create unset_position signal.
    from meta.models import TourPosition
    images = instance.images.all()
    for image in images:
        try:
            query = TourPosition.objects.get(photo=image, tour=instance)
        except:
            tp = TourPosition(photo=image, tour=instance)
            tp.save()
