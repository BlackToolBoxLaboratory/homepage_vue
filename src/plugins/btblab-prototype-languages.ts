import Language, { initializer } from '@blacktoolbox/prototype-languages';

import en from '@/assets/languages/en';
import zh from '@/assets/languages/zh';

initializer([
  { index: 'en', label: 'English', dictionary: en },
  { index: 'zh', label: '繁體中文', dictionary: zh },
]);

export const lang = new Language();
