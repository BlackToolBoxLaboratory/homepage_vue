import { ref, onBeforeMount, onMounted, watchSyncEffect } from 'vue';
import { defineStore } from "pinia";

import { lang } from '@/plugins/btblab-prototype-languages';

export type LanguageStore = {
  lang: string,
  menu: () => any[],
  get: () => string,
  set: (index: string) => string,
  translate: (index: string, replacement?: Record<any, any>) => string
}

export const useLanguageStore = defineStore(
  "language",
  (): LanguageStore => {
    const _lang = ref('');

    onBeforeMount(()=>{
      lang.set(_lang.value);
    })

    onMounted(() => {
      if(!_lang.value) {
        _lang.value = lang.get().index;
      }
    })

    return {
      lang: _lang,
      ...lang
    }
  },
  {
    persist: true,
  }
)