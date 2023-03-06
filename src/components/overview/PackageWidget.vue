<template>
  <div className="btb-overview-package-widget">
    <p className="widget_title">
      {{props.data.name}}
      <a className="inline-link" :href="packageUrl" target="_blank"
        rel="noreferrer">
        <fai :icon="['fas', 'external-link-alt' ]" fixedWidth size="xs" />
      </a>
    </p>
    <p className="widget_description">{{props.data.description}}</p>
    <p>
      <!-- <span className="widget_entry">{{lang.translate('overview.version_colon')}}</span> -->
      <span className="widget_entry">{{'Version:'}}</span>
      <span className="widget_value">{{props.data.version}}</span>
    </p>
    <p>
      <!-- <span className="widget_entry">{{lang.translate('overview.release_colon')}}</span> -->
      <span className="widget_entry">{{'Release Date:'}}</span>
      <span className="widget_value">{{reviseISOString(props.data.date).date}}</span>
    </p>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

import { defineComponent, computed, onMounted, reactive } from 'vue';

import reviseISOString from '../../utils/reviseISOString';

export default defineComponent({
  name: 'btb-overview-package-widget',
  props: {
    data: {
      type: Object as PropType<Record<string,any>>,
      default: function () {
        return []
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) { 
    const packageUrl = computed(()=>{
      return `https://www.npmjs.com/package/${props.data.name}`
    })

    return {
      reviseISOString,
      
      props,
      packageUrl
    }
  }
})
</script>