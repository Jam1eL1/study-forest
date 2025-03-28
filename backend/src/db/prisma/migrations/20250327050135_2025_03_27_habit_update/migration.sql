/*
  Warnings:

  - You are about to drop the column `userId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the `HabitList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `studyId` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Emojis" DROP CONSTRAINT "Emojis_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_userId_fkey";

-- DropForeignKey
ALTER TABLE "HabitList" DROP CONSTRAINT "HabitList_habitId_fkey";

-- AlterTable
ALTER TABLE "Emojis" ALTER COLUMN "studyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Focus" ALTER COLUMN "complete" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "userId",
ADD COLUMN     "friday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "monday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "saturday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "studyId" INTEGER NOT NULL,
ADD COLUMN     "sunday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "thursday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tuesday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wednesday" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "HabitList";

-- AddForeignKey
ALTER TABLE "Emojis" ADD CONSTRAINT "Emojis_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
