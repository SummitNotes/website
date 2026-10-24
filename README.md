# Summit AI Notes website

The public website and documentation for [Summit AI Notes](https://summitnotes.app), built with Astro, MDX, React, and Tailwind CSS.

## Development

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The development server starts at `http://localhost:4321`. `npm run build` generates the static site in `dist/`.

## Documentation

- User documentation: `src/content/docs/` (MDX content collection).
- Documentation landing page: `src/pages/docs/index.astro`.
- Workflow index: `src/pages/guides.astro`.
- Sidebar groups and ordering: `src/lib/docs.ts`.
- Documentation screenshots: `public/docs/screenshots/`.
- Release notes: `src/pages/releases/`; follow the existing release metadata format.

Each guide needs a title, description, category, order, and `lastUpdated` date. Use actual app labels and explain the steps that lead to a result. Keep existing URLs when rewriting a guide. Link related tasks instead of repeating full setup instructions.

Verify behavior against the app source and running UI. Distinguish on-device speech recognition from AI cleanup, summaries, and chat, which may use a remote provider. Describe iCloud, exports, and MCP as separate data flows. Avoid unverified performance estimates, provider pricing, compliance guarantees, and absolute privacy claims.

Capture screenshots from the running app using a disposable library with fictional content. Keep API keys, recovery phrases, QR codes, tokens, personal calendars, and real meetings out of images. See [the documentation audit](docs/documentation-audit.md) for the current source baseline and capture provenance.

### Analytics and Consent

`src/components/posthog.astro` measures the site in one of three states, decided
by the `summit-cookie-consent` key the banner writes:

| State | What is written to the device | What is measured |
| --- | --- | --- |
| pending (no answer yet) | nothing | page views, download clicks |
| granted | PostHog's `ph_*` cookie and local storage | the above, plus one identity across pages and visits, plus session replay |
| denied | nothing | nothing |

The pending state is measured on the reading that analytics storing nothing on
the device and identifying nobody sits outside the ePrivacy consent requirement.
That is a legal position, not only a technical one.

Read the pending cohort as totals, not journeys: with no stored identifier and a
static site, every page load is a fresh anonymous id, so unique visitors and
sessions inflate towards the page-view count. `consent_state` is registered on
every event, so any metric can be read over everyone or over the consenting
cohort alone. Enabling "cookieless server hash mode" in the PostHog project, and
`cookieless_mode: 'always'` alongside it, would restore cross-page continuity
without storing anything — the two have to be switched on together, since
cookieless events are dropped while the project setting is off.

Every `apps.apple.com` link carries `data-source` naming its placement (`nav`,
`hero`, `pricing-monthly`, `footer`, …) and a `download-button` class. The first
becomes the `source` property on `download_clicked`; the second is what the
"Clicked Download" action in PostHog matches on. Keep both when adding a link,
or the click lands in the data as `unattributed`.

### Campaign Attribution

Paid ads tag the landing URL with `utm_*`, which PostHog reads. Those parameters
do not survive the jump to the App Store — Apple reads only its own `pt`/`ct`
pair, carried on the store link itself.

`src/components/AppStoreCampaign.astro` bridges the two: it remembers the first
ad click (session storage, or local storage for 90 days once analytics consent is
given) and stamps the matching `ct` onto every `apps.apple.com` link on the page.
Installs then appear in App Store Connect → App Analytics → Acquisition →
Campaigns.

To add a campaign, create it in App Store Connect first, then map its `utm_source`
to the exact campaign token in `CAMPAIGN_BY_SOURCE` in `src/lib/campaign.ts`.
Sources with no entry keep a clean store link and stay unattributed.

### Deployment

The site is static. Run `npm run build` before opening a pull request. Review changed documentation at desktop and narrow widths, and check internal links, anchors, and screenshot paths in the generated output.

## License

© Summit AI Notes. All rights reserved.
