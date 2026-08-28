/*
  Warnings:

  - You are about to drop the column `apartment` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "apartment";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "billingAddress" VARCHAR(255),
ADD COLUMN     "billingCity" VARCHAR(50),
ADD COLUMN     "billingCountry" VARCHAR(50),
ADD COLUMN     "billingGovernorate" VARCHAR(50),
ADD COLUMN     "billingPostalCode" VARCHAR(20),
ADD COLUMN     "billingSameAsShipping" BOOLEAN NOT NULL DEFAULT true;
