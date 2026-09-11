---
title: Démineur sur FPGA
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/demineur-final.JPEG
img_alt: Vue du projet lors de la présentation finale
gallery:
  - src: /assets/demineur-illustration.png
    alt: Maquette du projet démineur
  - src: /assets/demineur-play.PNG
    alt: Partie de démineur
description: |
  Dans le cadre d'un mini projet de conclusion du cours de systèmes numériques, nous avons réalisé (à deux) un jeu de démineur jouable sur une matrice LED RGB avec un joystick analogique.
tags:
  - Embarqué
  - FPGA
  - VHDL
  - C/C++
---

##### Objectif

L'objectif principal du projet est de combiner la programmation matérielle (partie FPGA avec le langage **VHDL**) et la programmation logicielle (partie processeur avec le langage **C++**). 

#### Différence programmation matérielle vs logicielle

La programmation matérielle est utilisée pour concevoir les pilotes des composants physiques de notre projet : la matrice LED et les afficheurs 7 segments.

La programmation logicielle est utilisée pour coder toute la logique du jeu ainsi que la communication avec le conversiseur du signal analogique provenant du joystick.

#### Avantage de la programmation matérielle
Bien qu'il soit possible de coder des pilotes avec la programmation logicielle, la programmation matérielle offre certains avantages. Notamment un gain de vitesse et un délai très réduit. Le principe de ce type de programmation est de concevoir des cœurs de silicium à un usage ou un type de calcul dédié. 

On retrouve cette logique d'optimisation dans les cartes graphiques (GPU) : pour maximiser les performances, elles intègrent des cœurs matériels spécialisés (ou _IP cores_) dédiés à des calculs très spécifiques, libérant ainsi le processeur principal. Développer en VHDL sur FPGA nous permet d'appliquer cette même philosophie à notre échelle : nous concevons nos propres _IP cores_ sur mesure pour piloter nos composants physiques (matrice LED, afficheurs), garantissant ainsi un parallélisme et une efficacité impossibles à atteindre avec un simple logiciel.

#### Procédé de développement matériel
Pour concevoir un pilote par de la programmation matérielle avec le langage **VHDL**, nous commençons par une étude de la documentation du composant. Il est important de comprendre les protocoles utilisés et la manière dont le composant interprète les signaux reçus en entrée et comment les signaux de sortie sont générés.

Ensuite, nous modélisons le pilote grâce à différents outils de conception comme les machines d'état pour représenter le comportement du pilote et les diagrammes de blocs pour représenter l'architecture du pilote.