
# PRODUCT REQUIREMENTS DOCUMENT
## NAHAP — Enterprise Network & Cybersecurity Engineering Website

**Version:** 1.0  
**Date:** September 2026  
**Platform:** Hugo + HugoBlox Kit  
**Reference Theme:** Hugo Academic Pages / Beacon-style HugoBlox  
**Repository:** HugoBlox/kit  
**Primary Language:** English  
**Secondary Language:** Indonesian-ready architecture  
**Deployment Target:** Static hosting — Cloudflare Pages / Netlify / Vercel / GitHub Pages

---

# 1. Product Overview

## 1.1 Product Name

**NAHAP**

**Network Architecture, Hardening & Protection**

## 1.2 Brand Positioning

NAHAP adalah perusahaan teknologi yang berfokus pada:

> **Enterprise Network & Cybersecurity Engineering**

NAHAP menyediakan layanan engineering untuk perusahaan yang membutuhkan infrastruktur jaringan yang:

- reliable
- secure
- scalable
- observable
- maintainable

Fokus utama adalah perusahaan enterprise, industrial, multi-site, mining, plantation, corporate, hospitality, education, government, dan organisasi dengan kebutuhan jaringan terdistribusi.

---

# 2. Website Objectives

Website bukan hanya company profile.

Website harus berfungsi sebagai:

1. Corporate identity
2. Technical credibility platform
3. Lead generation channel
4. Technical knowledge base
5. Portfolio / case-study platform
6. SEO acquisition channel
7. Vendor capability showcase
8. Sales enablement material

Target pengunjung utama:

- CIO
- CTO
- IT Manager
- Head of IT
- Network Engineer
- Infrastructure Manager
- Cybersecurity Manager
- Procurement
- Business Owner
- Technical Consultant

---

# 3. Primary Business Goal

Website harus mengubah visitor menjadi:

```text
Visitor
   ↓
Understand NAHAP
   ↓
Explore Capability
   ↓
Evaluate Technical Credibility
   ↓
View Case Study
   ↓
Request Consultation
   ↓
Lead
```

Primary CTA:

> **Request Technical Consultation**

Secondary CTA:

> **Explore Solutions**

---

# 4. Design Direction

Gunakan referensi visual:

**Hugo Academic Pages / Beacon-style HugoBlox**

Tetapi jangan membuat website terasa seperti:

- personal academic profile
- university website
- freelancer portfolio
- generic IT service company
- digital marketing agency

Website harus terlihat seperti:

> **Modern enterprise technology engineering company**

Visual references:

- Cisco
- Fortinet
- Palo Alto Networks
- Cloudflare
- HashiCorp
- modern B2B SaaS companies

Namun jangan melakukan direct copy terhadap branding vendor tersebut.

---

# 5. Visual Identity

## 5.1 Color Palette

Primary background:

```text
#07111F
```

Secondary background:

```text
#0D1B2A
```

Primary brand:

```text
#0EA5E9
```

Secondary accent:

```text
#22D3EE
```

Text:

```text
#E5E7EB
```

Muted:

```text
#94A3B8
```

Border:

```text
#1E293B
```

Light background:

```text
#F8FAFC
```

---

# 6. Typography

Gunakan HugoBlox typography system.

Preferred:

```yaml
hugoblox:
  typography:
    pack: "modern"
```

Modern typography menggunakan Inter dan JetBrains Mono yang tersedia secara bundled pada HugoBlox, sehingga cocok untuk website technical/engineering dan mengurangi dependency font eksternal.

Heading:

**Inter Bold / Extra Bold**

Body:

**Inter Regular**

Technical:

**JetBrains Mono**

---

# 7. Brand Personality

Website harus terasa:

- Technical
- Precise
- Reliable
- Enterprise
- Security-focused
- Professional
- Engineering-driven
- Minimal
- Modern

Hindari:

- excessive gradients
- excessive animations
- cartoon illustrations
- stock photo orang meeting
- generic "We are passionate..." copy
- terlalu banyak emoji
- exaggerated claims

---

# 8. Information Architecture

Main navigation:

```text
Home

Solutions
├── Network Architecture
├── Security Engineering
├── Managed Infrastructure
└── Network Monitoring

Industries
├── Mining & Industrial
├── Plantation
├── Corporate
├── Hospitality
├── Education
└── Government

Case Studies

Insights

About

Contact
```

Header CTA:

> **Request Consultation**

---

# 9. Homepage

URL:

```text
/
```

Homepage harus menjadi halaman conversion utama.

## Section 1 — Hero

Eyebrow:

> NAHAP

Headline:

> Enterprise Network & Cybersecurity Engineering

Supporting text:

> We design, secure, deploy and operate reliable network infrastructure for enterprise, industrial and distributed environments.

CTA:

```text
Request Technical Consultation
Explore Solutions
```

Visual:

Dark technical network topology.

Contoh:

```text
                INTERNET
                    │
             ┌──────┴──────┐
             │   SECURITY  │
             │   PERIMETER │
             └──────┬──────┘
                    │
              CORE NETWORK
             /      │       \
            /       │        \
        CAMPUS    DATA      REMOTE
         LAN      CENTER      SITE
```

---

# 10. Homepage — Trust / Capability

Headline:

> Engineering capabilities for modern infrastructure.

Three primary capabilities:

### Network Architecture

Enterprise LAN/WAN, routing, switching, wireless, SD-WAN and data center networking.

### Security Engineering

Firewall, VPN, network hardening, segmentation, NAC and secure remote access.

### Managed Infrastructure

Monitoring, preventive maintenance, configuration management and operational support.

---

# 11. Homepage — Business Problems

Headline:

> Infrastructure problems become business problems.

Cards:

### Network Downtime

Unstable connectivity impacts business operations.

### Security Exposure

Misconfiguration and unnecessary exposure increase security risk.

### Distributed Infrastructure

Multiple sites make centralized management difficult.

### Limited Visibility

Without monitoring, teams discover problems after users report them.

CTA:

> See How We Solve These Problems

---

# 12. Homepage — Solutions

Display three primary service pillars.

## Network Architecture

```text
Enterprise LAN/WAN
Routing & Switching
SD-WAN
Enterprise Wi-Fi
Data Center Networking
Network Design
```

## Security Hardening

```text
Firewall Deployment
Firewall Rule Review
Network Hardening
Network Segmentation
VPN
NAC
Zero Trust Architecture
```

## Managed Infrastructure

```text
Network Monitoring
Configuration Backup
Preventive Maintenance
Incident Support
Performance Monitoring
SLA-based Support
```

---

# 13. Homepage — Industries

Headline:

> Infrastructure engineering for distributed environments.

Cards:

### Mining & Industrial

Secure and resilient connectivity for remote operational sites.

### Plantation

Multi-site connectivity and centralized infrastructure visibility.

### Corporate

Enterprise LAN, WAN, Wi-Fi and network security.

### Hospitality

Reliable guest and corporate network infrastructure.

### Education

Campus network, Wi-Fi and segmentation.

### Government

Secure and structured network infrastructure.

---

# 14. Homepage — Engineering Methodology

Show a five-step process:

```text
01
DISCOVER
   ↓
02
ASSESS
   ↓
03
DESIGN
   ↓
04
IMPLEMENT
   ↓
05
OPERATE
```

## Discover

Understand business and technical requirements.

## Assess

Evaluate current infrastructure, topology and configuration.

## Design

Create architecture, topology and implementation plan.

## Implement

Deploy, migrate, test and validate.

## Operate

Monitor, maintain and continuously improve.

---

# 15. Homepage — Technology Ecosystem

Heading:

> Technologies we work with

Categories:

### Networking

```text
Cisco
Aruba
MikroTik
Ubiquiti
```

### Security

```text
Fortinet
Palo Alto Networks
Cisco Security
```

### Infrastructure

```text
VMware
Proxmox
Linux
Windows Server
```

### Cloud

```text
AWS
Microsoft Azure
Cloudflare
```

Important:

Do not claim official partnership unless NAHAP actually has an official partnership.

Use:

> Technologies We Work With

instead of:

> Official Partners

---

# 16. Homepage — Case Studies

Headline:

> Selected Engineering Work

Initial case studies:

### Multi-Site Network Redesign

**Problem**

Distributed sites experienced unstable connectivity and limited visibility.

**Solution**

Dual-WAN, secure VPN, segmentation and centralized monitoring.

**Outcome**

Improved redundancy, visibility and operational control.

---

### Enterprise Network Hardening

**Problem**

Existing network infrastructure had excessive exposed services and inconsistent device configurations.

**Solution**

Configuration audit, service hardening, ACL review and segmentation.

**Outcome**

Reduced unnecessary exposure and improved security baseline.

---

### Enterprise Wi-Fi Deployment

**Problem**

Poor coverage and inconsistent wireless performance.

**Solution**

Site survey, RF planning, VLAN architecture and centralized wireless management.

**Outcome**

More predictable wireless coverage and centralized management.

---

# 17. Homepage — Technical Insights

Headline:

> Engineering Insights

Show latest articles.

Initial article roadmap:

```text
Enterprise Network Architecture
Cisco SDA Architecture
VXLAN EVPN
BGP vs OSPF
Network Segmentation
Firewall Hardening
SD-WAN Architecture
Enterprise Wi-Fi Design
Network Monitoring
Zero Trust Network Architecture
```

Article URL structure:

```text
/insights/<slug>/
```

---

# 18. Homepage — Final CTA

Headline:

> Planning a network transformation?

Supporting text:

> Tell us about your current infrastructure, technical challenges and business requirements.

CTA:

> Request Technical Consultation

Secondary:

> Contact NAHAP

---

# 19. Solutions Page

URL:

```text
/solutions/
```

Hero:

> Engineering reliable and secure infrastructure.

Sections:

```text
Network Architecture
Security Engineering
Managed Infrastructure
Monitoring & Observability
```

Each service must contain:

- Overview
- Business problem
- Scope
- Deliverables
- Technologies
- Implementation methodology
- Related case studies
- CTA

---

# 20. Network Architecture Page

URL:

```text
/solutions/network-architecture/
```

Services:

- LAN Design
- WAN Design
- Routing & Switching
- BGP
- OSPF
- VLAN
- STP/RSTP/MST
- EtherChannel
- SD-WAN
- Enterprise Wi-Fi
- Data Center Networking
- Network Architecture Review

Deliverables:

```text
High-Level Design
Low-Level Design
Network Diagram
IP Addressing Plan
VLAN Plan
Routing Design
Implementation Plan
Migration Plan
Test Plan
Documentation
```

---

# 21. Security Engineering Page

URL:

```text
/solutions/security-engineering/
```

Services:

- Firewall deployment
- Firewall migration
- Firewall rule review
- Network hardening
- VPN
- ACL
- Network segmentation
- NAC
- Zero Trust
- Secure remote access

Deliverables:

```text
Security Assessment
Configuration Review
Hardening Baseline
Firewall Policy Review
Network Segmentation Design
Security Architecture
Implementation Plan
Security Documentation
```

---

# 22. Managed Infrastructure Page

URL:

```text
/solutions/managed-infrastructure/
```

Services:

- Network monitoring
- Configuration backup
- Preventive maintenance
- Incident support
- Performance monitoring
- Capacity planning
- Network health checks

Possible SLA tiers:

```text
Essential
Business
Enterprise
```

Do not publish prices initially.

Use:

> Contact us for a tailored service plan.

---

# 23. Industries

URL:

```text
/industries/
```

Each industry page must contain:

```text
Industry Problem
        ↓
Infrastructure Challenge
        ↓
NAHAP Solution
        ↓
Architecture
        ↓
Expected Operational Outcome
        ↓
Consultation CTA
```

Priority:

1. Mining & Industrial
2. Plantation
3. Corporate
4. Government
5. Education
6. Hospitality

---

# 24. Case Studies

URL:

```text
/case-studies/
```

Content type:

```text
projects
```

HugoBlox supports structured project/portfolio content, making this appropriate for engineering case studies.

Front matter concept:

```yaml
title: "Multi-Site Network Redesign"
summary: "Secure and resilient network architecture for distributed sites"
tags:
  - Network Architecture
  - SD-WAN
  - Security
categories:
  - Case Study
```

Each case study:

```text
Overview
Challenge
Existing Architecture
Requirements
Proposed Architecture
Implementation
Validation
Outcome
Technology Stack
Lessons Learned
```

---

# 25. Insights / Technical Blog

URL:

```text
/insights/
```

Content type:

```text
posts
```

Categories:

```text
Networking
Cybersecurity
Infrastructure
Cloud
Architecture
Troubleshooting
```

Tags:

```text
Cisco
Fortinet
MikroTik
BGP
OSPF
VXLAN
EVPN
SD-WAN
Firewall
VPN
Linux
Cloudflare
AWS
Azure
```

SEO priority:

Technical long-tail keywords.

Example:

```text
/cisco-sda-architecture/
```

```text
/vxlan-evpn-enterprise-network/
```

```text
/firewall-hardening-checklist/
```

```text
/sdwan-multi-site-network/
```

```text
/network-segmentation-enterprise/
```

---

# 26. About Page

URL:

```text
/about/
```

Sections:

### About NAHAP

Explain:

> Network Architecture, Hardening & Protection

### Mission

Build reliable and secure infrastructure through engineering-driven architecture, implementation and operational support.

### Vision

Become a trusted infrastructure engineering partner for organizations operating critical and distributed environments in Indonesia.

### Engineering Principles

```text
Security First
Architecture Before Deployment
Automation Where Practical
Documentation as Infrastructure
Observability
Operational Reliability
Continuous Improvement
```

---

# 27. Technical Team

URL:

```text
/team/
```

Display:

- Name
- Role
- Expertise
- Certifications
- Technical focus
- LinkedIn/GitHub if applicable

Examples:

```text
Network Engineering
Cybersecurity
Cloud Infrastructure
Systems Engineering
Automation
```

Do not invent certifications.

Only display verified certifications.

---

# 28. Contact Page

URL:

```text
/contact/
```

Hero:

> Let's discuss your infrastructure.

Form fields:

```text
Full Name *
Company *
Business Email *
Phone / WhatsApp
Industry
Company Size
Current Infrastructure
Required Service *
Project Timeline
Message *
```

Service dropdown:

```text
Network Architecture
Network Audit
Security Hardening
Firewall
SD-WAN
Enterprise Wi-Fi
Managed Network
Monitoring
Other
```

CTA:

> Request Consultation

---

# 29. WhatsApp CTA

Floating button:

> Chat with NAHAP

Use official business WhatsApp number.

Do not hardcode personal number into multiple templates.

Store configuration centrally.

Example:

```yaml
params:
  contact:
    whatsapp: ""
    email: ""
```

---

# 30. Company Profile

Provide downloadable:

```text
/company-profile/
```

CTA:

> Download Company Profile

PDF should contain:

```text
NAHAP
Company Overview
Services
Industries
Technology Capabilities
Engineering Methodology
Case Studies
Contact
```

---

# 31. SEO Requirements

Every page must support:

```text
title
description
canonical URL
OpenGraph
Twitter/X Card
structured data
```

Homepage SEO:

**Title**

> NAHAP | Enterprise Network & Cybersecurity Engineering

**Description**

> NAHAP provides enterprise network architecture, cybersecurity engineering, network hardening and managed infrastructure services for businesses across Indonesia.

Avoid keyword stuffing.

---

# 32. Local SEO

Because NAHAP is initially targeting Kalimantan:

Create geographic landing pages only when there is a legitimate business/service presence.

Potential future pages:

```text
/locations/kalimantan/
/locations/banjarmasin/
/locations/banjarbaru/
/locations/balikpapan/
/locations/samarinda/
/locations/palangka-raya/
```

Do not create hundreds of thin location pages.

Each location page must contain genuinely useful local service information.

---

# 33. Technical SEO

Required:

```text
sitemap.xml
robots.txt
canonical URLs
OpenGraph
JSON-LD
RSS
clean URLs
image optimization
lazy loading
responsive images
```

Structured data:

```text
Organization
LocalBusiness
Service
Article
BreadcrumbList
WebSite
```

Use the most appropriate schema based on the actual business structure.

---

# 34. Performance Requirements

Target:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Rules:

- Optimize images
- WebP/AVIF where appropriate
- Avoid unnecessary JavaScript
- Avoid heavy animation
- Avoid external font dependency where possible
- Use Hugo static generation
- Keep third-party scripts minimal

---

# 35. HugoBlox Implementation

Use existing HugoBlox architecture.

Do not replace the HugoBlox framework unnecessarily.

Use:

```text
content/
config/
assets/
layouts/
static/
```

Use HugoBlox blocks for:

- Hero
- Features
- Cards
- CTA
- Testimonials if real
- Logos
- Stats
- Content grids
- Blog listing
- Project listing

HugoBlox is specifically designed around composable blocks and Markdown content, so the implementation should favor existing blocks over building a custom frontend from scratch.

---

# 36. Custom CSS

If visual customization is required, create:

```text
assets/css/custom.css
```

Do not modify HugoBlox core files unless absolutely necessary.

HugoBlox officially supports custom CSS through `assets/css/custom.css`.

Custom CSS responsibilities:

```text
NAHAP brand colors
network background
technical cards
CTA styling
navigation
case-study cards
diagram styling
responsive adjustments
```

---

# 37. Content Architecture

Recommended:

```text
content/
├── _index.md
├── about/
├── solutions/
│   ├── _index.md
│   ├── network-architecture/
│   ├── security-engineering/
│   └── managed-infrastructure/
├── industries/
│   ├── _index.md
│   ├── mining/
│   ├── plantation/
│   ├── corporate/
│   ├── government/
│   ├── education/
│   └── hospitality/
├── case-studies/
├── insights/
├── team/
└── contact/
```

---

# 38. Navigation Configuration

Header:

```text
Solutions
Industries
Case Studies
Insights
About
```

Right-side CTA:

```text
Request Consultation
```

Mobile navigation must preserve CTA visibility.

---

# 39. Content Rules

All content must be:

- technically accurate
- concise
- enterprise-oriented
- outcome-oriented
- free from unsupported claims

Avoid:

> "We are the best network company."

Use:

> "We engineer secure and resilient network infrastructure for distributed environments."

Avoid fake metrics.

Do not use:

```text
99.99% uptime
500+ clients
10,000+ devices
24/7 SOC
```

unless these are real and verifiable.

---

# 40. Trust Signals

Use only real evidence.

Possible:

```text
Certifications
Technical Experience
Technology Expertise
Case Studies
Engineering Documentation
Client Testimonials
Project Experience
Professional Affiliations
```

Do not manufacture client logos or testimonials.

---

# 41. Technical Diagrams

The website should use technical diagrams heavily.

Recommended diagrams:

```text
Enterprise LAN
SD-WAN
Firewall Architecture
Network Segmentation
Zero Trust
Data Center Fabric
Multi-Site Architecture
Network Monitoring
```

Style:

```text
dark background
thin cyan/blue lines
minimal labels
professional architecture diagram
```

Avoid decorative diagrams that do not communicate architecture.

---

# 42. Responsive Design

Breakpoints:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Mobile priority:

```text
Hero
CTA
Services
Industries
Case Studies
Insights
Contact
```

Technical diagrams must become horizontally scrollable or simplified on mobile.

---

# 43. Accessibility

Requirements:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus state
- alt text
- sufficient contrast
- accessible buttons
- accessible form labels

Target:

**WCAG 2.1 AA**

---

# 44. Analytics

Prepare integration for:

```text
Google Search Console
Google Analytics
Plausible
```

Track:

```text
CTA clicks
WhatsApp clicks
Email clicks
Company Profile downloads
Contact form submissions
Case Study views
Service page views
```

---

# 45. Conversion Events

Primary:

```text
consultation_request
```

Secondary:

```text
whatsapp_click
email_click
company_profile_download
case_study_view
service_view
```

---

# 46. Deployment

Target static deployment.

Preferred:

```text
Git
 ↓
GitHub/GitLab
 ↓
CI/CD
 ↓
Hugo Build
 ↓
Cloudflare Pages
```

Alternative:

```text
Netlify
Vercel
GitHub Pages
```

HugoBlox explicitly supports static deployment to services including Netlify, Vercel and Cloudflare.

---

# 47. Repository Requirements

Existing repository:

```text
HugoBlox/kit
```

Implementation must preserve the upstream architecture where practical.

Before modifying:

```bash
git status
git branch
git remote -v
```

Create feature branch:

```bash
git checkout -b feat/nahap-corporate-site
```

---

# 48. Development Commands

Expected workflow:

```bash
hugo server
```

Production build:

```bash
hugo --minify
```

Validate:

```bash
hugo --gc --minify
```

No broken links, missing assets or build errors are allowed before deployment.

---

# 49. Acceptance Criteria

## Homepage

- [ ] Professional enterprise hero
- [ ] Clear NAHAP positioning
- [ ] Two primary CTAs
- [ ] Services visible
- [ ] Industries visible
- [ ] Case studies visible
- [ ] Technology capability visible
- [ ] Technical insights visible
- [ ] Final CTA visible

## Solutions

- [ ] Network Architecture
- [ ] Security Engineering
- [ ] Managed Infrastructure

## Industries

- [ ] Mining
- [ ] Plantation
- [ ] Corporate
- [ ] Government
- [ ] Education
- [ ] Hospitality

## Case Studies

- [ ] Project listing
- [ ] Detail pages
- [ ] Technical architecture
- [ ] Problem
- [ ] Solution
- [ ] Outcome

## SEO

- [ ] Sitemap
- [ ] Robots
- [ ] Canonical
- [ ] OpenGraph
- [ ] JSON-LD
- [ ] Meta description
- [ ] SEO-friendly URLs

## Performance

- [ ] Mobile responsive
- [ ] Optimized images
- [ ] Minimal JS
- [ ] No unnecessary external dependencies

## Deployment

- [ ] Production build succeeds
- [ ] No broken internal links
- [ ] No missing assets
- [ ] HTTPS
- [ ] Custom domain ready

---

# 50. Phase Roadmap

## Phase 1 — MVP

```text
Home
Solutions
Industries
Case Studies
Insights
About
Contact
```

## Phase 2

```text
Company Profile
Team
Technical Resources
Downloadable Architecture Guides
Location Pages
```

## Phase 3

```text
Client Portal
Support Portal
Network Assessment Request
Service Ticket
Monitoring Integration
```

---

# 51. Final Product Definition

NAHAP website should communicate:

> **We don't just install networks. We engineer infrastructure.**

The final visual impression should be:

```text
                 NAHAP
                   │
                   ▼
      ENTERPRISE INFRASTRUCTURE
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
       NETWORK  SECURITY  OPERATIONS
          │        │        │
          └────────┼────────┘
                   ▼
             ENGINEERING
                   │
                   ▼
        RELIABLE + SECURE + SCALABLE
```

Primary brand statement:

> **Enterprise Network & Cybersecurity Engineering**

Supporting statement:

> **Design. Secure. Connect. Operate.**

Primary CTA:

> **Request Technical Consultation**

Secondary CTA:

> **Explore Solutions**

---

# 52. AI Implementation Instruction

When generating the website from this PRD:

1. Use the existing HugoBlox Kit architecture.
2. Do not replace Hugo/HugoBlox with React, Next.js or another framework.
3. Reuse existing HugoBlox blocks whenever possible.
4. Create reusable Markdown content types.
5. Keep content separate from presentation.
6. Use custom CSS only for NAHAP-specific branding.
7. Follow the visual language of the referenced Hugo Academic Pages/Beacon site while adapting it to enterprise network/security.
8. Do not copy proprietary branding or content.
9. Make the site production-ready.
10. Ensure responsive mobile/desktop behavior.
11. Ensure SEO metadata exists on all indexable pages.
12. Ensure all CTA buttons have functional URLs.
13. Do not create fake testimonials, customers, statistics, certifications or partnerships.
14. Use realistic technical terminology.
15. Prioritize technical credibility over marketing hype.
16. Use technical diagrams as visual elements.
17. Optimize images and static assets.
18. Ensure `hugo --gc --minify` completes successfully.
19. Ensure no broken internal links.
20. Keep the code maintainable and compatible with future HugoBlox updates.

# END OF PRD