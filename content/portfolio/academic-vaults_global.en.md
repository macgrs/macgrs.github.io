+++
showonlyimage = true
draft = false
image = "https://assets.sc1quzu4790.universe.wf/img/web2-voute-notre-dame-godong.jpg"
date = "2020-11-05T18:25:22+05:30"
title = "Evaluation of the residual mechanical fire stability of the vaults of Notre-Dame Cathedral in Paris"
weight = 0
tags = ["academic"]
+++

**At the crossing of the transept, a gaping hole; in the vaulting, breaches.**
 
Following the April 2019 fire, the structural stability of Notre-Dame de Paris’ vaults became a key concern in the restoration of the secular monument. Several studies have been carred out by the [Civil Engineering]() Work Group of the Notre-Dame de Paris scientific consortium, supported by the [Digital Ecosystem]() WG or the engineering consultancy [STONO](https://www.stono.fr) for geometric modelling, and forming part of the structural assessment being conducted by the [maitrise d'oeuvre].

The aim is to understand the mechanical behaviour of the vaults and their buttressing through mechanical simulations. These study rely both on accurate representation of the physics and the detailed geometric modelling of its structural components. The first of these studies, which is discussed here, confronts several simulation models based on the same initial conditions and geometrical models. More complex loading scenarios have been addressed in subsequent studies, whilst knowledge of the response of masonry to fire will was further developed through the ANR Demmefi project
<!--more-->

## A wide-ranging collaboration to understand fire-damaged vault behavior
The thermal damage caused by the fire, the loading history beared by the structure over the centuries, the material characteristics and the intrinsic irregularities of masonrywork are all unknown factors that cast doubt on the mechanical stability of the choir' and nave' vaults. Combined _in-situ_ analysis and the cumulated expertises allows to define the initial conditions for the simulation scenarios. Different simulation methods from the labs are benchmarked, representing the masonry physics in a different manner[^1] : (a) the continuous methods, with masonry "modeled as a continuum deformable body, without distinction between blocks and mortar layers" (b) the discrete methods, modeling block-by-block interactions through the mortar layers.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/file-20220727-21-4gv6bc.jpg" alt="Portrait" height="200" caption="Stress mapping of material under horizontal loading [I2M, LMGC, Mimetics, LMDC, GSA | model: A.Gros, P.Nougayrede]" >}}

Beyond improving the trustworthiness of the results, those complementary approaches enables to explore, in their own way, the various mechanisms resulting in structural failure, study the structure geometric deformations and stress endured by the materials, as well as to identify areas of vulnerability. 

In masonry structures, the geometry is a determinant factor[^2]. The difference in thickness between the choir and nave vaults soon reveals opposing mechanisms, despite their similar appearance.

## Adaptive parametric geometric modeling, based on point cloud surveys
How to accurately model a masonry vault ? Stereotomy principles and _"l'art du trait"_, guide the mouse or the hand of the stonemason for vault design and restoration. There are also the practical approximations, those ideal geometries with perfect, well-defined curves that one can project on a geometrical survey. When modeling a compromised structure for mechanical simulation, an option is to start from the sane geometry and recover the after-damage quirky appearance after a simple loading case (eg. self-weight). Another is to start from the quirky appearance. 

Despite the perfection aura that drapes Notre-Dame de Paris, each structural element surveyed shows significant asymmetry - due to a succession of designs during the construction, or the several restoration works (ref thèse ... et ANR mirador). The pre-fire Lidar survey made by Andrew Tallon in 2010 shows the extent of those asymmetries, identifies curvature reversals in vaultings, the thickness variations from their origin to the keystone and other instances of double curvature.


{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/file-20220727-21-4gv6bc.jpg" alt="Portrait" height="200" caption="Displacements endured by the vault and its buttressing system under horizontal loading [I2M, LMGC, Mimetics, LMDC, GSA | model: A.Gros, P.Nougayrede]" >}}

To meet the requirements relating to geometric modeling, we took Tallon' Lidar point cloud as a starting point. The combined analysis of the graphical documents derived from the survey and of analoguous - ruined - structural systems allowed breaking down the vault/buttressing system to distinct components. Including the simplification of the trivial ones, such as the _tas-de-charge_ modeled as _"basketball hoops"_ or _"ice cream cones"_. Modeling of the critical elements, ribs and vaulting, is parametrised on the survey. In other words, the set of ribs curves are splines _fit_ to the point cloud (two strokes of compass for drawing the ogival arch is not an option), vaultings are built as _relaxed_ translation surfaces to the point cloud. A _variable offset_ of the resulting freeform surface generates the extrados of the vault, hence restituting its volume and its progressive tapering at the keystone.

Finally, discrete elements simulation strategies require a block-by-block representation of the apparel. While it is trivial for the ribs, it is the straight oppositve for the vaultings. The apparel of the latter is simplified, due to computation time explosion, by an equivalent one approximating the stones' aspect ratio and orientation. The blocks are cutted with the _Chebyshev algorithm_ (aka _Compass algorithm_) and connected to the ribs. The resulting geometric models are BREPs, ready to be meshed for simulation.

## Selective Bibliography
+ Parent, T., Brocato, M., Colas, A. S., Domede, N., Dubois, F., Garnier, D., Gros, A., Mindeguia, J. C., Morel, S., Morenon, P., Nougayrede, P., & Taforel, P. (2023). A Multi-Model Structural Analysis of the Vaults of Notre-Dame de Paris Cathedral after the 2019 Fire and a Proposal for a Hybrid Model Merging Continuum and Discrete Approaches. Journal of Cultural Heritage. https://doi.org/10.1016/j.culher.2023.05.009
+ Morenon, P., Brocato, M., Colas, A.-S., Domède, N., Dubois, F., Garnier, D., Gros, A., Morel, S., Nougayrede, P., Parent, T., & Taforel, P. (2023, June). Benchmark Numérique Des Méthodes de Calcul Non-Linéaires Appliqués à La Cathédrale Notre-Dame de Paris. Journées Nationales de La Maçonnerie.
+ Morenon, P., Brocato, M., Colas, A.-S., Domede, N., Dubois, F., Garnier, D., Gros, A., Morel, S., Nougayrede, P., Parent, T., & Taforel, P. (2023, June). Fonctionnement mécanique des voûtes sexpartites de la cathédrale Notre-Dame de Paris. Journées Nationales Maçonnerie 2023.
+ D’Altri et al. 2020. « Modeling Strategies for the Computational Analysis of Unreinforced Masonry Structures: Review and Classification ». Archives of Computational Methods in Engineering 27(4):1153‑85. doi:10.1007/s11831-019-09351-x.
+ Heyman, Jacques. 1995. The Stone Skeleton: Structural Engineering of Masonry Architecture. New York, NY: Cambridge University Press.


[^1]: different strategies for mechanical simulation modeling of masonry structures are categorised and discussed by (D'Altri et al., 2020), their implementation for this study is detailed in (Parent et al., 2023)

[^2] see the classic (Heyman, 1995)