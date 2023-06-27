import {
  IOptions, ISettingSetUp, IPersonalInformations,
} from './interfaces';

interface ISettingFieldProps {
  field: string,
  content: string,
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

export {
  ISettingSetUpProps, ISettingFieldProps, IOptionsProps, IPersonalInformationsProps,
};
