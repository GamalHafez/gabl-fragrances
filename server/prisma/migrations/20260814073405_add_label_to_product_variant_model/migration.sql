/*
  Warnings:

  - A unique constraint covering the columns `[productId,label,sizeML]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProductVariant_productId_sizeML_key";

-- AlterTable
ALTER TABLE "ProductVariant" ADD COLUMN     "label" VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_label_sizeML_key" ON "ProductVariant"("productId", "label", "sizeML");
