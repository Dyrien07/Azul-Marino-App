import { COLORS } from "../constants/colors";

export const ACTIVIDADES = [
  {
    ID: 1,
    Titulo: "Clases de Natacion Adultos",
    color: COLORS.primary,
    img: "https://academiaswimcenter.com/wp-content/uploads/2019/09/natacion-adultos-4.jpg",
    Desc: "Clases de Natacion para Adultos de todas las edades y niveles",
    Precio: {
      unaVezPorSemana: 3000,
      dosVecesPorSemana: 5000,
      tresVecesPorSemana: 7000,
      cuatroVecesPorSemana: 9000,
    },
    Horarios: {
      Lunes: "20:30hs",
      Martes: "9hs y 20hs",
      Miercoles: "20:30hs",
      Jueves: "9hs y 20hs",
      Viernes: "No hay clases",
      Sabado: "13hs",
    },
  },
  {
    ID: 2,
    Titulo: "Clases de Acuagym",
    color: COLORS.secondary,
    img:"https://www.asssa.es/wp-content/uploads/2019/08/00178_1-3.png",
    Desc: "Clases de Acuagym con enfoce al entrenamiento y funcionalidad",
    Precio: {
      unaVezPorSemana: 3000,
      dosVecesPorSemana: 5000,
      tresVecesPorSemana: 7000,
      cuatroVecesPorSemana: 9000,
    },
    Horarios: {
      Lunes: "19hs",
      Martes: "8 y 19hs",
      Miercoles: "19hs",
      Jueves: "8hs y 19hs",
      Viernes: "No hay clases",
      Sabado: "10hs",
    },
  },
  {
    ID: 3,
    Titulo: "Clases de Matro Natacion",
    color: COLORS.tertiary,
    img:"https://www.dir.cat/blog/wp-content/uploads/2020/01/beneficios-natacion-bebes-828x430.jpg",
    Desc: "Clases de matro natacion a partir de 6 meses de edad. Entran al agua 1 padre y el niño, clases de 45 minutos",
    Precio: {
      unaVezPorSemana: 3000,
    },
    Horarios: {
      Sabado: "14",
    },
  },
  {
    ID: 4,
    Titulo: "Pileta Libre",
    color: COLORS.cuaternary,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJNtAY12n-JIsQRQ05wohCCtf6x0CZjokmw&usqp=CAU",
    Desc: "Pileta libre sin profesor",
    Precio: 7000,
    Horarios: "Todos los dias de 8 a 21",
  },
  {
    ID: 5,
    Titulo: "Colonia de Vacciones",
    color: COLORS.primary,
    img:"https://caletaolivia.gov.ar/images/Prensa/2022/ENERO_22/10-01-22/Colonias_Mosconi_2.jpeg"
  },
  {
    ID: 6,
    Titulo: "Clases de Natacion Chicos",
    color: COLORS.secondary,
    img: "https://cepan.com.mx/wp-content/uploads/2019/03/cepan_clases_natacion_01-940x628.jpg",
    Desc: "Clases de Natacion para Chicos a partir de 3 años ",
    Precio: {
      unaVezPorSemana: 3000,
      dosVecesPorSemana: 5000,
      tresVecesPorSemana: 7000,
      cuatroVecesPorSemana: 9000,
    },
    Horarios: {
      Lunes: "18hs",
      Martes: "16 y 18hs",
      Miercoles: "18hs",
      Jueves: "15hs y 18hs",
      Viernes: "No hay clases",
      Sabado: "12hs",
    },
  },
];
