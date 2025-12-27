-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateTable
CREATE TABLE "MembershipProfile" (
    "id" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "relationshipStatus" "RelationshipStatus" NOT NULL,
    "status" "MembershipStatus" NOT NULL DEFAULT 'PENDING',
    "spouseName" TEXT,
    "childrenNames" TEXT[],
    "dateOfBirth" TIMESTAMP(3),
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembershipProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChildtoMember" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "childName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChildtoMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembertoSpouse" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "spouseName" TEXT NOT NULL,
    "marriedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MembertoSpouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MembershipProfile_email_key" ON "MembershipProfile"("email");

-- CreateIndex
CREATE INDEX "MembershipProfile_churchId_idx" ON "MembershipProfile"("churchId");

-- CreateIndex
CREATE INDEX "ChildtoMember_memberId_idx" ON "ChildtoMember"("memberId");

-- CreateIndex
CREATE INDEX "MembertoSpouse_memberId_idx" ON "MembertoSpouse"("memberId");

-- AddForeignKey
ALTER TABLE "MembershipProfile" ADD CONSTRAINT "MembershipProfile_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Churches"("churchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChildtoMember" ADD CONSTRAINT "ChildtoMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "MembershipProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembertoSpouse" ADD CONSTRAINT "MembertoSpouse_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "MembershipProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
