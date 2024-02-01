/*
  Warnings:

  - You are about to drop the column `githubLink` on the `UserBio` table. All the data in the column will be lost.
  - You are about to drop the column `includeProfilePicOrNot` on the `UserBio` table. All the data in the column will be lost.
  - You are about to drop the column `linkedinLink` on the `UserBio` table. All the data in the column will be lost.
  - You are about to drop the column `otherLinks` on the `UserBio` table. All the data in the column will be lost.
  - You are about to drop the column `twitterLink` on the `UserBio` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,bioId,email,githubUsername,twitterUsername,linkedinUsername,portfolioLink,devdotToUsername,mediumUsername,hashnodeUsername,discordUsername,youtubeUsername,whatsAppNumber,userId]` on the table `UserBio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bioId` to the `UserBio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayProfile` to the `UserBio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePicLink` to the `UserBio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserBio` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserBio_id_email_githubLink_twitterLink_linkedinLink_portfo_key";

-- AlterTable
ALTER TABLE "UserBio" DROP COLUMN "githubLink",
DROP COLUMN "includeProfilePicOrNot",
DROP COLUMN "linkedinLink",
DROP COLUMN "otherLinks",
DROP COLUMN "twitterLink",
ADD COLUMN     "bioId" TEXT NOT NULL,
ADD COLUMN     "devdotToUsername" TEXT,
ADD COLUMN     "discordUsername" TEXT,
ADD COLUMN     "displayProfile" BOOLEAN NOT NULL,
ADD COLUMN     "githubUsername" TEXT,
ADD COLUMN     "hashnodeUsername" TEXT,
ADD COLUMN     "linkedinUsername" TEXT,
ADD COLUMN     "mediumUsername" TEXT,
ADD COLUMN     "profilePicLink" TEXT NOT NULL,
ADD COLUMN     "projectLinks" TEXT[],
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "twitterUsername" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "whatsAppNumber" TEXT,
ADD COLUMN     "youtubeUsername" TEXT;

-- DropEnum
DROP TYPE "isPublished";

-- CreateIndex
CREATE UNIQUE INDEX "UserBio_id_bioId_email_githubUsername_twitterUsername_linke_key" ON "UserBio"("id", "bioId", "email", "githubUsername", "twitterUsername", "linkedinUsername", "portfolioLink", "devdotToUsername", "mediumUsername", "hashnodeUsername", "discordUsername", "youtubeUsername", "whatsAppNumber", "userId");

-- AddForeignKey
ALTER TABLE "UserBio" ADD CONSTRAINT "UserBio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
