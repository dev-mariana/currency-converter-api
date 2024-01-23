/*
  Warnings:

  - You are about to drop the column `base_code` on the `currency` table. All the data in the column will be lost.
  - Added the required column `code` to the `currency` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `currency_base_code_key` ON `currency`;

-- DropIndex
DROP INDEX `currency_from_key` ON `currency`;

-- DropIndex
DROP INDEX `currency_to_key` ON `currency`;

-- AlterTable
ALTER TABLE `currency` DROP COLUMN `base_code`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL;
