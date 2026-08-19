# Summit AI Notes

> **Privacy-First Meeting Assistant for Professionals**
> Record, transcribe, and summarize meetings with 100% local AI processing. Built for consultants who can't use cloud-based tools.

[![Download on Mac App Store](https://img.shields.io/badge/Download-Mac%20App%20Store-0D96F6?style=for-the-badge&logo=apple)](https://apps.apple.com/app/summit-ai-notes/id6754717420?l=en-GB&mt=12)

---

## Why Summit AI Notes?

**For Independent Consultants & Professionals Who Value Confidentiality**

Most meeting assistants upload your conversations to the cloud. Summit AI Notes is different - **everything happens on your Mac**. Perfect for:

- 🔒 **Confidential client work** - NDA-protected conversations stay local
- 💼 **Management consultants** - Professional deliverables without cloud exposure
- ⚖️ **Legal & Healthcare** - HIPAA and confidentiality compliance
- 🏢 **Enterprise professionals** - No data leaving your device

---

## Key Features

### 🛡️ **100% Local Processing**

Zero cloud dependency. All transcription and AI processing happens on-device for complete privacy.

### 📝 **Actionable Meeting Summaries**

Auto-generated summaries suitable for client deliverables, with action items and key insights formatted professionally.

### 🔍 **Powerful Search**

Full-text search through transcripts, summaries, and tags. Find any conversation instantly with Similar Documents feature.

### 🏔️ **Platform Independent**

No meeting bots required. Works with Zoom, Slack, Teams, Google Meet, and any audio source on your Mac.

### ⚡ **Native Mac Experience**

Built specifically for macOS professionals. Seamlessly integrated with your existing workflow.

---

## The Problem We Solve

Independent consultants lose **10+ hours per week** on poor meeting documentation:

- Poor meeting notes leading to ineffective client reports
- Manual transcription of conversations for deliverables
- Scattered information across handwritten notes and recordings
- Non-billable administrative tasks eating into productive time

**Summit AI Notes helps you reclaim 3-4 billable hours per week** through automated transcription, intelligent organization, and professional client deliverables.

---

## Quick Links

- 🌐 **Website**: [https://summitnotes.app](https://summitnotes.app)
- 📖 **Documentation**: [https://summitnotes.app/docs](https://summitnotes.app/docs)
- 💬 **Support**: [https://summitnotes.app/support](https://summitnotes.app/support)
- 📧 **Contact**: support@summitnotes.app

---

## About This Repository

This is the landing site for Summit AI Notes, built with **Astro** for optimal performance and simplicity.

### Tech Stack

- **Astro** - Static site generator with islands architecture
- **React** - For interactive components
- **Tailwind CSS v4** - Modern styling
- **MDX** - Documentation with Content Collections
- **shadcn/ui** - Component library

### Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

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

The site is fully static and can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

---

## License

© 2024 Summit AI Notes. All rights reserved.
