# Modifications apportées au portfolio

## Résumé
J'ai rempli les informations de ton CV dans le portfolio. Voici le détail de toutes les modifications.

---

## 1. Correction d'erreur de catégorie (projet)
**Fichier:** `src/content/projects/example-project.md`
**Modification:** Changement de `category: "web-development"` → `category: "frontend-development"`
**Raison:** Le schéma du portfolio n'acceptait que certaines catégories spécifiques. "web-development" n'était pas dans la liste.

---

## 2. Titre du site
**Fichier:** `src/consts.ts`
**Modification:**
```typescript
// Avant:
export const SITE_TITLE = 'Your Name | Portfolio';

// Après:
export const SITE_TITLE = 'Julien Parrot | Portfolio';
```
**Raison:** Ajouter ton nom comme titre principal du site.

---

## 3. Description du site
**Fichier:** `src/consts.ts`
**Modification:**
```typescript
// Avant:
export const SITE_DESCRIPTION = 'Your professional description here.';

// Après:
export const SITE_DESCRIPTION = "Positif, à l'écoute et très perfectionniste, je suis à la recherche d'une expérience professionnelle dans l'informatique basée sur ma certification AZ-104 Microsoft Azure Administrator. J'aime les projets d'équipe qui évoluent au sein d'un environnement dynamique. Je suis convaincu que grâce à mon assiduité et mon travail régulier, je serai à même de mettre à profit mes compétences au sein de votre société et atteindre l'ensemble de mes objectifs professionnels.";
```
**Raison:** Ajouter ta description professionnelle avec mention de la certification AZ-104.

---

## 4. Page d'accueil (index.astro)
**Fichier:** `src/pages/index.astro`
**Modifications:**
- **Nom:** "Your Name" → "Julien Parrot"
- **Titre:** "Your Title" → "Administrateur Cloud Azure"
- **Spécialisations:** "Your · Specializations · Here" → "Azure · Active Directory · PowerShell · Proxmox"
- **Introduction:** "Your professional introduction goes here..." → Texte personnalisé
- **Email:** "your-email@example.com" → "julien.parrot@email.com" (à modifier avec ton vrai email)
**Raison:** Personnaliser la page d'accueil avec tes informations.

---

## 5. Page À propos (about.astro)
**Fichier:** `src/pages/about.astro`
**Modifications:**
- **Titre:** "About Me" → "À propos"
- **Description:** "About Your Name" → "À propos de Julien Parrot"
- **Présentation:** "I am Your Name — your tagline here" → "Je suis Julien Parrot — Administrateur Cloud Azure en recherche d'alternance"
- **Paragraphe:** Description de ton profil et tes objectifs
- **Formation:**
  - BTS SIO (Services Informatiques aux Organisations) - Option SLAM, Mention Bien, 2025
  - Lycée Notre-Dame Saint-Joseph, Langon
- **Certification:** Microsoft Azure Administrator (AZ-104)
**Ranger:** Présenter ta formation et certification sur la page About.

---

## 6. Certifications
**Fichier:** `src/data/certifications.ts`
**Modification:** Remplacement des certifications d'exemple par ta certification réelle.
```typescript
// Avant (exemples):
- "Example Certification" - Certification Provider
- "In Progress Certification" - Another Provider

// Après:
- "Microsoft Certified: Azure Administrator Associate" - Microsoft (2025-2028)
```
**Raison:** Afficher ta certification AZ-104 Microsoft.

---

## 7. Projet Homelab (nouveau fichier)
**Fichier:** `src/content/projects/homelab.md` (créé)
**Contenu:**
- Titre: "Homelab Proxmox"
- Description: Configuration d'un serveur personnel avec Proxmox, VLAN, Docker
- Catégorie: "homelab"
- Technologies: Proxmox, Docker, VLAN, pfSense, Linux, Windows Server, Active Directory
- Présentation du projet, architecture réseau, services auto-hébergés
- Défis et solutions
- Objectifs futurs

**Raison:** Ajouter ton projet Homelab qui montre tes compétences pratiques en infrastructure.

---

## 8. Suppression du projet d'exemple
**Fichier:** `src/content/projects/example-project.md` (supprimé)
**Raison:** C'était un projet placeholder qui ne contenait pas tes informations.

---

## Éléments à modifier toi-même

1. **Email de contact** (`src/pages/index.astro`): Ligne 58 - remplacer "julien.parrot@email.com" par ton vrai email
2. **Lien Credly** (`src/data/certifications.ts`): Ligne 15 - remplacer par le vrai lien de ton badge
3. **Photo de profil** (optionnel): Tu peux ajouter une photo dans `src/assets/`
4. **CV téléchargeable** (optionnel): Tu peux ajouter un lien de téléchargement dans le header

---

---

## 9. Correction du chemin d'image (blog)
**Fichier:** `src/content/blog/example-post.md`
**Modification:**
```yaml
# Avant:
heroImage: "/blog-placeholder-1.jpg"

# Après:
heroImage: "../../assets/blog-placeholder-1.jpg"
```
**Raison:** Le chemin absolu ne fonctionnait pas. Astro nécessite un chemin relatif depuis le fichier vers le dossier assets.

---

## 10. Installation du package mermaid
**Fichier:** `package.json`
**Modification:** Ajout de la dépendance `mermaid`
**Raison:** Le layout BlogPost utilisait mermaid pour les diagrammes mais le package n'était pas installé.

---

## Vérification

Le site fonctionne correctement. Tu peux le tester avec:
```
npm run dev
```
Puis ouvre http://localhost:4323/

Pages fonctionnelles:
- / - Accueil
- /about - À propos
- /projects - Projets (Homelab)
- /blog - Blog

---

Date des modifications: 13 mars 2026