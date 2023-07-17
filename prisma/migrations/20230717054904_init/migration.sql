-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'TRASH', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('SUCCESS', 'FAILURE');

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "importedT" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "createdT" TIMESTAMP(3) NOT NULL,
    "lastModifiedT" TIMESTAMP(3) NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "brands" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "labels" TEXT NOT NULL,
    "cities" TEXT NOT NULL,
    "purchasePlaces" TEXT NOT NULL,
    "stores" TEXT NOT NULL,
    "ingredientsText" TEXT NOT NULL,
    "traces" TEXT NOT NULL,
    "servingSize" TEXT NOT NULL,
    "servingQuantity" DOUBLE PRECISION NOT NULL,
    "nutriscoreScore" DOUBLE PRECISION NOT NULL,
    "nutriscoreGrade" TEXT NOT NULL,
    "mainCategory" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "runAt" TIMESTAMP(3) NOT NULL,
    "status" "JobStatus" NOT NULL,
    "error" TEXT,

    CONSTRAINT "Crons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_code_key" ON "product"("code");
