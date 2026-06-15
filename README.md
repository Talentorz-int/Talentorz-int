# Talentorz Site vitrine (export Framer statique)

Site web de **Talentorz**, agence d'intérim spécialisée dans le tertiaire (banque, finance, assurance, fonctions support).
Ce dossier est un **export statique** d'un site conçu sur **Framer**, généré avec l'outil [FramerExport](https://github.com/danbenba/FramerExport) (situé dans le dossier parent).

> ⚠️ **À lire absolument avant toute modification :** la section [Comment ça marche](#-comment-ça-marche-le-point-le-plus-important) explique pourquoi modifier le HTML « ne tient pas » et comment faire des changements qui restent.

---

## 📑 Sommaire

1. [Aperçu rapide](#-aperçu-rapide)
2. [Prérequis](#-prérequis)
3. [Lancer / prévisualiser le site](#-lancer--prévisualiser-le-site)
4. [Structure du projet](#-structure-du-projet)
5. [Comment ça marche (le point le plus important)](#-comment-ça-marche-le-point-le-plus-important)
6. [Recettes : comment faire X](#-recettes--comment-faire-x)
7. [Personnalisations déjà appliquées](#-personnalisations-déjà-appliquées)
8. [Sauvegarde & restauration](#-sauvegarde--restauration)
9. [Déploiement](#-déploiement)
10. [Pièges fréquents (FAQ)](#-pièges-fréquents-faq)
11. [À ne JAMAIS toucher](#-à-ne-jamais-toucher)

---

## 🚀 Aperçu rapide

| Info | Valeur |
|---|---|
| Type | Site **statique** (HTML/CSS/JS) export Framer |
| Framework rendu | Framer (React) hydraté côté client |
| Build / compilation | **Aucun** (les fichiers sont servis tels quels) |
| Pages | **17** (`index.html` + 16 dans `subpages/`) |
| Serveur de dev fourni | `serve.cjs` (Node, port 3000) |
| Langue du contenu | Français |
| Sauvegarde de l'export original | `../framer-agence-int - Copie/` |

---

## 🔧 Prérequis

- **Node.js ≥ 18** (uniquement pour le petit serveur local `serve.cjs` ; le site lui-même n'a besoin de rien).
- Un navigateur moderne.
- Aucune dépendance npm à installer pour ce dossier (il n'y a volontairement pas de `package.json` ici voir [Pièges](#-pièges-fréquents-faq)).

---

## ▶️ Lancer / prévisualiser le site

Le site est statique : il suffit de servir le dossier. Trois options, de la plus simple à la plus pratique :

### Option 1 Serveur fourni (recommandé)
```bash
node serve.cjs
```
Puis ouvre **http://localhost:3000**. Le serveur sert les bons types MIME (important pour les `.svg`, `.mjs`, polices…).
Port personnalisable : `PORT=8080 node serve.cjs`.

### Option 2 `npx serve`
```bash
npx serve .
```

### Option 3 VS Code Live Server
Clic droit sur `index.html` → **Open with Live Server**.

> 💡 Après chaque modification, recharge avec **Ctrl + Maj + R** (vide le cache). Le cache navigateur est agressif sur les exports Framer.

> ❌ **N'ouvre pas** les `.html` en double-cliquant (`file://`) : certaines ressources (modules `.mjs`, polices) ne se chargent pas correctement sans serveur HTTP.

---

## 📁 Structure du projet

```
framer-agence-int/
├── index.html                 # Page d'accueil
├── serve.cjs                  # Serveur statique local (Node) node serve.cjs
├── transform.ps1              # Script PowerShell de rebranding (historique, commenté)
├── README.md                  # Ce fichier
│
├── subpages/                  # Les 16 autres pages
│   ├── about.html
│   ├── contact.html
│   ├── services.html
│   ├── services_brand-positioning.html
│   ├── services_content-creative-direction.html
│   ├── services_conversion-systems.html
│   ├── services_market-research.html
│   ├── services_performance-intelligence.html
│   ├── case-studies.html
│   ├── case-studies_luminous.html
│   ├── case-studies_snapshot.html
│   ├── case-studies_waveless.html
│   ├── blog.html
│   ├── blog_how-better-funnels-...html
│   ├── blog_how-companies-...html
│   └── blog_why-strong-brand-...html
│
├── assets/
│   ├── css/                   # fonts.css, talentorz.css (styles globaux)
│   ├── fonts/                 # Polices web (.woff2)
│   ├── images/                # Toutes les images + LOGOS du carrousel
│   ├── videos/                # Vidéos éventuelles
│   └── misc/                  # ⚙️ Artefacts Framer : copies/snapshots de pages
│                              #    (versions « canonical » SEO, sandbox éditeur)
│
├── scripts/
│   ├── vendor/                # 258 modules JS de l'app Framer (le « moteur »)
│   │                          #    ⭐ Contient les DONNÉES du carrousel de logos
│   └── modules/               # Modules additionnels (ex: Pause.js)
│
├── styles/                    # CSS de l'éditeur/sandbox Framer (canvas-sandbox, editorbar)
└── data/                      # (vide / données éventuelles)
```

### Les fichiers clés à connaître
- **`index.html` + `subpages/*.html`** : le contenu de chaque page (rendu serveur / SSR).
- **`scripts/vendor/*.mjs`** : le code de l'app Framer. **C'est ici que vivent les données dynamiques** (ex : les logos du carrousel, certains spacers, composants).
- **`assets/css/talentorz.css`** : feuille de style principale du thème.
- **`assets/misc/*`** : copies de pages générées par Framer (référencées en `<link rel="canonical">`). **Non affichées** à l'utilisateur, mais à garder synchronisées pour le SEO.

---

## 🧠 Comment ça marche (le point le plus important)

Cet export n'est **pas** une simple page HTML : c'est une **application React** générée par Framer.

```
1. Le navigateur charge le HTML (déjà rendu = SSR) → affichage immédiat.
2. Les scripts /scripts/vendor/*.mjs s'exécutent (hydratation React).
3. React RECONSTRUIT le DOM à partir de ses données internes (les .mjs).
```

**Conséquence directe :**

> ✏️ Si tu modifies/supprimes un élément **dans le HTML** alors qu'il est piloté par les données JS, **le JavaScript le recrée au chargement** → ta modif « revient ».

C'est exactement ce qui se passe avec le **carrousel de logos**, certains **spacers**, et le **badge Framer** : ils sont définis dans les `.mjs`, pas (seulement) dans le HTML.

### Les 3 méthodes de modification, par fiabilité

| Méthode | Tient au rechargement ? | Quand l'utiliser |
|---|---|---|
| **CSS** (`display:none`, couleurs, filtres…) | ✅ Toujours (le CSS s'applique APRÈS le JS) | Masquer un élément, changer une couleur/taille, le plus sûr |
| **Éditer les données JS** (`scripts/vendor/*.mjs`) | ✅ Oui | Contenu dynamique : logos du carrousel, etc. |
| **Éditer le HTML statique** | ⚠️ Seulement si l'élément n'est PAS piloté par le JS | Texte statique simple |

➡️ **En cas de doute : masque en CSS.** C'est imparable.

### Blocs CSS dédiés (déjà en place sur chaque page)
Deux `<style>` ont été ajoutés dans le `<head>` de chaque page pour faciliter les retouches :
- `<style data-user-hidden>` → règles `display:none` pour masquer des éléments.
- `<style data-logos-white>` → filtre qui rend les logos du carrousel blancs.

---

## 🍳 Recettes : comment faire X

### ➤ Masquer / « supprimer » un élément (méthode fiable)
1. Repère sa **classe** (`framer-xxxxx`) ou son `data-framer-name` via l'inspecteur (F12).
2. Ajoute la règle dans le bloc `<style data-user-hidden>` du/des fichier(s) `.html` :
```css
.framer-XXXXX{display:none!important}
```
3. **Ctrl + Maj + R**.

*Exemple déjà appliqué :* `.framer-6w2c0q-container{display:none!important}` masque un spacer « Tablet L ».

### ➤ Changer les logos du carrousel
Les logos sont des **données dans les modules JS**, pas dans le HTML. Pour chaque logo, on trouve dans `scripts/vendor/*.mjs` un bloc :
```js
pixelHeight: 469,
pixelWidth: 1280,
src: `../../assets/images/logo-ubs.png`,
```
1. Dépose le nouveau fichier dans `assets/images/`.
2. Remplace `src`, `pixelWidth`, `pixelHeight` par ceux du nouveau logo, **dans tous les `.mjs` concernés** (le carrousel est défini dans plusieurs chunks : recherche le nom de fichier de l'ancien logo dans `scripts/vendor/`).
3. Mets aussi à jour les `<img src=...>` correspondants dans les `.html` (pour l'affichage avant hydratation).

> Logos actuels (6) : `infomaniak-logo.png`, `logo-ubs.png`, `SWISSCOM.png`, `Grant-Thornton-Logo.png`, `logo-arche.svg`, `logo_hilti.png`.
> Ils sont rendus **en blanc** via le filtre `<style data-logos-white>` (`filter:brightness(0) invert(1)`), adapté au fond sombre de la bande.

### ➤ Modifier un texte
1. Cherche le texte dans le `.html` de la page (ex : `index.html`).
2. S'il s'agit de texte statique, l'édition HTML suffit.
3. S'il « revient », c'est qu'il est dans un `.mjs` → édite-le là aussi.
> ⚠️ Garde les marqueurs `<!--$-->` / `<!--/$-->` autour des textes : ils servent à React.

### ➤ Changer une couleur / une police
- Couleurs globales : variables `--token-...` dans les `<style>` des pages et `assets/css/talentorz.css`.
- Polices : `assets/css/fonts.css` + fichiers dans `assets/fonts/`.

### ➤ Ajouter / dupliquer une page
1. Copie un fichier existant de `subpages/` proche de ton besoin.
2. Renomme-le, adapte le `<title>`, les `<meta>`, le `<link rel="canonical">` et le contenu.
3. Ajoute le lien vers cette page dans le menu/navigation (présent dans chaque `.html`).

---

## 🛠 Personnalisations déjà appliquées

Par rapport à l'export Framer d'origine (voir [sauvegarde](#-sauvegarde--restauration)), ce projet a été modifié :

- **Sections supprimées** partout : « L'équipe Talentor » (Team) et la **FAQ**.
- **Divs supprimées** partout : `framer-1b79edc` (menu footer), `framer-1ckicln` (conteneur CTA), `framer-1xsdihl` (Inner Spacer), section CTA vide (`framer-1m0ji9e`).
- **CSS orphelin** correspondant nettoyé.
- **Carrousel de logos** : remplacé par 6 logos (Infomaniak, UBS, Swisscom, Grant Thornton, ArchE, Hilti), affichés **en blanc** sur la bande sombre.
- **Spacer « Tablet L »** masqué en CSS.
- **Marque Framer retirée** : badge « Made in Framer », `<meta name="generator">`, commentaires « Made in Framer », crédit template `fluxtemplates.com`.

> Restent (non visibles) : appels d'analytics vers `events.framer.com` dans les `.mjs` non retirés car édition de JS minifié risquée.

---

## 💾 Sauvegarde & restauration

- **`../framer-agence-int - Copie/`** = copie **intacte** de l'export Framer d'origine.
- Pour comparer un fichier à l'original ou restaurer un élément, réfère-toi à cette copie.
- **Recommandé :** versionner ce dossier avec Git pour suivre les modifications.
  ```bash
  git init && git add . && git commit -m "Site Talentorz - état initial"
  ```

---

## 🌐 Déploiement

C'est un site **100 % statique** → il s'héberge n'importe où sans build :

- **Infomaniak** (hébergement web / Site Creator) : uploader tout le contenu de `framer-agence-int/` à la racine web (FTP/SFTP ou gestionnaire de fichiers).
- **Netlify / Vercel / Cloudflare Pages** : glisser-déposer le dossier, ou connecter le dépôt Git (pas de commande de build, dossier de publication = la racine).
- **Serveur classique (Apache/Nginx)** : copier les fichiers dans le `docroot`.

À vérifier après déploiement :
- Le type MIME des `.svg` (`image/svg+xml`) et `.mjs` (`application/javascript`).
- Que `index.html` est bien la page d'accueil.

---

## ❓ Pièges fréquents (FAQ)

**« Je modifie le HTML mais rien ne change / ça revient. »**
→ Soit le **cache** (fais **Ctrl + Maj + R**), soit l'élément est **recréé par le JS** → masque-le en CSS ou édite le `.mjs`. Voir [Comment ça marche](#-comment-ça-marche-le-point-le-plus-important).

**« `npm run dev` lance le Framer Export ?! »**
→ Le `package.json` du dossier **parent** appartient à l'**outil FramerExport** (le scraper), pas à ce site. Ce site n'a pas de `npm run dev` : utilise `node serve.cjs`.
→ ⚠️ **Ne relance pas l'export** : il **réécraserait tout ce dossier** avec une copie fraîche depuis Framer et **effacerait toutes les modifications**.

**« Les logos ne changent pas. »**
→ Ils sont pilotés par les `.mjs` (+ cache). Édite les données JS (voir recette) puis hard-refresh.

**« Un logo couleur fait une tache blanche / est rogné. »**
→ La bande est sur fond sombre + filtre blanc. Fournis un logo en **PNG/SVG à fond transparent** ; les JPEG à fond blanc deviennent une tache.

---

## 🚫 À ne JAMAIS toucher

- Les **classes `framer-*`** dans le HTML/CSS → elles font fonctionner la mise en page et l'app. Les supprimer casse le site.
- Les **marqueurs de commentaires `<!--$-->` et `<!--/$-->`** → utilisés par l'hydratation React.
- Les **modules `scripts/vendor/*.mjs`** au hasard → n'édite que des **valeurs de données** ciblées (ex : `src` d'un logo), jamais la logique.
- Le dossier **`../framer-agence-int - Copie/`** → c'est ta sauvegarde.

---

*Dernière mise à jour : juin 2026.*
