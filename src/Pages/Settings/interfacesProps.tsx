import {
  IOptions, ISettingSetUp, IPersonalInformations,
} from './interfaces';

interface ISettingFieldProps {
  field: string,
  content: string,
  action?: () => void,
}

interface ISettingSetUpProps {
  settings: ISettingSetUp
}

interface IOptionsProps {
  options: IOptions
}

interface IPersonalInformationsProps {
  personalInformations: IPersonalInformations
}

export type {
  ISettingSetUpProps, ISettingFieldProps, IOptionsProps, IPersonalInformationsProps,
};
