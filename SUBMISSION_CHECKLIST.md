# ✅ SIDEQUEST SUBMISSION CHECKLIST

**Deadline:** Nov 30 - Dec 04, 2026  
**Status:** Ready to ship 🚀

---

## 📋 PRE-SUBMISSION (TODAY)

- [ ] Clone/copy sidequest-template folder
- [ ] Run `npm install`
- [ ] Run `npm run dev` → test at http://localhost:3000
- [ ] Click mood buttons → verify quests appear
- [ ] Test on mobile view (F12 → Mobile)
- [ ] Create GitHub account (if don't have)
- [ ] Create new GitHub repo named "sidequest"

---

## 🚀 DEPLOYMENT (NEXT 2 HOURS)

### Frontend to Vercel
- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Commit: `git commit -m "Sidequest: Initial commit"`
- [ ] Create GitHub repo
- [ ] Push to GitHub: `git push -u origin main`
- [ ] Go to vercel.com → Import GitHub repo
- [ ] Wait for deployment (3-5 min)
- [ ] Get live URL: https://sidequest-[username].vercel.app
- [ ] Test live URL on desktop + mobile

### Backend (Optional - for full cloud integration)
- [ ] Create AWS account (if needed)
- [ ] Create DynamoDB table "Quests"
- [ ] Seed data: `node scripts/seed-dynamodb.js`
- [ ] Create Lambda function
- [ ] Create API Gateway endpoint
- [ ] Update `pages/index.js` with API URL
- [ ] Re-deploy Vercel
- [ ] Test live API call

---

## 📄 DOCUMENTATION (2 HOURS)

### Proposal
- [ ] Copy `SIDEQUEST_PROPOSAL.md`
- [ ] Verify problem statement clear
- [ ] Verify objectives listed
- [ ] Verify tech stack detailed
- [ ] Save as `Project_Proposal.md`

### Architecture
- [ ] Copy `ARCHITECTURE.txt`
- [ ] Verify diagram shows: Frontend → API → Lambda → DynamoDB
- [ ] Verify cloud concepts explained
- [ ] Save as `Architecture_Diagram.txt`

### Project Report (5 pages)
- [ ] Copy `PROJECT_REPORT_TEMPLATE.md`
- [ ] Add your observations
- [ ] Add screenshots of app running
- [ ] Add architecture diagram
- [ ] Export as PDF (max 5 pages)
- [ ] Save as `Project_Report.pdf`

### README
- [ ] Update live demo URL
- [ ] Update GitHub repo link
- [ ] Add your name + roll number
- [ ] Verify all sections present
- [ ] Make sure it's in GitHub repo

---

## 🎬 PRESENTATION (1.5 HOURS)

### Slides (6 slides)
- [ ] Slide 1: Title + Problem
- [ ] Slide 2: Solution screenshot
- [ ] Slide 3: Architecture diagram
- [ ] Slide 4: Cost/Performance metrics
- [ ] Slide 5: Cloud concepts map
- [ ] Slide 6: Future roadmap
- [ ] Save as `Presentation_Slides.pptx`

### Script
- [ ] Copy `PRESENTATION_OUTLINE.md`
- [ ] Practice out loud (time yourself)
- [ ] Aim for 12-15 minutes
- [ ] Know Q&A talking points
- [ ] Save as `Presentation_Script.txt`

### Demo Prep
- [ ] Test live URL works
- [ ] Open DevTools (show Network tab)
- [ ] Have AWS console open (show Lambda + DynamoDB)
- [ ] Have GitHub repo open
- [ ] Practice demo 2-3 times
- [ ] Time the demo (should be <15 min total)

---

## 📦 FINAL SUBMISSION FOLDER

Create `Sidequest_Submission/` with:

- [ ] `Project_Proposal.md` ← Copy from SIDEQUEST_PROPOSAL.md
- [ ] `Architecture_Diagram.txt` ← Copy from ARCHITECTURE.txt
- [ ] `Project_Report.pdf` ← PDF (max 5 pages)
- [ ] `Presentation_Slides.pptx` ← 6 slides + speaker notes
- [ ] `Presentation_Script.txt` ← From PRESENTATION_OUTLINE.md
- [ ] `README.md` ← From your GitHub repo
- [ ] `Live_Demo_URL.txt` ← Your Vercel URL
- [ ] `GitHub_Repo_Link.txt` ← Your GitHub URL
- [ ] `Team_Info.txt` ← Student name + roll number

### Team_Info.txt Template
```
Project Title: Sidequest - College Activity Discovery Platform
Student Name: Nehal
Roll Number: 1024030843
Team Size: Solo (1 member)

GitHub Repo: https://github.com/[username]/sidequest
Live Demo: https://sidequest-[username].vercel.app
Lambda API: https://[api-id].execute-api.ap-south-1.amazonaws.com/prod/quests (optional)

Cloud Services Used:
✅ Vercel (Frontend hosting)
✅ AWS Lambda (Compute)
✅ AWS DynamoDB (Database)
✅ AWS API Gateway (Integration)
✅ AWS CloudWatch (Monitoring)
✅ AWS IAM (Security)

Architecture: Serverless (XaaS/SaaS)
Database: NoSQL (DynamoDB)
Frontend: React + Next.js
Deployment: Git → GitHub → Vercel

Status: Production-Ready ✅
```

---

## 🎯 SUBMISSION QUALITY CHECKLIST

### Code Quality
- [ ] No console errors (F12 → Console)
- [ ] Code is clean and commented
- [ ] `.gitignore` excludes node_modules
- [ ] README has clear instructions
- [ ] All 30 quests are in data

### Functionality
- [ ] Mood selector works (8 moods)
- [ ] Quests appear when mood selected
- [ ] Quests are randomized (different each time)
- [ ] App is responsive (desktop + mobile)
- [ ] No loading errors

### Cloud
- [ ] Frontend deployed to Vercel ✅
- [ ] Lambda function (optional) deployed ✅
- [ ] DynamoDB (optional) seeded ✅
- [ ] API Gateway (optional) working ✅
- [ ] All services < $1/month cost ✅

### Documentation
- [ ] Proposal explains problem clearly
- [ ] Architecture diagram shows all components
- [ ] Report is 5 pages, professional
- [ ] README has setup instructions
- [ ] GitHub repo is public + has good commit history

### Presentation
- [ ] Slides are clear + minimal text
- [ ] Speaker notes are detailed
- [ ] Demo is practiced (no surprises)
- [ ] Can answer all Q&A questions
- [ ] Total time is 12-15 minutes

---

## 📅 TIMELINE

| Date | Task | Status |
|------|------|--------|
| Aug 31 | Submit project title + team | ✅ |
| Sept 15 | Submit proposal | ✅ (ready) |
| Oct 15 | Mid-eval (demo working) | ✅ (ready) |
| Nov 30 | Final submission deadline | ⏳ |
| Dec 04 | Final presentation | ⏳ |

---

## 🏆 WHAT YOU'LL GET

✅ **Understanding of Cloud Computing**
- XaaS models (SaaS, PaaS, IaaS)
- Serverless architecture
- Managed services (Lambda, DynamoDB)
- Cost optimization
- Scalability patterns

✅ **Working Production App**
- Real users (your college!)
- Deployed on real cloud infrastructure
- Monitoring + logging
- Can handle 1000s of concurrent users

✅ **Strong Portfolio Piece**
- Shows you can build cloud apps
- Shows you understand architecture
- Shows you can ship fast (24 hours!)
- Shows you're product-minded

✅ **High Grade**
- All deliverables present
- Code is clean + working
- Cloud concepts mastered
- Great presentation

---

## 💪 YOU GOT THIS

Everything is built. All templates ready. You just need to:

1. ✅ npm install
2. ✅ npm run dev
3. ✅ git push
4. ✅ Deploy to Vercel (click button)
5. ✅ Fill templates
6. ✅ Submit

**Time needed: 2-3 hours total**

---

## 🚀 TODAY'S ACTION ITEMS

**Right now:**
```
1. npm install
2. npm run dev
3. Click moods, see quests
4. Create GitHub repo
5. git push origin main
6. Deploy to Vercel
7. Test live URL
```

**Tomorrow:**
```
1. Fill documentation templates
2. Create presentation slides
3. Practice demo + script
```

**Day before submission:**
```
1. Final testing
2. Create submission folder
3. Double-check all files
4. Submit!
```

---

**Status: SHIP IT 🚀**

You've got everything. Execute. Win.

— Sidequest Dev Team
