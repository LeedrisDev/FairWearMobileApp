import IProfileSetUp from '../Pages/Profile/interfaces';
import {
  IOptions,
  IPersonalInformations,
  ISecurityInformations,
  ISettingSetUp,
} from '../Pages/Settings/interfaces';

const isConnected = true;

const profile: IProfileSetUp = {
  isConnected,
  image: '',
  name: 'Sarah Jones',
  historic: [],
  numberOfScan: 10,
  score: 240,
  level: 2,
  todos: [1, 1, 0],
};

const personalInformations: IPersonalInformations = {
  username: 'sarahjns',
  email: 'sarah.jones@gmail.com',
  phone: '(565) 555-1234',
};

const security: ISecurityInformations = {
  password: '*********',
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
