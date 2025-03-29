/*
  Warnings:

  - You are about to drop the column `checkUserId` on the `Emojis` table. All the data in the column will be lost.
  - You are about to drop the column `friday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `monday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `saturday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `sunday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `thursday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `tuesday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `wednesday` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Study` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Study` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `studyId` on table `Emojis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emojiContent` on table `Emojis` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `encryptedPassword` to the `Study` table without a default value. This is not possible if the table is not empty.
  - Made the column `point` on table `Study` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "DAY_OF_WEEK" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- DropForeignKey
ALTER TABLE "Emojis" DROP CONSTRAINT "Emojis_checkUserId_fkey";

-- DropForeignKey
ALTER TABLE "Emojis" DROP CONSTRAINT "Emojis_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Focus" DROP CONSTRAINT "Focus_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Study" DROP CONSTRAINT "Study_authorId_fkey";

-- AlterTable
ALTER TABLE "Emojis" DROP COLUMN "checkUserId",
ALTER COLUMN "studyId" SET NOT NULL,
ALTER COLUMN "emojiContent" SET NOT NULL;

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "friday",
DROP COLUMN "monday",
DROP COLUMN "saturday",
DROP COLUMN "sunday",
DROP COLUMN "thursday",
DROP COLUMN "tuesday",
DROP COLUMN "wednesday";

-- AlterTable
ALTER TABLE "Study" DROP COLUMN "authorId",
DROP COLUMN "password",
ADD COLUMN     "encryptedPassword" TEXT NOT NULL,
ALTER COLUMN "point" SET NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "HabitDone" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "dayOfWeek" "DAY_OF_WEEK" NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HabitDone_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Emojis" ADD CONSTRAINT "Emojis_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitDone" ADD CONSTRAINT "HabitDone_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Focus" ADD CONSTRAINT "Focus_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;
