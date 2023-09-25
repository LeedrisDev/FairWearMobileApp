interface ISecurityInformations {
  password: string,
}
interface IPersonalInformations {
  username: string,
  email: string,
  phone: string,
}

interface IOptions {
  langage: string,
  theme: string,
}

interface ISettingSetUp {
  isConnected: boolean,
  personalInformations: IPersonalInformations,
  security: ISecurityInformations,
  options: IOptions,
}

export type {
  IOptions, IPersonalInformations, ISecurityInformations, ISettingSetUp,
};
