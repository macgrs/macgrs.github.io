+++
showonlyimage = true
draft = false
image = "/img/portfolio2/reperage_Fig13-viewer-restitution - Copie.png"
date = "2023-11-05T18:25:22+05:30"
title = "Repérage spatio-temporel des claveaux des nervures des voûtes effondrées de Notre-Dame de Paris"
weight = 0
tags = ["academic"]
+++

**Notre-Dame de Paris cathedral, this stone ~~book~~ puzzle.**
 
In April 2019, the collapse of the cathedral's spire caused 80 of the 120 voussoirs from the F29-30 arch in the nave to fall amidst the heaps of rubble. This project aims to document and reconstruct the spatial and temporal trajectories of these remains, combining knowledge engineering and semantic web technologies, annotated photogrammetric scenes, interdisciplinary contributions, and mathematical modeling.
<!--more-->

## How to relocate the fragments of a collapsed monument ?
In archaeology, the term anastylosis refers to the methodical study of fragmented heritage artefacts to restore them to a previous state. Initial hypotheses for the reconstruction of the cllapsed arch were based on manual handling and traditional methods, resulting in a partial and uncertain proposition.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/reperage_150_figure-4moments.png" alt="Portrait" height="200" caption="Four facet for the restitution of the arch and it's remains trajectory: (a) archeological anastylosis, (b) photogrammetry and 3d modelling, (c) voussoirs identification, (d) an hybrid solution, the interplay of mathematical optimisation and anastylosis. [(A. Kommanda/LRMH/RNDP, 2021), (Gros, 2023), (MAP/CNRS/MC, 2022), (Gros, 2022)]" >}}

By converting archaeological insights into algorithmic constraints, a linear optimization model was developed. This enabled an interdisciplinary dialogue between the principles of anastylosis and their mathematical interpretation, culminating in a full reconstruction of the arch with an estimated confidence level of 73.5% (Gros et al., 2023). This work materialized on site, in a 1:10 scale physical model produced from high-definition scans of the remains, enriched by interactive digital representations of the arch and its voussoirs.

## Rethinking heritage documentation from fieldwork to digital traces
The urgency of the restoration site precluded conventional archaeological excavation during the securing phase. To overcome this gap, the team reconstructed the trajectories of the fallen voussoir using annotated photogrammetric scenes and 3D models.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/reperage-humanistica.png" alt="Portrait" height="200" caption="A diagrammatic extract from the CIDOC CRM mapping of the voussoirs N1A and N320' informations (Guillem et al., 2023)" >}}

Through the lens of knowledge engineering, the heterogeneous data corpus - produced by archaeologists, architects, geomatics experts, etc. - was modeled using the CIDOC CRM ontology and structured within Semantic Web technologies. The project thus explores a conceptual framework that articulates the Actor-Network Theory with CIDOC CRM (Guillem et al., 2024), alongside a technological framework associated with the digital twin paradigm (Gros et al., 2023). These developments provide a robust conceptual foundation for the [ERC n-dame_Heritage](https://cordis.europa.eu/project/id/101055423) and the [MITI Astragale project](https://hal.science/hal-04790092v1).

See also, the documentary film [Notre-Dame de Paris, le chantier du siècle](https://www.youtube.com/watch?v=ztQ_g2Ix7ws).

## Selective Bibliography
Gros, A., Guillem, A., De Luca, L., Baillieul, É., Duvocelle, B., Malavergne, O., Leroux, L., & Zimmer, T. (2023). Faceting the Post-Disaster Built Heritage Reconstruction Process within the Digital Twin Framework for Notre-Dame de Paris. Scientific Reports, 13(1), 5981. https://doi.org/10.1038/s41598-023-32504-9
Guillem, A., Gros, A., Abergel, V., & De Luca, L. (2023, October). Reconstruction beyond Representation in Notre-Dame de Paris. 2023 IMEKO TC-4 International Conference on Metrology for Archaeology and Cultural Heritage.
Guillem, A., Gros, A., & Deluca, L. (2023). Faire Parler Les Claveaux Effondrés de La Cathédrale Notre-Dame de Paris. Humanistica 2023.
Baillieul, É., Guillem, A., & Gros, A. (2024). Du claveau physique aux données numériques. Le travail de restitution de l’arc doubleau de la nef de Notre-Dame. Bulletin Monumental, 182.4, 325–332.
