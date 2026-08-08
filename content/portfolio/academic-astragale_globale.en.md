+++
showonlyimage = true
draft = false
image = "https://assets.sc1quzu4790.universe.wf/img/astragale_Notre-Dame_de_Paris_035.jpg"
date = "2025-04-01T18:25:22+05:30"
title = "Astragale, Knowledge Graph Applications for Structural Simulation and Conservation Data in Built Heritage"
weight = 0
tags = ["academic"]
+++

**Bridging observations, modelling, and simulations..**
 
Understanding building's pathologies is central to the conservation of built heritage. Such comprehension emerges from the interplay of on-site observations, measures and models, and simulations. Structural diagnosis, in particular, is key to anticipating interventions and ensuring the safety of buildings. The main challenge lies in designing methods and tools that support the coherent integration of such heterogeneous data in a knowledge capitalization framework.
<!--more-->

## Organizing diagnostic knowledge via knowledge graphs
We propose a knowledge graph approach to organize and interrelate data produced during building diagnostics. By combining provenance modelling, spatial localization of alterations, and the formalization of their typologies using Semantic Web technologies, we iteratively develop the AB2CRM ontology from the CIDOC CRM standard. The innovative application of the eXtreme Design methodology enables the extraction and integration of ontology patterns from CIDOC CRM, supporting controlled increases in model complexity and ensuring consistency through systematic testing protocols.


{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/astragale_soutenance-250402_Soutenance-v104_p39-rognee.png" alt="Portrait" height="200" caption="Alignment of conservation information, a crack observed on site, and a simulation result, the prediction of head cracking during a passive thrust scenario (Gros, 2025)" >}}

The ontology connects data provenance using PROV-O-like mechanisms, defines structural components and alterations through SKOS-based thesauri (e.g., AAT, ICOMOS-stone), and supports spatial localization through topological relationships or geometrical representations (e.g., LiDAR scans, STEP models). This conceptual framework enables both deductive and inductive reasoning about known or emerging damage typologies. Ultimately, this conceptual framework should provide the basis for deductive and inductive reasoning, involving known or emerging types of deterioration.

## A reference system architecture for diagnostic data integration
Reusability of information, mutualization across studies, and analogy between similar structures are key requirements for the design of such an information system. We identified and tested a distributed, event-driven reference architecture with loosely coupled services exposed through a gateway API.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/astragale_soutenance-250402_Soutenance-v104_p59-rognee.png" alt="Portrait" height="200" caption="Hierarchical clustering of alterations and damage, from information stored in the knowledge graph (Gros, 2025)" >}}

Two data pipelines illustrate the integration of heterogeneous information into the knowledge graph: (a) extraction of damage-related data from numerical simulations using the multiphysics solver LMGC90, and (b) import of conservation annotations from the photogrammetric scene annotation platform Aïoli. Enabled by the knowledge graph, these datasets can be queried, cross-referenced, and analyzed through advanced logic (e.g., hierarchical clustering), paving the way for sustainable management of structural diagnostics in heritage conservation.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/astragale_soutenance-250402_Soutenance-v104_p49-rognee.png" alt="Portrait" height="200" caption="Overview of knowledge system architecture, based on modern service layering (Gros, 2025)" >}}


## Selective Bibliography
+ Gros, A., De Luca, L., Dubois, F., Véron, P., & Jacquot, K. (2025). From Surveys to Simulations: Integrating Notre-Dame de Paris’ Buttressing System Diagnosis with Knowledge Graphs. Automation in Construction, 170, 105927. https://doi.org/10.1016/j.autcon.2024.105927
+ Gros, A., De Luca, L., Dubois, F., Véron, P., & Jacquot, K. (2023). Décrire Une Hypothèse Au Sein d’un Graphe de Connaissances, d’une Simulation Mécanique à Un Fait Historique. Humanistica 2023.
+ Guillem, A., Gros, A., Reby, K., Abergel, V., & DeLuca, L. (2023). RCC8 for CIDOC CRM: Semantic Modeling of Mereological and Topological Spatial Relations in Notre-Dame de Paris. In A. Bikakis, R. Ferrario, S. Jean, B. Markhoff, A. Mosca, & M. N. Asmundo (Eds.), Proceedings of the International Workshop on Semantic Web and Ontology Design for Cultural Heritage (Vol. 3540). CEUR.
