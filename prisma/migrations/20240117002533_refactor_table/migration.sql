/*
  Warnings:

  - You are about to drop the column `ask` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `bid` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `code_in` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `high` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `low` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `pct_change` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `currency` table. All the data in the column will be lost.
  - You are about to drop the column `var_bid` on the `currency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[base_code]` on the table `currency` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[from]` on the table `currency` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[to]` on the table `currency` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `currency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `base_code` to the `currency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `currency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `currency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `currency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `currency` DROP COLUMN `ask`,
    DROP COLUMN `bid`,
    DROP COLUMN `code`,
    DROP COLUMN `code_in`,
    DROP COLUMN `high`,
    DROP COLUMN `low`,
    DROP COLUMN `name`,
    DROP COLUMN `pct_change`,
    DROP COLUMN `timestamp`,
    DROP COLUMN `var_bid`,
    ADD COLUMN `amount` DOUBLE NOT NULL,
    ADD COLUMN `base_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `from` VARCHAR(191) NOT NULL,
    ADD COLUMN `result` DOUBLE NOT NULL,
    ADD COLUMN `to` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `currency_base_code_key` ON `currency`(`base_code`);

-- CreateIndex
CREATE UNIQUE INDEX `currency_from_key` ON `currency`(`from`);

-- CreateIndex
CREATE UNIQUE INDEX `currency_to_key` ON `currency`(`to`);
