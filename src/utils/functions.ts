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

export { openLink, translate };
