# PROJECT PROPOSAL: SIDEQUEST

## Problem Statement
College students face a **decision fatigue + boredom paradox**: unlimited free time but zero ideas what to do with it. Students scroll social media instead of creating experiences because discovering unconventional activities is hard. Existing solutions (Google Maps, Reddit) are designed for tourists, not for *sasti masti* college experiences.

## Objectives
1. **Build a serendipity engine** that surfaces 30+ unconventional, affordable college activities based on mood + constraints
2. **Demonstrate cloud architecture** using AWS serverless stack (Lambda, API Gateway, DynamoDB)
3. **Create a user-centric discovery platform** that reduces decision time and increases engagement
4. **Show network effects** (more students = more quests = better recommendations)

## Solution Overview
**Sidequest** is a web app where students select their mood (creative, adventurous, social, etc.) and get personalized activity suggestions. Each quest has:
- Title + description
- Duration, cost, location
- Mood tags
- Immediate actionability

### Cloud Architecture
- **Frontend**: Next.js (React) deployed on Vercel
- **Backend**: AWS Lambda (matching logic)
- **API**: AWS API Gateway (REST endpoints)
- **Database**: DynamoDB (quest storage, no schema needed)
- **Real-time**: CloudWatch logs for analytics

### Target Users
- College students at Thapar (MVP audience)
- Expandable to any college

### Key Features (MVP)
1. Mood selector (8 moods)
2. Quest filtering + display
3. Persistent quest storage
4. Mobile-responsive UI
5. Live cloud deployment

### Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: AWS Lambda (Node.js)
- **Database**: DynamoDB
- **Deployment**: Vercel + AWS
- **Infrastructure as Code**: AWS SDK

### Timeline
- Development: 10 hours
- Deployment: 2 hours
- Documentation: 3.5 hours

### Success Criteria
✅ Working web app (mood selector → quest results)
✅ Lambda function processes requests successfully
✅ DynamoDB stores/retrieves 30 quests
✅ Live URL works on mobile + desktop
✅ Professional documentation + presentation

### Cloud Computing Relevance
Maps to **UCS531 Syllabus**:
- **Module 1**: Distributed architecture (quest matching across Lambda instances)
- **Module 2**: AWS services (Lambda, API Gateway, DynamoDB, IAM)
- **Module 3**: Virtualization (Lambda = containerized functions)
- **XaaS Model**: SaaS application (Discovery-as-a-Service)
