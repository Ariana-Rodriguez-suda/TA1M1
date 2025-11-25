import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  console.log("🌱 Seeding database...");

  // ----------------------
  //   ESTUDIANTES
  // ----------------------
  const estudiantes = await prisma.estudiante.createMany({
    data: [
      { nombre: "Ana", apellido: "López", dni: "12345678", correo: "ana@example.com", telefono: "098111111" },
      { nombre: "Luis", apellido: "García", dni: "22345679", correo: "luis@example.com", telefono: "098222222" },
      { nombre: "María", apellido: "Torres", dni: "32345670", correo: "maria@example.com", telefono: "098333333" },
      { nombre: "Pedro", apellido: "Mendoza", dni: "42345671", correo: "pedro@example.com", telefono: "098444444" },
      { nombre: "Lucía", apellido: "Pérez", dni: "52345672", correo: "lucia@example.com", telefono: "098555555" },
    ],
  });

  // ----------------------
  //   PROFESORES
  // ----------------------
  const profesores = await prisma.profesor.createMany({
    data: [
      { nombre: "Carlos", apellido: "Ramírez", correo: "carlos@uni.com", telefono: "099111111" },
      { nombre: "Sofía", apellido: "Martínez", correo: "sofia@uni.com", telefono: "099222222" },
      { nombre: "Javier", apellido: "Fernández", correo: "javier@uni.com", telefono: "099333333" },
      { nombre: "Elena", apellido: "Vargas", correo: "elena@uni.com", telefono: "099444444" },
      { nombre: "Miguel", apellido: "Cárdenas", correo: "miguel@uni.com", telefono: "099555555" },
    ],
  });

  // Obtener IDs
  const profList = await prisma.profesor.findMany();

  // ----------------------
  //   TÍTULOS
  // ----------------------
  await prisma.titulo.createMany({
    data: [
      { id_profesor: profList[0].id_profesor, nombre_titulo: "Ingeniería de Sistemas", institucion: "UTPL", ano_obtencion: 2015 },
      { id_profesor: profList[1].id_profesor, nombre_titulo: "Tecnologías de la Información", institucion: "ESPOL", ano_obtencion: 2017 },
      { id_profesor: profList[2].id_profesor, nombre_titulo: "Ciencias Computacionales", institucion: "UCE", ano_obtencion: 2010 },
      { id_profesor: profList[3].id_profesor, nombre_titulo: "Educación Matemática", institucion: "UNL", ano_obtencion: 2012 },
      { id_profesor: profList[4].id_profesor, nombre_titulo: "Redes y Telecomunicaciones", institucion: "UPS", ano_obtencion: 2018 },
    ],
  });

  // ----------------------
  //   CARRERAS
  // ----------------------
  await prisma.carrera.createMany({
    data: [
      { nombre_carrera: "Ingeniería de Software", duracion_anos: 4 },
      { nombre_carrera: "Administración", duracion_anos: 4 },
      { nombre_carrera: "Contabilidad", duracion_anos: 5 },
    ],
  });

  const carreras = await prisma.carrera.findMany();

  // ----------------------
  //   AULAS
  // ----------------------
  await prisma.aula.createMany({
    data: [
      { nombre_aula: "A1", capacidad: 40, ubicacion: "Edificio A" },
      { nombre_aula: "A2", capacidad: 35, ubicacion: "Edificio A" },
      { nombre_aula: "B1", capacidad: 50, ubicacion: "Edificio B" },
      { nombre_aula: "B2", capacidad: 45, ubicacion: "Edificio B" },
      { nombre_aula: "C1", capacidad: 30, ubicacion: "Edificio C" },
    ],
  });

  const aulas = await prisma.aula.findMany();

  // ----------------------
  //   MATERIAS
  // ----------------------
  await prisma.materia.createMany({
    data: [
      { nombre_materia: "Programación I", id_carrera: carreras[0].id_carrera, id_aula: aulas[0].id_aula },
      { nombre_materia: "Base de Datos", id_carrera: carreras[0].id_carrera, id_aula: aulas[1].id_aula },
      { nombre_materia: "Matemática I", id_carrera: carreras[1].id_carrera, id_aula: aulas[2].id_aula },
      { nombre_materia: "Contabilidad General", id_carrera: carreras[2].id_carrera, id_aula: aulas[3].id_aula },
      { nombre_materia: "Algoritmos", id_carrera: carreras[0].id_carrera, id_aula: aulas[4].id_aula },
    ],
  });

  const materias = await prisma.materia.findMany();

  // ----------------------
  //   PROFESOR–MATERIA
  // ----------------------
  await prisma.profesorMateria.createMany({
    data: [
      { id_profesor: profList[0].id_profesor, id_materia: materias[0].id_materia },
      { id_profesor: profList[1].id_profesor, id_materia: materias[1].id_materia },
      { id_profesor: profList[2].id_profesor, id_materia: materias[2].id_materia },
      { id_profesor: profList[3].id_profesor, id_materia: materias[3].id_materia },
      { id_profesor: profList[4].id_profesor, id_materia: materias[4].id_materia },
    ],
  });

  const estudiantesList = await prisma.estudiante.findMany();

  // ----------------------
  //   INSCRIPCIONES
  // ----------------------
  await prisma.inscripcion.createMany({
    data: [
      { id_estudiante: estudiantesList[0].id_estudiante, id_materia: materias[0].id_materia, fecha_inscripcion: new Date() },
      { id_estudiante: estudiantesList[1].id_estudiante, id_materia: materias[1].id_materia, fecha_inscripcion: new Date() },
      { id_estudiante: estudiantesList[2].id_estudiante, id_materia: materias[2].id_materia, fecha_inscripcion: new Date() },
      { id_estudiante: estudiantesList[3].id_estudiante, id_materia: materias[3].id_materia, fecha_inscripcion: new Date() },
      { id_estudiante: estudiantesList[4].id_estudiante, id_materia: materias[4].id_materia, fecha_inscripcion: new Date() },
    ],
  });

  console.log("🌱 Seeding completo!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
