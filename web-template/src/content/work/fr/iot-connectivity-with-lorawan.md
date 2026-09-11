---
title: Connectivité IoT avec LoRaWAN
draft: false
publishDate: 2026-07-03 00:00:00
img: /assets/img-TP-LoRa.JPEG
img_alt: carte système embarqué avec antenne LoRa
gallery:
  - src: /assets/img-TP-LoRa-2.JPEG
    alt: vue température dans le dashboard

description: |
  Dans le cadre d'un travail de laboratoire, nous avons créé (à deux) une mini station météo communiquant avec le protocole radio LoRa (Long Range).
tags:
  - Embarqué
  - Développement
  - C/C++
  - FreeRTOS
  - LoRa/LoRaWAN

---

## Connectivité IoT avec LoRaWAN

Le but de ce projet était d'apprendre le fonctionnement et l'utilisation du protocole _LoRa/LoRaWAN_ avec un cas d'utilisation simple : une station météo.

La vue globale du système se présente ainsi : la station récupère les données de température et d'humidité, elle les transmet par radio selon le protocole _LoRa/LoRaWAN_ à notre serveur de données. Les données sont ensuite mises en forme pour l'utilisateur dans un _dashboard_. 

#### LoRa vs LoRaWAN

_LoRa_ est le protocole radio utilisé par le composant électronique de la carte. Il permet de transmettre des messages à d'autres systèmes embarqués capables de les recevoir. L'avantage de ce protocole est qu'il utilise très peu d'énergie et qu'il permet d'envoyer des messages sur une distance d'environ 15 km en zone dégagée. Ceci en fait un des meilleurs protocoles de communication sans fil pour les systèmes embarqués de terrain, car il privilégie la basse consomation et la longue portée au prix d'un faible débit de donnée. 

_LoRaWAN_ est la technologie utilisée pour faire passer la communication des systèmes LoRa sur Internet. Ceci fonctionne grâce à des modules de passerelle connectés à des serveurs officiels ou communautaires. Ce protocole définit aussi les normes de format de messages, de gestions des clés de sécurité et de classes d'appareil. 

#### Approche de développement

Le langage de code _C++_ permet une approche orientée objet du programme. Chaque composant électronique est alors représenté par une classe _C++_ qui est ensuite instanciée dans le programme principal. 
Chacun de ces composants doit travailler simultanément, c'est pourquoi nous avons utilisé le système d'exploitation _FreeRTOS_ qui nous a permis d'associer chaque action des composants à une tâche. Une fois le système en marche, _FreeRTOS_ s'occupe lui-même d'agencer les tâches pour qu'elles fonctionnent en parallèle.