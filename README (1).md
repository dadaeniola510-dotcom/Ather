# Aether — premium smart-home marketing site

A responsive Next.js App Router project for Aether, a fictional premium smart-home integrator. It includes a procedural React Three Fiber architectural hero, scroll-aware camera move, room explorer, animated scene simulator with a Movie Night consultation CTA, project showcase, package cards, FAQ accordion, and consultation form UI. Mobile and unsupported-WebGL clients use a lightweight animated CSS illustration instead of Three.js rendering; desktop rendering pauses when the canvas is off-screen or the tab is hidden.

## Run locally

- Node.js 18.17+ and npm
- `npm install`
- `npm run dev` and visit `http://localhost:3000`
- `npm run build` to verify a production build; `npm start` to serve it

## Deploy to Netlify

1. Push this folder to a Git repository and choose **Add new site → Import an existing project** in Netlify; authorize your Git provider and select the repository. Or install/login with `npx netlify-cli login`, then run `npx netlify deploy --build` to create a draft deploy. Use `npx netlify deploy --prod --build` to publish to the production URL. Netlify prints the live URL after deployment.
2. Netlify detects `netlify.toml`; the `@netlify/plugin-nextjs` adapter handles App Router rendering and assets.
3. No environment variables are required for the sample UI. Connect a server action/API route or form service before collecting real inquiries. Configure its secret as a Netlify environment variable, never in client code.
4. Set the production domain and update `metadataBase` in `app/layout.tsx`.

## Replace sample content before launch

Search the project for `placeholder`, `aether.ng`, `wa.me`, and `images.unsplash.com`.

- **Business details:** replace email, WhatsApp number, service area, office location, social URLs, and brand/domain references in `app/page.tsx` and `app/layout.tsx`.
- **Images:** replace illustrative Unsplash URLs in the project data and `.room-image` CSS with licensed, approved project photography. Add alt text if converting backgrounds to image elements. For local assets, store in `public/` and use `/...` paths.
- **Project claims and testimonials:** all project outcomes, 120+ homes, 24/7 support, and testimonials are sample marketing content; verify and obtain client approval before publishing.
- **Packages/pricing:** update package inclusions and quote language with current commercial terms.
- **Contact form:** current form validates required name/email in-browser and demonstrates sending/success states only. It does not submit or store the enquiry. Wire `submit` in `app/page.tsx` to a secured API route, CRM, or compliant form provider; add server-side validation, spam protection, consent wording, and privacy policy.
- **Newsletter:** current footer form is a UI demonstration only. Connect a provider and replace its temporary alert handler.
- **3D:** `components/HomeScene.tsx` uses small procedural geometry and no external model downloads. The scene is lazy-loaded, DPR capped, and responds to scroll with a gentle camera move. On mobile, the procedural CSS illustration replaces WebGL entirely. Desktop uses a small 512px shadow map, no post-processing, and pauses when off-screen or the browser tab is hidden.

## Structure

- `app/page.tsx` — full single-page marketing experience and interactive client UI
- `app/globals.css` — design tokens, responsive layout, components and reduced-motion rules
- `components/HomeScene.tsx` — procedural React Three Fiber scene
- `app/layout.tsx` — metadata and root layout
- `netlify.toml` — Netlify build adapter setup
