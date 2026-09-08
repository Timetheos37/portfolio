---
title: Infrastructure réseau
draft : false
publishDate: 2026-02-08 00:00:00
img: /assets/vue-global-reseau-greensoft.png
img_alt: Vue global reseau greensoft
gallery:
  - src: /assets/vue-archi-reseau-greensoft.png
    alt: Vue architechture reseau greensoft

description: |
  Projet de semestre : Conception architechture réseau complète selon le cahier des charges d'une entreprise fictive GreenSoft.
tags:
  - Réseau
  - Arichitecture
  - Déploiement
---



### Approche

Nous avons reçu comme consigne de créer une infrastrucure réseau d'entreprise selon un cahier des charge qui présentait les besoins d'une entreprise fictive nommée GreenSoft.

Nous sommes partis du cahier des charges pour comprendre les besoins du client afin de présenter un document d'**analyse de solutions** concrètes. Analyser les différentes solutions du marché permet de rester à jour fasse à **l'évolution constante des technologies** et permet de présenter des **alternatives** si besoin.

Voici une liste non-exhausitive pour illustrer cette phase par des exemples :

| Besoins | Solution(s) |
| --- | --- |
| Connexion du site de Dublin (_IPv6 Only_) à Internet (_Dual Stack_) | Protocoles NAT64 + DNS64 |
| Liaison virtuelle privée entre Dublin et le siège principale à Fribourg | Protocoles VPN : GRE ou GMAT |
| Connexion en tunnel privé du site de Lausanne au siège pricipale de Fribourg | Protocoles VXLAN ou L2TP |
| Stabilité et sécurité | Equipement supplémentaire (_Fierwall_ + _Routeur_) avec protocoles VRRP ou HSRP |

### Architecture et déploiement

Une fois l'analyse terminée et les choix de solutions définis, vient l'étape de _designer_ l'architecture du réseau. C'est une étape cruciale dans laquelle on _design_ deux représentations du réseau : le schéma **logique** et **physique**. 

Ces schémas appuie l'étape du déploiement et ils sont indispensable pour le bon déroulement du travail.
C'est à la fin de cette étape que l'on écrit un plan de déploiement pour définir dans quel ordre les différents services doivent être installés.

