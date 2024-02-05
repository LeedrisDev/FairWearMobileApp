export interface ProductModel {
  'name': string,
  'country': string,
  'image': string,
  'globalScore': number,
  'scores': {
    'moral': number,
    'animal': number,
    'environmental': number
  },
  'composition':
  {
    'percentage': number,
    'component': string
  }[],
  'brand': string

}
