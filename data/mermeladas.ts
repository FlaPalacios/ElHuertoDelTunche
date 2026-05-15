import type { ProductoMermelada } from '@/types'

export const mermeladas: ProductoMermelada[] = [
  {
    id: 'mermelada-copoazu-200',
    sabor: 'Copoazú',
    peso: '200g',
    nombre: 'Mermelada de Copoazú 200g',
    descripcion:
      'Mermelada natural de producción artesanal. Siente la fruta misma en cada porción, el dulzor y la explosión del copoazú llevado a su extremo más sabroso.',
    imageSrc: '/images/mermeladas_presentacion.png',
    imageAlt: 'Mermelada artesanal de Copoazú 200g — El Huerto del Tunche',
  },
  {
    id: 'mermelada-mango-200',
    sabor: 'Mango',
    peso: '200g',
    nombre: 'Mermelada de Mango 200g',
    descripcion:
      'Mango peruano de temporada en su versión más concentrada. Artesanal, sin conservantes, con toda la intensidad tropical de la fruta de la región.',
    imageSrc: '/images/mermeladas_presentacion.png',
    imageAlt: 'Mermelada artesanal de Mango 200g — El Huerto del Tunche',
  },
]
