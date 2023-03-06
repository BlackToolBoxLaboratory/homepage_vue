<template>
  <module-page class="btb-overview">
    <module-page-head title="Overview" :btnList="pageInfo.linkList" @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ 'JAVASCRIPT' }}
      </template>
      <template v-if="packages['js'].length">
        <div className="grid-row">
          <template v-for="entry in packages['js']" :key="entry.package.name">
            <div className="grid-col-lg-6">
              <PackageWidget :data="entry.package" type="js" />
            </div>
          </template>
        </div>
      </template>
    </module-section>
    <module-section>
      <template #head>
        {{ 'REACT' }}
      </template>
      <template v-if="packages['js'].length">
        <div className="grid-row">
          <template v-for="entry in packages['react']" :key="entry.package.name">
            <div className="grid-col-lg-6">
              <PackageWidget :data="entry.package" type="react" />
            </div>
          </template>
        </div>
      </template>
    </module-section>
    <module-section>
      <template #head>
        {{ 'VUE' }}
      </template>
      <template v-if="packages['vue'].length">
        <div className="grid-row">
          <template v-for="entry in packages['vue']" :key="entry.package.name">
            <div className="grid-col-lg-6">
              <PackageWidget :data="entry.package" type="vue" />
            </div>
          </template>
        </div>
      </template>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

import API_npmRegistry from '../../apis/npmRegistry';

import { openLink } from '../../utils/functions';

import pageInfo from './pageInfo';
import PackageWidget from './PackageWidget.vue';

export default defineComponent({
  name: 'btb-overview',
  components: {
    PackageWidget
  },
  setup() {
    const packages = reactive<Record<string, any>>({
      js: [],
      react: [],
      vue: [],
    });

    function _getPackages(type: string) {
      API_npmRegistry.getPackages(type).then(({ data }) => {
        packages[type] = data.objects;
      });
    }

    onMounted(() => {
      _getPackages('js');
      _getPackages('react');
      _getPackages('vue');
    })

    return {
      pageInfo,
      openLink,

      packages
    }
  }
})
</script>