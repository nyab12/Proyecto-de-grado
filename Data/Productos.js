// Lista de productos de la tienda 
const productos = [ 
  { 
    id: 1, 
    nombre: "Aguacate", 
    categoria: "frutas", 
    imagen: "imagenes/aguacate.png" 
  }, 
  { 
    id: 2, 
    nombre: "Ajo", 
    categoria: "verduras", 
    imagen: "imagenes/ajo.png" 
  }, 
  { 
    id: 3, 
    nombre: "Almendra", 
    categoria: "proteinas", 
    imagen: "imagenes/almendra.png" 
  }, 
  { 
    id: 4, 
    nombre: "Arándano", 
    categoria: "frutas", 
    imagen: "imagenes/arandano.png" 
  }, 
  { 
    id: 5, 
    nombre: "Arroz", 
    categoria: "cereales", 
    imagen: "imagenes/arroz.png" 
  }, 
  { 
    id: 6, 
    nombre: "Arveja", 
    categoria: "legumbres", 
    imagen: "imagenes/arveja.png" 
  }, 
  { 
    id: 7, 
    nombre: "Avena", 
    categoria: "cereales", 
    imagen: "imagenes/avena.png" 
  }, 
  { 
    id: 8, 
    nombre: "Banano", 
    categoria: "frutas", 
    imagen: "imagenes/banano.png" 
  }, 
  { 
    id: 9, 
    nombre: "Brocoli", 
    categoria: "verduras", 
    imagen: "imagenes/brocoli.png" 
  }, 
  { 
    id: 10, 
    nombre: "Calabaza", 
    categoria: "verduras", 
    imagen: "imagenes/calabaza.png" 
  }, 
  { 
    id: 11, 
    nombre: "Carne de cerdo", 
    categoria: "proteinas", 
    imagen: "imagenes/cerdo.png" 
  }, 
  { 
    id: 12, 
    nombre: "Carne de res", 
    categoria: "proteinas", 
    imagen: "imagenes/carne.png" 
  }, 
  { 
    id: 13, 
    nombre: "Cebada", 
    categoria: "cereales", 
    imagen: "imagenes/cebada.png" 
  }, 
  { 
    id: 14, 
    nombre: "Cebolla", 
    categoria: "verduras", 
    imagen: "imagenes/cebolla.png" 
  }, 
  { 
    id: 15, 
    nombre: "Coliflor", 
    categoria: "verduras", 
    imagen: "imagenes/coliflor.png" 
  }, 
  { 
    id: 16, 
    nombre: "Durazno", 
    categoria: "frutas", 
    imagen: "imagenes/durazno.png" 
  }, 
  { 
    id: 17, 
    nombre: "Espinaca",
    categoria: "verduras", 
    imagen: "imagenes/espinaca.png" 
  }, 
  { 
    id: 18, 
    nombre: "Fresa", 
    categoria: "frutas", 
    imagen: "imagenes/fresa.png" 
  }, 
  { 
    id: 19, 
    nombre: "Frijol", 
    categoria: "legumbres", 
    imagen: "imagenes/frijol.png" 
  }, 
  { 
    id: 20, 
    nombre: "Garbanzo", 
    categoria: "legumbres", 
    imagen: "imagenes/garbanzo.png" 
  }, 
  { 
    id: 21, 
    nombre: "Guayaba",  
    categoria: "frutas", 
    imagen: "imagenes/guayaba.png" 
  }, 
  { 
    id: 22, 
    nombre: "Helado de leche",
    categoria: "lacteos", 
    imagen: "imagenes/helado.png" 
  }, 
  { 
    id: 23, 
    nombre: "Huevo", 
    categoria: "proteinas", 
    imagen: "imagenes/huevo.png" 
  },
  { 
    id: 24, 
    nombre: "Kiwi",
    categoria: "frutas", 
    imagen: "imagenes/kiwi.png" 
  },  
  { 
    id: 25, 
    nombre: "Leche", 
    categoria: "lacteos", 
    imagen: "imagenes/leche.png" 
  }, 
  { 
    id: 26, 
    nombre: "Lechuga",  
    categoria: "verduras", 
    imagen: "imagenes/lechuga.png" 
  }, 
  { 
    id: 27, 
    nombre: "Lenteja", 
    categoria: "legumbres", 
    imagen: "imagenes/lenteja.png" 
  }, 
  { 
    id: 28, 
    nombre: "Maíz", 
    categoria: "cereales", 
    imagen: "imagenes/maiz.png" 
  }, 
  { 
    id: 29, 
    nombre: "Mango",  
    categoria: "frutas", 
    imagen: "imagenes/mango.png" 
  }, 
  { 
    id: 30, 
    nombre: "Maní", 
    categoria: "proteinas", 
    imagen: "imagenes/mani.png" 
  }, 
  { 
    id: 31, 
    nombre: "Manzana", 
    categoria: "frutas", 
    imagen: "imagenes/manzana.png" 
  },
  { 
    id: 32, 
    nombre: "Melón",
    categoria: "frutas", 
    imagen: "imagenes/melon.png" 
  },  
  { 
    id: 33, 
    nombre: "Mora", 
    categoria: "frutas", 
    imagen: "imagenes/mora.png" 
  }, 
  { 
    id: 34, 
    nombre: "Naranja", 
    categoria: "frutas", 
    imagen: "imagenes/naranja.png" 
  }, 
  { 
    id: 35, 
    nombre: "Nuez", 
    categoria: "proteinas", 
    imagen: "imagenes/nuez.png" 
  }, 
  { 
    id: 36, 
    nombre: "Pan", 
    categoria: "cereales", 
    imagen: "imagenes/pan.png" 
  }, 
  { 
    id: 37, 
    nombre: "Papa", 
    categoria: "verduras", 
    imagen: "imagenes/papa.png" 
  }, 
  { 
    id: 38, 
    nombre: "Papaya", 
    categoria: "frutas", 
    imagen: "imagenes/papaya.png" 
  }, 
    { 
    id: 39, 
    nombre: "Pasta",
    categoria: "cereales", 
    imagen: "imagenes/espagueti.png" 
  }, 
  { 
    id: 40, 
    nombre: "Pavo",
    categoria: "proteinas", 
    imagen: "imagenes/pavo.png" 
  }, 
  { 
    id: 41, 
    nombre: "Pepino", 
    categoria: "verduras", 
    imagen: "imagenes/pepino.png" 
  }, 
  { 
    id: 42, 
    nombre: "Pera", 
    categoria: "frutas", 
    imagen: "imagenes/pera.png" 
  }, 
  { 
    id: 43, 
    nombre: "Pescado", 
    categoria: "proteinas", 
    imagen: "imagenes/pescado.png" 
  }, 
  { 
    id: 44, 
    nombre: "Pollo",  
    categoria: "proteinas", 
    imagen: "imagenes/pollo.png" 
  }, 
  { 
    id: 45, 
    nombre: "Queso", 
    categoria: "lacteos", 
    imagen: "imagenes/queso.png" 
  }, 
  { 
    id: 46, 
    nombre: "Quinoa", 
    categoria: "cereales", 
    imagen: "imagenes/quinoa.png" 
  }, 
  { 
    id: 47, 
    nombre: "Remolacha", 
    categoria: "verduras", 
    imagen: "imagenes/remolacha.png" 
  }, 
  { 
    id: 48, 
    nombre: "Sandía", 
    categoria: "frutas", 
    imagen: "imagenes/sandia.png" 
  }, 
  { 
    id: 49, 
    nombre: "Sardina",
    categoria: "proteinas", 
    imagen: "imagenes/sardina.png" 
  }, 
  { 
    id: 50, 
    nombre: "Tomate", 
    categoria: "verduras", 
    imagen: "imagenes/tomate.png" 
  }, 
  { 
    id: 51, 
    nombre: "Trigo",
    categoria: "cereales", 
    imagen: "imagenes/trigo.png" 
  }, 
  { 
    id: 52, 
    nombre: "Uva", 
    categoria: "frutas", 
    imagen: "imagenes/uva.png" 
  }, 
  { 
    id: 53, 
    nombre: "Yogur", 
    categoria: "lacteos", 
    imagen: "imagenes/yogur.png" 
  }, 
  { 
    id: 54, 
    nombre: "Zanahoria", 
    categoria: "verduras", 
    imagen: "imgenes/zanahoria.png" 
  }, 
];