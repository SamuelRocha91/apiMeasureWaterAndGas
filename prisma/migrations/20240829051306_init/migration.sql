-- CreateTable
CREATE TABLE `Measure` (
    `measureUuid` VARCHAR(191) NOT NULL,
    `measureType` VARCHAR(191) NOT NULL,
    `measureDatetime` DATETIME(3) NOT NULL,
    `measureValue` INTEGER NOT NULL,
    `customerCode` VARCHAR(191) NOT NULL,
    `hasConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`measureUuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `measureId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Image_measureId_key`(`measureId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_measureId_fkey` FOREIGN KEY (`measureId`) REFERENCES `Measure`(`measureUuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
