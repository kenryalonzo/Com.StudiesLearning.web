# Studies Learning 🚀

Studies Learning est une plateforme éducative premium conçue pour offrir une expérience d'apprentissage sans bruit, fluide, adaptative et résolument axée sur le savoir pur. Cette application garantit une expérience utilisateur immersive et dynamique en éliminant les distractions classiques avec une esthétique poussée.

## 🎯 Architecture Technique

Le projet a été pensé pour offrir d'excellentes performances tout en maintenant une qualité visuelle irréprochable.

- **Framework** : [Next.js 16 (App Router)](https://nextjs.org/)
- **Style Visuel** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icons** : [Lucide React](https://lucide.dev/) (ainsi que des composants vectoriels natifs en SVG standardisés)
- **Typographie** : Nativement optimisée avec Next Fonts (Inter & Geist).

## ✨ Fonctionnalités Clés

- **Hero Section Immersive** : Interface visuellement riche avec effets de survol synchronisés (Backdrop Blur, ombres adoucies).
- **Mode Switching** : Mise en page compressée pour permettre un basculement de charge cognitive géré par des guides conversationnels (AI).
- **Carousel Automatisé (`SectionReview`)** : Affichage d'avis utilisateurs fluides grâce un fonctionnement interactif (`useState`, `useEffect` Hook Logic) générant une rotation active en évitant les surcharges CSS encombrantes.
- **Grille de Navigation (Footer/CTA)** : Agencement strict de Call To Action (CTA) et paramétrage intelligent des paddings pour renforcer le côté _Premium_.
- **SEO & Open-Graph (Optimisé)** : Balises Open-Graph pré-générées pour optimiser le partage natif sur Facebook, WhatsApp et Twitter via un cheminement d'URI universel.

## ⚙️ Installation & Démarrage

### Pré-requis

Avoir `Node.js` et `npm` préinstallés sur votre machine (L'idéal étant Node 20+).

```bash
# 1. Cloner ou naviguer dans le dossier du projet
cd /votre-chemin/studies

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement local
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser la plateforme.

## 🚀 Mise en Production

L'application est 100% optimisée pour la phase de déploiement (0 alertes avec le linter strict). Le moyen le plus efficace de déployer :

1. Uploadez votre code sur **GitHub**, **GitLab** ou **BitBucket**.
2. Connectez le dépôt à une plateforme comme **Vercel** ou **Netlify**.
3. **Important** : N'oubliez pas d'assigner l'URL canonique finale configurée dans les variables d'environnement pour assurer la bonne fonctionnalité du cache Open-Graph :
   - Clé : `NEXT_PUBLIC_SITE_URL`
   - Valeur : `https://votresitedefinitif.com`

## 🪪 Licence & Création

Interface architecturée pour l'excellence visuelle et l'expérience utilisateur optimisée. Aucun droit de conception réservé hors des standards Open Source habituels des dépendances appelées.
