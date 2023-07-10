/*
  Warnings:

  - You are about to drop the `ordenproducto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ordenproducto` DROP FOREIGN KEY `OrdenProducto_ordenId_fkey`;

-- DropForeignKey
ALTER TABLE `ordenproducto` DROP FOREIGN KEY `OrdenProducto_productoId_fkey`;

-- DropTable
DROP TABLE `ordenproducto`;
