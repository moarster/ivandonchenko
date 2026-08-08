---
title: "Head of Development"
date: 2025-04-21
description: "Full-cycle technical leader: the team, the deadlines, the architecture, code review — and hands-on development"
tags: ["resume", "head of development", "technical leader", "team management", "camunda", "bpm"]
---

## Professional Profile

Technical leader who owns the whole vertical: the client conversation, requirements, architecture, breakdown and estimation, release planning, people, and code review. Fifteen years in industrial B2B/B2G systems: government, energy, logistics, fintech. Teams from 5 to 40 people.

I am not the strongest engineer in the team and I don't believe I have to be — I have always had people reporting to me who were stronger than me in their field, and that is a normal, workable configuration. My job is to turn their strengths into a working system, delivered on time. And I write code today and intend to keep writing it.

**15 years in IT · 14 years leading teams · 14 years hands-on in Java/Kotlin · 7 years of architecture · English C1**

### What I Take On

- **People:** hiring and onboarding, regular 1:1s, development and grades, mentoring, retention. I have built teams from zero and transformed existing ones
- **Delivery:** breakdown, effort and schedule estimation together with the team, sprint and release planning, backlog and roadmap, risks and blockers, escalation, reporting to the client
- **Engineering:** architecture and service boundaries, code review, standards and quality gates, CI/CD, tests, observability, tech debt
- **Business:** direct work with the client and product owner, acceptance, demos, presales

### On the Word "Team Lead"

A team lead is often understood as the strongest developer in one track: backend lead, frontend lead, analysis lead. That is not my role. I am needed either above such leads, or instead of them — when there is one cross-functional team and someone has to own the whole result: analysis, backend, frontend, integrations, deadlines, and the client.

### Verified Results

- Emergency response time cut by 30% — Safe City, EMERCOM (Sakhalin), delivered in 8 months
- Data analysis time cut by 40% across 15,000+ energy facilities — MDO Portal, Ministry of Energy, Best IT Project in Fuel & Energy 2016
- Analytical report preparation time cut by 60% — St. Petersburg Energy Committee
- 4,000+ users across 85 regions — Russian Football Union platform, Global CIO Project of the Year 2021
- 97% of the team retained through the merger of two teams and a full technology stack change (35 people)

### Expertise Across System Classes

- Business Process Management (BPM)
- Master Data Management (MDM)
- Geographic Information Systems (GIS)
- Enterprise Content Management (ECM)
- Warehouse/Yard Management Systems (WMS/YMS)
- Analytical and situational monitors, BI
- Metrological hubs, information portals
- Low/No-code platforms

## Professional Experience

### Independent Practice
**Tech Lead — technical project leader** | *October 2025 — Present*

> Three parallel projects in three domains. In each one I own the result end to end: from the client conversation to the release.

#### Leading BPM development of a loan origination pipeline based on Flowable

- Work planning: breakdown, effort and schedule estimation together with the team, backlog and release plan, progress control
- Built and applied a methodology for estimating actual effort and assessing developers using neural networks — an objective basis both for planning and for the conversation about grades
- Code review, codebase standards, quality gates: ktlint, detekt, GitLab CI/CD with static checks and automated deployment
- Designing the application architecture from scratch around Flowable 8 in Kotlin; a preliminary major engine upgrade from Flowable 6.7 and a full codebase refactoring to the new API — without stopping the business
- Building a large-scale system testing platform based on **Spring Boot Test** and **Testcontainers** (contract, service, e2e, and infrastructure tests)
- Low-code architecture (UI descriptors, universal delegates, metamodel)
- Full observability stack; API-first approach
- Introducing a culture of architecture documentation (Structurizr, C4 model, ADR)
- Hands-on: I write the job workers, delegates, and REST integrations myself

#### Enterprise Data Warehouse (Data Lake), BI, and ETL

- Designing and building an enterprise data lake with ETL pipelines
- Integrating sources: Bitrix, PlanFact, CallTouch, 1C
- Pipeline orchestration: n8n, Apache Airflow; storage in PostgreSQL
- BI and visualization: Grafana, Metabase

#### AI automation of first-line support for a major international accommodation booking service

- Task definition and coordination with the product side and with the client’s support management
- Setting up and configuring Camunda 8 (Zeebe)
- Multi-level BPMN processes for handling incoming requests (tickets) with LLM agents — in production, not in a pilot
- Developing low-code tooling (Camunda Element Templates)
- Orchestrating and developing worker microservices (Java/Python) and Camunda Connectors
- Building the observability layer
- Documenting corporate BPMN standards

### [Solvo](https://www.solvo.ru)
**Platform Architect / Technical Development Lead** | *April 2024 — September 2025*

Technical lead of the platform track for the warehouse logistics product line (WMS/YMS): I set the standards the product teams worked by. Team of 10.

- Review of the teams' architecture and code decisions, analysis and acceptance of the result
- Standardising how teams work: service templates, SLAs between teams, governance procedures, API-first contracts (OpenAPI, code generation, Spectral)
- Wrote the reference services and shared libraries in Java / Kotlin (Spring Boot) myself: a standard has to live in code, not in a presentation
- Platform from scratch: 10+ microservices, Spring Cloud, bounded contexts, Kafka with Schema Registry, target NFRs (99.9% availability, p95 < 200 ms), OpenTelemetry / Jaeger, Resilience4j
- Audit of 5 legacy systems: tech debt, a Strangler Fig strategy for decomposing monoliths without stopping the business
- Regular architecture reviews with C-level (CTO, CPO, logistics director): roadmap, tech debt prioritisation
- Facilitating Event Storming with product owners to identify bounded contexts
- Documentation: ADR, C4 model, process catalogues

### Consulting Architect
**Technical Lead / Consulting Architect** | *June 2023 — April 2024*

Custom web and BPM development for B2B/B2G. Led small teams: task definition, review, delivery to the client.

- Backend services in Java / Kotlin (Spring Boot / Cloud), microservice (MSA) and service-oriented (SOA) architecture, SAGA patterns for distributed transactions
- Business process automation on the Camunda BPM Platform: BPMN processes, job workers, delegates
- Integration design and implementation (REST API, gRPC)
- Target process design (BPMN 2.0), documentation in C4 and Arc42 standards, process catalogues
- Domain-Driven Design and Event-Driven Architecture, containerization (Docker)

### Galor LLC
**CTO / CEO** | *July 2020 — January 2023*

Technical leader of a product startup founded with partners: the Soarse low-code platform — from MVP to production use in 3 federal agencies. Team of 20.

**People and process:**
- Built the team from zero to 20 people: hiring, onboarding, regular 1:1s, development and training
- Setting up the development process: code review, CI/CD, quality standards, release cycle
- Management model: a three-tier Result-Process-Tool scheme (CEO-COO-CTO), Harzburg-model delegation, open information and horizontal links
- Flexible employment arrangements to suit people, plus a relocation programme

**Product and architecture:**
- Product design: a platform of 5 builders (data, processes, interface, computation, API), internal algorithms, data model
- Microservice architecture: Java, Spring Boot / Cloud, PostgreSQL, Redis, RabbitMQ, Consul, Docker Swarm; frontend — React + TypeScript
- Full observability: Micrometer + Prometheus + Grafana, ELK, OpenZipkin
- Hands-on core development: an ABAC subsystem with a DSL for access policies, a view engine with JSON document JOINs via an RDF store (Apache Jena)

**Client and sales:**
- Presales, demos, and presentations at department-director level in federal agencies, plus acceptance testing
- State Legal Statistics System (General Prosecutor's Office of the Russian Federation) — MDM and metadata component, data from 85 regions
- Information System of the Russian Football Union — 4,000+ users across 85 regions, Global CIO Project of the Year 2021
- Wood Accounting and Transaction System (Federal Forestry Agency)

### [Bazelevs](https://www.bazelevs.ru)
**Implementation Lead / Technical Analyst** | *July 2019 — January 2022*

Implementation of BZDays, an enterprise project management system for film production based on Jira Server. Team of 5.

- Designed and rolled out the project management methodology: stages, roles, KPIs
- Workflow modelling (BPMN): pre-production → production → post-production
- Jira configuration and customisation: workflow schemes, permissions, Groovy scripts, plugin development, 1C integration
- Requirements gathering: interviews with 30+ users (producers, management, the finance and legal departments), consolidation and prioritisation
- Training seminars: 4 groups of 10–15 people

### GOST-group
**Project Manager / Architect** | *March 2017 — June 2020*

In-house product and custom B2G development. Full-cycle team and project management, from requirements gathering to production handover. Teams of 10–30 people.

- Safe City (EMERCOM directorate for the Sakhalin region) — project manager in the classic sense: stage plan, deadlines, budget, risks, coordination of a distributed team of 15, direct work with the client and law-enforcement agencies. Delivered in 8 months under hard deadlines. 1,000+ cameras, emergency response time cut by 30%. The solution was later replicated in the Ryazan and Smolensk regions
- Engineering and Energy Complex GIS of St. Petersburg (St. Petersburg Energy Committee) — system architect: team of 30, 28 months, 14 subsystems. Analytical report preparation time cut by 60%. A cluster of 4 geoservers with load balancing, sticky sessions, and fail-over
- Reporting IS. GIS TEK (PJSC "Lukoil")
- Development team management, code review, requirements traceability down to implementation
- Design artifacts (UML, ER, BPMN), backend development in Java (Spring), database design (Oracle, PostgreSQL)

### [IT Energy Service](https://www.it-energy.ru)
**Head of Development Division** | *September 2014 — February 2017*

Technical leadership of a portfolio of 3–5 parallel projects at once. Teams of 15–40 people.

- Merger and transformation of a 35-person team (AS SIOI): I brought together the young team of the new phase and the "old guard" — programmers with 30+ years of experience who had worked on the first phase. Organised retraining from Excel VBA to Java, Oracle APEX, and SAP BusinessObjects, plus a mutual mentoring system between the generations. 97% of the team retained: one person left, for retirement
- MDO Portal (Ministry of Energy) — 15,000+ energy facilities, data analysis time cut by 40%, ML-based failure prediction. Best IT Project in Fuel & Energy 2016
- Electricity Accounting System for Interstate Power Lines (PJSC "Rosseti")
- Architecture, interface, and data model design; technical requirements for upcoming products; backend development in Java

### [IT Energy Service](https://www.it-energy.ru)
**Java Team Lead / Project Manager** | *June 2011 — August 2014*

Teams of 5–10 people.

- Investment Program Monitoring Portal (Ministry of Energy) — project manager: budget and schedule planning, assembling a team of 10, work with the client, quality control. Delivered in 8 months
- Operational Facilities Monitoring Portal (Technical Inspection of UES)
- Development team management, code review, task definition
- Backend development in Java, Oracle (PL/SQL), technical design: solution architecture, data model, interfaces
- Requirements analysis, reporting documentation to GOST 34

## Education

### Lomonosov Moscow State University
**[Faculty of Bioengineering and Bioinformatics](https://fbb.msu.ru/)** | *2004 — 2011*

## Languages

- 🇷🇺 Russian — Native
- 🇬🇧 English — C1 (Advanced)
- 🇫🇷 French — A2 (Elementary)

## Technology Stack

- Spring Boot/Cloud
- Java/Kotlin
- Camunda/Flowable
- MongoDB
- Kafka
- OpenTelemetry
- Oracle
- PostgreSQL
- Docker
- Kubernetes
- API Gateway
- RabbitMQ
- GitLab CI/CD
- Testcontainers