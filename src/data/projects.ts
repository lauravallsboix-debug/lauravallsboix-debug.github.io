export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  color: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  url?: string
  route?: string
}

export const projects: Project[] = [
  {
    id: 'kintsugi',
    title: 'Kintsugi',
    category: 'Web Design',
    description:
      'Diseño UX/UI completo para plataforma de bienestar emocional. Identidad visual, sistema de componentes y prototipo interactivo en Figma.',
    tags: ['UX/UI', 'Figma', 'WordPress'],
    image: '/projects/kintsugi.png',
    color: '#f5e6c8',
  },
  {
    id: 'lull',
    title: "L'ULL",
    category: 'Marca Personal',
    description:
      "Marca propia multidisciplinar que combina joyería artesanal y diseño de ropa. Identidad completa, sub-marcas (La mar de be, Terreta), fichas técnicas y comunicación digital.",
    tags: ['Branding', 'Moda', 'Identidad'],
    image: '/projects/lull.png',
    color: '#d6e4f0',
    url: 'https://lull2.webnode.es/',
  },
  {
    id: 'semilla',
    title: 'Semilla',
    category: 'Diseño de Producto',
    description:
      'Tableros terapéuticos de madera para pacientes con Alzheimer. Cuatro piezas estacionales con aromas y elementos sensoriales para trabajar la orientación temporal y la estimulación cognitiva.',
    tags: ['SolidWorks', 'KeyShot', 'Producto'],
    image: '/projects/semilla.jpg',
    color: '#e8f0d8',
    imagePosition: '15% center',
  },
  {
    id: 'entrelascuerdas',
    title: 'Fisio Entrelascuerdas',
    category: 'Identidad de Marca',
    description:
      'Identidad visual completa para clínica de fisioterapia especializada en tenistas. Logo con columna vertebral integrada en las siglas FSO, paleta azul marino y naranja, tarjetería, póster ilustrado y merchandising.',
    tags: ['Branding', 'Logo', 'Illustrator'],
    image: '/projects/entrelascuerdas.png',
    color: '#fff3e0',
  },
  {
    id: 'velvet',
    title: 'Velvet Club',
    category: 'Diseño Gráfico',
    description:
      'Comunicación visual para bar de cócteles con estética art déco. Serie de carteles ilustrados, carta de menú y rótulo con tipografía dorada sobre azul profundo.',
    tags: ['Ilustración', 'Illustrator', 'Print'],
    image: '/projects/velvet.png',
    color: '#e8e4d8',
  },
  {
    id: 'catalogo',
    title: 'LLAR Homestyle',
    category: 'Diseño Editorial',
    description:
      'Catálogo y revista para marca de textil para el hogar. Maquetación, composición tipográfica, retoque fotográfico y preparación para imprenta.',
    tags: ['InDesign', 'Editorial', 'Print'],
    image: '/projects/catalogo.jpg',
    color: '#dce6f0',
  },
  {
    id: 'carteles',
    title: 'Ilustración & Carteles',
    category: 'Diseño Gráfico',
    description:
      'Serie de ilustraciones y carteles personales. Tarjetas navideñas ilustradas, logos de marca personal, carteles editoriales y comunicación visual firmados LVB.',
    tags: ['Ilustración', 'Illustrator', 'Photoshop'],
    image: '/projects/carteles.jpg',
    color: '#e8dde0',
    imagePosition: '35% center',
  },
  {
    id: 'uo',
    title: 'UO — Colección AW 26/27',
    category: 'Diseño de Producto',
    description:
      'Mini colección para campaña Otoño/Invierno 26-27 de la marca UO. Dos conceptos propios ("Tú a tu ritmo" y "Spoiler: me encantas") con calcetines, tazas, tote bag, bag charm y packaging regalo.',
    tags: ['MidJourney', 'Illustrator', 'Producto'],
    image: '/projects/uo.png',
    color: '#e8f0ee',
    route: '/proyecto/uo',
  },
]
