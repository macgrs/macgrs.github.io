+++
showonlyimage = true
draft = false
image = "/img/portfolio2/reperage_Fig13-viewer-restitution - Copie.png"
date = "2023-11-05T18:25:22+05:30"
title = "Repérage spatio-temporel des claveaux des nervures des voûtes effondrées de Notre-Dame de Paris"
weight = 0
tags = ["académique"]
+++

**La cathédrale Notre-Dame de Paris, ce ~~livre~~ puzzle de pierres.**
 
En avril 2019, la chute de la flèche de la cathédrale précipite 80 des 120 claveaux d'un arc de la nef parmi les amoncellements de débris. Ce projet s'attache à documenter et à restituer la trajectoire de ces vestiges dans l'espace et dans le temps, en combinant ingénierie des connaissances et web sémantique, annotation de scènes photogrammétriques, travaux interdisciplinaires et modélisations mathématiques.
<!--more-->

## Comment repositionner les fragments d'un monument détruit ?
En archéologie, le terme d'anastylose désigne l'étude méthodique des fragments d'un artefact du patrimoine pour en restituer un état antérieur. Les premières hypothèses de l'arc effondré sont effectués manuellement, en manipulant les vestiges selon les méthodologies traditionnelles, et n'aboutissent qu'à une hypothèse partielle et incertaine.


{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/reperage_150_figure-4moments.png" alt="Portrait" height="200" caption="Quatre facettes de la restitution de l'arc et de la trajectoire de ses vestiges: (a) anastylose archéologique, (b) photogrammétrie et modélisation 3d, (c) identification des voussoirs, (d) restitution hybride, anastylose et optimisation linéaire [(A. Kommanda/LRMH/RNDP, 2021), (Gros, 2023), (MAP/CNRS/MC, 2022), (Gros, 2022)]" >}}

En dérivant les observations archéologiques en contraintes algorithmiques, un modèle d'optimisation linéaire a été construit. Il donne lieu à des aller-retours interdisciplinaires entre la méthode d'anastylose et son interprétation mathématique, et aboutit à une restitution complète de l’arc avec une fiabilité estimée à 73,5 % (Gros et al., 2023). Ce travail a pris forme sur site, mais aussi dans une maquette physique à l’échelle 1/10e - produite depuis les numérisations haute-définition des vestiges -, enrichie par des versions numériques interactive de l'arc et des claveaux.

## Repenser la documentation du patrimoine bâti, depuis les études et les vestiges
L’urgence du chantier a empêché une fouille archéologique classique en phase de sécurisation. Pour pallier cette absence, l’équipe a reconstruit les trajectoires des vestiges à partir de scènes photogrammétriques annotées, associées à des modèles 3D.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/reperage-humanistica.png" alt="Portrait" height="200" caption="Extrait du diagramme de mapping avec l'ontologie CIDOC CRM des informations des claveaux N1A et N320 (Guillem et al., 2023)" >}}

Au prisme de l'ingénierie des connaissances, le corpus hétérogène de données produits - par les archéologues, architectes, géomaticiens, etc. - est modélisé au moyen de l'ontologie CIDOC CRM et structuré au sein des technologies du web sémantique. Le projet explore ainsi un cadre conceptuel articulant l’Actor-Network Theory avec le CIDOC CRM (Guillem et al., 2024), et un cadre technologique attenant au jumeau numérique (Gros et al, 2023). Ces travaux fournissent un socle conceptuel pour le projet [ERC n-dame_Heritage](https://cordis.europa.eu/project/id/101055423) et le projet [Astragale](https://hal.science/hal-04790092v1).

Voir aussi, le film documentaire [Notre-Dame de Paris, le chantier du siècle](https://www.youtube.com/watch?v=ztQ_g2Ix7ws).

## Bibliographie sélective
Gros, A., Guillem, A., De Luca, L., Baillieul, É., Duvocelle, B., Malavergne, O., Leroux, L., & Zimmer, T. (2023). Faceting the Post-Disaster Built Heritage Reconstruction Process within the Digital Twin Framework for Notre-Dame de Paris. Scientific Reports, 13(1), 5981. https://doi.org/10.1038/s41598-023-32504-9
Guillem, A., Gros, A., Abergel, V., & De Luca, L. (2023, October). Reconstruction beyond Representation in Notre-Dame de Paris. 2023 IMEKO TC-4 International Conference on Metrology for Archaeology and Cultural Heritage.
Guillem, A., Gros, A., & Deluca, L. (2023). Faire Parler Les Claveaux Effondrés de La Cathédrale Notre-Dame de Paris. Humanistica 2023.
Baillieul, É., Guillem, A., & Gros, A. (2024). Du claveau physique aux données numériques. Le travail de restitution de l’arc doubleau de la nef de Notre-Dame. Bulletin Monumental, 182.4, 325–332.
