import type { ProductoLicor, ProductoMermelada, ProductoChocolate } from '@/types'

export const licores: ProductoLicor[] = [
  // Maracuyá — 3 presentaciones
  {
    id: 'tunche-maracuya-750',
    sabor: 'maracuya',
    presentacion: '750ml',
    nombre: 'El Tunche Maracuyá 750ml',
    descripcion:
      'La maracuyá amazónica en su punto exacto de madurez. Ácida, vibrante, casi salvaje. Maceración lenta en pequeños lotes, una complejidad que sorprende desde el primer sorbo.',
    imageSrc: '/images/licor_maracuya.png',
    imageAlt: 'Botella El Tunche Maracuyá 750ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-maracuya-500',
    sabor: 'maracuya',
    presentacion: '500ml',
    nombre: 'El Tunche Maracuyá 500ml',
    descripcion:
      'La maracuyá amazónica en su punto exacto de madurez. Ácida, vibrante, casi salvaje. Maceración lenta en pequeños lotes, una complejidad que sorprende desde el primer sorbo.',
    imageSrc: '/images/licor_maracuya.png',
    imageAlt: 'Botella El Tunche Maracuyá 500ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-maracuya-250',
    sabor: 'maracuya',
    presentacion: '250ml',
    nombre: 'El Tunche Maracuyá 250ml',
    descripcion:
      'La maracuyá amazónica en su punto exacto de madurez. Ácida, vibrante, casi salvaje. Maceración lenta en pequeños lotes, una complejidad que sorprende desde el primer sorbo.',
    imageSrc: '/images/licor_maracuya.png',
    imageAlt: 'Botella El Tunche Maracuyá 250ml — licor artesanal El Huerto del Tunche',
  },
  // Fresa — 3 presentaciones
  {
    id: 'tunche-fresa-750',
    sabor: 'fresa',
    presentacion: '750ml',
    nombre: 'El Tunche Fresa 750ml',
    descripcion:
      'Fresas andinas cultivadas a 3,400 metros en el Valle Sagrado. La altura y el suelo fértil otorgan una concentración de aroma imposible de replicar. Vibrante, honesto, profundamente cusqueño.',
    imageSrc: '/images/licor_fresa.png',
    imageAlt: 'Botella El Tunche Fresa 750ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-fresa-500',
    sabor: 'fresa',
    presentacion: '500ml',
    nombre: 'El Tunche Fresa 500ml',
    descripcion:
      'Fresas andinas cultivadas a 3,400 metros en el Valle Sagrado. La altura y el suelo fértil otorgan una concentración de aroma imposible de replicar. Vibrante, honesto, profundamente cusqueño.',
    imageSrc: '/images/licor_fresa.png',
    imageAlt: 'Botella El Tunche Fresa 500ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-fresa-250',
    sabor: 'fresa',
    presentacion: '250ml',
    nombre: 'El Tunche Fresa 250ml',
    descripcion:
      'Fresas andinas cultivadas a 3,400 metros en el Valle Sagrado. La altura y el suelo fértil otorgan una concentración de aroma imposible de replicar. Vibrante, honesto, profundamente cusqueño.',
    imageSrc: '/images/licor_fresa.png',
    imageAlt: 'Botella El Tunche Fresa 250ml — licor artesanal El Huerto del Tunche',
  },
  // Copoazú — 3 presentaciones
  {
    id: 'tunche-copoazu-750',
    sabor: 'copoazu',
    presentacion: '750ml',
    nombre: 'El Tunche Copoazú 750ml',
    descripcion:
      'Destilado del copoazú fresco de los valles de Huayopata. Captura la esencia más exótica de la Amazonía: cacao blanco, guanábana, dulzura que persiste. Un licor con carácter propio.',
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Botella El Tunche Copoazú 750ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-copoazu-500',
    sabor: 'copoazu',
    presentacion: '500ml',
    nombre: 'El Tunche Copoazú 500ml',
    descripcion:
      'Destilado del copoazú fresco de los valles de Huayopata. Captura la esencia más exótica de la Amazonía: cacao blanco, guanábana, dulzura que persiste. Un licor con carácter propio.',
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Botella El Tunche Copoazú 500ml — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-copoazu-250',
    sabor: 'copoazu',
    presentacion: '250ml',
    nombre: 'El Tunche Copoazú 250ml',
    descripcion:
      'Destilado del copoazú fresco de los valles de Huayopata. Captura la esencia más exótica de la Amazonía: cacao blanco, guanábana, dulzura que persiste. Un licor con carácter propio.',
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Botella El Tunche Copoazú 250ml — licor artesanal El Huerto del Tunche',
  },
]

export const mermeladas: ProductoMermelada[] = [
  {
    id: 'mermelada-copoazu-200',
    sabor: 'Copoazú',
    peso: '200g',
    nombre: 'Mermelada de Copoazú 200g',
    descripcion:
      'Mermelada natural de producción artesanal. Siente la fruta misma en cada porción, el dulzor y la explosión del copoazú llevado a su extremo más sabroso.',
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Mermelada artesanal de Copoazú 200g — El Huerto del Tunche',
  },
  {
    id: 'mermelada-mango-200',
    sabor: 'Mango',
    peso: '200g',
    nombre: 'Mermelada de Mango 200g',
    descripcion:
      'Mermelada natural de producción artesanal. Siente la fruta misma en cada porción, el dulzor y la explosión del mango llevado a su extremo más sabroso.',
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Mermelada artesanal de Mango 200g — El Huerto del Tunche',
  },
]

export const chocolates: ProductoChocolate[] = [
  {
    id: 'chocolate-copoazu-200',
    nombre: 'Chocolate de Copoazú 200g',
    peso: '200g',
    descripcion:
      'Al ser familiar del cacao, el Copoazú pasa por el mismo proceso de creación para hacer un "chocolate de taza". Gracias a los beneficios del copoazú, este no tiene grasa, es digestivo y antioxidante.',
    beneficios: ['Sin grasa', 'Digestivo', 'Antioxidante'],
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Chocolate de Copoazú 200g — El Huerto del Tunche',
  },
]
