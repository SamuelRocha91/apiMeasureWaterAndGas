-- CreateTable
CREATE TABLE "Measure" (
    "measureUuid" TEXT NOT NULL PRIMARY KEY,
    "measureType" TEXT NOT NULL,
    "measureDatetime" DATETIME NOT NULL,
    "measureValue" INTEGER NOT NULL,
    "customerCode" TEXT NOT NULL,
    "hasConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imagePath" TEXT,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "measureId" TEXT NOT NULL,
    CONSTRAINT "Image_measureId_fkey" FOREIGN KEY ("measureId") REFERENCES "Measure" ("measureUuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_measureId_key" ON "Image"("measureId");
