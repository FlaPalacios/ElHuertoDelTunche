import type { ProductoLicor } from '@/types'

export const licores: ProductoLicor[] = [
  {
    id: 'tunche-maracuya',
    sabor: 'maracuya',
    nombre: 'El Tunche Maracuyá',
    descripcion:
      'La maracuyá amazónica en su punto exacto de madurez. Ácida, vibrante, casi salvaje. Maceración lenta en pequeños lotes, una complejidad que sorprende desde el primer sorbo.',
    presentaciones: ['750ml', '500ml', '250ml'],
    imageSrc: '/images/licor_maracuya.png',
    imageAlt: 'Botella El Tunche Maracuyá — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-fresa',
    sabor: 'fresa',
    nombre: 'El Tunche Fresa',
    descripcion:
      'Fresas andinas cultivadas a 3,400 metros en el Valle Sagrado. La altura y el suelo fértil otorgan una concentración de aroma imposible de replicar. Vibrante, honesto, profundamente cusqueño.',
    presentaciones: ['750ml', '500ml', '250ml'],
    imageSrc: '/images/licor_fresa.png',
    imageAlt: 'Botella El Tunche Fresa — licor artesanal El Huerto del Tunche',
  },
  {
    id: 'tunche-copoazu',
    sabor: 'copoazu',
    nombre: 'El Tunche Copoazú',
    descripcion:
      'Destilado del copoazú fresco de los valles de Huayopata. Captura la esencia más exótica de la Amazonía: cacao blanco, guanábana, dulzura que persiste. Un licor con carácter propio.',
    presentaciones: ['750ml', '500ml', '250ml'],
    imageSrc: '/images/licor_copoazu.png',
    imageAlt: 'Botella El Tunche Copoazú — licor artesanal El Huerto del Tunche',
  },
]
