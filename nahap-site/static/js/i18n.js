/**
 * NAHAP Bilingual System (EN / ID) â€” Full Coverage
 * Covers: navbar, hero, stats, features, steps, industries,
 *         case-studies, insights, faq, cta, contact, footer.
 * Language preference is saved in localStorage.
 */

// â”€â”€â”€ Translation Map â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const NAHAP_TRANSLATIONS = {
  en: {
    // NAV
    "nav.request_consultation": "Request Consultation",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.network_architecture": "Network Architecture",
    "nav.security_engineering": "Security Engineering",
    "nav.managed_infrastructure": "Managed Infrastructure",
    "nav.tagline": "Network Architecture, Hardening, and Protection",
    // HERO
    "hero.badge": "Enterprise Grade Solutions",
    "hero.title_1": "Enterprise Network &",
    "hero.title_2": "Cybersecurity Engineering",
    "hero.subtitle": "We design, secure, deploy and operate reliable network infrastructure for enterprise, industrial and distributed environments.",
    "hero.btn_explore": "Explore Solutions",
    "hero.key_capabilities": "KEY CAPABILITIES:",
    "hero.cap_arch": "Architecture",
    "hero.cap_hard": "Hardening",
    "hero.cap_opt": "Optimization",
    // STATS
    "stats.uptime": "Uptime SLA Delivered",
    "stats.networks": "Enterprise Networks Secured",
    "stats.nodes": "Network Nodes Under Management",
    "stats.tech_title": "Technologies we work with",
    // METHODOLOGY (steps block)
    "steps.title": "Engineering-driven approach to infrastructure",
    "steps.subtitle": "Every engagement follows a structured methodology to deliver predictable, documented results.",
    "steps.discover.title": "Discover",
    "steps.discover.text": "Understand business requirements, operational constraints and technical objectives.",
    "steps.assess.title": "Assess",
    "steps.assess.text": "Evaluate current infrastructure, topology, configuration and identify gaps.",
    "steps.design.title": "Design",
    "steps.design.text": "Create architecture, topology design and detailed implementation plan.",
    "steps.implement.title": "Implement",
    "steps.implement.text": "Deploy, migrate, test and validate against design specifications.",
    "steps.operate.title": "Operate",
    "steps.operate.text": "Monitor, maintain and continuously improve infrastructure health.",
    // CAPABILITIES (features block #1)
    "cap.badge": "Engineering Capabilities",
    "cap.title": "Engineering capabilities for modern infrastructure",
    "cap.subtitle": "Comprehensive network and security engineering services for enterprise environments.",
    "cap.net_arch.title": "Network Architecture",
    "cap.net_arch.text": "Enterprise LAN/WAN, routing, switching, wireless, SD-WAN and data center networking. We design networks that scale.",
    "cap.sec_eng.title": "Security Engineering",
    "cap.sec_eng.text": "Firewall deployment, VPN, network hardening, segmentation, NAC and zero trust architecture. Security by design, not afterthought.",
    "cap.managed.title": "Managed Infrastructure",
    "cap.managed.text": "Network monitoring, configuration backup, preventive maintenance, incident support and SLA-based operational management.",
    "cap.monitoring.title": "Network Monitoring",
    "cap.monitoring.text": "Real-time visibility into network health, performance metrics, alerting and capacity planning for proactive operations.",
    // WHY NAHAP (features block #2)
    "why.badge": "Why NAHAP",
    "why.title": "Infrastructure problems become business problems",
    "why.subtitle": "When network infrastructure fails, business operations stop. We engineer solutions that prevent these scenarios.",
    "why.downtime.title": "Network Downtime",
    "why.downtime.text": "Unstable connectivity impacts business operations, productivity and revenue. Redundant architecture eliminates single points of failure.",
    "why.security.title": "Security Exposure",
    "why.security.text": "Misconfiguration and unnecessary exposure increase security risk. Systematic hardening reduces your attack surface.",
    "why.distributed.title": "Distributed Infrastructure",
    "why.distributed.text": "Multiple sites make centralized management difficult. Unified architecture provides control across all locations.",
    "why.visibility.title": "Limited Visibility",
    "why.visibility.text": "Without monitoring, teams discover problems after users report them. Proactive monitoring detects issues before impact.",
    // INDUSTRIES
    "ind.badge": "Industries",
    "ind.title": "Infrastructure engineering for distributed environments",
    "ind.subtitle": "We understand the unique infrastructure challenges of each industry.",
    "ind.mining.title": "Mining & Industrial",
    "ind.mining.text": "Secure and resilient connectivity for remote operational sites with harsh environmental conditions.",
    "ind.plantation.title": "Plantation",
    "ind.plantation.text": "Multi-site connectivity and centralized infrastructure visibility across geographically dispersed locations.",
    "ind.corporate.title": "Corporate",
    "ind.corporate.text": "Enterprise LAN, WAN, Wi-Fi and network security for modern corporate environments.",
    "ind.hospitality.title": "Hospitality",
    "ind.hospitality.text": "Reliable guest and corporate network infrastructure with seamless connectivity.",
    "ind.education.title": "Education",
    "ind.education.text": "Campus network, Wi-Fi coverage and network segmentation for educational institutions.",
    "ind.government.title": "Government",
    "ind.government.text": "Secure and structured network infrastructure meeting government compliance requirements.",
    // CASE STUDIES / CTA-IMAGE-PARAGRAPH
    "case.title": "Selected Engineering Work",
    "case.subtitle": "Our engineering projects demonstrate structured methodology, technical precision and measurable outcomes across diverse infrastructure environments.",
    "case.f1": "Multi-Site Network Redesign with SD-WAN",
    "case.f2": "Enterprise Network Hardening & Segmentation",
    "case.f3": "Enterprise Wi-Fi Deployment & Management",
    "case.btn": "View Case Studies",
    "insights.title": "Engineering Insights",
    "insights.subtitle": "Technical articles on enterprise networking, cybersecurity architecture, and infrastructure best practices written by our engineering team.",
    "insights.f1": "Enterprise Network Architecture",
    "insights.f2": "Firewall Hardening Checklist",
    "insights.f3": "Network Segmentation Best Practices",
    "insights.btn": "Read Insights",
    // FAQ
    "faq.badge": "Common questions about our engineering services.",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What industries does NAHAP serve?",
    "faq.a1": "We serve enterprise, industrial, mining, plantation, corporate, hospitality, education and government organizations. Our focus is on environments with distributed infrastructure, multi-site connectivity needs and critical operational requirements.",
    "faq.q2": "What is your engineering methodology?",
    "faq.a2": "Every engagement follows our five-step methodology: Discover, Assess, Design, Implement and Operate. This structured approach ensures predictable outcomes, documented architecture and maintainable infrastructure.",
    "faq.q3": "Do you provide ongoing support?",
    "faq.a3": "Yes. Our Managed Infrastructure service provides network monitoring, configuration backup, preventive maintenance, incident support and SLA-based operational management at Essential, Business and Enterprise tiers.",
    "faq.q4": "Which technologies do you work with?",
    "faq.a4": "We work with enterprise-grade technologies including Cisco, Aruba, MikroTik, Ubiquiti for networking; Fortinet, Palo Alto Networks for security; VMware, Proxmox, Linux for infrastructure; and AWS, Azure, Cloudflare for cloud services.",
    "faq.q5": "How do I get started?",
    "faq.a5": "Contact us through our consultation request form. Describe your current infrastructure, technical challenges and business requirements, and our engineering team will schedule a technical consultation.",
    // CTA CARD
    "cta.title": "Planning a network transformation?",
    "cta.subtitle": "Tell us about your current infrastructure, technical challenges and business requirements.",
    "cta.btn": "Request Technical Consultation",
    // CONTACT
    "contact.badge": "Get In Touch",
    "contact.title": "Contact NAHAP",
    "contact.subtitle": "Tell us about your current infrastructure, technical challenges and business requirements. Our team is ready to help you find the right solution.",
    "contact.info_title": "Contact Information",
    "contact.hq": "Headquarters",
    "contact.phone_label": "Phone",
    "contact.email_label": "Email",
    "contact.hours_title": "Business Hours",
    "contact.hours_weekday": "Monday -Thursday",
    "contact.hours_friday": "Friday",
    "contact.form_title": "Send a Message",
    "contact.form_sub": "Fill in the form below and we'll get back to you as soon as possible.",
    "contact.name": "Full Name",
    "contact.email_field": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    // FOOTER
    "footer.tagline": "Enterprise-grade network engineering, cybersecurity, and infrastructure management across Indonesia.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.status": "Systems Operational",
    "footer.net_arch": "Network Architecture",
    "footer.sec_eng": "Security Engineering",
    "footer.infra": "Managed Infrastructure",
    "footer.about": "About NAHAP",
    "footer.insights": "Insights & Blog",
    "footer.contact_us": "Contact Us",
    "footer.copyright": "NAHAP Enterprise. All rights reserved.",
    "footer.sys_op": "Systems Operational",

    // ABOUT PAGE
    "about.badge": "About The Company",
    "about.title": "About NAHAP",
    "about.desc": "Network Architecture, Hardening & Protection Enterprise Engineering. We are a premier enterprise cybersecurity and infrastructure engineering firm dedicated to securing your digital future.",
    "about.stat1": "Established",
    "about.stat2": "Enterprise Clients",
    "about.stat3": "Uptime SLA Guarantee",
    "about.vis_title": "Our Vision",
    "about.vis_desc": "\"To be the global leader in enterprise network architecture, delivering uncompromising zero-trust security and infrastructure resilience to organizations worldwide.\"",
    "about.mis_title": "Our Mission",
    "about.mis1": "Design and implement scalable, high-availability core network infrastructures.",
    "about.mis2": "Provide deep-packet auditing and comprehensive vulnerability assessments.",
    "about.mis3": "Deploy advanced zero-trust endpoint protection across diverse environments.",
    "about.mis4": "Maintain 24/7 proactive Security Operations Center (SOC) management.",
    "about.hist_badge": "Corporate Heritage",
    "about.hist_title": "Our History",
    "about.hist1": "NAHAP was founded by leading network engineers to address the critical gap in secure enterprise infrastructure. We have since been committed to delivering uncompromised security.",
    "about.hist2": "As enterprise threats grew more complex, NAHAP expanded its services to include advanced persistent threat protection, deep packet inspection, and zero-trust architectures.",
    "about.hist3": "Today, NAHAP operates a state-of-the-art <strong class=\"text-blue-700 dark:text-blue-400\">Security Operations Center (SOC)</strong> supported by certified experts and seasoned industry practitioners.",
    "about.net_badge": "Our Network",
    "about.net_title": "Excellence in Engineering",
    "about.net_desc": "We are committed to delivering the most reliable and secure network infrastructures.",
    "about.cert_title": "Certified Experts",
    "about.cert_sub": "Industry Leaders",
    "about.cert_desc": "Our team holds top-tier certifications.",
    "about.sup_title": "24/7 Support",
    "about.sup_desc": "Always Online SOC",
    "about.zt_title": "Zero Trust",
    "about.zt_desc": "Absolute Security",
    "about.cta_title": "Want To Learn More?",
    "about.cta_desc": "Contact our team today to schedule a comprehensive infrastructure audit or discuss a custom SLA.",
    "about.cta_btn1": "Contact Us",
    "about.cta_btn2": "View Solutions",

    // ── CASE STUDY / CTA-IMAGE-PARAGRAPH BUTTONS ─────────────────────
    "View Case Studies": "View Case Studies",
    "Read Insights": "Read Insights",
    "Selected Engineering Work": "Selected Engineering Work",
    "Our engineering projects demonstrate structured methodology, technical precision and measurable outcomes across diverse infrastructure environments.": "Our engineering projects demonstrate structured methodology, technical precision and measurable outcomes across diverse infrastructure environments.",
    "Multi-Site Network Redesign with SD-WAN": "Multi-Site Network Redesign with SD-WAN",
    "Enterprise Network Hardening & Segmentation": "Enterprise Network Hardening & Segmentation",
    "Enterprise Wi-Fi Deployment & Management": "Enterprise Wi-Fi Deployment & Management",
    "Engineering Insights": "Engineering Insights",
    "Technical articles on enterprise networking, cybersecurity architecture, and infrastructure best practices written by our engineering team.": "Technical articles on enterprise networking, cybersecurity architecture, and infrastructure best practices written by our engineering team.",
    "Enterprise Network Architecture": "Enterprise Network Architecture",
    "Firewall Hardening Checklist": "Firewall Hardening Checklist",
    "Network Segmentation Best Practices": "Network Segmentation Best Practices",

    // ── SOLUTIONS PAGE ────────────────────────────────────────────────
    "Enterprise Network Security": "Enterprise Network Security",
    "Infrastructure Solutions": "Infrastructure Solutions",
    "Military-grade network architecture, zero-trust implementation, and 24/7 proactive threat monitoring for modern enterprises.": "Military-grade network architecture, zero-trust implementation, and 24/7 proactive threat monitoring for modern enterprises.",
    "Core Capabilities": "Core Capabilities",
    "Comprehensive security protocols designed to protect your data at every layer of the network stack.": "Comprehensive security protocols designed to protect your data at every layer of the network stack.",
    "Network Architecture": "Network Architecture",
    "End-to-end design and deployment of scalable, highly available enterprise networks optimized for low latency and maximum throughput.": "End-to-end design and deployment of scalable, highly available enterprise networks optimized for low latency and maximum throughput.",
    "Hardening & Auditing": "Hardening & Auditing",
    "Deep packet inspection, vulnerability assessments, and configuration reviews to secure endpoints and core routing infrastructure.": "Deep packet inspection, vulnerability assessments, and configuration reviews to secure endpoints and core routing infrastructure.",
    "Zero Trust Protection": "Zero Trust Protection",
    "Continuous authentication and micro-segmentation strategies that ensure threats are contained and eliminated instantly.": "Continuous authentication and micro-segmentation strategies that ensure threats are contained and eliminated instantly.",
    "Learn More →": "Learn More →",
    "Service Level Agreements": "Service Level Agreements",
    "Choose the protection tier that aligns with your organization's risk profile and operational requirements.": "Choose the protection tier that aligns with your organization's risk profile and operational requirements.",
    "Business Tier": "Business Tier",
    "8x5 Support & Monitoring": "8x5 Support & Monitoring",
    "Basic Network Auditing": "Basic Network Auditing",
    "Firewall Configuration": "Firewall Configuration",
    "Next-Business-Day Response": "Next-Business-Day Response",
    "Advanced Persistent Threat Protection": "Advanced Persistent Threat Protection",
    "Request Quote": "Request Quote",
    "RECOMMENDED": "RECOMMENDED",
    "Enterprise Tier": "Enterprise Tier",
    "24/7 Proactive SOC Management": "24/7 Proactive SOC Management",
    "Full Infrastructure Hardening": "Full Infrastructure Hardening",
    "Zero-Trust Architecture Deployment": "Zero-Trust Architecture Deployment",
    "1-Hour Critical Incident Response": "1-Hour Critical Incident Response",
    "Get Enterprise Access": "Get Enterprise Access",
    "Secure Your Infrastructure Today": "Secure Your Infrastructure Today",
    "Contact our certified engineering team for a comprehensive vulnerability assessment.": "Contact our certified engineering team for a comprehensive vulnerability assessment.",
    "Schedule Assessment": "Schedule Assessment",
    "Learn About Us": "Learn About Us",
    "sol.stat1": "Uptime SLA",
    "sol.stat2": "SOC Monitoring",
    "sol.stat3": "Trust Architecture",
    "sol.stat4": "Data Centers",
    // ── NETWORK ARCHITECTURE PAGE ───────────────────────────────
    "We design, deploy and document enterprise network infrastructure — from campus LAN to multi-site WAN to data center fabric.": "We design, deploy and document enterprise network infrastructure — from campus LAN to multi-site WAN to data center fabric.",
    "Network Architecture Services": "Network Architecture Services",
    "Scalable, resilient, and secure network designs for your organization.": "Scalable, resilient, and secure network designs for your organization.",
    "LAN Design": "LAN Design",
    "Enterprise campus LAN architecture with proper segmentation, redundancy and scalability.": "Enterprise campus LAN architecture with proper segmentation, redundancy and scalability.",
    "WAN Design": "WAN Design",
    "Wide area network design connecting multiple sites with resilient, optimized connectivity.": "Wide area network design connecting multiple sites with resilient, optimized connectivity.",
    "Routing & Switching": "Routing & Switching",
    "BGP, OSPF, VLAN, STP/RSTP/MST, EtherChannel — enterprise routing and switching architecture.": "BGP, OSPF, VLAN, STP/RSTP/MST, EtherChannel — enterprise routing and switching architecture.",
    "SD-WAN": "SD-WAN",
    "Software-defined WAN for centralized control, traffic optimization and simplified multi-site management.": "Software-defined WAN for centralized control, traffic optimization and simplified multi-site management.",
    "Enterprise Wi-Fi": "Enterprise Wi-Fi",
    "Site survey, RF planning, VLAN architecture and centralized wireless management.": "Site survey, RF planning, VLAN architecture and centralized wireless management.",
    "Data Center Networking": "Data Center Networking",
    "Spine-leaf architecture, VXLAN EVPN, high-availability fabric design for data center environments.": "Spine-leaf architecture, VXLAN EVPN, high-availability fabric design for data center environments.",
    "Deliverables": "Deliverables",
    "Every network architecture engagement produces documented, actionable deliverables.": "Every network architecture engagement produces documented, actionable deliverables.",
    "High-Level Design (HLD)": "High-Level Design (HLD)",
    "Architecture overview, topology diagrams, design rationale": "Architecture overview, topology diagrams, design rationale",
    "Low-Level Design (LLD)": "Low-Level Design (LLD)",
    "Detailed configuration specifications": "Detailed configuration specifications",
    "Network Diagram": "Network Diagram",
    "Logical and physical topology documentation": "Logical and physical topology documentation",
    "IP Addressing Plan": "IP Addressing Plan",
    "Structured IP addressing scheme": "Structured IP addressing scheme",
    "VLAN Plan": "VLAN Plan",
    "VLAN allocation and segmentation strategy": "VLAN allocation and segmentation strategy",
    "Routing Design": "Routing Design",
    "Routing protocol selection, area design, redistribution": "Routing protocol selection, area design, redistribution",
    "Implementation Plan": "Implementation Plan",
    "Step-by-step deployment procedure": "Step-by-step deployment procedure",
    "Migration Plan": "Migration Plan",
    "Zero-downtime migration strategy where applicable": "Zero-downtime migration strategy where applicable",
    "Test Plan": "Test Plan",
    "Validation criteria and test procedures": "Validation criteria and test procedures",
    "Documentation": "Documentation",
    "Complete infrastructure documentation package": "Complete infrastructure documentation package",
    "Need a network architecture review?": "Need a network architecture review?",
    "Let our engineering team evaluate your current network and design a scalable, resilient architecture.": "Let our engineering team evaluate your current network and design a scalable, resilient architecture.",
    // ── SECURITY ENGINEERING PAGE ───────────────────────────────
    "We engineer security into every layer of your network — from perimeter firewalls to internal segmentation to zero trust architecture.": "We engineer security into every layer of your network — from perimeter firewalls to internal segmentation to zero trust architecture.",
    "Security Engineering Services": "Security Engineering Services",
    "Comprehensive security protocols designed to protect your data at every layer of the network stack.": "Comprehensive security protocols designed to protect your data at every layer of the network stack.",
    "Firewall Deployment": "Firewall Deployment",
    "Enterprise firewall design, deployment and policy configuration for perimeter and internal security enforcement.": "Enterprise firewall design, deployment and policy configuration for perimeter and internal security enforcement.",
    "Firewall Rule Review": "Firewall Rule Review",
    "Systematic review of firewall policies, rule optimization and removal of unnecessary access to reduce attack surface.": "Systematic review of firewall policies, rule optimization and removal of unnecessary access to reduce attack surface.",
    "Network Hardening": "Network Hardening",
    "Device hardening, service minimization, protocol security and configuration baseline enforcement.": "Device hardening, service minimization, protocol security and configuration baseline enforcement.",
    "Network Segmentation": "Network Segmentation",
    "VLAN-based segmentation, micro-segmentation strategy and inter-zone access control design.": "VLAN-based segmentation, micro-segmentation strategy and inter-zone access control design.",
    "VPN & Remote Access": "VPN & Remote Access",
    "Site-to-site VPN, remote access VPN and secure connectivity for distributed workforce.": "Site-to-site VPN, remote access VPN and secure connectivity for distributed workforce.",
    "Zero Trust Architecture": "Zero Trust Architecture",
    "Zero trust network design with identity-based access, continuous verification and least-privilege principles.": "Zero trust network design with identity-based access, continuous verification and least-privilege principles.",
    "Every security engineering engagement produces documented, actionable deliverables.": "Every security engineering engagement produces documented, actionable deliverables.",
    "Security Assessment": "Security Assessment",
    "Current state analysis and risk identification": "Current state analysis and risk identification",
    "Configuration Review": "Configuration Review",
    "Device configuration audit against security baselines": "Device configuration audit against security baselines",
    "Hardening Baseline": "Hardening Baseline",
    "Standardized security configuration templates": "Standardized security configuration templates",
    "Firewall Policy Review": "Firewall Policy Review",
    "Rule analysis, optimization recommendations": "Rule analysis, optimization recommendations",
    "Network Segmentation Design": "Network Segmentation Design",
    "Zone architecture and access control matrix": "Zone architecture and access control matrix",
    "Security Architecture": "Security Architecture",
    "End-to-end security design documentation": "End-to-end security design documentation",
    "Phased deployment procedure": "Phased deployment procedure",
    "Security Documentation": "Security Documentation",
    "Complete security infrastructure documentation": "Complete security infrastructure documentation",
    "Concerned about your network security posture?": "Concerned about your network security posture?",
    "Our engineering team can assess your current infrastructure and design a hardened, segmented architecture.": "Our engineering team can assess your current infrastructure and design a hardened, segmented architecture.",
    "Request Security Assessment": "Request Security Assessment",
    // ── MANAGED INFRASTRUCTURE PAGE ───────────────────────────────
    "Proactive monitoring, maintenance and operational support to keep your network infrastructure reliable, secure and performant.": "Proactive monitoring, maintenance and operational support to keep your network infrastructure reliable, secure and performant.",
    "Managed Infrastructure Services": "Managed Infrastructure Services",
    "Proactive management protocols designed to maintain uptime and performance.": "Proactive management protocols designed to maintain uptime and performance.",
    "Network Monitoring": "Network Monitoring",
    "24/7 network monitoring with real-time alerting, performance tracking and availability reporting.": "24/7 network monitoring with real-time alerting, performance tracking and availability reporting.",
    "Configuration Backup": "Configuration Backup",
    "Automated configuration backup, version control and change tracking for all network devices.": "Automated configuration backup, version control and change tracking for all network devices.",
    "Preventive Maintenance": "Preventive Maintenance",
    "Scheduled maintenance windows, firmware updates, health checks and proactive issue resolution.": "Scheduled maintenance windows, firmware updates, health checks and proactive issue resolution.",
    "Incident Support": "Incident Support",
    "Structured incident response, troubleshooting and resolution with defined SLA targets.": "Structured incident response, troubleshooting and resolution with defined SLA targets.",
    "Performance Monitoring": "Performance Monitoring",
    "Bandwidth utilization, latency tracking, capacity trending and performance optimization.": "Bandwidth utilization, latency tracking, capacity trending and performance optimization.",
    "Network Health Checks": "Network Health Checks",
    "Periodic comprehensive assessment of network health, configuration compliance and security posture.": "Periodic comprehensive assessment of network health, configuration compliance and security posture.",
    "Service Tiers": "Service Tiers",
    "We offer three tiers of managed infrastructure service:": "We offer three tiers of managed infrastructure service:",
    "Essential": "Essential",
    "Core monitoring and alerting with business-hours support. Suitable for organizations establishing their first infrastructure monitoring capability.": "Core monitoring and alerting with business-hours support. Suitable for organizations establishing their first infrastructure monitoring capability.",
    "Select Tier": "Select Tier",
    "Business": "Business",
    "Extended monitoring coverage, preventive maintenance scheduling, configuration management and priority incident response. Designed for organizations with critical infrastructure dependencies.": "Extended monitoring coverage, preventive maintenance scheduling, configuration management and priority incident response. Designed for organizations with critical infrastructure dependencies.",
    "Enterprise": "Enterprise",
    "Comprehensive 24/7 monitoring, proactive maintenance, capacity planning, quarterly health checks and dedicated support. For organizations requiring maximum infrastructure reliability.": "Comprehensive 24/7 monitoring, proactive maintenance, capacity planning, quarterly health checks and dedicated support. For organizations requiring maximum infrastructure reliability.",
    "Contact us for a tailored service plan that matches your operational requirements.": "Contact us for a tailored service plan that matches your operational requirements.",
    "Want proactive infrastructure management?": "Want proactive infrastructure management?",
    "Stop reacting to outages. Let our team monitor, maintain and optimize your network infrastructure.": "Stop reacting to outages. Let our team monitor, maintain and optimize your network infrastructure.",
    "Request Service Plan": "Request Service Plan",
  },

  id: {
    // NAV
    "nav.request_consultation": "Konsultasi Gratis",
    "nav.home": "Beranda",
    "nav.solutions": "Solusi",
    "nav.about": "Tentang",
    "nav.blog": "Blog",
    "nav.contact": "Kontak",
    "nav.network_architecture": "Arsitektur Jaringan",
    "nav.security_engineering": "Rekayasa Keamanan",
    "nav.managed_infrastructure": "Infrastruktur Terkelola",
    "nav.tagline": "Arsitektur Jaringan, Hardening, dan Perlindungan",
    // HERO
    "hero.badge": "Solusi Kelas Enterprise",
    "hero.title_1": "Rekayasa Jaringan &",
    "hero.title_2": "Keamanan Siber",
    "hero.subtitle": "Kami merancang, mengamankan, menyebarkan, dan mengoperasikan infrastruktur jaringan yang andal untuk lingkungan enterprise, industri, dan terdistribusi.",
    "hero.btn_explore": "Lihat Solusi",
    "hero.key_capabilities": "KEMAMPUAN UTAMA:",
    "hero.cap_arch": "Arsitektur",
    "hero.cap_hard": "Hardening",
    "hero.cap_opt": "Optimasi",
    // STATS
    "stats.uptime": "SLA Uptime Terjamin",
    "stats.networks": "Jaringan Enterprise Diamankan",
    "stats.nodes": "Node Jaringan Dikelola",
    "stats.tech_title": "Teknologi yang kami gunakan",
    // METHODOLOGY
    "steps.title": "Pendekatan rekayasa untuk infrastruktur",
    "steps.subtitle": "Setiap proyek mengikuti metodologi terstruktur untuk menghasilkan hasil yang terdokumentasi dan dapat diprediksi.",
    "steps.discover.title": "Temukan",
    "steps.discover.text": "Memahami kebutuhan bisnis, batasan operasional, dan tujuan teknis.",
    "steps.assess.title": "Nilai",
    "steps.assess.text": "Mengevaluasi infrastruktur yang ada, topologi, konfigurasi, dan mengidentifikasi kesenjangan.",
    "steps.design.title": "Rancang",
    "steps.design.text": "Membuat arsitektur, desain topologi, dan rencana implementasi terperinci.",
    "steps.implement.title": "Implementasi",
    "steps.implement.text": "Menerapkan, migrasi, menguji, dan memvalidasi sesuai spesifikasi desain.",
    "steps.operate.title": "Operasikan",
    "steps.operate.text": "Memantau, memelihara, dan terus meningkatkan kesehatan infrastruktur.",
    // CAPABILITIES
    "cap.badge": "Kemampuan Rekayasa",
    "cap.title": "Kemampuan rekayasa untuk infrastruktur modern",
    "cap.subtitle": "Layanan rekayasa jaringan dan keamanan siber end-to-end untuk lingkungan enterprise.",
    "cap.net_arch.title": "Arsitektur Jaringan",
    "cap.net_arch.text": "Enterprise LAN/WAN, routing, switching, wireless, SD-WAN dan jaringan data center. Kami merancang jaringan yang dapat berkembang.",
    "cap.sec_eng.title": "Rekayasa Keamanan",
    "cap.sec_eng.text": "Penerapan firewall, VPN, hardening jaringan, segmentasi, NAC, dan arsitektur zero trust. Keamanan by design, bukan tambahan.",
    "cap.managed.title": "Infrastruktur Terkelola",
    "cap.managed.text": "Pemantauan jaringan, backup konfigurasi, pemeliharaan preventif, dukungan insiden, dan manajemen operasional berbasis SLA.",
    "cap.monitoring.title": "Pemantauan Jaringan",
    "cap.monitoring.text": "Visibilitas real-time kondisi jaringan, metrik performa, peringatan, dan perencanaan kapasitas untuk operasi proaktif.",
    // WHY NAHAP
    "why.badge": "Mengapa NAHAP",
    "why.title": "Masalah infrastruktur menjadi masalah bisnis",
    "why.subtitle": "Ketika infrastruktur jaringan gagal, operasi bisnis berhenti. Kami merekayasa solusi yang mencegah skenario ini.",
    "why.downtime.title": "Downtime Jaringan",
    "why.downtime.text": "Konektivitas yang tidak stabil berdampak pada operasi bisnis, produktivitas, dan pendapatan. Arsitektur redundan menghilangkan titik kegagalan tunggal.",
    "why.security.title": "Eksposur Keamanan",
    "why.security.text": "Miskonfigurasi dan eksposur yang tidak perlu meningkatkan risiko keamanan. Hardening sistematis mengurangi permukaan serangan Anda.",
    "why.distributed.title": "Infrastruktur Terdistribusi",
    "why.distributed.text": "Banyak lokasi membuat manajemen terpusat sulit dilakukan. Arsitektur terpadu memberikan kontrol di semua lokasi.",
    "why.visibility.title": "Visibilitas Terbatas",
    "why.visibility.text": "Tanpa pemantauan, tim menemukan masalah setelah pengguna melaporkannya. Pemantauan proaktif mendeteksi masalah sebelum berdampak.",
    // INDUSTRIES
    "ind.badge": "Industri",
    "ind.title": "Rekayasa infrastruktur untuk lingkungan terdistribusi",
    "ind.subtitle": "Kami memahami tantangan infrastruktur unik di setiap industri.",
    "ind.mining.title": "Pertambangan & Industri",
    "ind.mining.text": "Konektivitas yang aman dan tangguh untuk lokasi operasional terpencil dengan kondisi lingkungan yang berat.",
    "ind.plantation.title": "Perkebunan",
    "ind.plantation.text": "Konektivitas multi-lokasi dan visibilitas infrastruktur terpusat di lokasi yang tersebar secara geografis.",
    "ind.corporate.title": "Korporat",
    "ind.corporate.text": "LAN, WAN, Wi-Fi enterprise, dan keamanan jaringan untuk lingkungan korporat modern.",
    "ind.hospitality.title": "Perhotelan",
    "ind.hospitality.text": "Infrastruktur jaringan tamu dan korporat yang andal dengan konektivitas tanpa gangguan.",
    "ind.education.title": "Pendidikan",
    "ind.education.text": "Jaringan kampus, cakupan Wi-Fi, dan segmentasi jaringan untuk institusi pendidikan.",
    "ind.government.title": "Pemerintahan",
    "ind.government.text": "Infrastruktur jaringan yang aman dan terstruktur memenuhi persyaratan kepatuhan pemerintah.",
    // CASE STUDIES
    "case.title": "Karya Rekayasa Pilihan",
    "case.subtitle": "Proyek rekayasa kami menunjukkan metodologi terstruktur, presisi teknis, dan hasil yang terukur di berbagai lingkungan infrastruktur.",
    "case.f1": "Redesain Jaringan Multi-Lokasi dengan SD-WAN",
    "case.f2": "Hardening & Segmentasi Jaringan Enterprise",
    "case.f3": "Deployment & Manajemen Wi-Fi Enterprise",
    "case.btn": "Lihat Case Studies",
    "insights.title": "Wawasan Rekayasa",
    "insights.subtitle": "Artikel teknis tentang jaringan enterprise, arsitektur keamanan siber, dan praktik terbaik infrastruktur oleh tim rekayasa kami.",
    "insights.f1": "Arsitektur Jaringan Enterprise",
    "insights.f2": "Checklist Hardening Firewall",
    "insights.f3": "Praktik Terbaik Segmentasi Jaringan",
    "insights.btn": "Baca Wawasan",
    // FAQ
    "faq.badge": "Pertanyaan umum tentang layanan rekayasa kami.",
    "faq.title": "Pertanyaan Yang Sering Diajukan",
    "faq.q1": "Industri apa saja yang dilayani NAHAP?",
    "faq.a1": "Kami melayani organisasi enterprise, industri, pertambangan, perkebunan, korporat, perhotelan, pendidikan, dan pemerintahan. Fokus kami pada lingkungan dengan infrastruktur terdistribusi, kebutuhan konektivitas multi-lokasi, dan persyaratan operasional kritis.",
    "faq.q2": "Apa metodologi rekayasa Anda?",
    "faq.a2": "Setiap proyek mengikuti metodologi lima langkah kami: Temukan, Nilai, Rancang, Implementasi, dan Operasikan. Pendekatan terstruktur ini memastikan hasil yang dapat diprediksi, arsitektur terdokumentasi, dan infrastruktur yang dapat dipelihara.",
    "faq.q3": "Apakah Anda menyediakan dukungan berkelanjutan?",
    "faq.a3": "Ya. Layanan Infrastruktur Terkelola kami menyediakan pemantauan jaringan, backup konfigurasi, pemeliharaan preventif, dukungan insiden, dan manajemen operasional berbasis SLA di tingkat Essential, Business, dan Enterprise.",
    "faq.q4": "Teknologi apa yang Anda gunakan?",
    "faq.a4": "Kami bekerja dengan teknologi kelas enterprise termasuk Cisco, Aruba, MikroTik, Ubiquiti untuk jaringan; Fortinet, Palo Alto Networks untuk keamanan; VMware, Proxmox, Linux untuk infrastruktur; serta AWS, Azure, Cloudflare untuk layanan cloud.",
    "faq.q5": "Bagaimana cara memulai?",
    "faq.a5": "Hubungi kami melalui formulir permintaan konsultasi. Jelaskan infrastruktur Anda saat ini, tantangan teknis dan kebutuhan bisnis, dan tim rekayasa kami akan menjadwalkan konsultasi teknis.",
    // CTA CARD
    "cta.title": "Merencanakan transformasi jaringan?",
    "cta.subtitle": "Ceritakan infrastruktur Anda saat ini, tantangan teknis, dan kebutuhan bisnis Anda.",
    "cta.btn": "Konsultasi Teknis Gratis",
    // CONTACT
    "contact.badge": "Hubungi Kami",
    "contact.title": "Kontak NAHAP",
    "contact.subtitle": "Ceritakan tentang infrastruktur Anda saat ini, tantangan teknis dan kebutuhan bisnis. Tim kami siap membantu Anda menemukan solusi yang tepat.",
    "contact.info_title": "Informasi Kontak",
    "contact.hq": "Kantor Pusat",
    "contact.phone_label": "Telepon",
    "contact.email_label": "Email",
    "contact.hours_title": "Jam Operasional",
    "contact.hours_weekday": "Senin -Kamis",
    "contact.hours_friday": "Jumat",
    "contact.form_title": "Kirim Pesan",
    "contact.form_sub": "Isi formulir di bawah ini dan kami akan segera merespons pesan Anda.",
    "contact.name": "Nama Lengkap",
    "contact.email_field": "Alamat Email",
    "contact.subject": "Subjek",
    "contact.message": "Isi Pesan",
    "contact.send": "Kirim Pesan",
    // FOOTER
    "footer.tagline": "Rekayasa jaringan, keamanan siber, dan manajemen infrastruktur kelas enterprise di seluruh Indonesia.",
    "footer.services": "Layanan",
    "footer.company": "Perusahaan",
    "footer.contact": "Kontak",
    "footer.status": "Sistem Beroperasi",
    "footer.net_arch": "Arsitektur Jaringan",
    "footer.sec_eng": "Rekayasa Keamanan",
    "footer.infra": "Infrastruktur Terkelola",
    "footer.about": "Tentang NAHAP",
    "footer.insights": "Wawasan & Blog",
    "footer.contact_us": "Hubungi Kami",
    "footer.copyright": "NAHAP Enterprise. Hak cipta dilindungi undang-undang.",
    "footer.sys_op": "Sistem Beroperasi",

    // ABOUT PAGE
    "about.badge": "Tentang Perusahaan",
    "about.title": "Tentang NAHAP",
    "about.desc": "Network Architecture, Hardening & Protection Enterprise Engineering. Kami adalah perusahaan rekayasa keamanan siber dan infrastruktur enterprise terkemuka yang berdedikasi mengamankan masa depan digital Anda.",
    "about.stat1": "Didirikan",
    "about.stat2": "Klien Enterprise",
    "about.stat3": "Jaminan SLA Uptime",
    "about.vis_title": "Visi Kami",
    "about.vis_desc": "\"Menjadi pemimpin global dalam arsitektur jaringan enterprise, memberikan keamanan zero-trust tanpa kompromi dan ketahanan infrastruktur untuk organisasi di seluruh dunia.\"",
    "about.mis_title": "Misi Kami",
    "about.mis1": "Merancang dan menerapkan infrastruktur jaringan inti yang skalabel dan high-availability.",
    "about.mis2": "Menyediakan audit deep-packet dan penilaian kerentanan yang komprehensif.",
    "about.mis3": "Menerapkan perlindungan endpoint zero-trust lanjutan di berbagai lingkungan.",
    "about.mis4": "Mempertahankan manajemen Security Operations Center (SOC) proaktif 24/7.",
    "about.hist_badge": "Warisan Korporat",
    "about.hist_title": "Sejarah Kami",
    "about.hist1": "NAHAP didirikan oleh para network engineers terkemuka untuk mengatasi kesenjangan kritis dalam infrastruktur enterprise yang aman. Sejak saat itu, kami berkomitmen memberikan keamanan tanpa kompromi.",
    "about.hist2": "Saat ancaman enterprise menjadi semakin kompleks, NAHAP memperluas layanannya mencakup perlindungan ancaman persisten lanjutan, inspeksi paket mendalam, dan arsitektur zero-trust.",
    "about.hist3": "Hari ini, NAHAP mengoperasikan <strong class=\"text-blue-700 dark:text-blue-400\">Security Operations Center (SOC)</strong> mutakhir yang didukung oleh para ahli bersertifikat dan praktisi industri berpengalaman.",
    "about.net_badge": "Jaringan Kami",
    "about.net_title": "Keunggulan dalam Rekayasa",
    "about.net_desc": "Kami berkomitmen untuk memberikan infrastruktur jaringan yang paling andal dan aman.",
    "about.cert_title": "Ahli Bersertifikat",
    "about.cert_sub": "Pemimpin Industri",
    "about.cert_desc": "Tim kami memegang sertifikasi tingkat atas.",
    "about.sup_title": "Dukungan 24/7",
    "about.sup_desc": "SOC Selalu Online",
    "about.zt_title": "Zero Trust",
    "about.zt_desc": "Keamanan Mutlak",
    "about.cta_title": "Ingin Pelajari Lebih Lanjut?",
    "about.cta_desc": "Hubungi tim kami hari ini untuk menjadwalkan audit infrastruktur komprehensif atau mendiskusikan SLA kustom.",
    "about.cta_btn1": "Hubungi Kami",
    "about.cta_btn2": "Lihat Solusi",

    // ── NAV MENU (plain text nodes from Hugo template) ──────────────
    "Home": "Beranda",
    "Solutions": "Solusi",
    "About": "Tentang",
    "Contact": "Kontak",
    "Blog": "Blog",

    // ── CASE STUDY / CTA-IMAGE-PARAGRAPH BUTTONS ─────────────────────
    "View Case Studies": "Lihat Studi Kasus",
    "View Case Studies →": "Lihat Studi Kasus →",
    "Read Insights": "Baca Wawasan",
    "Read Insights →": "Baca Wawasan →",
    "Selected Engineering Work": "Karya Rekayasa Pilihan",
    "Our engineering projects demonstrate structured methodology, technical precision and measurable outcomes across diverse infrastructure environments.": "Proyek rekayasa kami menunjukkan metodologi terstruktur, presisi teknis, dan hasil terukur di berbagai lingkungan infrastruktur.",
    "Multi-Site Network Redesign with SD-WAN": "Redesain Jaringan Multi-Lokasi dengan SD-WAN",
    "Enterprise Network Hardening & Segmentation": "Hardening & Segmentasi Jaringan Enterprise",
    "Enterprise Wi-Fi Deployment & Management": "Deployment & Manajemen Wi-Fi Enterprise",
    "Engineering Insights": "Wawasan Rekayasa",
    "Technical articles on enterprise networking, cybersecurity architecture, and infrastructure best practices written by our engineering team.": "Artikel teknis tentang jaringan enterprise, arsitektur keamanan siber, dan praktik terbaik infrastruktur oleh tim rekayasa kami.",
    "Enterprise Network Architecture": "Arsitektur Jaringan Enterprise",
    "Firewall Hardening Checklist": "Checklist Hardening Firewall",
    "Network Segmentation Best Practices": "Praktik Terbaik Segmentasi Jaringan",

    // ── SOLUTIONS PAGE ────────────────────────────────────────────────
    "Enterprise Network Security": "Keamanan Jaringan Enterprise",
    "Infrastructure Solutions": "Solusi Infrastruktur",
    "Military-grade network architecture, zero-trust implementation, and 24/7 proactive threat monitoring for modern enterprises.": "Arsitektur jaringan kelas militer, implementasi zero-trust, dan pemantauan ancaman proaktif 24/7 untuk enterprise modern.",
    "Core Capabilities": "Kemampuan Inti",
    "Comprehensive security protocols designed to protect your data at every layer of the network stack.": "Protokol keamanan komprehensif yang dirancang untuk melindungi data Anda di setiap lapisan jaringan.",
    "Network Architecture": "Arsitektur Jaringan",
    "End-to-end design and deployment of scalable, highly available enterprise networks optimized for low latency and maximum throughput.": "Desain dan penerapan end-to-end jaringan enterprise yang skalabel dan highly available, dioptimalkan untuk latensi rendah.",
    "Hardening & Auditing": "Hardening & Audit",
    "Deep packet inspection, vulnerability assessments, and configuration reviews to secure endpoints and core routing infrastructure.": "Inspeksi paket mendalam, penilaian kerentanan, dan tinjauan konfigurasi untuk mengamankan endpoint dan inti routing.",
    "Zero Trust Protection": "Perlindungan Zero Trust",
    "Continuous authentication and micro-segmentation strategies that ensure threats are contained and eliminated instantly.": "Strategi autentikasi berkelanjutan dan mikro-segmentasi yang memastikan ancaman terkandung dan dieliminasi seketika.",
    "Learn More →": "Pelajari Lebih →",
    "Service Level Agreements": "Perjanjian Tingkat Layanan",
    "Choose the protection tier that aligns with your organization's risk profile and operational requirements.": "Pilih tingkat perlindungan yang sesuai dengan profil risiko dan kebutuhan operasional organisasi Anda.",
    "Business Tier": "Tingkat Bisnis",
    "8x5 Support & Monitoring": "Dukungan & Pemantauan 8x5",
    "Basic Network Auditing": "Audit Jaringan Dasar",
    "Firewall Configuration": "Konfigurasi Firewall",
    "Next-Business-Day Response": "Respons Hari Kerja Berikutnya",
    "Advanced Persistent Threat Protection": "Perlindungan Ancaman Persisten Lanjutan",
    "Request Quote": "Minta Penawaran",
    "RECOMMENDED": "DIREKOMENDASIKAN",
    "Enterprise Tier": "Tingkat Enterprise",
    "24/7 Proactive SOC Management": "Manajemen SOC Proaktif 24/7",
    "Full Infrastructure Hardening": "Hardening Infrastruktur Penuh",
    "Zero-Trust Architecture Deployment": "Penerapan Arsitektur Zero-Trust",
    "1-Hour Critical Incident Response": "Respons Insiden Kritis 1 Jam",
    "Get Enterprise Access": "Dapatkan Akses Enterprise",
    "Secure Your Infrastructure Today": "Amankan Infrastruktur Anda Sekarang",
    "Contact our certified engineering team for a comprehensive vulnerability assessment.": "Hubungi tim rekayasa bersertifikat kami untuk penilaian kerentanan komprehensif.",
    "Schedule Assessment": "Jadwalkan Penilaian",
    "Learn About Us": "Pelajari Tentang Kami",
    "sol.stat1": "SLA Uptime",
    "sol.stat2": "Pemantauan SOC",
    "sol.stat3": "Arsitektur Trust",
    "sol.stat4": "Pusat Data",
    // ── NETWORK ARCHITECTURE PAGE ───────────────────────────────
    "We design, deploy and document enterprise network infrastructure — from campus LAN to multi-site WAN to data center fabric.": "Kami merancang, menerapkan, dan mendokumentasikan infrastruktur jaringan enterprise — dari LAN kampus hingga WAN multi-situs hingga fabric data center.",
    "Network Architecture Services": "Layanan Arsitektur Jaringan",
    "Scalable, resilient, and secure network designs for your organization.": "Desain jaringan yang skalabel, tangguh, dan aman untuk organisasi Anda.",
    "LAN Design": "Desain LAN",
    "Enterprise campus LAN architecture with proper segmentation, redundancy and scalability.": "Arsitektur LAN kampus enterprise dengan segmentasi, redundansi, dan skalabilitas yang tepat.",
    "WAN Design": "Desain WAN",
    "Wide area network design connecting multiple sites with resilient, optimized connectivity.": "Desain wide area network yang menghubungkan berbagai lokasi dengan konektivitas yang tangguh dan dioptimalkan.",
    "Routing & Switching": "Routing & Switching",
    "BGP, OSPF, VLAN, STP/RSTP/MST, EtherChannel — enterprise routing and switching architecture.": "BGP, OSPF, VLAN, STP/RSTP/MST, EtherChannel — arsitektur routing dan switching enterprise.",
    "SD-WAN": "SD-WAN",
    "Software-defined WAN for centralized control, traffic optimization and simplified multi-site management.": "Software-defined WAN untuk kontrol terpusat, optimisasi lalu lintas, dan manajemen multi-situs yang disederhanakan.",
    "Enterprise Wi-Fi": "Wi-Fi Enterprise",
    "Site survey, RF planning, VLAN architecture and centralized wireless management.": "Survei lokasi, perencanaan RF, arsitektur VLAN, dan manajemen nirkabel terpusat.",
    "Data Center Networking": "Jaringan Data Center",
    "Spine-leaf architecture, VXLAN EVPN, high-availability fabric design for data center environments.": "Arsitektur Spine-leaf, VXLAN EVPN, desain fabric high-availability untuk lingkungan data center.",
    "Deliverables": "Hasil Kerja (Deliverables)",
    "Every network architecture engagement produces documented, actionable deliverables.": "Setiap proyek arsitektur jaringan menghasilkan dokumentasi yang terstruktur dan dapat ditindaklanjuti.",
    "High-Level Design (HLD)": "Desain Tingkat Tinggi (HLD)",
    "Architecture overview, topology diagrams, design rationale": "Gambaran umum arsitektur, diagram topologi, alasan desain",
    "Low-Level Design (LLD)": "Desain Tingkat Rendah (LLD)",
    "Detailed configuration specifications": "Spesifikasi konfigurasi terperinci",
    "Network Diagram": "Diagram Jaringan",
    "Logical and physical topology documentation": "Dokumentasi topologi logis dan fisik",
    "IP Addressing Plan": "Rencana IP Addressing",
    "Structured IP addressing scheme": "Skema penempatan IP yang terstruktur",
    "VLAN Plan": "Rencana VLAN",
    "VLAN allocation and segmentation strategy": "Strategi alokasi dan segmentasi VLAN",
    "Routing Design": "Desain Routing",
    "Routing protocol selection, area design, redistribution": "Pemilihan protokol routing, desain area, redistribusi",
    "Implementation Plan": "Rencana Implementasi",
    "Step-by-step deployment procedure": "Prosedur penerapan langkah demi langkah",
    "Migration Plan": "Rencana Migrasi",
    "Zero-downtime migration strategy where applicable": "Strategi migrasi tanpa downtime jika memungkinkan",
    "Test Plan": "Rencana Pengujian",
    "Validation criteria and test procedures": "Kriteria validasi dan prosedur pengujian",
    "Documentation": "Dokumentasi",
    "Complete infrastructure documentation package": "Paket dokumentasi infrastruktur lengkap",
    "Need a network architecture review?": "Butuh tinjauan arsitektur jaringan?",
    "Let our engineering team evaluate your current network and design a scalable, resilient architecture.": "Biarkan tim rekayasa kami mengevaluasi jaringan Anda saat ini dan merancang arsitektur yang skalabel dan tangguh.",
    // ── SECURITY ENGINEERING PAGE ───────────────────────────────
    "We engineer security into every layer of your network — from perimeter firewalls to internal segmentation to zero trust architecture.": "Kami merekayasa keamanan ke dalam setiap lapisan jaringan Anda — dari firewall perimeter hingga segmentasi internal hingga arsitektur zero trust.",
    "Security Engineering Services": "Layanan Rekayasa Keamanan",
    "Comprehensive security protocols designed to protect your data at every layer of the network stack.": "Protokol keamanan komprehensif yang dirancang untuk melindungi data Anda di setiap lapisan jaringan.",
    "Firewall Deployment": "Penerapan Firewall",
    "Enterprise firewall design, deployment and policy configuration for perimeter and internal security enforcement.": "Desain firewall enterprise, penerapan dan konfigurasi kebijakan untuk penegakan keamanan perimeter dan internal.",
    "Firewall Rule Review": "Tinjauan Aturan Firewall",
    "Systematic review of firewall policies, rule optimization and removal of unnecessary access to reduce attack surface.": "Tinjauan sistematis atas kebijakan firewall, optimasi aturan, dan penghapusan akses yang tidak perlu untuk mengurangi permukaan serangan.",
    "Network Hardening": "Hardening Jaringan",
    "Device hardening, service minimization, protocol security and configuration baseline enforcement.": "Pengerasan perangkat, minimalisasi layanan, keamanan protokol dan penegakan dasar konfigurasi.",
    "Network Segmentation": "Segmentasi Jaringan",
    "VLAN-based segmentation, micro-segmentation strategy and inter-zone access control design.": "Segmentasi berbasis VLAN, strategi mikro-segmentasi, dan desain kontrol akses antar-zona.",
    "VPN & Remote Access": "VPN & Akses Jarak Jauh",
    "Site-to-site VPN, remote access VPN and secure connectivity for distributed workforce.": "VPN Site-to-site, VPN akses jarak jauh, dan konektivitas aman untuk tenaga kerja terdistribusi.",
    "Zero Trust Architecture": "Arsitektur Zero Trust",
    "Zero trust network design with identity-based access, continuous verification and least-privilege principles.": "Desain jaringan zero trust dengan akses berbasis identitas, verifikasi berkelanjutan, dan prinsip hak istimewa terendah.",
    "Every security engineering engagement produces documented, actionable deliverables.": "Setiap proyek rekayasa keamanan menghasilkan dokumentasi yang terstruktur dan dapat ditindaklanjuti.",
    "Security Assessment": "Penilaian Keamanan",
    "Current state analysis and risk identification": "Analisis keadaan saat ini dan identifikasi risiko",
    "Configuration Review": "Tinjauan Konfigurasi",
    "Device configuration audit against security baselines": "Audit konfigurasi perangkat terhadap baseline keamanan",
    "Hardening Baseline": "Baseline Hardening",
    "Standardized security configuration templates": "Template konfigurasi keamanan standar",
    "Firewall Policy Review": "Tinjauan Kebijakan Firewall",
    "Rule analysis, optimization recommendations": "Analisis aturan, rekomendasi optimasi",
    "Network Segmentation Design": "Desain Segmentasi Jaringan",
    "Zone architecture and access control matrix": "Arsitektur zona dan matriks kontrol akses",
    "Security Architecture": "Arsitektur Keamanan",
    "End-to-end security design documentation": "Dokumentasi desain keamanan end-to-end",
    "Phased deployment procedure": "Prosedur penerapan bertahap",
    "Security Documentation": "Dokumentasi Keamanan",
    "Complete security infrastructure documentation": "Dokumentasi infrastruktur keamanan lengkap",
    "Concerned about your network security posture?": "Khawatir dengan postur keamanan jaringan Anda?",
    "Our engineering team can assess your current infrastructure and design a hardened, segmented architecture.": "Tim rekayasa kami dapat menilai infrastruktur Anda saat ini dan merancang arsitektur yang tangguh dan tersegmentasi.",
    "Request Security Assessment": "Jadwalkan Penilaian Keamanan",
    // ── MANAGED INFRASTRUCTURE PAGE ───────────────────────────────
    "Proactive monitoring, maintenance and operational support to keep your network infrastructure reliable, secure and performant.": "Pemantauan proaktif, pemeliharaan, dan dukungan operasional untuk menjaga infrastruktur jaringan Anda andal, aman, dan berkinerja tinggi.",
    "Managed Infrastructure Services": "Layanan Infrastruktur Terkelola",
    "Proactive management protocols designed to maintain uptime and performance.": "Protokol manajemen proaktif yang dirancang untuk mempertahankan uptime dan performa.",
    "Network Monitoring": "Pemantauan Jaringan",
    "24/7 network monitoring with real-time alerting, performance tracking and availability reporting.": "Pemantauan jaringan 24/7 dengan peringatan real-time, pelacakan performa, dan pelaporan ketersediaan.",
    "Configuration Backup": "Backup Konfigurasi",
    "Automated configuration backup, version control and change tracking for all network devices.": "Backup konfigurasi otomatis, kontrol versi, dan pelacakan perubahan untuk semua perangkat jaringan.",
    "Preventive Maintenance": "Pemeliharaan Preventif",
    "Scheduled maintenance windows, firmware updates, health checks and proactive issue resolution.": "Jadwal pemeliharaan, pembaruan firmware, pemeriksaan kesehatan, dan penyelesaian masalah proaktif.",
    "Incident Support": "Dukungan Insiden",
    "Structured incident response, troubleshooting and resolution with defined SLA targets.": "Respons insiden terstruktur, pemecahan masalah, dan penyelesaian dengan target SLA yang ditentukan.",
    "Performance Monitoring": "Pemantauan Performa",
    "Bandwidth utilization, latency tracking, capacity trending and performance optimization.": "Pemanfaatan bandwidth, pelacakan latensi, tren kapasitas, dan optimisasi performa.",
    "Network Health Checks": "Pemeriksaan Kesehatan Jaringan",
    "Periodic comprehensive assessment of network health, configuration compliance and security posture.": "Penilaian komprehensif berkala terhadap kesehatan jaringan, kepatuhan konfigurasi, dan postur keamanan.",
    "Service Tiers": "Tingkat Layanan",
    "We offer three tiers of managed infrastructure service:": "Kami menawarkan tiga tingkat layanan infrastruktur terkelola:",
    "Essential": "Esensial",
    "Core monitoring and alerting with business-hours support. Suitable for organizations establishing their first infrastructure monitoring capability.": "Pemantauan dan peringatan inti dengan dukungan jam kerja. Cocok untuk organisasi yang baru membangun kemampuan pemantauan infrastruktur mereka.",
    "Select Tier": "Pilih Tingkat",
    "Business": "Bisnis",
    "Extended monitoring coverage, preventive maintenance scheduling, configuration management and priority incident response. Designed for organizations with critical infrastructure dependencies.": "Cakupan pemantauan yang diperluas, penjadwalan pemeliharaan preventif, manajemen konfigurasi, dan respons insiden prioritas. Dirancang untuk organisasi dengan ketergantungan infrastruktur kritis.",
    "Enterprise": "Enterprise",
    "Comprehensive 24/7 monitoring, proactive maintenance, capacity planning, quarterly health checks and dedicated support. For organizations requiring maximum infrastructure reliability.": "Pemantauan 24/7 komprehensif, pemeliharaan proaktif, perencanaan kapasitas, pemeriksaan kesehatan triwulanan, dan dukungan khusus. Untuk organisasi yang membutuhkan keandalan infrastruktur maksimal.",
    "Contact us for a tailored service plan that matches your operational requirements.": "Hubungi kami untuk rencana layanan khusus yang sesuai dengan kebutuhan operasional Anda.",
    "Want proactive infrastructure management?": "Ingin manajemen infrastruktur proaktif?",
    "Stop reacting to outages. Let our team monitor, maintain and optimize your network infrastructure.": "Berhenti bereaksi terhadap pemadaman. Biarkan tim kami memantau, memelihara, dan mengoptimalkan infrastruktur jaringan Anda.",
    "Request Service Plan": "Minta Rencana Layanan",
  }
};

// --- Text-node substitution map (EN -> ID) -------------------------
// For Hugo Blox built-in blocks that don't have data-i18n attributes,
// we do a recursive textNode walk to find and replace exact strings.
function buildSwapMap(lang) {
  const en = NAHAP_TRANSLATIONS.en;
  const target = NAHAP_TRANSLATIONS[lang];
  const map = {};
  Object.keys(en).forEach(k => {
    const src = en[k].trim();
    const dst = target[k] ? target[k].trim() : src;
    if (src && dst && src !== dst) map[src] = dst;
  });
  return map;
}

// Walk all text nodes and replace matching strings
function swapTextNodes(swapMap) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const p = node.parentElement;
        // Skip script/style/code nodes and lang-toggle buttons
        if (!p || ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.id === 'lang-en' || p.id === 'lang-id') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  const nodesToPatch = [];
  while (walker.nextNode()) nodesToPatch.push(walker.currentNode);

  nodesToPatch.forEach(node => {
    const original = node.nodeValue;
    const trimmed = original.trim();
    if (swapMap[trimmed] !== undefined) {
      // Preserve surrounding whitespace
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + swapMap[trimmed] + trailing;
    }
  });
}

// â”€â”€â”€ data-i18n attribute engine â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function applyDataI18n(lang) {
  const t = NAHAP_TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

// â”€â”€â”€ Toggle button UI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateToggleUI(lang) {
  const enBtn = document.getElementById('lang-en');
  const idBtn = document.getElementById('lang-id');
  if (!enBtn || !idBtn) return;
  if (lang === 'en') {
    enBtn.classList.add('bg-blue-700', 'text-white');
    enBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    idBtn.classList.remove('bg-blue-700', 'text-white');
    idBtn.classList.add('text-slate-600', 'dark:text-slate-300');
  } else {
    idBtn.classList.add('bg-blue-700', 'text-white');
    idBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    enBtn.classList.remove('bg-blue-700', 'text-white');
    enBtn.classList.add('text-slate-600', 'dark:text-slate-300');
  }
}

// â”€â”€â”€ Store original English text nodes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let originalTextStore = null; // Will hold Map<Node, originalValue>

function storeOriginals() {
  originalTextStore = new Map();
  const walker = document.createTreeWalker(
    document.body, NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.id === 'lang-en' || p.id === 'lang-id') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  while (walker.nextNode()) {
    originalTextStore.set(walker.currentNode, walker.currentNode.nodeValue);
  }
}

function restoreOriginals() {
  if (!originalTextStore) return;
  originalTextStore.forEach((val, node) => {
    if (node.parentElement) node.nodeValue = val;
  });
}

// â”€â”€â”€ Main apply function â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function nahapApplyLang(lang) {
  // 1. Restore originals first (always start from EN base)
  restoreOriginals();

  // 2. Apply data-i18n tagged elements
  applyDataI18n(lang);

  // 3. If Indonesian, do text-node swap for untagged Hugo Blox blocks
  if (lang === 'id') {
    const swapMap = buildSwapMap('id');
    swapTextNodes(swapMap);
  }

  // 4. Update lang attribute & storage
  document.documentElement.lang = lang;
  localStorage.setItem('nahap-lang', lang);

  // 5. Update toggle buttons
  updateToggleUI(lang);
}

// â”€â”€â”€ Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function nahapInitLang() {
  // Store all original text once DOM is ready
  storeOriginals();

  const saved = localStorage.getItem('nahap-lang') || 'en';
  nahapApplyLang(saved);

  document.getElementById('lang-en')?.addEventListener('click', () => nahapApplyLang('en'));
  document.getElementById('lang-id')?.addEventListener('click', () => nahapApplyLang('id'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', nahapInitLang);
} else {
  nahapInitLang();
}

