import { npmRegistry as service } from '../plugins/axios';

export default {
  getPackageInfo: function (Id: string) {
    return service.get(`/${Id}`);
  },
  getPackages: function (lang: string) {
    let paramText = '@blacktoolbox';
    switch (lang) {
      case 'js':
        paramText += '/prototype-';
        break;
      case 'react':
        paramText += '/react-';
        break;
      case 'vue':
        paramText += '/vue-';
        break;
    }
    return service.get('/-/v1/search', {
      params: {
        text: paramText,
      },
    });
  },
};
