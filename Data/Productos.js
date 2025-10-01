// Lista de productos de la tienda 
const productos = [ 
  { 
    id: 1, 
    nombre: "Aguacate", 
    categoria: "frutas", 
    imagen: "Imágenes/aguacate.png" 
  }, 
  { 
    id: 2, 
    nombre: "Ajo", 
    categoria: "verduras", 
    imagen: "Imágenes/ajo.png" 
  }, 
  { 
    id: 3, 
    nombre: "Almendra", 
    categoria: "proteinas", 
    imagen: "Imágenes/almendra.png" 
  }, 
  { 
    id: 4, 
    nombre: "Arándano", 
    categoria: "frutas", 
    imagen: "Imágenes/arandano.png" 
  }, 
  { 
    id: 5, 
    nombre: "Arroz", 
    categoria: "cereales", 
    imagen: "Imágenes/arroz.png" 
  }, 
  { 
    id: 6, 
    nombre: "Arveja", 
    categoria: "legumbres", 
    imagen: "Imágenes/arveja.png" 
  }, 
  { 
    id: 7, 
    nombre: "Avena", 
    categoria: "cereales", 
    imagen: "Imágenes/avena.png" 
  }, 
  { 
    id: 8, 
    nombre: "Banano", 
    categoria: "frutas", 
    imagen: "Imágenes/banano.png" 
  }, 
  { 
    id: 9, 
    nombre: "Brocoli", 
    categoria: "verduras", 
    imagen: "Imágenes/brocoli.png" 
  }, 
  { 
    id: 10, 
    nombre: "Calabaza", 
    categoria: "verduras", 
    imagen: "Imágenes/calabaza.png" 
  }, 
  { 
    id: 11, 
    nombre: "Carne de cerdo", 
    categoria: "proteinas", 
    imagen: "Imágenes/cerdo.png" 
  }, 
  { 
    id: 12, 
    nombre: "Carne de res", 
    categoria: "proteinas", 
    imagen: "Imágenes/carne.png" 
  }, 
  { 
    id: 13, 
    nombre: "Cebada", 
    categoria: "cereales", 
    imagen: "Imágenes/cebada.png" 
  }, 
  { 
    id: 14, 
    nombre: "Cebolla", 
    categoria: "verduras", 
    imagen: "Imágenes/cebolla.png" 
  }, 
  { 
    id: 15, 
    nombre: "Coliflor", 
    categoria: "verduras", 
    imagen: "Imágenes/coliflor.png" 
  }, 
  { 
    id: 16, 
    nombre: "Durazno", 
    categoria: "frutas", 
    imagen: "Imágenes/durazno.png" 
  }, 
  { 
    id: 17, 
    nombre: "Espinaca",
    categoria: "verduras", 
    imagen: "Imágenes/espinaca.png" 
  }, 
  { 
    id: 18, 
    nombre: "Fresa", 
    categoria: "frutas", 
    imagen: "Imágenes/fresa.png" 
  }, 
  { 
    id: 19, 
    nombre: "Frijol", 
    categoria: "legumbres", 
    imagen: "Imágenes/frijol.png" 
  }, 
  { 
    id: 20, 
    nombre: "Garbanzo", 
    categoria: "legumbres", 
    imagen: "Imágenes/garbanzo.png" 
  }, 
  { 
    id: 21, 
    nombre: "Guayaba",  
    categoria: "frutas", 
    imagen: "Imágenes/guayaba.png" 
  }, 
  { 
    id: 22, 
    nombre: "Helado de leche",
    categoria: "lacteos", 
    imagen: "Imágenes/helado.png" 
  }, 
  { 
    id: 23, 
    nombre: "Huevo", 
    categoria: "proteinas", 
    imagen: "Imágenes/huevo.png" 
  },
  { 
    id: 24, 
    nombre: "Kiwi",
    categoria: "frutas", 
    imagen: "Imágenes/kiwi.png" 
  },  
  { 
    id: 25, 
    nombre: "Leche", 
    categoria: "lacteos", 
    imagen: "Imágenes/leche.png" 
  }, 
  { 
    id: 26, 
    nombre: "Lechuga",  
    categoria: "verduras", 
    imagen: "Imágenes/lechuga.png" 
  }, 
  { 
    id: 27, 
    nombre: "Lenteja", 
    categoria: "legumbres", 
    imagen: "Imágenes/lenteja.png" 
  }, 
  { 
    id: 28, 
    nombre: "Maíz", 
    categoria: "cereales", 
    imagen: "Imágenes/maiz.png" 
  }, 
  { 
    id: 29, 
    nombre: "Mango",  
    categoria: "frutas", 
    imagen: "Imágenes/mango.png" 
  }, 
  { 
    id: 30, 
    nombre: "Maní", 
    categoria: "proteinas", 
    imagen: "Imágenes/mani.png" 
  }, 
  { 
    id: 31, 
    nombre: "Manzana", 
    categoria: "frutas", 
    imagen: "Imágenes/manzana.png" 
  },
  { 
    id: 32, 
    nombre: "Melón",
    categoria: "frutas", 
    imagen: "Imágenes/melon.png" 
  },  
  { 
    id: 33, 
    nombre: "Mora", 
    categoria: "frutas", 
    imagen: "Imágenes/mora.png" 
  }, 
  { 
    id: 34, 
    nombre: "Naranja", 
    categoria: "frutas", 
    imagen: "Imágenes/naranja.png" 
  }, 
  { 
    id: 35, 
    nombre: "Nuez", 
    categoria: "proteinas", 
    imagen: "Imágenes/nuez.png" 
  }, 
  { 
    id: 36, 
    nombre: "Pan", 
    categoria: "cereales", 
    imagen: "Imágenes/pan.png" 
  }, 
  { 
    id: 37, 
    nombre: "Papa", 
    categoria: "verduras", 
    imagen: "Imágenes/papa.png" 
  }, 
  { 
    id: 38, 
    nombre: "Papaya", 
    categoria: "frutas", 
    imagen: "Imágenes/papaya.png" 
  }, 
    { 
    id: 39, 
    nombre: "Pasta",
    categoria: "cereales", 
    imagen: "Imágenes/espagueti.png" 
  }, 
  { 
    id: 40, 
    nombre: "Pavo",
    categoria: "proteinas", 
    imagen: "Imágenes/pavo.png" 
  }, 
  { 
    id: 41, 
    nombre: "Pepino", 
    categoria: "verduras", 
    imagen: "Imágenes/pepino.png" 
  }, 
  { 
    id: 42, 
    nombre: "Pera", 
    categoria: "frutas", 
    imagen: "Imágenes/pera.png" 
  }, 
  { 
    id: 43, 
    nombre: "Pescado", 
    categoria: "proteinas", 
    imagen: "Imágenes/pescado.png" 
  }, 
  { 
    id: 44, 
    nombre: "Pollo",  
    categoria: "proteinas", 
    imagen: "Imágenes/pollo.png" 
  }, 
  { 
    id: 45, 
    nombre: "Queso", 
    categoria: "lacteos", 
    imagen: "Imágenes/queso.png" 
  }, 
  { 
    id: 46, 
    nombre: "Quinoa", 
    categoria: "cereales", 
    imagen: "Imágenes/quinoa.png" 
  }, 
  { 
    id: 47, 
    nombre: "Remolacha", 
    categoria: "verduras", 
    imagen: "Imágenes/remolacha.png" 
  }, 
  { 
    id: 48, 
    nombre: "Sandía", 
    categoria: "frutas", 
    imagen: "Imágenes/sandia.png" 
  }, 
  { 
    id: 49, 
    nombre: "Sardina",
    categoria: "proteinas", 
    imagen: "Imágenes/sardina.png" 
  }, 
  { 
    id: 50, 
    nombre: "Tomate", 
    categoria: "verduras", 
    imagen: "Imágenes/tomate.png" 
  }, 
  { 
    id: 51, 
    nombre: "Trigo",
    categoria: "cereales", 
    imagen: "Imágenes/trigo.png" 
  }, 
  { 
    id: 52, 
    nombre: "Uva", 
    categoria: "frutas", 
    imagen: "Imágenes/uva.png" 
  }, 
  { 
    id: 53, 
    nombre: "Yogur", 
    categoria: "lacteos", 
    imagen: "Imágenes/yogur.png" 
  }, 
  { 
    id: 54, 
    nombre: "Zanahoria", 
    categoria: "verduras", 
    imagen: "Imágenes/zanahoria.png" 
  }, 
];