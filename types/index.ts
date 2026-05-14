export type Sabor = 'maracuya' | 'fresa' | 'copoazu'
export type PresentacionLicor = '750ml' | '500ml' | '250ml'
export type Categoria = 'licor' | 'mermelada' | 'chocolate'

export interface ProductoLicor {
  id: string
  sabor: Sabor
  presentacion: PresentacionLicor
  nombre: string
  descripcion: string
  imageSrc: string
  imageAlt: string
}

export interface ProductoMermelada {
  id: string
  sabor: string
  peso: string
  nombre: string
  descripcion: string
  imageSrc: string
  imageAlt: string
}

export interface ProductoChocolate {
  id: string
  nombre: string
  peso: string
  descripcion: string
  beneficios: string[]
  imageSrc: string
  imageAlt: string
}
