/*
  Warnings:

  - You are about to drop the column `flayerUrl` on the `Events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "flayerUrl",
ADD COLUMN     "flyerUrl" TEXT;
