---
full-title: State Legal Statistics System
title: GAS PS
date: 2023-02-01
description: "MDM and metadata component based on Soarse within the GAS PS Portal of the General Prosecutor's Office of the Russian Federation"
weight: 8
cover: "/images/projects/gas-ps.en.png"
---

From October 15, 2021 to January 31, 2023, our team participated in a large-scale government project to create the **GAS PS Portal** — a centralized digital platform for collecting, analyzing, and managing legal statistics in Russia.

The project was implemented jointly with **Gost Group** under the order of the **General Prosecutor's Office of the Russian Federation**.  
We were responsible for developing the component **"Regulatory Reference Data and Metadata Management"**, based on our own product **Soarse**.

---

## What Soarse Did

As part of the Portal, the Soarse component handled several key tasks:

- Management of master data
- Description, versioning, and publishing of primary data collection document forms (DPU)
- Setup and validation of format-logical control (FLC) rules
- Management of criminal case status model
- Integration with other system components via API

Under the hood was a **web-based NoSQL DBMS**, storing data in JSON format and configured entirely through a DBA-level UI interface.

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
- And our proudest feature — an equivalent of **JOIN**:  
  called **coupling**, it links data at any nesting level, including reverse relations (FK → PK), via **relationship indexing in an Apache Jena–based RDF store**

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

---

## Role in the Project

- **Architect**, **Analyst**, **Product Owner**
- Responsible for the technical design of the Soarse component within the system
