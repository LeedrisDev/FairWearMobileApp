import { IProductInformations } from '../../Tests/InterfaceProduct';

export default interface IProfileSetUp {
  isConnected: boolean
  image: String,
  name: String,
  historic: IProductInformations[],
}
