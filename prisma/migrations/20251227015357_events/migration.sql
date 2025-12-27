/*
  Warnings:

  - You are about to drop the column `flagUrl` on the `Events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "flagUrl",
ADD COLUMN     "flayerUrl" TEXT;
