{
    "config": {
        "name": "proteinator",
        "description": "COEUS Protein Data Aggregator (Proteinator)",
        "keyprefix":"coeus",
        "version": "1.0a",
        "ontology": "http://bioinformatics.ua.pt/diseasecard/diseasecard.owl",
        "setup": "proteinator/setup.rdf",
        "sdb":"proteinator/sdb.ttl",
        "predicates":"proteinator/predicates.csv",
        "built": true,
        "debug": false,
        "environment": "production"
    },
    "prefixes" : {
        "coeus": "http://bioinformatics.ua.pt/coeus/resource/",
        "owl2xml":"http://www.w3.org/2006/12/owl2-xml#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "owl": "http://www.w3.org/2002/07/owl#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "dc": "http://purl.org/dc/elements/1.1/",
    }
}