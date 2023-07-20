import IProfileSetUp from '../Pages/Profile/interfaces';
import {
  IOptions,
  IPersonalInformations,
  ISecurityInformations,
  ISettingSetUp,
} from '../Pages/Settings/interfaces';

const isConnected = false;

const profile: IProfileSetUp = {
  isConnected,
  image: '',
  name: 'Marie Maturana',
  historic: [],
};

const personalInformations: IPersonalInformations = {
  username: 'XXXXXXXX',
  email: 'XXXXXXXX',
  phone: 'XXXXXXXX',
};

const security: ISecurityInformations = {
  password: 'XXXXXXXX',
};

const options: IOptions = {
  langage: 'English',
  theme: 'Light',
};

const settings: ISettingSetUp = {
  isConnected,
  personalInformations,
  security,
  options,
};

export { profile, settings };
