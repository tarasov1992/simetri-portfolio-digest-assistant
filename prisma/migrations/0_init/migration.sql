-- CreateTable
CREATE TABLE "Pick" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "relatedTwitterIds" TEXT[],
    "cgId" TEXT,
    "cmcId" TEXT,

    CONSTRAINT "Pick_pkey" PRIMARY KEY ("id")
);

