-- CreateEnum
CREATE TYPE "StartupStage" AS ENUM ('IDEA', 'MVP', 'EARLY_STAGE', 'GROWTH');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupIdea" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "stage" "StartupStage" NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "StartupIdea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIReport" (
    "id" TEXT NOT NULL,
    "validationScore" INTEGER NOT NULL,
    "marketAnalysis" TEXT NOT NULL,
    "competitorAnalysis" TEXT NOT NULL,
    "swotAnalysis" TEXT NOT NULL,
    "businessModel" TEXT NOT NULL,
    "mvpPlan" TEXT NOT NULL,
    "goToMarketStrategy" TEXT NOT NULL,
    "risks" TEXT NOT NULL,
    "roadmap" TEXT NOT NULL,
    "investorPitch" TEXT NOT NULL,
    "startupIdeaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AIReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AIReport_startupIdeaId_key" ON "AIReport"("startupIdeaId");

-- AddForeignKey
ALTER TABLE "StartupIdea" ADD CONSTRAINT "StartupIdea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIReport" ADD CONSTRAINT "AIReport_startupIdeaId_fkey" FOREIGN KEY ("startupIdeaId") REFERENCES "StartupIdea"("id") ON DELETE CASCADE ON UPDATE CASCADE;
