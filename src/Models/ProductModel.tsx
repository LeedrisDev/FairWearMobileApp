export interface ProductModel {
  'id': number,
  'name': string,
  'country': string,
  'image': string,
  'globalScore': number,
  'scores': {
    'moral': 0,
    'animal': 0,
    'environmental': 0
  },
  'composition': [
    {
      'percentage': 0,
      'component': 'string'
    },
  ],
  'brand': 'string'

}
