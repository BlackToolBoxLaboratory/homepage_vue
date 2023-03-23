import { lang } from '@/plugins/btblab-prototype-languages';

/**
 * Shortcut to window open
 * @param link 
 */
const openLink = (link: Record<string, any>) => {
  window.open(link.url);
};

/**
 * For avoid
 * [Vue warn]: Property "$id" was accessed during render but is not defined on instance. 
 * @param langIndex 
 * @param index 
 * @param replacement 
 */
const translate = (langIndex: string, index: string, replacement?: Record<any, any>) => {
  return lang.translate(index, replacement)
}

const translate_type = (langIndex: string, data: Record<string, any>, column: Record<string, any>) => {
  const sep = data[column.id].split('||');
  let result = '';
  if (sep.length > 0) {
    result = sep
      .map((item: string) => {
        return translate(langIndex, item);
      })
      .join(' || ');
  } else {
    result = data[column.id] === 'useRef' ? 'useRef' : translate(langIndex, data[column.id]);
  }
  return result;
}

export { openLink, translate, translate_type };
