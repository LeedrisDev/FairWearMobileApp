export interface IProductScore {
  moral: number,
  animal: number,
  environmental: number,
}
export interface IProductComposition {
  percentage: number,
  component: string,
}
export interface IProductInformations {
  name: string,
  brand: string,
  country: string,
  image: string,
  globalScore: number,
  scores : IProductScore,
  composition : IProductComposition[],
  alternatives: IAlternativeProduct[],
}

export interface IGlobalProductInformations {
  name: string,
  brand: string,
  country: string,
  image: string,
  globalScore: number,
}

export interface IAlternativeProduct {
  name: string,
  image : ImageData,
  link: string,
}
