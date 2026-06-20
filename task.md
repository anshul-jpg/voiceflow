# Voxora AI Master Project Checklist

This is the unified tracking checklist for Voxora AI's production readiness. It outlines every audit task, its status, verification state, and development workflow adjustments.

---

## 🔒 Phase 1: Security Hardening (Completed & AI Verified)

| Task / Feature | Status | Verification State | Human Verification Step |
| :--- | :--- | :--- | :--- |
| **1. JWT Cookie Security** | `[x] Implemented` | **AI Verified** | Log in, check cookies in browser DevTools. Verify `token` does **not** have the `Secure` flag on localhost, but has `HttpOnly` and `SameSite=Lax`. |
| **2. Register JSON Parser Safety** | `[x] Implemented` | **AI Verified** | Send an invalid JSON body to `/api/auth/register` and confirm it returns `400 Bad Request` instead of crashing. |
| **3. Edge Route Protection (Proxy)** | `[x] Implemented` | **AI Verified** | Navigate to `/dashboards` in Incognito. Verify you are immediately redirected to `/login`. |
| **4. Contact API Whitelisting** | `[x] Implemented` | **AI Verified** | Send contact POST with extra fields (e.g. `{ "admin": true }`). Verify contact is saved but extra fields are ignored in DB. |
| **5. Tracking ID Complexity** | `[x] Implemented` | **AI Verified** | Book an appointment via webhook. Confirm the generated tracking code is 8 characters long (e.g. `APX-A7B8C9D0`). |
| **6. Webhook Auth Header** | `[x] Implemented` | **AI Verified** | Set `VAPI_WEBHOOK_SECRET` in `.env` and verify webhook POST returns `401 Unauthorized` unless `x-vapi-secret` header matches. |
| **7. HTTP Security Headers** | `[x] Implemented` | **AI Verified** | Run `curl -I http://localhost:3000` and verify security headers (`X-Frame-Options: DENY`, etc.) are returned in headers. |
| **8. Environment Configuration** | `[x] Implemented` | **AI Verified** | Confirm `.env.example` exists and local `.env` has a strong 64-character JWT secret key. |
| **9. Mongoose Schema Validation** | `[x] Implemented` | **AI Verified** | Try inserting direct MongoDB user/contact entries with missing name or email. Verify Mongoose returns validation errors. |
| **10. Zod Input Validation** | `[x] Implemented` | **AI Verified** | Submit registration request with a password shorter than 8 characters. Confirm it fails with `400` validation error message. |
| **11. IP Rate Limiting** | `[x] Implemented` | **AI Verified** | Rapidly submit contact form. Verify that after the 5th attempt in 1 minute, you receive `429 Too Many Requests`. |

---

## ⚙️ Phase 2: Infrastructure (In-Progress)

- [x] **Set up MongoDB Atlas** — Replace localhost URI with hosted cloud database instance. **[AI VERIFIED]**
- [x] **Create `.env.example`** — Documented all required environment variables. **[AI VERIFIED]**
- [x] **Fix CSV Export formula injection** — Sanitized export fields (escaped spreadsheet triggers `=`, `+`, `-`, `@`) and implemented RFC 4180 standard escaping. **[AI VERIFIED]**
- [x] **Add error monitoring** — Integrate Sentry, LogRocket, or similar in Next.js. **[AI VERIFIED]**
- [x] **Add email/Slack alerts for new leads** — Set up NodeMailer or webhook notifications. **[AI VERIFIED]**
- [x] **Add pagination to dashboard contacts** — Implement pagination limits in `/api/dashboard/contacts`. **[AI VERIFIED]**
- [x] **Add proper error handling/retry** — Add user-facing error states on dashboard fetch failure. **[AI VERIFIED]**
- [ ] **Deploy to Vercel/production** — Deploy with production environment variables set. **[TODO]**
- [x] **Slack task-start local script** — Local command `npm run task-start` to broadcast task starts. **[AI VERIFIED]**
- [x] **Slack task-done local script** — Local command `npm run task-done` to broadcast task completions. **[AI VERIFIED]**

---

## 🎨 Phase 3: Polish & Trust (Todo)

- [x] **Remove duplicate dependencies** — Removed `framer-motion` package from `package.json` in favor of newer `motion`. **[AI VERIFIED]**
- [x] **Clean up devDependencies** — Relocated `@types/canvas-confetti` to `devDependencies`. **[AI VERIFIED]**
- [x] **TypeScript typing for Mongoose cache** — Declared a typed `global.mongoose` cache interface to remove unsafe `any` casts. **[AI VERIFIED]**
- [x] **Write Terms of Service** — Draft legal pages covering call recording and consent rules. **[AI VERIFIED]**
- [x] **Write Privacy Policy** — Outline retention and CCPA/GDPR compliance details. **[AI VERIFIED]**
- [x] **Fix dead footer links** — Clean up links in `src/lib/constants.ts` (About, Blog, Careers). **[AI VERIFIED]**
- [x] **Add OG/Twitter tags** — Add metadata cards to landing pages. **[AI VERIFIED]**
- [x] **Format phone number** — Format phone constants with appropriate country codes. **[AI VERIFIED]**
- [x] **Add password reset flow** — Implement password recovery actions. **[AI VERIFIED]**
- [x] **Configurable domain in sitemap** — Pull domain for robots/sitemap from `NEXT_PUBLIC_APP_URL` env variable. **[AI VERIFIED]**

---

## 🔄 Required Workflow Adjustments for Developers

To maintain security baselines as development continues:

1. **Handling Rate Limiting in Dev**:
   * Timestamps are tracked per IP. If you trigger `429 Too Many Requests` locally, restart the dev server (`Ctrl+C` $\rightarrow$ `npm run dev`) to clear the in-memory cache.
2. **Developing New Write/POST APIs**:
   * Define input models in `src/lib/validation.ts` using `zod`.
   * Enforce parsing try/catch blocks on `req.json()` in all handlers.
   * Validate request bodies using Zod before connecting to MongoDB or executing queries.
3. **Defining Database Entities (Mongoose)**:
   * Keep Mongoose schemas strict. Always define fields with constraints like `required: true`, `trim: true`, `lowercase: true`, and `match` regex validation for emails.
4. **Deploying/Interfacing Edge Pages**:
   * Dashboard pages and dashboard API endpoints must reside under `/dashboards/*` and `/api/dashboard/*` to automatically benefit from Proxy intercept filters.
5. **Managing Environment Variables**:
   * Always write any new configuration dependencies to `.env.example` first so other developers and CI/CD environments are aware of the changes.
