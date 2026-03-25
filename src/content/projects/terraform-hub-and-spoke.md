---
title: "Architecture Hub & Spoke Azure"
description: "Architecture réseau Hub & Spoke sur Azure avec Terraform, incluant un firewall centralisé et une jumpbox pour l'administration."
category: "aws-infra"
tags: ["azure", "terraform", "infrastructure", "hub-and-spoke", "firewall", "networking"]
status: "launched"
version: "v1.0"
startedDate: 2025-03-15
launchedDate: 2025-03-15
techStack: ["Azure", "Terraform", "Azure Firewall", "VNet Peering", "Linux"]
repoUrl: "https://github.com/julieparrot91-star/terraform-hub-and-spoke"
---

## Présentation

Projet personnel visant à maîtriser les architectures réseau complexes sur Azure. Cette architecture Hub & Spoke démontre comment centraliser la sécurité et l'administration tout en isolant les environnements.

## Architecture

```mermaid
flowchart LR
    subgraph Hub["Hub (10.0.0.0/16)"]
        FW[("Azure Firewall")]
        JB[("Jumpbox<br/>10.0.3.4")]
    end
    
    subgraph Spokes
        S1["Spoke1<br/>10.1.0.0/16"]
        S2["Spoke2<br/>10.2.0.0/16"]
    end
    
    S1 -->|"VNet Peering"| FW
    S2 -->|"VNet Peering"| FW
    FW --> JB
    
    style Hub fill:#0078D4,stroke:#fff,color:#fff
    style FW fill:#FF8C00,stroke:#fff,color:#fff
    style S1 fill:#326CE5,stroke:#fff,color:#fff
    style S2 fill:#326CE5,stroke:#fff,color:#fff
```

## Composants

| Ressource | Description |
|-----------|-------------|
| **Hub VNET** | 10.0.0.0/16 - Réseau central |
| **Azure Firewall** | Standard SKU avec politique de règles |
| **Jumpbox** | VM Spot Ubuntu 22.04 pour accès admin |
| **Spoke1** | 10.1.0.0/16 - Premier réseau spoke |
| **Spoke2** | 10.2.0.0/16 - Deuxième réseau spoke |
| **Peerings** | Connexions bidirectionnelles hub ↔ spokes |

## Fonctionnalités

- **Hub centralisé** : Point d'entrée unique pour le trafic réseau
- **Azure Firewall** : Filtrage du trafic avec règles réseau et application
- **Jumpbox admin** : Accès sécurisé aux ressources via RDP
- **VNet Peering** : Connexions entre hub et spokes
- **VM Spot** : Optimisation des coûts pour la jumpbox

## Structure Terraform

```
terraform-hub-and-spoke/
├── main.tf                 # Orchestration des modules
├── variables.tf            # Paramètres configurables
├── terraform.tfvars        # Valeurs (location, credentials)
├── provider.tf             # Provider AzureRM
└── modules/
    ├── hub/               # VNET hub, Firewall, Jumpbox
    ├── spoke/             # Spoke 1
    └── spoke2/            # Spoke 2
```

## Commandes

```bash
# Initialiser Terraform
terraform init

# Valider et planifier
terraform validate
terraform plan

# Déployer
terraform apply

# Détruire l'infrastructure
terraform destroy
```

## Compétences Acquises

- Architecture réseau Azure (VNET, Subnets, Peering)
- Azure Firewall configuration
- Terraform modules
- Infrastructure as Code
- Sécurité réseau cloud