/*
  Warnings:

  - Added the required column `includeProfilePicOrNot` to the `UserBio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBio" ADD COLUMN     "includeProfilePicOrNot" BOOLEAN NOT NULL;
