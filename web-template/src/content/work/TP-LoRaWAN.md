---
title: Connectivité IoT avec LoRaWAN
draft : false
publishDate: 2026-07-03 00:00:00
img: /assets/img-TP-LoRa.JPEG
img_alt: carte système embarqué avec antène LoRa
description: |
  Nous avons créer une mini station météo communiquant avec le protocole radio LoRa (Long Range).
tags:
  - Embarqué
  - Développement
  - C/C++
  - FreeRTOS
  - LoRa/LoRaWAN

---

Le but de ce projet étais d'apprendre le fonctionnement et l'utilisation du protocole _LoRa/LoRaWAN_ avec un cas d'utilisation simple : une station météo.

La vue globale du système ce présente ainsi : la station récupère les données de température et d'humidité, elle les transmet par radio selon le protocole _LoRa/LoRaWAN_ à notre serveur de donnée. Les donnée sont ensuite mise en forme pour l'utilisateur dans un _dash board_. 

**LoRa vs LoRaWAN**

_LoRa_ est le protocole radio utilisé par le composant éléctronique de la carte. Il permet de transmètre des messages à d'autres systèmes embarqués capable de les recevoirs. l'avantage de ce protocole est qu'il utilise très peu d'energie et qu'il permet d'envoyer des messages sur une disante d'environ 15km ce qui en fait un des meilleurs protocoles de communication sans fils pour les systèmes embarqués de terrain.

_LoRaWAN_ est la technologie utilisée pour faire passer la communication des systèmes LoRa sur internet. Ceci fonctionne grâce à des modules de passerelles connectée à des serveurs officiels ou communautaires.

**Approche de développement**

Le language de code _C++_ permet une approche orientée objet du programme. Chaque composant éléctronique est alors représenté par une classe _C++_ qui est ensuite insenciée dans le programme principale. 
Chacun de ces composant doit travailler simultanéement, c'est pourquoi nous avons utiliser le système d'exploitation _FreeRTOS_ qui nous a permis d'associer chaque action des composant à une tâche. Une fois le système en marche, _FreeRTOS_ s'occupe lui même d'agencer les tâches pour qu'elle fonctionnent en parallèle. 

Ce projet à été réalisé en binome avec l'aide du reste de la classe et du professeur.
