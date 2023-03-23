export interface Product {
  name: string;
  desc: string;
  preu: number;
  img: string;
  qty: number;
  cat: string;
}

export const products= [
  {
    name:"Bola de drac",
    desc:"Primera edicio",
    preu: 10.30,
    img: "http://172.16.8.1:3080/imatges/BolaDeDrac01.jpg",
    qty: 1,
    cat: "Entreteniment"
  },
  {
    name:"Narnia",
    desc:"Primera edicio",
    preu: 11.30,
    img: "http://172.16.8.1:3080/imatges/Narnia.jpg",
    qty: 1,
    cat: "Entreteniment"
  },
  {
    name:"Boku no Hero Academia",
    desc:"Primera edicio",
    preu: 7.55,
    img: "http://172.16.8.1:3080/imatges/BNHA.png",
    qty: 1,
    cat: "Entreteniment"
  },
  {
    name:"Los pilares de la Tierra",
    desc:"Primera edicio",
    preu: 11.30,
    img: "http://172.16.8.1:3080/imatges/PilaresTierra.png",
    qty: 1,
    cat: "Entreteniment"
  },
  {
    name:"Guia Basica de Minecraft",
    desc:"",
    preu: 15.89,
    img: "http://172.16.8.1:3080/imatges/GuiaMine.png",
    qty: 1,
    cat: "Manuals"
  },
  {
    name:"La cocina de la abuela",
    desc:"",
    preu: 18.30,
    img: "http://172.16.8.1:3080/imatges/LlibreCuina.png",
    qty: 1,
    cat: "Manuals"
  },
  {
    name:"El señor de los anillos",
    desc:"Primera edicio",
    preu: 17.95,
    img: "http://172.16.8.1:3080/imatges/SeñorAnillos.jpg",
    qty: 1,
    cat: "Entreteniment"
  },
  {
    name:"Como provocar un incendio",
    desc:"",
    preu: 9.49,
    img: "http://172.16.8.1:3080/imatges/ComoIncendiar.jpg",
    qty: 1,
    cat: "Manuals"
  }
];
