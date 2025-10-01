---
title: "Information System of the Russian Football Union"
date: 2021-06-21
description: "Digital transformation project of the RFU, developed on the Soarse platform"
weight: 9
cover: "/images/projects/rfs.en.png"
---

In 2020, the Russian Football Union (RFU) launched a digital platform developed in collaboration with **Gost Group**, based on the domestic software **GOST Platform**.  
The project’s goal is the **digitalization of the football industry** and the transition to electronic interaction between all participants.

This project was landmark for our product **Soarse** — it was not only the **first implementation**, but also laid the architectural principles we followed in further projects.

---

### 📦 WEB-based DBMS

All data, including **master data**, **operations**, and **transactions** (such as fitness test results, match outcomes, etc.), is stored directly in Soarse.

Feature:  
The client-side of the product **serves as a DBA’s workplace** — the user doesn’t just manage forms, but directly works with the data structure.

---

### 🔗 REST API and Hybrid Architecture

The portal part of the system was developed by another team, which became a flexibility test for our API.  
As a result:

- We **refined the hybrid implementation model**
- All functions are available via **REST requests**
- Backend and frontend interfaces were completely decoupled

---

### 📊 Report Generator

For some complex screen forms, we had to develop **JOIN controllers**.  
This experience formed the basis of the **views and aggregates** architecture, which later became an integral part of Soarse.

---

## What can the system do?

IS RFU covers the entire football ecosystem:

- Coaches, players, referees, inspectors, sports schools and facilities
- Management of educational processes in academies
- Planning, conducting, and analyzing competitions
- Electronic athlete profiles
- Consolidated analytics for all participants

The system supports the **Football Development Strategy until 2030** and provides a **unified digital space** for all stakeholders.

---

## Results and Recognition

- Winner of the **"Project of the Year Global CIO 2021"** award in the _Media/Art/Entertainment/Sports_ category
- Over **4000 subscribers** in 85 regions of Russia
- A platform for digital management, education, and football infrastructure development

---

## Useful Links

- [News on rfs.ru](https://rfs.ru/news/219881)
- [GOST Group Press Release (PDF)](https://www.gmcs.ru/upload/iblock/d95/d95eb2631229edacb149731a10fe509c.pdf)
- [Case study on GlobalCIO](https://globalcio.ru/projects/18938/)
