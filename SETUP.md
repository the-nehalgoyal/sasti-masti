# SIDEQUEST: COMPLETE SETUP & DEPLOYMENT GUIDE

**Total time: ~30 minutes to get everything live**

---

## STEP 1: Clone & Setup (5 minutes)

```bash
# Clone this repo
git clone [your-repo-url]
cd sidequest

# Install dependencies
npm install

# Test locally
npm run dev
# Open http://localhost:3000 in your browser
# Should see Sidequest homepage
```

✅ **Milestone**: App runs on localhost:3000

---

## STEP 2: Deploy Frontend to Vercel (5 minutes)

### Option A: GitHub + Vercel (Easiest)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Sidequest MVP"
   git push origin main
   ```

2. Go to **vercel.com** → Sign in with GitHub
3. Click "Import Project" → Select your sidequest repo
4. Click "Deploy"
5. Wait ~2 min... ✅ Your app is LIVE at `sidequest-xxx.vercel.app`

**That's it for frontend.**

---

## STEP 3: Setup AWS Account (2 minutes)

1. Go to **aws.amazon.com**
2. Click "Create AWS Account"
3. Use your college email
4. Follow prompts (they'll verify via email + credit card, but you won't be charged—free tier is enough)
5. Once account created, go to AWS Console

✅ **Milestone**: AWS account ready

---

## STEP 4: Create DynamoDB Table (3 minutes)

In AWS Console:

1. Search for **DynamoDB** → Click on it
2. Click **"Create table"**
3. Fill in:
   - **Table name**: `Quests`
   - **Primary key**: `quest_id` (Number)
   - **Billing mode**: `Pay per request` (on-demand)
4. Click **"Create"**
5. Wait for table to be created (~1 min)

✅ **Milestone**: DynamoDB table "Quests" created

---

## STEP 5: Seed Data into DynamoDB (5 minutes)

### Option A: Using AWS Console (Manual - 5 min)

1. Click on **Quests** table
2. Click **"Explore table items"**
3. Click **"Create item"**
4. Paste this (repeat for each quest):

```json
{
  "quest_id": {
    "N": "1"
  },
  "title": {
    "S": "Graffiti Different Areas"
  },
  "description": {
    "S": "Use sidewalk chalk to create art in public spaces. Know the rules first!"
  },
  "duration": {
    "S": "30-60 min"
  },
  "cost": {
    "S": "₹50-100"
  },
  "mood": {
    "S": "creative"
  },
  "emoji": {
    "S": "🎨"
  }
}
```

5. Repeat for all 30 quests... (or see Option B below)

### Option B: Using AWS CLI (Automated - 2 min) - RECOMMENDED

1. Install AWS CLI: `brew install awscli` (macOS) or see [aws docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

2. Configure AWS CLI:
   ```bash
   aws configure
   # Enter: AWS Access Key ID (from AWS Console → My Security Credentials)
   # Enter: AWS Secret Access Key
   # Enter: Default region: ap-south-1 (or us-east-1)
   # Enter: Default output: json
   ```

3. Run seeding script:
   ```bash
   node seed-dynamodb.js
   ```

✅ **Milestone**: All 30 quests in DynamoDB

---

## STEP 6: Create Lambda Function (5 minutes)

### In AWS Console:

1. Search for **Lambda** → Click **"Create function"**
2. Fill in:
   - **Function name**: `sidequest-matcher`
   - **Runtime**: `Node.js 18.x`
   - **Architecture**: `x86_64`
3. Click **"Create function"**

4. **Paste the code**:
   - Delete existing code
   - Copy code from `lambda/index.js`
   - Paste it into the Lambda editor
   - Click **"Deploy"**

5. **Add DynamoDB permissions**:
   - Click on your function
   - Go to **"Configuration"** → **"Permissions"**
   - Click on the role name (e.g., `sidequest-matcher-role-xxx`)
   - This opens IAM → Click **"Add inline policy"**
   - Paste this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:Scan",
        "dynamodb:Query",
        "dynamodb:GetItem"
      ],
      "Resource": "arn:aws:dynamodb:ap-south-1:YOUR_ACCOUNT_ID:table/Quests"
    }
  ]
}
```

Replace `YOUR_ACCOUNT_ID` with your AWS account ID (found in AWS Console → Account)

✅ **Milestone**: Lambda function deployed

---

## STEP 7: Create API Gateway (5 minutes)

1. Search for **API Gateway** → Click **"Create API"**
2. Select **"REST API"** → Click **"Build"**
3. Fill in:
   - **API name**: `sidequest`
   - **Endpoint type**: `Regional`
4. Click **"Create API"**

5. **Create Resource**:
   - Right-click on `/` → **"Create resource"**
   - **Resource name**: `quests`
   - Click **"Create resource"**

6. **Create Method**:
   - Click on `/quests` → **"Create method"** → `GET`
   - **Integration type**: `Lambda function`
   - **Lambda Function**: `sidequest-matcher`
   - Click **"Create method"**

7. **Enable CORS**:
   - Select `/quests` → **"Enable CORS"**
   - Click **"Enable CORS and replace existing CORS headers"**

8. **Deploy API**:
   - Click **"Deploy API"**
   - **Stage**: `prod`
   - Click **"Deploy"**
   - Copy the **Invoke URL** (looks like `https://xxx.execute-api.ap-south-1.amazonaws.com/prod`)

✅ **Milestone**: API Gateway live

---

## STEP 8: Update Frontend with API Endpoint (3 minutes)

Update `pages/index.js`:

Find this line:
```javascript
fetch(`/api/quests?mood=${mood}`)
```

Replace with your API Gateway URL:
```javascript
fetch(`https://YOUR_API_URL/prod/quests?mood=${mood}`)
```

Example:
```javascript
fetch(`https://abc123xyz.execute-api.ap-south-1.amazonaws.com/prod/quests?mood=${mood}`)
```

Save and commit:
```bash
git add .
git commit -m "Add API endpoint"
git push origin main
```

Vercel auto-deploys. Wait ~30 seconds.

✅ **Milestone**: Frontend connected to AWS backend

---

## STEP 9: Test Everything (3 minutes)

1. Open your Vercel URL (e.g., `sidequest-xxx.vercel.app`)
2. Click any mood button (e.g., "creative")
3. **Should see 6 quest cards appear**
4. Open browser DevTools → Network tab
5. You should see the API call to your Lambda function succeeding

✅ **Milestone**: Everything working end-to-end

---

## TROUBLESHOOTING

### "API returns 404"
- Check Lambda invoke URL is correct in `pages/index.js`
- Check Lambda has DynamoDB permissions
- Check DynamoDB table name is exactly `Quests`

### "DynamoDB query returns empty"
- Verify data was seeded (check DynamoDB console → Explore items)
- Check mood values match (should be lowercase: "creative", "adventurous", etc.)

### "CORS error in browser console"
- Make sure you enabled CORS on API Gateway
- Check browser console has the full error message

### "Cold start takes 200ms"
- That's normal for Lambda. Not a problem.

---

## YOUR LIVE URLS

Once everything is deployed:

- **Frontend**: `https://sidequest-xxx.vercel.app` (Vercel)
- **API**: `https://xxx.execute-api.ap-south-1.amazonaws.com/prod/quests` (API Gateway)
- **Database**: DynamoDB table `Quests` in AWS Console

---

## COST BREAKDOWN (Monthly)

| Service | Cost |
|---------|------|
| Lambda | FREE (1M free invocations/month) |
| DynamoDB | ~₹15 (on-demand) |
| API Gateway | FREE (1M free requests/month) |
| Vercel | FREE |
| **Total** | **~₹15/month** |

---

## NEXT STEPS (24h Timeline)

- ✅ **0-1h**: Local setup + Vercel deploy
- ✅ **1-2h**: AWS account + DynamoDB table
- ✅ **2-3h**: Lambda + API Gateway
- ✅ **3h**: Everything connected + working
- **3-6h**: Final Polish (UI, mobile test)
- **6-8h**: Documentation + GitHub README
- **8-12h**: Project report + slides
- **12-24h**: Buffer + presentation rehearsal

---

## DEPLOYMENT CHECKLIST

- [ ] Code pushed to GitHub
- [ ] Vercel deployed (live URL working)
- [ ] AWS account created
- [ ] DynamoDB table `Quests` created
- [ ] Data seeded (all 30 quests in DB)
- [ ] Lambda function deployed
- [ ] Lambda has DynamoDB permissions
- [ ] API Gateway created + deployed
- [ ] CORS enabled on API Gateway
- [ ] Frontend connects to API endpoint
- [ ] Click mood → get 6 quest cards back
- [ ] Mobile responsive test passed
- [ ] Live demo works

---

**You're ready to demo!** 🚀
