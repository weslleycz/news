/*
  Warnings:

  - A unique constraint covering the columns `[stripeId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "stripeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_stripeId_key" ON "Users"("stripeId");
