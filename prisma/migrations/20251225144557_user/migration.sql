-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "otpCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);
