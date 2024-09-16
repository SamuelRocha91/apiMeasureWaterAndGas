/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Image` table. All the data in the column will be lost.
  - The required column `imageUuid` was added to the `Image` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Image` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `imageUuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`imageUuid`);

-- CreateTable
CREATE TABLE `Customer` (
    `customerUuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `number` INTEGER NULL,

    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`customerUuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Measure` ADD CONSTRAINT `Measure_customerCode_fkey` FOREIGN KEY (`customerCode`) REFERENCES `Customer`(`customerUuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
