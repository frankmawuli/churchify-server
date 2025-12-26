/*
  Warnings:

  - You are about to drop the column `location` on the `Churches` table. All the data in the column will be lost.
  - You are about to drop the column `members` on the `Churches` table. All the data in the column will be lost.
  - You are about to drop the column `revenue` on the `Churches` table. All the data in the column will be lost.
  - Added the required column `address` to the `Churches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `Churches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `Churches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `Churches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `denomination` to the `Churches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberCapacity` to the `Churches` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChurchAdminType" AS ENUM ('PRIMARY', 'SECONDARY');

-- AlterTable
ALTER TABLE "Churches" DROP COLUMN "location",
DROP COLUMN "members",
DROP COLUMN "revenue",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT NOT NULL,
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "denomination" TEXT NOT NULL,
ADD COLUMN     "memberCapacity" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ChurchBranding" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "logoUrl" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "colorPresets" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChurchBranding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChurchAdminAccounts" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "churchAdminType" "ChurchAdminType" NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChurchAdminAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingDetails" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "cardHolderName" TEXT NOT NULL,
    "cardLast4" TEXT NOT NULL,
    "cardBrand" TEXT NOT NULL,
    "expMonth" INTEGER NOT NULL,
    "expYear" INTEGER NOT NULL,
    "billingAddress" TEXT NOT NULL,
    "plan" "Plan" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChurchBranding_churchId_key" ON "ChurchBranding"("churchId");

-- CreateIndex
CREATE UNIQUE INDEX "ChurchAdminAccounts_churchId_adminId_key" ON "ChurchAdminAccounts"("churchId", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "BillingDetails_churchId_key" ON "BillingDetails"("churchId");

-- AddForeignKey
ALTER TABLE "Churches" ADD CONSTRAINT "Churches_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchBranding" ADD CONSTRAINT "ChurchBranding_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchAdminAccounts" ADD CONSTRAINT "ChurchAdminAccounts_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchAdminAccounts" ADD CONSTRAINT "ChurchAdminAccounts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingDetails" ADD CONSTRAINT "BillingDetails_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;
