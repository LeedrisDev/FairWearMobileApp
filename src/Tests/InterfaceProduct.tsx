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
  alternatives: string[],
}

export interface IGlobalProductInformations {
  name: string,
  brand: string,
  country: string,
  image: string,
  globalScore: number,
}
