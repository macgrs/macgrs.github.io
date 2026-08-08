+++
showonlyimage = true
draft = false
image = "/img/portfolio2/web2-voute-notre-dame-godong.jpg"
date = "2020-11-05T18:25:22+05:30"
title = "Évaluation de la stabilité mécanique résiduelle au feu des voûtes de la cathédrale Notre-Dame de Paris"
weight = 0
tags = ["académique"]
+++

**A la croisée du transept, un trou béant, et des brèches dans le voûtement. .**
 
Suite à l’incendie d'avril 2019, la stabilité des voûtes de la cathédrale Notre-Dame de Paris est devenue une question centrale pour la restauration cet édifice séculier. Plusieurs études ont été portées par le groupe de travail [Génie Civil]() du chantier scientifique de Notre-Dame de Paris, accompagnée par le GT [Ecosystème Numérique]() ou le bureau d'études [STONO](https://www.stono.fr) pour la modélisation géométrique, et s'inscrit dans le dans le cadre du diagnostic structurel mené par la maîtrise d’œuvre.

L'objectif est de comprendre le comportement mécanique des voûtes et de leurs appuis par des simulations mécaniques. Ces études reposent tant sur la bonne représentation mécanique de l'édifice, que d'une modélisation géométrique fine de ses composants structurels. La première d'entre elles, discutée ici, confronte plusieurs modèles de simulation depuis les mêmes conditions initiales et modèles géométriques. Des cas de chargement plus complexes seront traitées par des études subséquentes, tandis que la connaissance du comportement des maçonneries au feu sera approfondie par le projet ANR Demmefi.
<!--more-->

## Une collaboration d'envergure pour comprendre le comportement mécanique des voûtes
L'endommagement thermique causé par l'incendie, l'historique du chargement des composants de la structure au fil des siècles et l'irrégularité intrinsèque des maçonneries sont autant d'inconnues rendant incertaine la stabilité mécanique des voûtes du chœur et de la nef. Définir les conditions initiales d'une telle simulation, c'est réussir à évaluer et quantifier raisonnablement les paramètres des matériaux et les types de chargement subis par le système mécanique. Leur évaluation bénéficie de l'expertise accumulée par les laboratoires et startups du GT [Génie Civil](), qui mettent à disposition leurs modèles de simulation mécanique pour rendre compte de la physique à l'oeuvre. Deux types de simulations mécaniques sont mobilisés[^1] : (a) l’approche continue, qui assimile la maçonnerie à un matériau homogène déformable ; (b) l’approche discrète bloc-à-bloc, qui modélise les interactions entre pierres liées par des joints de mortier. 

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/Capture d’écran 2025-04-04 134455-original.png" alt="Portrait" height="200" caption="Cartographie des contraintes dans le matériau sous sollicitation horizontale [I2M, LMGC, Mimetics, LMDC, GSA | model: A.Gros, P.Nougayrede]" >}}

Outre la fiabilisation des résultats, ces approches croisées permettent d'explorer à leur manière les différents mécanismes de ruine de l'ouvrage, d'étudier ses déformations géométriques et les contraintes au sein des matériaux, ainsi que d’identifier les zones de fragilité. 

Une note importante dans le cas des ouvrages en maçonneries de bloc: la géométrie de l'ensemble est un facteur de première importance[^2]. Ainsi, la différence d'épaisseur entre les voûtains du chœur et de la nef ne tarde pas à révéler des mécanismes contraires, en dépit d'une apparence semblable lors des premières inspections visuelles.

## La modélisation géométrique adaptive des voûtes, paramétrée sur les relevés en nuages de points
Comment modéliser finement une voûte maçonnée ? Il y a bien sûr les principes de stéréotomie et l'art du trait, qui gouvernent la souris ou la main du maçon tailleur de pierre pour leur conception et restoration. Il y a aussi les approximations pratiques, ces géométries idéales aux courbes parfaites et bien discipinées que l'on peut projeter sur un relevé des voûtes. 

Pour la simulation d'un ouvrage sinistré, une option est de partir de la géométrie saine pour retrouver l'aspect biscornu d'après-sinistre, et simuler différents cas de charge. Une autre est de partir de l'aspect biscornu. En dépit de l'aura de perfection qui drape Notre-Dame de Paris, chaque élément de relevé témoigne d'une forte asymétrie, due à une succession de projets pendant la construction ou aux travaux de restorations passés (ref thèse ... et ANR mirador). Le relevé pré-incendie effectué par Andrew Tallon en 2010 permet d'évaluer l'ampleur de ces asymétries, déceler les inversions de courbures dans les voûtains, les variations d'épaisseur de leur naissance à leur clef et autre double courbures. 

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/file-20220727-21-4gv6bc.jpg" alt="Portrait" height="200" caption="Déplacements subis par la voûte et son contrebutement lors d’une sollicitation horizontale [I2M, LMGC, Mimetics, LMDC, GSA | model: A.Gros, P.Nougayrede]" >}}

Pour répondre aux exigences liés aux modèles géométriques, nous sommes partis du nuage de point Lidar du relevé Tallon. L'analyse conjointe des documents graphiques dérivés du relevé et de systèmes structurels analogues - souvent à l'état de ruine - a permis le découpage du système structurel voûte/appuis en composants distincts. Voire même la simplification des tas-de-charge en _"paniers de basket"_ et _"cones de glace"_. Pour les éléments critique - comme les nervures et les voûtains - le dessin est paramétré sur le relevé. C'est à dire que l'ensemble des courbes des nervures est _ajusté_ au nuage de points par paramétrisation de splines (dessiner un arc en ogive par deux coups de compas n'est pas envisageable), les voûtains sont construits comme des surfaces de translations _relaxées_ sur le nuage de points. Un _offset variable_ de cette surface libre permet de générer l’extrados de la voûte, et ainsi, de restituer le volume complet du voûtain en reproduisant son affinement de plusieurs centimetres au niveau de la clef. 

Finalement, les modèles de simulation par éléments discrets requièrent une représentation bloc-à-bloc des nervures et des voûtains. Le découpage en claveaux des nervures des voûtes trivial, l'appareillage des voûtains ne l'est pas. L'appareillage de ce dernier est simplifié - pour des raisons d'explosion du temps de calcul - par un appareillage équivalent prenant en compte l'orientation et le ratio hauteur/largeur des pierres. Les blocs sont découpés suivant l'_algorithme de Chebyshev_ (ou _algorithme de compas_) et rattachés aux nervures. Les modèles géométriques obtenus sont de type BREP, prets à être maillés pour la simulation.


## Bibliographie sélective
+ Parent, T., Brocato, M., Colas, A. S., Domede, N., Dubois, F., Garnier, D., Gros, A., Mindeguia, J. C., Morel, S., Morenon, P., Nougayrede, P., & Taforel, P. (2023). A Multi-Model Structural Analysis of the Vaults of Notre-Dame de Paris Cathedral after the 2019 Fire and a Proposal for a Hybrid Model Merging Continuum and Discrete Approaches. Journal of Cultural Heritage. https://doi.org/10.1016/j.culher.2023.05.009
+ Morenon, P., Brocato, M., Colas, A.-S., Domède, N., Dubois, F., Garnier, D., Gros, A., Morel, S., Nougayrede, P., Parent, T., & Taforel, P. (2023, June). Benchmark Numérique Des Méthodes de Calcul Non-Linéaires Appliqués à La Cathédrale Notre-Dame de Paris. Journées Nationales de La Maçonnerie.
+ Morenon, P., Brocato, M., Colas, A.-S., Domede, N., Dubois, F., Garnier, D., Gros, A., Morel, S., Nougayrede, P., Parent, T., & Taforel, P. (2023, June). Fonctionnement mécanique des voûtes sexpartites de la cathédrale Notre-Dame de Paris. Journées Nationales Maçonnerie 2023.
+ D’Altri et al. 2020. « Modeling Strategies for the Computational Analysis of Unreinforced Masonry Structures: Review and Classification ». Archives of Computational Methods in Engineering 27(4):1153‑85. doi:10.1007/s11831-019-09351-x.
+ Heyman, Jacques. 1995. The Stone Skeleton: Structural Engineering of Masonry Architecture. New York, NY: Cambridge University Press.


[^1]: les différentes stratégies de modélisation mécanique de la maçonnerie sont réparties en typologies puis discutées par (D'Altri et al., 2020), l'implémentation de ces stratégies pour cette étude sont décrites dans (Parent et al., 2023)

[^2] voir (Heyman, 1995), classique parmi les classiques.