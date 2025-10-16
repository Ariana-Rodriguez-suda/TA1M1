-- CreateTable
CREATE TABLE "Estudiante" (
    "id_estudiante" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "dni" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id_estudiante")
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id_profesor" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id_profesor")
);

-- CreateTable
CREATE TABLE "Titulo" (
    "id_titulo" SERIAL NOT NULL,
    "id_profesor" INTEGER NOT NULL,
    "nombre_titulo" VARCHAR(150) NOT NULL,
    "institucion" VARCHAR(150) NOT NULL,
    "anio_obtencion" INTEGER NOT NULL,

    CONSTRAINT "Titulo_pkey" PRIMARY KEY ("id_titulo")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id_carrera" SERIAL NOT NULL,
    "nombre_carrera" VARCHAR(150) NOT NULL,
    "duracion_anios" INTEGER NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id_carrera")
);

-- CreateTable
CREATE TABLE "Aula" (
    "id_aula" SERIAL NOT NULL,
    "nombre_aula" VARCHAR(50) NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "ubicacion" VARCHAR(100),

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id_aula")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id_materia" SERIAL NOT NULL,
    "nombre_materia" VARCHAR(150) NOT NULL,
    "id_carrera" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "ProfesorMateria" (
    "id_profesor_materia" SERIAL NOT NULL,
    "id_profesor" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,

    CONSTRAINT "ProfesorMateria_pkey" PRIMARY KEY ("id_profesor_materia")
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id_inscripcion" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "fecha_inscripcion" DATE NOT NULL,

    CONSTRAINT "Inscripcion_pkey" PRIMARY KEY ("id_inscripcion")
);

-- AddForeignKey
ALTER TABLE "Titulo" ADD CONSTRAINT "Titulo_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "Profesor"("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "Aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfesorMateria" ADD CONSTRAINT "ProfesorMateria_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "Profesor"("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfesorMateria" ADD CONSTRAINT "ProfesorMateria_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "Materia"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "Estudiante"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "Materia"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;
