-- CreateEnum
CREATE TYPE "isPublished" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "UserBio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "githubLink" TEXT,
    "twitterLink" TEXT,
    "linkedinLink" TEXT,
    "portfolioLink" TEXT,
    "otherLinks" TEXT[],
    "publishedOrDraft" "isPublished" NOT NULL,

    CONSTRAINT "UserBio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBio_id_email_githubLink_twitterLink_linkedinLink_portfo_key" ON "UserBio"("id", "email", "githubLink", "twitterLink", "linkedinLink", "portfolioLink", "otherLinks");
