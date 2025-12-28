-- CreateEnum
CREATE TYPE "reminderType" AS ENUM ('BIRTHDAY', 'ANNIVERSARY');

-- CreateTable
CREATE TABLE "Reminders" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "memberName" TEXT NOT NULL,
    "reminderType" "reminderType" NOT NULL,
    "age" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Reminders_churchId_idx" ON "Reminders"("churchId");

-- AddForeignKey
ALTER TABLE "Reminders" ADD CONSTRAINT "Reminders_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminders" ADD CONSTRAINT "Reminders_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "MembershipProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
