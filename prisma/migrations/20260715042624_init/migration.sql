/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `StartupIdea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "StartupStatus" AS ENUM ('ACTIVE', 'ARCHIVED');

-- AlterTable
ALTER TABLE "StartupIdea" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "status" "StartupStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
