+++
showonlyimage = true
draft = false
image = "/img/portfolio2/mozartk516-m253-bnf.png"
image_caption = "Mozart K.516f @BnF"
interactive_score= true
date = "2025-04-01T18:25:22+05:30"
title = "Musikalisches Würfelspiel: Dices, Chance and Composition"
weight = 0
tags = ["music", "generation"]
+++

> Any person familiar with dices and numbers, able to copy some notes on a sheet can compose as much little pieces as desired (JP. Kirnberger, 1757 in *Art de composer des menuets et des polonaises sur le champ*)

> Kaleidoscope, subst. masc. Tubular instrument containing mirror effects and mobile glass shards, with various cuts and colors, producing varying shapes at each jolt received by the instrument. (CNRTL, 2026)

<!-- introduction -->
At the tune of the XVIIIth century, a novel kind of musical games became popular in salons. They take advantage of the classical props for randomness - dices, totons, cards, dominos - to let one or many players to step into the role of a composer, in the lapse of a waltz, a polonaise, a quadrille or a minuet ; may the game rule be acutely followed. As the years go by, the catalogues are regularly expanded with new games, often dubious reissues, rebranded knockoffs with titles cluttered with sensationalism. Even without consulting the sales figures of this era, these regular supplements only suggests the popularity of these. Famous composers are credited, rightly or wrongly : pseudo-Mozart shamelessly rubs shoulders with Carl Philip Emmanuel Bach. Nevertheless, what matter is this unspoken promise : catching a glimpse of their genius with a bit of luck.
<!--more-->

<!-- Historique, Motivation, Position des oeuvres et du discours -->
The advent of those musical games is supported by few centuries of trial and error for using heuristics to compose. It fuels sparse motivations from the authors side, often underlined in a preface or forword to the piece as it would be: a brain-teaser or theoretical game with a background of systematization/mathematization of music, a dillettante entertainment, a stimulation spark for uninspired composer, an amusement for the long cold winter nights (N. Zaslaw, 2005) or an infinite material for dance schools (Kirnberger 1757). 
The discourse and the piece are at times of an unsettling clarity, as the Hoegi tabular system, or hidden by mystification or obfuscation layers. It is to be situated somewher between these centruries' appetite for science and mathematics, the joy of play and whimsy of chance, cabbalas and combinatoric systems.

{{< remote-img-with-caption src="https://assets.sc1quzu4790.universe.wf/img/Julius Schmid - A Schubert Evening in a Vienna Salon 1897.jpg" alt="Portrait" height="200" caption="An evening with Schubert in a Vienna Salon (Julius Schmid, 1897)" >}}

<!-- Travaux existants -->
There is a wealth of works on musical games. Their historiography is depicted by (A. Hedges, 1978 ; N. Zaslaw, 2005), some received a sustained attention such as John Clinton's card game "428 millions of Quadrilles" (N. Braguinski, 2019), or informatic transctiptions (see [Resources]). However, their status of _curiosity_ condemns them to be treated as such, surrounded by approximations and erudition, punctuated by errors and asthmatic analysis. Among these works, the chapter "Composing with two dices : invention and combinatoric arts in the XVIIIth century music" (S. Troche) is an oasis. Its core question : which are the links between game, player and chance ?

## Pseudo-Mozart' *Musikalische Wurfespiel* (K.Anh C.30.01)
<!-- Authenticité -->
> Considerable confusion has surronded the musical dice publications attributed to Mozaart (N.Zaslaw, 2005)[^1]

Top put it simply, it's a zoo. In Mozart opus, the only authentic musical game is a cryptic sheet referred to as `K.516f` in Köchel catalogue (H.Noguchi, 19xx ; N. Zaslaw, 2005). An unfinished idea drafted in 32 pairs of measures, each labelled with a letter, without any instructions or explainations. `K.516` refers to a string quintet in G major, the ties between the `f` sheet and the other documents in the file are far from trivial (H.Noguchi, 19xx). Nothing particularly appealing, hence the `K.Anh C.30.01` forgery has taken its rightful place in the collective imagination of musicians (see the IMSL reference), scientifics and public. The autograph version of `K.516` is held at the Bibliothèque Nationale de France, catalogued as [Ms.233](https://gallica.bnf.fr/ark:/12148/btv1b52000845w/f1.item.r=mozart%20Ms%20253#), and digitized on Gallica.

<!-- Description -->
In its Bonn edition, the spurious `K.Anh C.30.01` opens up on a title page translated in four languages - german, french, english, italian - [...]. Then, as leafed through it: (p.1) the instructions ; (p.2) two tables of $8 \times 11=88 ~numbers$, a table per part ; (p.3-6) the 176 bars of the "Music Table". Each bars a dice roll, indicating which bar to copy from the "Music Table" to the score.

## Analysis
The result of a single game is a waltz in *C Major* in the form of a classical menuet, 16 bars in `ABA` form in `3/8` time. The measure 8 is fixed, it is an half-cadence ($I-V$) on the first repetition and a modulation to the dominant (*G Major*) on the second repetition.

{{< osmd file="/doc/moz_wurfespiel-69_6_171_103_28_37_118_91_90_121_150_164_12_115_52_111-20260401.musicxml" measures="8" zoom="0.5" >}}

Obfuscation of the [method] in this game is minimal: one simply needs to reorganize the 176 bars of the "Music Table" (github, score). It is notceable that all the alternative of a single bar shares the same degree and function, and that they are harmonized in a similar manner - with $5$ or $6$ chords,  $_{+}^{7}$, $_{5}^{6}$ ou $+4$ with the addition of the leading tone - share the same harmonic rythm, a comparable range, and simple, frequently reused rythmic patterns. Given this consistency, analyzing one the the $11^{16}$ possible outcomes is a sufficient approximation.

Procedural generation of a new waltz is trivial ([musacts](https://github.com/macgrs/musacts)). Let's add that the MIDI velocities can ben sent to an *Expressive Performance Rendering* model, like the [PianoTransformer](github) auto-encoder. The rendering of the piece feels more lively, but does not fit the style.

## Selective Bibliography
+ **Braguinski, Nikita.** 2019. « “428 Millions of Quadrilles for 5s. 6d.”: John Clinton’s Combinatorial Music Machine ». [10.1525/ncm.2019.43.2.86](https://doi.org/10.1525/ncm.2019.43.2.86).
+ **Hedges, Stephen A.** 1978. « Dice Music in the Eighteenth Century ». _Music & Letters_ 59(2):180‑87.
+ **Noguchi, Hideo**. “Mozart: Musical Game in C, K. 516f.”Mitteilungen der Internationalen Stiftung Mozarteum 38 (1990): 89–101.[http://www.asahi-net.or.jp/~rb5h-ngc/e/k516f.htm](http://www.asahi-net.or.jp/~rb5h-ngc/e/k516f.htm)
+ **Troche, Sarah**. 2015. « Chapitre IV. Composer avec deux dés : invention et art combinatoire dans la musique du xviiie siècle ». P. 163‑88 in _Le hasard comme méthode : Figures de l’aléa dans l’art du xxe siècle_, _Æsthetica_. Rennes: Presses universitaires de Rennes.
+ **Zaslaw, Neal.** 2005. “Mozart’s Modular Minuet Machine.” _Essays in Honor of László Somfai on His Seventieth Birthday: Studies in the Sources and the Interpretation of Music_, 219–35

### Resources
There is a wealth of musical games transcriptions to informatics, among the more complete are :
+ `musical-dice-game`, Python module for `K.Anh C.30.01` ([github](https://github.com/afvanwoudenberg/musical-dice-game/tree/main))
+ `musical-games`, Python module for *C.P.E Bach*, *Kirnberger*, *pseudo-Mozart*, *Stadler*, *Gerlarch* et *Calegari* ([github](https://github.com/robbert-harms/musical-games/tree/master))

### List of musical games dice games (1750-1850)
Sources : (A. Hedges, 1978 ; N. Zaslaw, 2005)

| Author                                   | Date          | Piece Name                                                                      | Edition                  |
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
