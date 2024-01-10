-- CreateTable
CREATE TABLE `currency` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `code_in` VARCHAR(191) NOT NULL,
    `bid` DOUBLE NOT NULL,
    `ask` DOUBLE NOT NULL,
    `var_bid` DOUBLE NOT NULL,
    `pct_change` DOUBLE NOT NULL,
    `high` DOUBLE NOT NULL,
    `low` DOUBLE NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
