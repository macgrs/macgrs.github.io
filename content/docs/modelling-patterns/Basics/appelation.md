---
title: "Appelation"
---

The reference name through which an entity is referred. The value might be a string of characters, an identifier or issued from a thesaurus.

#### Ontology used
|Prefix| Name | URI  | Description  |   |
|---|---|---|---|---|
| crm | CIDOC-CRM  |   |   |   |
| rdfs  | RDF Schema  |   |   |   |
|   |   |   |   |   |

### Pattern
|Entity| Expected Type | Path  | Description  |   |
|---|---|---|---|---|
| Thing | crm:E1 ) | $\emptyset$  | E1_Thing is  |   |
| Appelation  | crm:E41 | $E1 \to P2 \to E41$  | E41_Appellation is  |   |
|   |   |   |   |   |


(Schema)

```ttl
prefix crm:
prefix rdfs:

<> 
    a crm:E1 .
    crm:P2 <>

<>
    a crm:E41 .
    rdfs:label "Perdita"^^[xsd:string] .    # case of a string value
    ??? <thesaurus/nomenclature> .          # case of a thesaurus value
```