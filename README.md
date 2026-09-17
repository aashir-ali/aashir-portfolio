# Aashir Ali Abbas — Portfolio

A personal portfolio site (Automation Engineer & Full-Stack Developer), built with
**React + Vite + TypeScript + Tailwind** using the Lightswind UI components.

Live sections: Hero, About, Services, Projects, Career timeline, Education, Skills,
Results, and a Contact form.

---

## Deploy on GitHub Pages (recommended — automatic, free)

You don't need Node or any build tools on your machine for this. GitHub builds and
publishes the site for you.

1. **Create a repository** on GitHub, e.g. `portfolio`. (Any name works. If you name it
   exactly `yourusername.github.io` the site lives at the root domain instead of `/portfolio/`.)
2. **Upload this project** to that repo. Two easy ways:
   - GitHub website: open the repo → *Add file* → *Upload files* → drag in everything
     from this folder (keep the folder structure). Commit to the `main` branch.
   - Or with git:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo>.git
     git push -u origin main
     ```
3. **Turn on Pages via Actions:** repo → **Settings** → **Pages** → under
   *Build and deployment* set **Source = GitHub Actions**.
4. Done. Every push to `main` triggers the included workflow
   (`.github/workflows/deploy.yml`), which builds the site and publishes it.
   Watch progress under the repo's **Actions** tab. When it finishes, your URL is:
   `https://<your-username>.github.io/<repo>/`

> The site uses relative asset paths (`base: "./"` in `vite.config.ts`), so it works at
> `/<repo>/` **or** at a root domain without any changes.

### Custom domain (optional)
Settings → Pages → *Custom domain*. Add your domain and a `CNAME` DNS record. No code change needed.

---

## Alternative: build it yourself and deploy the `dist` folder

If you'd rather build locally (needs Node 20+):

```bash
npm install
npm run build      # outputs the static site to /dist
npm run preview    # optional: preview the production build locally
```

Then publish `/dist` however you like (drag it into any static host, or push it to a
`gh-pages` branch).

## Run locally while editing

```bash
npm install
npm run dev        # http://localhost:8080
```

---

## Where to edit your content

All text lives in the section components under `src/components/`:

| What | File |
|------|------|
| Name, tagline, intro, social links, résumé button | `HeroSection/HeroSection.tsx` |
| Bio + the 4 stat tiles | `AboutSection/AboutSection.tsx` |
| "What I Do" services | `ServicesSection/ServicesSection.tsx` |
| Projects (title, blurb, link, image) | `ProjectsSection/ProjectsSection.tsx` |
| Career timeline | `CareerSection/CareerTimeline.tsx` |
| Degrees | `EducationSection/EducationSection.tsx` |
| Skill bars + traits | `EducationSection/SkillCategory.tsx` |
| Tech marquee | `TechStackSection/TechStackSection.tsx` |
| Results cards | `TestimonialsSection/TestimonialsSection.tsx` |
| Contact details + form | `ContactSection/ContactSection.tsx` |
| Header logo/name | `Header/Header.tsx` |
| Footer | `Footer/Footer.tsx` |

- **Your photo:** `src/assets/aashir.jpg` (replace the file, keep the name).
- **Your résumé (download button):** `public/Aashir_Ali_Abbas_Resume.pdf`.
  A second copy, `public/Aashir_Ali_Abbas_Full_Stack_Resume.pdf`, is also included.
- **Contact form:** it opens the visitor's email app pre-filled to
  `engr.aashirabbas@gmail.com` (no server needed). To collect submissions directly
  instead, create a free form endpoint (e.g. Formspree) and point the form at it.

## A note on your job history
Your two résumés list slightly different job histories. The **career timeline uses the
Automation Engineer résumé** (Adwater, Spark Digital, Canada Prime Marketing, The Sots,
GlowLogix, Ecarobar), since it matches how the site positions you. If you'd rather show
the Full-Stack résumé's history (DevMechanix, LeadConcept, …), edit
`CareerSection/CareerTimeline.tsx`.
