+++
showonlyimage = true
draft = false
image = "https://assets.sc1quzu4790.universe.wf/img/mozartk516-m253-bnf.png"
image_caption = "Mozart K.516f @BnF"
interactive_score=true
date = "2025-04-01T18:25:22+05:30"
title = "Musikalisches Würfelspiel: Dés, Chance et Composition"
weight = 0
tags = ["musique", "génération"]
+++

> Toute personne familière des dés et des nombres et capable de reporter des notes sur du papier peut composer autant de petites pièces qu’elle le désire (JP. Kirnberger, 1757 in *Art de composer des menuets et des polonaises sur le champ*)

> Kaléidoscope, subst. masc. Instrument tubulaire contenant un jeu de miroirs et des fragments de verre mobiles, diversement découpés et colorés, produisant des figures qui varient à chaque secousse reçue par l'appareil. (CNRTL, 2026)

<!-- introduction -->
A la charnière du XVIIIe siècle, des jeux musicaux d'un nouveau genre s'invitent dans les salons. Ils reprennent à leur compte les accessoires du hasard - dés, totons, cartes, dominos - pour permettre à un ou plusieurs joueurs de s'improviser compositeur le temps d'une valse, d'une polonaise, d'un quadrille ou d'un menuet ; pourvu que la règle du jeu soit suivie. Les années se suivent, et les catalogues s'augmentent régulièrement de nouveaux jeux, de rééditions multiples,  douteuses, de plagiats aux titres encombrés de phraséologie racoleuse [...]. Sans consulter les ventes de l'époque, nous pouvons toutefois en imaginer le succès. L'autographe d'auteurs de tout horizon se retrouve en bas de ces pièces. Des auteurs prestigieux sont crédités à tort ou à raison : pseudo-Mozart tutoie sans vergogne Carl Philip Emmanuel Bach. Mais qu'importe, ce qui compte c'est la promesse faite à demi-mot : pouvoir toucher par hasard leur génie.
<!--more-->

<!-- Historique, Motivation, Position des oeuvres et du discours -->
L'avènement de ces jeux tiens sur déjà quelques siècle d'histoire, de tentatives et d'utilisations d'heuristiques pour composer. L'un de ces premiers textes est : [...]. Les motivations avouées par les auteurs sont variées, casse tête ou jeu théorique sur fond de systématisation/mathématisation de l'art musical, amusement pour dilettantes, étincelle d'inspiration pour compositeurs en panne, pour égayer de longues soirées d'hiver (N. Zaslaw, 2005), pour fournir un matériau infini aux classes de danse (Kirnberger, 1757). 
Le propos, puis le jeu sont tantôt d'une clarté déconcertante, comme le système tabulaire d'Hoegi, tantôt dissimulé par des couches de mystification ou d'obfuscation. Il se situe quelque part entre les appétences pour la science et les mathématiques de ces siècles, le goût du jeu et la frivolité du hasard, les cabbales et systèmes combinatoires.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/Julius Schmid - A Schubert Evening in a Vienna Salon 1897.jpg" alt="Portrait" height="200" caption="Une soirée avec Schubert dans un salon Viennois (Julius Schmid, 1897)" >}}

<!-- Travaux existants -->
Il existe de nombreux travaux sur les jeux de dés musicaux. Leur historiographie est dépeinte par (A. Hedges, 1978 ; N. Zaslaw, 2005), certains bénéficient d'une attention soutenue tel le jeu de cartes des 428 millions de Quadrilles conçu par John Clinton (N. Braguinski, 2019) ou de transcriptions informatiques (voir [Ressources]). Toutefois, le statut de "curiosité" acquis par ces jeux les condamnent bien souvent à être traité comme tels : à grand renfort d'approximations et d'érudition utile, ponctué d'erreurs et d'analyses asthmatiques. Parmi ces travaux existants, le chapitre "Composer avec deux dés : invention et art combinatoire dans la musique du XVIIIe siècle" (S. Troche, 2015) est un oasis. Sa question centrale : quels sont les liens entre jeu, joueur et hasard ?

## Le *Musikalische Wurfespiel* de pseudo-Mozart (K.Anh C.30.01)
<!-- Authenticité -->
> Une grande confusion a accompagné la publication de jeux de dés musicaux attribué à Mozart (N.Zaslaw, 2005)[^1]

C'est le zoo. Dans l'opus de Mozart, le seul jeu musical authentique est le feuillet hermétique référencé `K.516f` dans le catalogue Köchel (H.Noguchi, 19xx ; N. Zaslaw, 2005). Une idée inachevée esquissée en 32 paires de mesures référencées par des lettres, sans instruction ni d'explication. La référence `K.516` correspond à un quintette à cordes en sol majeur, les liens que peuvent avoir ce feuillet `f` avec le reste des documents n'est pas trivial (H.Noguchi, 19xx). Rien de très appétissant, c'est donc l'imposture `K.Anh C.30.01` qui prend avantageusement sa place dans l'imaginaire collectif des musiciens (référencé dans IMSLP), des scientifiques et du public. La version autographe est à la Bibliothèque Nationale de France, côtée [Ms.233](https://gallica.bnf.fr/ark:/12148/btv1b52000845w/f1.item.r=mozart%20Ms%20253#), numérisée sur Gallica.

<!-- Description -->
Dans son édition de Bonn, l'imposture `K.Anh C.30.01` s'ouvre sur une page de titre traduite en quatre langues - allemand, français, anglais, italien - "Instruction pour composer autant de Walzer ou Schleifer que l'on veut par le moyen de deux dés sans savoir la Musique ou la Composition" par W.A. Mozart. En page 1, les instructions[^2]. En page 2, deux tables de $8 \times 11=88 ~nombres$, soit une table par partie. Les pages 3 à 6 contiennent les 176 mesures de la "Table de Musique". A chaque mesure son jet de dé, indiquant la mesure à reporter de la "Table de Musique" à la partition.

## Analyse
Le résultat d'une partie est une valse en *Do Majeur* sous la forme d'un menuet classique, 16 mesures de forme `ABA` au rythme ternaire `3/8`. La mesure 8 est fixe, c'est une demi-cadence ($I-V$) à la première répétition et une modulation à la dominante (*Sol Majeur*) à la seconde répétition.

{{< osmd file="/doc/moz_wurfespiel-69_6_171_103_28_37_118_91_90_121_150_164_12_115_52_111-20260401.musicxml" measures="8" zoom="0.5" >}}

L'obfuscation de ce jeu est ténue, il suffit de réorganiser les 176 mesures de la "Table de Musique" (github, score). On remarque que toutes les alternatives d'une même mesure ont le même degré et la même fonction, qu'ils sont harmonisés de manière semblable - par des accords chiffrés $5$ ou $6$, sinon $_{+}^{7}$, $_{5}^{6}$ ou $+4$ avec l'ajout de la sensible - ont le même rythme harmonique, un ambitus similaire, des formes rythmiques simples et souvent réutilisées. Au vu de cette homogénéité, l'analyse de l'une des $11^{16}$ possibilités est une approximation suffisante.

La génération d'une nouvelle valse est triviale ([musacts](https://github.com/macgrs/musacts)), les vélocités des information MIDI produites peuvent être traitées par *Expressive Performance Rendering*, comme l'auto-encoder [PianoTransformer](github), rendant la pièce plus vivante mais à côté du style.

## Bibliographie Sélective
+ **Braguinski, Nikita.** 2019. « “428 Millions of Quadrilles for 5s. 6d.”: John Clinton’s Combinatorial Music Machine ». [10.1525/ncm.2019.43.2.86](https://doi.org/10.1525/ncm.2019.43.2.86).
+ **Hedges, Stephen A.** 1978. « Dice Music in the Eighteenth Century ». _Music & Letters_ 59(2):180‑87.
+ **Noguchi, Hideo**. “Mozart: Musical Game in C, K. 516f.”Mitteilungen der Internationalen Stiftung Mozarteum 38 (1990): 89–101.[http://www.asahi-net.or.jp/~rb5h-ngc/e/k516f.htm](http://www.asahi-net.or.jp/~rb5h-ngc/e/k516f.htm)
+ **Troche, Sarah**. 2015. « Chapitre IV. Composer avec deux dés : invention et art combinatoire dans la musique du xviiie siècle ». P. 163‑88 in _Le hasard comme méthode : Figures de l’aléa dans l’art du xxe siècle_, _Æsthetica_. Rennes: Presses universitaires de Rennes.
+ **Zaslaw, Neal.** 2005. “Mozart’s Modular Minuet Machine.” _Essays in Honor of László Somfai on His Seventieth Birthday: Studies in the Sources and the Interpretation of Music_, 219–35

### Ressources
Il existe de nombreuses transcriptions de jeux de dés musicaux à l'informatique, parmi les plus aboutis:
+ `musical-dice-game`, module Python adaptant `K.Anh C.30.01` ([github](https://github.com/afvanwoudenberg/musical-dice-game/tree/main))
+ `musical-games`, module Python adaptant les jeux musicaux de *C.P.E Bach*, *Kirnberger*, *pseudo-Mozart*, *Stadler*, *Gerlarch* et *Calegari* ([github](https://github.com/robbert-harms/musical-games/tree/master))

### Liste de jeux de dés musicaux de 1750-1850
Sources : (A. Hedges, 1978 ; N. Zaslaw, 2005)

| Auteur                                   | Date          | Piece Name                                                                      | Edition                  |
| ---------------------------------------- | ------------- | ------------------------------------------------------------------------------- | ------------------------ |
| **Carl Philipp Emanuel Bach**            | **1754-1778** | **Einfall einen doppelten Contrapunct in der Octave von sechs Tacten**          | **Berlin (Lange)**       |
| **Johann Philipp Kirnberger**            | **1757**      | **Der allezeitfertige Menuetten- und Polonoisen-Komponist**                     | **Berlin (Winter)**      |
| Anonymous                                | 1758          | Ludus Melothedicus ou le jeu de dez harmonique                                  | Paris (de la Chevadière) |
| Herman François de Lange                 | 1762          | Le Toton harmonique ou nouveau jeu de hazard                                    | Paris (Desoer)           |
| Pierre Hoegi                             | 1770          | A Tabular System Whereby the Art of Composing Minuets                           | London (Welcker)         |
| Johann Kade                              | 1770          | Ballett-Tabellen                                                                | na                       |
| Maximilian Stadler                       | 1780          | Table pour composer des menuets et des Trios à l'infinie                        | Paris (Wenck)            |
| Michael Johann Friedrich Wiedeburg       | 1788          | Musikalisches Charten-Spiel ex G dur                                            | Zurich (Winter)          |
| Gustav Gerlach                           | 1790          | Kunst Schottische Tänze zu componiren, ohne musikalisch zu sein                 | na                       |
| Francesco Pasquale Ricci                 | 1790          | Aux plus heureux jeux harmonique pour composer des minuets                      | na                       |
| Franz Joseph Haydn (attributed)          | 1793          | Gioco filharmonico                                                              | Naples (Marescalchi)     |
| **Wolfgang Amadeus Mozart (attributed)** | **1793**      | **Anleitung zum Componiren von Polonoisen**                                     | **Berlin (Hummel)**      |
| Friedrich Gottlob Haydn                  | 1798          | Anleitung mit Wurfeln Anglaisen zu componieren                                  | Dresden                  |
| Jean Baptiste Cartier                    | 1798          | Adagio de Mr. Tartini, varie de plusieurs facons differentes                    | na                       |
| Georg Ernst Gottlieb Kallenbach          | 1800          | Jeu de dés musical, pour apprendre à comp. des anglaises                        | na                       |
| Wilhelm Ferdinand Rong                   | 1800          | Der Musicdirector; Kartenspiel; Dominospiel                                     | na                       |
| Christian Heinrich Fiedler               | 1801          | Musicalisches Würfelspiel oder der unerschöpfliche Ecossaisen-Componist         | Hamburg                  |
| Antonio Calegari                         | 1801          | Gioco pitagorico musicale                                                       | Venice (Valle)           |
| Antonio Calegari                         | 1802          | L'art de composer de la musique sans en connaire les elemens                    | Paris (Boudin)           |
| Antonio Calegari                         | 1802          | Wie die Würfelfallen! Ein Scherz der Tonkunst                                   | Brunswick (Spehr)        |
| Giovanni Catrufo                         | 1811          | Barème musical, ou l'art de composer la Musique sans en connaitre les principes | Paris (Colas)            |
| Franz Joseph Haydn (attributed)          | 1812          | Gioco filharmonico (2nd edition)                                                | Naples (Marescalchi)     |
| Unknown                                  | 1813          | Cabala per Componendi Minuetti                                                  | na                       |
| Friedrich Kuhlau                         | 1817          | Kaleidakustikon, eine Unterhaltung, um Walzer zu komponieren                    | na                       |
| J. C. Graf                               | 1820          | Musikspiel oder Tabelle, unzahlige Märsche für Pianoforte                       | Mainz (Schott)           |
| Ludwig Fischer                           | 1839          | Musikalisches Würfelspiel oder Kunst, durch Würfel Kindern                      | Weimar (Wentzel)         |
| **John Clinton**                         | **1865**      | **The Quadrille Melodist**                                                      | **na**                   |
| **J. R. Pierce & Mary E. Shannon**       | **1949**      | **Composing Music by a Stochastic Process**                                     | **na**                   |
| Unknown (attributed to Kirnberger)       | na            | Der neue Menuetten, Trio, und Polonesen Compositor                              | na                       |
| Unknown                                  | na            | The Melographicon                                                               | na                       |

[^1]: Neal Zaslaw est l'actuel musicologue chargé de mettre à jour le catalogue Köchel, soit la référence de l'oeuvre de Mozart selon ses différents niveaux de canonicité

[^2]: Copiecolle les instructions en français
