/*
  Warnings:

  - You are about to drop the column `FriendsId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "FriendsId",
ADD COLUMN     "friends" INTEGER[];
