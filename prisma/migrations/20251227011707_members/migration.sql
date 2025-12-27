/*
  Warnings:

  - Added the required column `addedBy` to the `MembershipProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MembershipProfile" ADD COLUMN     "addedBy" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MembershipProfile" ADD CONSTRAINT "MembershipProfile_addedBy_fkey" FOREIGN KEY ("addedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
