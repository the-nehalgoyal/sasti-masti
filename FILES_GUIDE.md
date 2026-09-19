# 📋 SIDEQUEST: COMPLETE FILES GUIDE

Everything you need is here. This is your map.

---

## 🎯 START HERE

**New to the project?** Read in this order:

1. **[START_HERE.md](../START_HERE.md)** ← Read this FIRST (24-hour timeline)
2. **[QUICKSTART.md](./QUICKSTART.md)** ← 5-minute version
3. **[SETUP.md](./SETUP.md)** ← Detailed step-by-step

---

## 💻 CODE (Ready to Run)

| File | Purpose |
|------|---------|
| `pages/index.js` | Main React app (mood selector + quest display) |
| `styles/Home.module.css` | All styling (responsive design) |
| `lambda/index.js` | AWS Lambda function (quest matching logic) |
| `seed-dynamodb.js` | Script to load 30 quests into DynamoDB |
| `public/quests.json` | Local fallback quest data |
| `package.json` | Dependencies (npm install) |
| `next.config.js` | Next.js configuration |
| `.gitignore` | Git ignore rules |

---

## 📖 DOCUMENTATION (For Submission)

### Project Proposal
- **File**: `../SIDEQUEST_PROPOSAL.md`
- **Use**: Submit as PDF
- **Length**: ~2 pages
- **Contains**: Problem, solution, objectives, tech stack

### System Architecture
- **File**: `../ARCHITECTURE.txt`
- **Use**: Include in project report
- **Contains**: Detailed diagram + data flow

### Project Report (5 pages)
- **File**: `../PROJECT_REPORT_TEMPLATE.md`
- **Use**: Edit & submit as PDF
- **Contains**: Complete technical report

### GitHub README
- **File**: `./README.md` (this repo)
- **Use**: Publish on GitHub
- **Contains**: Project overview + setup instructions

### Presentation Outline
- **File**: `../PRESENTATION_OUTLINE.md`
- **Use**: Create slide deck from this
- **Contains**: Script + talking points + demo flow

---

## 🚀 SETUP GUIDES (Pick One)

### Option 1: Super Quick (5 min)
**→ Read: [QUICKSTART.md](./QUICKSTART.md)**
- Assumes you know what you're doing
- Just the essentials

### Option 2: Detailed (30 min)
**→ Read: [SETUP.md](./SETUP.md)**
- Step-by-step instructions
- Screenshots for each step
- Troubleshooting included

### Option 3: Complete Timeline
**→ Read: [START_HERE.md](../START_HERE.md)**
- Hour-by-hour breakdown
- What to do when
- What to have by each hour

---

## 🎬 TEMPLATES FOR SUBMISSION

All templates are pre-written. Just fill in blanks.

| Deliverable | File | Format | Status |
|---|---|---|---|
| 1. Proposal | `SIDEQUEST_PROPOSAL.md` | PDF | Copy + Edit |
| 2. Architecture | `ARCHITECTURE.txt` | Diagram | Include in report |
| 3. Implementation | `pages/index.js` + `lambda/index.js` | Code | Copy to GitHub |
| 4. Cloud Deployment | `SETUP.md` | Guide | Follow steps |
| 5. Source Code | `README.md` | GitHub | Use this file |
| 6. Report | `PROJECT_REPORT_TEMPLATE.md` | PDF | Copy + Edit |
| 7. Presentation | `PRESENTATION_OUTLINE.md` | Slides | Create from script |

---

## 📁 PROJECT STRUCTURE

```
sidequest/
├── pages/
│   └── index.js              ← MAIN UI CODE
├── styles/
│   └── Home.module.css       ← ALL STYLING
├── public/
│   └── quests.json           ← 30 QUESTS DATA
├── lambda/
│   └── index.js              ← LAMBDA CODE (copy to AWS)
├── README.md                 ← GITHUB README
├── SETUP.md                  ← DETAILED SETUP
├── QUICKSTART.md             ← 5-MIN GUIDE
├── FILES_GUIDE.md            ← THIS FILE
├── seed-dynamodb.js          ← DATA SEEDING SCRIPT
├── package.json              ← DEPENDENCIES
└── .gitignore                ← GIT IGNORE

../
├── START_HERE.md             ← 24-HOUR TIMELINE
├── SIDEQUEST_PROPOSAL.md     ← PROPOSAL TEMPLATE
├── ARCHITECTURE.txt          ← ARCHITECTURE DIAGRAM
├── PROJECT_REPORT_TEMPLATE.md ← REPORT TEMPLATE
├── README_TEMPLATE.md        ← GitHub README template
└── PRESENTATION_OUTLINE.md   ← PRESENTATION SCRIPT
```

---

## ✅ DEPLOYMENT CHECKLIST

Copy this and check off as you go:

```
SETUP (Hours 0-7)
- [ ] Clone repo + npm install
- [ ] Test locally (npm run dev)
- [ ] Push to GitHub
- [ ] Deploy frontend to Vercel
- [ ] Create AWS account
- [ ] Create DynamoDB table
- [ ] Seed all 30 quests

BACKEND (Hours 7-11)
- [ ] Deploy Lambda function
- [ ] Add DynamoDB permissions
- [ ] Create API Gateway
- [ ] Enable CORS
- [ ] Get API endpoint URL

INTEGRATION (Hours 11-12)
- [ ] Update API URL in frontend
- [ ] Test mood selector
- [ ] Verify quests appear
- [ ] Test on mobile

SUBMISSION (Hours 12-24)
- [ ] Copy proposal template → edit → save PDF
- [ ] Copy report template → edit → save PDF
- [ ] Update GitHub README
- [ ] Create presentation slides
- [ ] Practice demo
- [ ] Test everything one more time
```

---

## 🔗 IMPORTANT URLS

After deployment:

```
Your Vercel URL:      https://sidequest-[your-id].vercel.app
Your API Gateway URL: https://[abc123].execute-api.ap-south-1.amazonaws.com/prod/quests
Your GitHub URL:      https://github.com/[you]/sidequest
```

---

## 📱 TESTING CHECKLIST

Before you submit:

```
FRONTEND TESTING
- [ ] Open Vercel URL on desktop
- [ ] Click each mood (8 buttons)
- [ ] Quests appear in <300ms
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (DevTools)

BACKEND TESTING
- [ ] Lambda function deployed
- [ ] DynamoDB has 30 items
- [ ] API Gateway returns JSON
- [ ] CORS working (no errors)

INTEGRATION TESTING
- [ ] API call appears in Network tab
- [ ] 6 quests display
- [ ] No 404 or 500 errors
- [ ] Works on desktop + mobile
- [ ] Mood buttons responsive
```

---

## 🎯 WHAT TO SUBMIT

By deadline, you need:

1. **Proposal PDF** (`SIDEQUEST_PROPOSAL.md` → PDF)
2. **Architecture Diagram** (in report)
3. **Working Implementation** (GitHub repo with code)
4. **Cloud Deployment** (live Vercel URL + AWS setup)
5. **Source Code** (GitHub + README)
6. **Project Report** (5 pages, PDF)
7. **Presentation** (slides + live demo ready)

---

## 💡 QUICK REFERENCE

**Need to run locally?**
```bash
npm install
npm run dev
# Open http://localhost:3000
```

**Need to seed data?**
```bash
npm run seed
```

**Need to deploy Lambda?**
- Copy `lambda/index.js`
- Paste in AWS Console Lambda editor
- Deploy

**Need API endpoint?**
- Create in API Gateway
- Get Invoke URL
- Update `pages/index.js`

**Need to present?**
- Open `PRESENTATION_OUTLINE.md`
- Follow script
- Show live demo
- Answer Q&A

---

## 🆘 STUCK?

1. **"App doesn't run locally?"** → Read SETUP.md (Troubleshooting)
2. **"AWS setup confusing?"** → Follow SETUP.md step-by-step
3. **"API not connecting?"** → Check SETUP.md (Connect Frontend)
4. **"Don't know what to present?"** → Read PRESENTATION_OUTLINE.md

---

## 📊 PROGRESS TRACKER

Track your progress:

```
HOUR 1:   Code running locally
HOUR 3:   Frontend deployed
HOUR 5:   AWS account + DynamoDB
HOUR 7:   Data seeded
HOUR 9:   Lambda deployed
HOUR 11:  API Gateway ready
HOUR 12:  Everything connected ✅
HOUR 14:  Docs done
HOUR 18:  Final polish
HOUR 24:  Ready to present ✅
```

---

## 🚀 YOU'VE GOT THIS

- **24 hours**
- **Complete code** ✅
- **All templates** ✅
- **Setup guides** ✅
- **Presentation outline** ✅

Just follow the guides and execute.

**Read [START_HERE.md](../START_HERE.md) first.** ←

---

Made with ❤️ for your success 🎉
