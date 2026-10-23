# Documentation refresh, 24 October 2026

## Baseline and scope

Reviewed the eight existing documentation pages against `SummitNotes/summit-app` at commit `79883c6d` (version 1.13 plus current main-branch improvements). The website baseline is `09a8490`. This refresh covers user documentation, its workflow index, navigation, and documentation images. Historical release notes remain historical records.

The source audit uses UI labels and implemented behavior, rather than treating product vision documents or marketing copy as feature specifications. Settings names reflect the current source: Recording, Speech Models, AI Models, Processing Flow, Summary Templates, and Labs. The first-meeting page maps older names to these labels.

## Main changes

- Rewrite AI configuration, local models, remote providers, local servers, chat, templates, and calendar guides.
- Add a first-meeting walkthrough and guides for recording/import, transcription, screen capture, Voice Keyboard, splitting, organization/recovery, search, export, iCloud/iPhone, MCP, and troubleshooting.
- Replace the duplicated AI-only guides index with complete workflows.
- Remove unsupported fixed prices, completion-time estimates, quality rankings, and absolute privacy guarantees.
- Retain existing documentation URLs. New category groups change navigation without changing paths.
- Replace documentation screenshots with captures from the current running app; retain images that other site pages still use.

## Evidence map

Paths below are relative to the app repository.

| Area | Principal sources |
| --- | --- |
| Settings labels and requirements | `noted/UI/Settings/SettingsView.swift`, `noted.xcodeproj/project.pbxproj` |
| Recording and screen capture | `noted/UI/Settings/AudioRecordingSettingsView.swift`, `noted/Core/Services/RecordingService.swift`, `noted/Core/Services/RecordingActionsService.swift`, `noted/Features/Recording/`, `SummitCore/Sources/SummitCore/Domain/Models/AudioRecordingMode.swift` |
| Transcription and processing | `noted/UI/Settings/TranscriptionSettingsView.swift`, `noted/UI/Settings/ProcessingSettingsView.swift`, `noted/Features/Transcription/` |
| Calendar and meeting preparation | `noted/UI/Settings/CalendarSettingsView.swift`, `noted/Core/Services/Calendar/`, `noted/Core/Services/MeetingPrep/MeetingPrepService.swift` |
| Voice Keyboard | `noted/UI/Settings/VoiceKeyboardSettingsView.swift`, `noted/Features/VoiceKeyboard/` |
| Splitting | `noted/UI/Views/SplitRecordingSheet.swift`, `noted/Core/Services/DocumentSplit/` |
| AI models and templates | `noted/UI/Settings/LLMProviderSettingsView.swift`, `noted/UI/Settings/LocalModelManagementView.swift`, `noted/UI/Settings/TemplatesSettingsView.swift`, `noted/Features/LLM/`, `noted/Core/Models/LocalModel.swift` |
| Chat and search | `noted/Features/Chat/`, `noted/Features/Search/`, `noted/UI/Search/` |
| Organization, recovery, export | `noted/Core/Managers/DocumentManager.swift`, `noted/UI/Settings/ExportSettingsView.swift`, `noted/Core/Services/` and related UI components |
| Sync and companion | `noted/UI/Settings/iCloudSyncSettingsView.swift`, `SummitCore/Sources/SummitCore/Sync/`, `SummitCompanion/` |
| MCP and maintenance | `noted/UI/Settings/MCPServerSettingsView.swift`, `noted/UI/Settings/RepairAndDebugSettingsView.swift`, `noted/Core/Services/MCPServerManager.swift`, `noted/Core/Services/MCPOAuth.swift` |

## Screenshot provenance

Captures are taken from a Debug build of the app at the baseline above using `--uitesting`, which redirects its database, file storage, and preferences to disposable test storage. Example titles and notes are fictional. No production library is used for the published images. Sync and MCP remain off in the settings captures; no credentials, recovery phrase, QR code, or bearer token is displayed. Image conversion to WebP changes encoding only.

Sixteen WebP images (about 820 KB total) are stored in `public/docs/screenshots/`:

- Recording, Speech Models, Voice Keyboard, and Calendar settings.
- Remote AI settings, local model catalog, Processing Flow, and Summary Templates.
- Export, iCloud Sync (off), MCP Server (off), and Labs settings.
- A fictional meeting note, a real search result for that note, scoped Chat with an unsent draft question, and the Live Query editor before saving.

The note screenshot contains manually entered example insights and an action item; it is not evidence of generated AI output. Chat shows its scope and a draft question, not a fabricated answer. Calendar is unconnected, and the image caption identifies that state. Screenshots illustrate visible controls; detailed workflow behavior is verified against source.

## Validation

- Built the current app with `./script/build_and_run.sh build` (includes `-skipPackagePluginValidation`) and launched the built app with isolated test storage.
- `npm run build`: passed; 144 static pages generated.
- Checked the 23 documentation/workflow pages, 2,201 internal links, image paths and alt text, and cross-site links into documentation; no missing paths or anchors.
- Checked all 20 guides at 390 px width: no page overflow or broken images. The search-prefix reference has a focusable horizontal scroll region.
- Reviewed desktop layout at 1440 px and verified collapsed/expanded mobile navigation. The desktop sidebar scrolls within the viewport.
- All 20 guides have updated metadata, all 16 new images are referenced, and guide prose contains no emoji.
- Independent source reviews corrected recording controls, calendar eligibility/preparation, local-AI architecture support, iPhone import/audio lifecycle, manual export preferences, archived search, MCP credential lifetime, and model-folder behavior.

These checks verify documentation rendering and source consistency. They do not replace a full device, cloud-provider, sync, or recording regression test suite.
