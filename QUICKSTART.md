# SIDEQUEST: QUICK START (5 minutes)

## For the Impatient

```bash
# 1. Clone & install
git clone [your-repo]
cd sidequest
npm install

# 2. Run locally
npm run dev
# Open http://localhost:3000

# 3. Deploy frontend
git push origin main
# Vercel auto-deploys

# 4. Setup AWS (3 min)
# - Create AWS account
# - Create DynamoDB table: Quests (primary key: quest_id)
# - Run: npm run seed

# 5. Deploy Lambda
# - Copy code from lambda/index.js
# - Create Lambda function in AWS Console
# - Give it DynamoDB permissions

# 6. Create API Gateway
# - Create REST API
# - Resource: /quests
# - Method: GET
# - Integration: Lambda function

# 7. Update frontend
# - Replace API URL in pages/index.js
# - git push

# ✅ Done! Visit your Vercel URL
```

**See SETUP.md for detailed instructions.**

---

## What You Get

A **serverless college discovery app**:
- 30 activities tagged by mood
- One-click deployment
- Auto-scaling (AWS Lambda)
- Cost: ~₹15/month

---

## Tech Stack

- **Frontend**: Next.js + React
- **Backend**: AWS Lambda
- **Database**: DynamoDB
- **Hosting**: Vercel + AWS

---

## Project Files

```
sidequest/
├── pages/
│   └── index.js                 # Main UI (mood selector + quests)
├── styles/
│   └── Home.module.css          # All styles
├── public/
│   └── quests.json              # Local fallback data
├── lambda/
│   └── index.js                 # AWS Lambda handler (copy to AWS)
├── seed-dynamodb.js             # Script to load 30 quests
├── SETUP.md                     # Detailed setup guide
├── QUICKSTART.md                # This file
└── package.json
```

---

## Cloud Architecture

```
User → Vercel (Frontend) → API Gateway → Lambda → DynamoDB
```

---

## Deployment Checklist

- [ ] Frontend: Vercel deployed (npm push to GitHub)
- [ ] Backend: Lambda created + deployed
- [ ] Database: DynamoDB table + 30 quests seeded
- [ ] API: API Gateway connected to Lambda
- [ ] Integration: Frontend calls API endpoint
- [ ] Test: Click mood → get quests back

---

## Next Steps

1. **Follow SETUP.md** for step-by-step instructions
2. **Test locally** (npm run dev)
3. **Deploy frontend** (git push)
4. **Setup AWS** (DynamoDB → Lambda → API Gateway)
5. **Connect everything** (add API URL to frontend)
6. **Demo & present** ✨

---

## Troubleshooting

**"API returns 404"**
- Check Lambda invoke URL in pages/index.js
- Verify Lambda has DynamoDB permissions

**"No quests appear"**
- Check data was seeded: `npm run seed`
- Verify DynamoDB table name is `Quests`

**"CORS error"**
- Enable CORS on API Gateway

---

**Questions?** Check SETUP.md for detailed troubleshooting.

**Ready?** Let's go! 🚀
