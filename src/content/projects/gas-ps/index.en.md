---
full-title: State Legal Statistics System
title: GAS PS
date: 2023-02-01
datePeriod: '2021-10-15 - 2023-01-31'
description: "MDM and metadata component based on Soarse within the GAS PS Portal of the General Prosecutor's Office of the Russian Federation"
weight: 8
cover: "/images/projects/gas-ps.cover.png"
client: General Prosecutor's Office
role: Architect
---

From October 15, 2021, to January 31, 2023, our team participated in a large-scale government project to create the **GAS PS Portal** — a centralized digital platform for collecting, analyzing, and managing legal statistics in Russia.

The project for **General Prosecutor's Office of the Russian Federation** was pulled off alongside with **Gost Group**.  
We were responsible for developing the component **"Regulatory Reference Data and Metadata Management"**, based on our own product **Soarse**.

---

## What Soarse Did

As part of the Portal, the Soarse component handled several key tasks:

- Management of master data
- Description, versioning, and publishing of primary data collection document forms (DPU)
- Setup and validation of format-logical control (FLC) rules
- Management of criminal case status model
- Integration with other system components via API

---

## 🧩 Architecture and Features

### Plugins (Frontend + Backend)

To adapt the product to the strict and specific customer requirements (not always scalable), we implemented a **plugin architecture** that allowed us to:

- Isolate custom code from the core product
- Simplify maintenance and CI/CD processes
- Prepare the platform for a future **addon marketplace**
- Delegate plugin development to third-party teams

Plugins became a new level of flexibility and scalability for Soarse.

---

### Views

The customer’s request to work with data from multiple sources gave us the perfect opportunity to finally implement the long-planned **views functionality**.

Unlike classic SQL views, in Soarse:

- Source data consists of nested JSON documents with unlimited structure
- **Alias** support for attribute naming
- Conditional row/cell formatting
- An equivalent of **UNION** — which we called **docking**
- And our proudest feature — an equivalent of **JOIN**, called **coupling**, that links data at any nesting level, including reverse relations (FK → PK), through the **relationship indexing mechanism in an RDF store**

---

## 📌 What You Could Do in the System

Soarse enabled users to:

- Maintain and update master data (court, department, etc. directories)
- Create DPU forms with versioning and field visibility logic
- Configure procedural actions and publish forms to the Portal
- Manage criminal case statuses and priorities
- Build FLC rules including enable/disable, export, and publishing
- Use the criminal case tree editor
- Perform full-text search across all master data
- Create views from multiple directories with flexible logic

---

## 🧠 What We Learned

- Built **flexible CI/CD pipelines** in a microservice and plugin-based architecture
- Implemented a full-featured view engine with graph relationships in Soarse
- Reached a new level of **integration maturity**: REST API became not just external, but the backbone of the business logic

