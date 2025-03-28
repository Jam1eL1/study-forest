/*
  Warnings:

  - Made the column `background` on table `Study` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Study_backgrounds" ADD VALUE 'bg6';
ALTER TYPE "Study_backgrounds" ADD VALUE 'bg7';
ALTER TYPE "Study_backgrounds" ADD VALUE 'bg8';

-- AlterTable
ALTER TABLE "Study" ALTER COLUMN "background" SET NOT NULL;
