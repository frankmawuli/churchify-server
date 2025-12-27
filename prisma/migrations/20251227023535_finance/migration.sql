-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('OFFERTORY', 'DONATION', 'TITHES', 'EXPENSES', 'OTHER');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CHECK', 'BANKTRANSFER', 'ONLINEPAYMENT', 'CARD');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionType" "TransactionType" NOT NULL DEFAULT 'OTHER',
    "category" TEXT,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "donorName" TEXT,
    "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'CASH',
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "addedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Transactions_churchId_idx" ON "Transactions"("churchId");

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_addedBy_fkey" FOREIGN KEY ("addedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
