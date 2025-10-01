---
title: AS S&OI
date: 2017-02-28
lastmod: 2025-04-19
type: "project"
weight: 18
description: "Comprehensive portal for monitoring Russian energy sector investment programs with reporting integration and analytics"
tags: ["Java", "Oracle", "WebLogic", "JavaScript", "UX/UI", "Analytics", "Data Engineering"]
role: "Data engineer, analyst, architect, developer"
client: "Ministry of Energy of the Russian Federation"
link: "https://example.com/sioi"
cover: "/images/projects/as-sioi.en.png"
start_date: 2013-12-01
end_date: 2017-02-28
team_size: 35
technologies: ["Java", "Oracle", "WebLogic", "JavaScript", "Excel VBA", "SAP BusinessObjects", "APEX"]
---

## Overview

**Period**: December 2013 — February 2017  
**Full title**: Information Collection and Processing System
**Users**: Ministry of Energy of the Russian Federation, JSC "System Operator of the Unified Energy System"  
**Contractor**: IT Energy Service  
**Client**: JSC "Technical Inspection of UES"  
**My Role**: Data Engineer, Analyst, Architect, Developer  
**Team Size**: 35 specialists

## Management Achievement

> 🎭 I initially wanted to describe the functional requirements and technical solutions. However, I decided to share my most important management achievement. The text is lengthy and does not focus on my architecture or development skills, so if you prefer to return to more relevant sections — *don't hesitate to do so.*

### Prologue

The first phase of AS SiOI was launched in 2012. It was based on automated workstations that used Excel files with macros for filling out reporting forms.

The system development and support was managed by a department we called the *Old Guard*. It was primarily composed of programmers who had worked at the company since Soviet times, when it bore the resonant name "Main Computing Center of Energy". The *youngest* employee in the department was in his fifties.

At the time of signing the contract for the development of the second phase, I held the position of division head at IT Energy Service, which was tasked with its implementation. I was 26, and the developers were even younger.

### Part One: Merger

The second phase of AS SiOI was developed throughout 2015 in parallel with the ongoing support of the first phase. Our team had previously interacted with the Old Guard while implementing other portals, but with the start of work on the new system, greater *cohesion* was required. We even changed offices to work in the same open space.

The final step in the unification was the company management's decision to integrate the previous team into our division, which instantly doubled the number of my subordinates (not counting the similarly sized subcontractor team).

Initially, everything went well: we regularly consulted with experienced employees on methodological issues, observed firsthand how user support was carried out, and learned which problems caused the greatest concern for the client.

But as we got closer to launching the new system, the inevitable became obvious to everyone:

> There is no country for old men

The situation wasn't made easier by the unofficial directive from management to *"keep as many employees in their positions as possible after transitioning to the second phase"*. In my mind at the time, this meant only one thing — a burden!

### Part Two: Transformation

The transition from one system to another resembled scenes from a Bosch painting. Hundreds of energy companies from across the country, two state companies on the client side, and the Ministry of Energy of the Russian Federation, which demanded timely provision of consolidated reports regardless of the technical nuances of collecting raw data.

Adding insult to injury, first-line support operators worked in the same room, side-by-side with my team, and each incoming call resonated in all of us like a piercing scream.

Credit must be given to the users who went through all the stages of grief during this time:
- denied the new system and asked for the old one back
- unleashed tons of angry curses
- bargained for us to manually fix data distorted by the system
- depressively remained silent while waiting for bug fixes
- finally, accepted that the world is imperfect, and started writing poems to us

During these first months, there was no time for personnel reshuffling — *everyone did everything*. However, after stabilizing the system, we had to decide how to provide tasks for those who had spent years developing Excel forms in VBA.

The first to undergo *reorientation* was an employee who had previously developed analytical reports. In the new system, SAP BusinessObjects was used for this purpose. Initially, she handled the visual presentation of reports, formatting texts and graphics. As she became more familiar with the tool, she began to configure business logic, and after just a few months, we were able to confidently entrust her with the development of OLAP cubes.

Those with database experience also initially made only spot fixes, and over time, gradually revealing their potential, took on increasingly complex tasks up to database-level automation: writing procedures, triggers, and optimizing queries.

But the one who surprised me the most was our most respected 75-year-old employee. Guided by my prejudices, I postponed trying to integrate her into the new environment until the last moment and was internally preparing to make a difficult decision. Necessity helped: the subcontractors who were supporting the part of the system written in APEX left the project, and we needed to replace them with our own resources. Despite the company having rich experience with Oracle, no one had previously worked on APEX projects, so I decided to give it a try. And, *boy oh boy*, I couldn't have imagined how successful it would be. Lydia Nikitishna tackled this new area with admirable perseverance, and after just a month, we'd forgotten about any problems in this direction — she was handling incoming tasks like they were nothing!

### Part Three: Enlightenment

The first year of supporting the new system gave all of us an incomparable experience. Initially, the two teams were very wary of each other: the youth, including myself, didn't understand how these *dinosaurs* could be useful, while the veterans were indignant about why these *upstarts* were telling them how to work. But by autumn, we had become a single cohesive team where everyone understood and respected colleagues' contributions. I observed with undisguised joy how yesterday's students worked alongside those who had experienced punch cards: a picture that had seemed impossible to me not long ago.

### Epilogue

From the entire Old Guard, only one employee had to be retired — one who neither wanted to perform new tasks nor was willing to stop watching videos from a certain ahem... hub at his workplace.

Personally, the most important realization for me in this story was a simple truth: we are alive as long as we are needed. There is no better remedy against aging than feeling useful and valued.

## Technical Project Details

- Platform: Java EE, Oracle WebLogic Server
- Database: Oracle Database
- Frontend: JavaScript, HTML5, CSS3
- Analytics: SAP BusinessObjects, Oracle APEX
- Document Management: Integration with electronic document management systems
- Scale: Processing reports from hundreds of Russian energy companies
