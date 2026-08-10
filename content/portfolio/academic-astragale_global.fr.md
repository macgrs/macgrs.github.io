+++
showonlyimage = true
draft = false
image = "https://res.cloudinary.com/f0prauim/image/upload/v1786369182/astragale_Notre-Dame_de_Paris_035.jpg"
date = "2025-04-01T18:25:22+05:30"
title = "Astragale, Application des Graphes de Connaissances pour les données de Simulation Structurelle et de Conservation du Patrimoine Culturel Bâti"
weight = 0
tags = ["académique"]
+++

**Relier observations, modélisations et simulations.**
 
La conservation du patrimoine bâti repose sur une compréhension fine des désordres affectant les structures. Or, ces désordres ne peuvent être pleinement appréhendés qu’en croisant des observations empiriques, des mesures et modèles, et des simulations numériques. Parmi ces études, le diagnostic structurel est critique pour anticiper les interventions et garantir la sécurité des édifices. Le défi est alors de concevoir les outils et méthodes permettant l'intégration cohérente de ces informations dans une logique de capitalisation des connaissances.
<!--more-->

## Organiser les informations d'un édifice avec un graphe de connaissances
Cette étude propose une approche fondée sur les graphes de connaissances pour organiser et relier les données issues des diagnostics. En combinant modélisation de la provenance des études, spatialisation des altérations et formalisation de leur types avec les outils du Web Sémantique, nous développons l'ontologie AB2CRM depuis le standard CIDOC CRM. L'application innovante de la méthodologie eXtreme Design nous permet d'extraire et assembler des motifs ontologiques de CIDOC CRM de manière itérative, dans le but de contrôler la montée en complexité du modèle et d'en certifier la validité par un protocole de test.


{{< remote-img-with-caption src="https://res.cloudinary.com/f0prauim/image/upload/v1786369182/astragale_soutenance-250402_Soutenance-v104_p39-rognee.png" alt="Portrait" height="200" caption="Alignement des informations de conservation, une fissure observée sur site, et d'un résultat de simulation, la prédiction d'une fissureation en tête lors d'un scénario de poussée passive (Gros, 2025)" >}}

Cette ontologie permet de relier l’origine des informations par des mécanismes similaire à PROV-O, la nature des composants et de leurs altérations structurée par des thésaurus SKOS (AAT, icomos-stone, etc.) et les localiser, par leurs relations topologique ou l'un de leurs géométries (relevé Lidar, modèle STEP, etc.). A terme, le cadre conceptuel mis en œuvre permet d’envisager un raisonnement déductif et inductif, autour des typologies de dégradations connues ou émergentes.

## Une architecture système de référence pour l'intégration des données de diagnostic
La réutilisation des informations, leur mutualisation entre les études et les possibilités d'analogie entre les ouvrages de même types sont autant d'exigences à satisfaire lors de la conception d'un tel système d'information. Nous avons identifié et expérimenté une architecture de référence distribuée, orientée-événements, dont les services faiblement couplés sont exposés par une API passerelle. 

{{< remote-img-with-caption src="https://res.cloudinary.com/f0prauim/image/upload/v1786369182/astragale_soutenance-250402_Soutenance-v104_p59-rognee.png" alt="Portrait" height="200" caption="Clustering hiérarchique des altérations et endommagements, depuis les informations stockées dans le graphe de connaissances (Gros, 2025)" >}}

Deux pipelines de données illustrent l'enrichissment de données hétérogènes vers le graphe de connaissances : (a) l'extraction d'informations d'endommagement depuis les résultats de simulations issus du solveur multiphysique LMGC90, et (b) l'import des informations de conservation depuis la plateforme d'annotation de scènes photogrammétriques Aïoli. Grâce au graphe de connaissances, ces données peuvent être explorées, croisées et analysées selon des logiques avancées (ex. : clustering d’altérations), ouvrant la voie à une gestion durable des informations de diagnostic du patrimoine.

{{< remote-img-with-caption src="https://res.cloudinary.com/f0prauim/image/upload/v1786369182/astragale_soutenance-250402_Soutenance-v104_p49-rognee.png" alt="Portrait" height="200" caption="Diagramme haut-niveau de l'architecture système (Gros, 2025)" >}}


## Bibliographie sélective
+ Gros, A., De Luca, L., Dubois, F., Véron, P., & Jacquot, K. (2025). From Surveys to Simulations: Integrating Notre-Dame de Paris’ Buttressing System Diagnosis with Knowledge Graphs. Automation in Construction, 170, 105927. https://doi.org/10.1016/j.autcon.2024.105927
+ Gros, A., De Luca, L., Dubois, F., Véron, P., & Jacquot, K. (2023). Décrire Une Hypothèse Au Sein d’un Graphe de Connaissances, d’une Simulation Mécanique à Un Fait Historique. Humanistica 2023.
+ Guillem, A., Gros, A., Reby, K., Abergel, V., & DeLuca, L. (2023). RCC8 for CIDOC CRM: Semantic Modeling of Mereological and Topological Spatial Relations in Notre-Dame de Paris. In A. Bikakis, R. Ferrario, S. Jean, B. Markhoff, A. Mosca, & M. N. Asmundo (Eds.), Proceedings of the International Workshop on Semantic Web and Ontology Design for Cultural Heritage (Vol. 3540). CEUR.
