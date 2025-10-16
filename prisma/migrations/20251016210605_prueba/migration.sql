/*
  Warnings:

  - You are about to drop the column `duracion_anios` on the `Carrera` table. All the data in the column will be lost.
  - You are about to drop the column `anio_obtencion` on the `Titulo` table. All the data in the column will be lost.
  - Added the required column `duracion_anos` to the `Carrera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ano_obtencion` to the `Titulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrera" DROP COLUMN "duracion_anios",
ADD COLUMN     "duracion_anos" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Titulo" DROP COLUMN "anio_obtencion",
ADD COLUMN     "ano_obtencion" INTEGER NOT NULL;
