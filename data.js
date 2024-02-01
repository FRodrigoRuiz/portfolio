const proyectos = [
  {
    titulo: "Mi primer proyecto",
    descripcion:
      "Este proyecto lo hice para aprender distintas tecnologias web.",
    link: "https://www.google.com",
    imagen: "",
    tecnologias: ["HTML", "CSS"],
  },
  {
    titulo: "Mi segundo proyecto",
    descripcion: "lamf;lasmfa;slfmas;lfmas;flmas;flas;flmas;fjlnsdlfkjsdnfklds",
    link: "https://www.google.com",
    imagen: "",
    tecnologias: ["Angular", "Typescript"],
  }
];

const informacionPersonal = {
  nombre: "Farid Rodrigo Ruiz",
  subtitulo: "Desarrollador .NET",
  imagen: "img/Foto comprimida.jpg",
  otros: [
    ["Nacionalidad", "Argentino"],
    [
      "Edad",
      new Date(new Date() - new Date("2000/12/01")).getFullYear() -
        1970 +
        " años",
    ],
  ],
  idiomas: [
    ["Español", "Nativo"],
    ["Inglés", "Bueno (B2)"],
  ],
  redes: [
    ["github", "https://github.com/FRodrigoRuiz"],
    ["linkedin", "https://www.linkedin.com/in/farid-rodrigo-ruiz-36b629228/"]
  ]
};