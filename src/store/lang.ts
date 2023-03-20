import { ref, onBeforeMount, watch } from 'vue';
import { defineStore } from "pinia";

import { lang } from '@/plugins/btblab-prototype-languages';

export const useLanguageStore = defineStore(
  "language",
  () => {
    const _langIndex = ref(lang.get().index);

    onBeforeMount(() => {
      lang.set(_langIndex.value);
    })

    return {
      langIndex: _langIndex,
    }
  },
  {
    persist: true,
  }
)