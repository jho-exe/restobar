/*
  Warnings:

  - You are about to alter the column `preparado` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `preparado` VARCHAR(191) NOT NULL;
