---
title: 'NAHAP | Enterprise Network & Cybersecurity Engineering'
description: 'NAHAP adalah penyedia layanan Enterprise Network, Cybersecurity, dan Managed Infrastructure untuk industri, korporat, dan pemerintahan di Indonesia.'
summary: 'Enterprise Network & Cybersecurity Engineering'
date: 2026-09-26
type: landing

sections:
  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 1 — HERO
  # ──────────────────────────────────────────────────────────────────────────
  - block: hero_nahap
    id: top
    content:
      eyebrow: NAHAP
      title: Enterprise Network & [Cybersecurity] Engineering
      text: We design, secure, deploy and operate reliable network infrastructure for enterprise, industrial and distributed environments.
      primary_action:
        text: Request Technical Consultation
        url: "/contact/"
        icon: rocket-launch
        style: gradient
      secondary_action:
        text: Explore Solutions
        url: "/solutions/"
        icon: play-circle
        style: ghost
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      section_break:
        fade_bottom: true
      background:
        gradient:
          type: radial
          start: "rgba(14,165,233,0.35)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 2 — CAPABILITIES STATS & LOGOS
  # ──────────────────────────────────────────────────────────────────────────
  - block: stats_nahap
    id: stats_nahap
    content:
      logos_title: "Technologies we work with"
      logos:
        - name: Cisco
          icon: brands/cisco
        - name: Fortinet
          icon: brands/fortinet
        - name: Palo Alto
          icon: brands/paloalto
        - name: Aruba
          icon: hero/wifi
        - name: MikroTik
          icon: custom/mikrotik
        - name: VMware
          icon: brands/vmware
        - name: Microsoft
          icon: brands/microsoft
        - name: AWS
          icon: brands/aws
      stats:
        - value: "3"
          label: "Core engineering disciplines"
        - value: "6+"
          label: "Industries served"
        - value: "5"
          label: "Step engineering methodology"
    design:
      spacing:
        padding: ['0', '0', '0', '0']

  # ────────────────────────────────────────────────────────────────────────── 
  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 4 — ENGINEERING METHODOLOGY (Steps)
  # ──────────────────────────────────────────────────────────────────────────
  - block: methodology_nahap
    id: methodology
    content:
      title: Engineering-driven approach to infrastructure
      text: Every engagement follows a structured methodology to deliver predictable, documented results.
      items:
        - title: Discover
          text: Understand business requirements, operational constraints and technical objectives.
          icon: magnifying-glass
        - title: Assess
          text: Evaluate current infrastructure, topology, configuration and identify gaps.
          icon: clipboard-document-check
        - title: Design
          text: Create architecture, topology design and detailed implementation plan.
          icon: pencil-square
        - title: Implement
          text: Deploy, migrate, test and validate against design specifications.
          icon: wrench-screwdriver
        - title: Operate
          text: Monitor, maintain and continuously improve infrastructure health.
          icon: chart-bar
    design:
      spacing:
        padding: ['0', '0', '0', '0']

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 5 — CORE CAPABILITIES (Capabilities - Bento Grid)
  # ──────────────────────────────────────────────────────────────────────────
  - block: capabilities_nahap
    id: services
    content:
      subtitle: Engineering Capabilities
      title: Engineering capabilities for modern infrastructure
      text: Comprehensive network and security engineering services for enterprise environments.
      items:
        - name: Network Architecture
          icon: server
          description: Enterprise LAN/WAN, routing, switching, wireless, SD-WAN and data center networking. We design networks that scale.
        - name: Security Engineering
          icon: shield-check
          description: Firewall deployment, VPN, network hardening, segmentation, NAC and zero trust architecture. Security by design, not afterthought.
        - name: Managed Infrastructure
          icon: chart-bar
          description: Network monitoring, configuration backup, preventive maintenance, incident support and SLA-based operational management.
        - name: Network Monitoring
          icon: eye
          description: Real-time visibility into network health, performance metrics, alerting and capacity planning for proactive operations.
    design:
      spacing:
        padding: ['0', '0', '0', '0']

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 6 — BUSINESS PROBLEMS
  # ──────────────────────────────────────────────────────────────────────────
  - block: problems_nahap
    id: problems
    content:
      subtitle: Why NAHAP
      title: Infrastructure problems become business problems
      text: When network infrastructure fails, business operations stop. We engineer solutions that prevent these scenarios.
      items:
        - name: Network Downtime
          icon: exclamation-triangle
          description: Unstable connectivity impacts business operations, productivity and revenue. Redundant architecture eliminates single points of failure.
        - name: Security Exposure
          icon: lock-open
          description: Misconfiguration and unnecessary exposure increase security risk. Systematic hardening reduces your attack surface.
        - name: Distributed Infrastructure
          icon: globe-alt
          description: Multiple sites make centralized management difficult. Unified architecture provides control across all locations.
        - name: Limited Visibility
          icon: eye-slash
          description: Without monitoring, teams discover problems after users report them. Proactive monitoring detects issues before impact.
    design:
      spacing:
        padding: ['0', '0', '0', '0']

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 7 — INDUSTRIES
  # ──────────────────────────────────────────────────────────────────────────
  - block: industries_nahap
    id: industries
    content:
      subtitle: Industries
      title: Infrastructure engineering for distributed environments
      text: We understand the unique infrastructure challenges of each industry.
      items:
        - name: Mining & Industrial
          icon: building-office
          description: Secure and resilient connectivity for remote operational sites with harsh environmental conditions.
        - name: Plantation
          icon: globe-alt
          description: Multi-site connectivity and centralized infrastructure visibility across geographically dispersed locations.
        - name: Corporate
          icon: building-office-2
          description: Enterprise LAN, WAN, Wi-Fi and network security for modern corporate environments.
        - name: Hospitality
          icon: home
          description: Reliable guest and corporate network infrastructure with seamless connectivity.
        - name: Education
          icon: academic-cap
          description: Campus network, Wi-Fi coverage and network segmentation for educational institutions.
        - name: Government
          icon: shield-check
          description: Secure and structured network infrastructure meeting government compliance requirements.
    design:
      spacing:
        padding: ['0', '0', '0', '0']

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 8 — CASE STUDIES
  # ──────────────────────────────────────────────────────────────────────────
  - block: cta-image-paragraph
    id: case-studies
    content:
      items:
        - title: Selected Engineering Work
          text: Our engineering projects demonstrate structured methodology, technical precision and measurable outcomes across diverse infrastructure environments.
          feature_icon: check
          features:
            - "Multi-Site Network Redesign with SD-WAN"
            - "Enterprise Network Hardening & Segmentation"
            - "Enterprise Wi-Fi Deployment & Management"
          image: network-topology.svg
          button:
            text: "View Case Studies"
            url: "/case-studies/"
        - title: Engineering Insights
          text: Technical articles on enterprise networking, cybersecurity architecture, and infrastructure best practices written by our engineering team.
          feature_icon: bolt
          features:
            - "Enterprise Network Architecture"
            - "Firewall Hardening Checklist"
            - "Network Segmentation Best Practices"
          image: security-diagram.svg
          button:
            text: "Baca Wawasan →"
            url: "/insights/"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
      spacing:
        padding: ["1.5rem", 0, "1.5rem", 0]

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 9 — FAQ
  # ──────────────────────────────────────────────────────────────────────────
  - block: faq
    id: faq
    content:
      title: Frequently Asked Questions
      subtitle: Common questions about our engineering services.
      items:
        - question: What industries does NAHAP serve?
          answer: |
            We serve enterprise, industrial, mining, plantation, corporate, hospitality, education and government organizations. Our focus is on environments with distributed infrastructure, multi-site connectivity needs and critical operational requirements.
        - question: What is your engineering methodology?
          answer: |
            Every engagement follows our five-step methodology: Discover, Assess, Design, Implement and Operate. This structured approach ensures predictable outcomes, documented architecture and maintainable infrastructure.
        - question: Do you provide ongoing support?
          answer: |
            Yes. Our Managed Infrastructure service provides network monitoring, configuration backup, preventive maintenance, incident support and SLA-based operational management at Essential, Business and Enterprise tiers.
        - question: Which technologies do you work with?
          answer: |
            We work with enterprise-grade technologies including Cisco, Aruba, MikroTik, Ubiquiti for networking; Fortinet, Palo Alto Networks for security; VMware, Proxmox, Linux for infrastructure; and AWS, Azure, Cloudflare for cloud services.
        - question: How do I get started?
          answer: |
            Contact us through our consultation request form. Describe your current infrastructure, technical challenges and business requirements, and our engineering team will schedule a technical consultation.

  # ──────────────────────────────────────────────────────────────────────────
  # SECTION 10 — FINAL CTA
  # ──────────────────────────────────────────────────────────────────────────
  - block: cta-card
    id: cta
    content:
      title: Planning a network transformation?
      text: Tell us about your current infrastructure, technical challenges and business requirements.
      button:
        text: Request Technical Consultation
        url: "/contact/"
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""
---
