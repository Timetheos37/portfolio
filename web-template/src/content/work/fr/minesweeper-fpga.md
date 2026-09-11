---
title: Démineur sur FPGA
draft : false
publishDate: 2026-07-03 00:00:00
img: /assets/demineur-final.JPEG
img_alt: Vue du projet lors de la présentation finale
gallery:
  - src: /assets/demineur-illustration.png
    alt: Maquette du projet démineur
  - src: /assets/demineur-play.PNG
    alt: Partie de démineur
description: |
  Dans le cadre d'un mini projet de conclusion du cours de systèmes numériques, nous avons réalisé (à deux) un jeu de démineur jouable sur une matrice LED RBG avec un joystick analogique.
tags:
  - Embarqué
  - FPGA
  - VHDL
  - C/C++
---

##### Objectif

L'objectif principale du projet sont de combiner la programmation materielle (partie FPGA avec le langague **VHDL**) et la programmation logicielle (partie processeur avec le langague **C++**). 

#### Différence programmaiton materielle vs logicielle

La programmation materielle est utilisée pour concevoir les pilotes des composants physique de notre projet: la matrice LED et les afficheurs 7 segements.

La programmation logicielle est utilisée pour coder toute la logique du jeu ainsi que la commuinication avec le sitck analogique utilisant le protocole _I2C_.

#### Avantage de la programmaiton materielle
Bien qu'il soit possible de coder des pilotes avec la programmation logicielle, la programmation materielle offre certains avantages. Notament un gain de vitesse et un délais très réduit. Le principe de ce type de programmation est de concevoir des coeurs de silicium à un usage ou un type de calcul dédié. 

C'est ce même principe qui est utilisé dans la cartes graphiques par exemple, les cartes graphiques (ou les _GPUs_) sont des coeurs concus spécialement pour le calcul matriciel, optimisés pour exécutrer la même instrucution sur un grand nombre de données simultanément. 

#### Procédé de développement materiel
Pour convevoir un pilote par de la programmation materielle avec le language **VHDL** , nous commençons par une étude de la documentation du composant. Il est important de comprendre les protocoles utilisé et la manière dont le composant interprète les signaux reçus en entrée et comment les signaux de sorties sont générés.

Ensuite, nous modélison le pilote grâce à différents outils de conceptions comme les machines d'état pour représenter le comportement du pilote et les diagrames de blocs pour représenter l'architecture du pilote.