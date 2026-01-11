export interface Instrument {
  id: string;
  name: string;
  brand: string;
  type: string;
  color: string;
  accessories: string[];
  photo: string;
  description: string;
  price: number;
}

export const instrumentsData: Instrument[] = [
  {
    id: "1",
    name: "Guitarra Eléctrica Stratocaster",
    brand: "Fender",
    type: "cuerdas",
    color: "Sunburst",
    accessories: ["Cable", "Púas", "Correa", "Estuche"],
    photo: "https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La Fender Stratocaster es una guitarra eléctrica de cuerpo sólido, conocida por su sonido brillante y versátil, ideal para diversos géneros musicales desde blues hasta rock y más allá.",
    price: 12999
  },
  {
    id: "2",
    name: "Bajo Eléctrico Jazz Bass",
    brand: "Fender",
    type: "cuerdas",
    color: "Negro",
    accessories: ["Cable", "Correa", "Estuche rígido"],
    photo: "https://images.pexels.com/photos/2118045/pexels-photo-2118045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "El Fender Jazz Bass ofrece un tono rico y versátil con su configuración de pastillas divididas, perfecto para cualquier estilo musical desde funk hasta rock.",
    price: 14599
  },
  {
    id: "3",
    name: "Saxofón Alto",
    brand: "Yamaha",
    type: "viento",
    color: "Dorado",
    accessories: ["Boquilla", "Cañas", "Estuche", "Kit de limpieza"],
    photo: "https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "El saxofón alto Yamaha es conocido por su excelente afinación, respuesta rápida y sonido cálido, ideal tanto para estudiantes como para profesionales.",
    price: 22500
  },
  {
    id: "4",
    name: "Trompeta en Bb",
    brand: "Bach",
    type: "viento",
    color: "Plateado",
    accessories: ["Boquilla", "Estuche", "Kit de limpieza", "Aceite para pistones"],
    photo: "https://images.pexels.com/photos/159768/trumpet-music-brass-orchestra-159768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La trompeta Bach Stradivarius es el estándar de excelencia para músicos profesionales, ofreciendo un sonido brillante y una excelente respuesta.",
    price: 19999
  },
  {
    id: "5",
    name: "Batería Acústica Stage Custom",
    brand: "Yamaha",
    type: "percusion",
    color: "Rojo Cereza",
    accessories: ["Platillos", "Banqueta", "Baquetas", "Afinador"],
    photo: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La batería Yamaha Stage Custom ofrece cascos de abedul con un sonido cálido y potente, ideal para diversos estilos musicales desde jazz hasta rock.",
    price: 32000
  },
  {
    id: "6",
    name: "Cajón Flamenco",
    brand: "LP",
    type: "percusion",
    color: "Natural",
    accessories: ["Funda", "Tutorial de técnicas"],
    photo: "https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "El cajón LP ofrece un sonido auténtico con graves potentes y agudos nítidos, perfecto para flamenco y música acústica.",
    price: 3500
  },
  {
    id: "7",
    name: "Piano Digital Clavinova",
    brand: "Yamaha",
    type: "teclados",
    color: "Negro",
    accessories: ["Banco", "Pedales", "Auriculares", "Adaptador"],
    photo: "https://images.pexels.com/photos/164935/pexels-photo-164935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "El Clavinova de Yamaha ofrece una experiencia similar al piano acústico con muestreo de instrumento de alta calidad y un tacto auténtico.",
    price: 41999
  },
  {
    id: "8",
    name: "Sintetizador Workstation",
    brand: "Roland",
    type: "teclados",
    color: "Negro",
    accessories: ["Adaptador", "Manual", "Cable MIDI"],
    photo: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La estación de trabajo Roland Fantom combina sintetizador, secuenciador y controlador en uno, ofreciendo sonidos realistas e infinitas posibilidades creativas.",
    price: 52000
  },
  {
    id: "9",
    name: "Controlador MIDI",
    brand: "Native Instruments",
    type: "electronicos",
    color: "Negro",
    accessories: ["Cable USB", "Software incluido"],
    photo: "https://images.pexels.com/photos/1656066/pexels-photo-1656066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "El controlador MIDI Komplete Kontrol ofrece una integración perfecta con software de producción musical y una excelente sensación de teclas.",
    price: 12900
  },
  {
    id: "10",
    name: "Interfaz de Audio",
    brand: "Focusrite",
    type: "electronicos",
    color: "Rojo",
    accessories: ["Cable USB", "Software de grabación", "Manual"],
    photo: "https://images.pexels.com/photos/3800520/pexels-photo-3800520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La interfaz Scarlett ofrece preamplificadores de alta calidad y baja latencia para grabaciones profesionales en casa o estudio.",
    price: 4599
  },
  {
    id: "11",
    name: "Violín 4/4",
    brand: "Stradivarius",
    type: "cuerdas",
    color: "Madera Natural",
    accessories: ["Arco", "Resina", "Estuche", "Soporte de hombro"],
    photo: "https://images.pexels.com/photos/8094307/pexels-photo-8094307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Violín de tamaño completo con tono cálido y rica resonancia, ideal tanto para estudiantes avanzados como para profesionales.",
    price: 18500
  },
  {
    id: "12",
    name: "Flauta Traversa",
    brand: "Pearl",
    type: "viento",
    color: "Plateado",
    accessories: ["Estuche", "Varilla de limpieza", "Paño"],
    photo: "https://images.pexels.com/photos/761228/pexels-photo-761228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Flauta traversa profesional con cabeza y cuerpo de plata, ofreciendo un sonido brillante y una respuesta rápida.",
    price: 15999
  }
];
