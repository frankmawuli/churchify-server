-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('SCHEDULED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "category" AS ENUM ('WORSHIP', 'YOUTH', 'CONFERENCE', 'SEMINAR', 'OUTREACH', 'OTHER');

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "flagUrl" TEXT,
    "churchId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "capacity" INTEGER,
    "ticketPrice" DOUBLE PRECISION,
    "category" "category" NOT NULL DEFAULT 'OTHER',
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'SCHEDULED',
    "qrCodeUrl" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Events_churchId_idx" ON "Events"("churchId");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;
