<template>
  <div class="btb-overview-package-widget">
    <p class="widget_title">
      {{ props.data.name
      }}<a
        class="inline-link"
        :href="packageUrl"
        target="_blank"
        rel="noreferrer"
      >
        <fai :icon="['fas', 'external-link-alt']" fixedWidth size="xs" />
      </a>
    </p>
    <p class="widget_description">{{ props.data.description }}</p>
    <p>
      <span class="widget_entry">{{ translate(langIndex,'overview.version_colon') }}</span>
      <span class="widget_value">{{ props.data.version }}</span>
    </p>
    <p>
      <span class="widget_entry">{{ translate(langIndex,'overview.release_colon') }}</span>
      <span class="widget_value">{{
        reviseISOString(props.data.date).date
      }}</span>
    </p>
    <template v-if="series.length">
      <p>
        <span class="widget_entry">{{ translate(langIndex,'overview.download_colon') }}</span>
        <span class="widget_value">{{
          downloadData[downloadData.length - 1]
        }}</span>
      </p>
      <div class="widget_chart">
        <p class="widget_row">
          <span class="widget_entry">{{ translate(langIndex,'overview.downloads_colon') }}</span>
        </p>
        <apexchart
          :options="options"
          :series="series"
          type="area"
          height="100%"
        ></apexchart>
      </div>
    </template>
    <template v-else>
      <div class="widget_chart chart-loading">
        <module-loading />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";

import { defineComponent, computed, onMounted, ref } from "vue";
import Apexchart from "vue3-apexcharts";
import { storeToRefs } from "pinia";

import API_npmAPI from "@/apis/npmAPI";
import { useLanguageStore } from '@/store/lang';
import reviseISOString from "@/utils/reviseISOString";
import { translate } from "@/utils/functions";

import createChartOptions from "./chartOptions";

const WEEK = 7;

export default defineComponent({
  name: "btb-overview-package-widget",
  props: {
    data: {
      type: Object as PropType<Record<string, any>>,
      default: function () {
        return {};
      },
    },
    type: {
      type: String,
      default: "",
    },
  },
  components: {
    Apexchart,
  },
  setup(props) {
    const downloadData = ref<number[]>([]);
    
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    const packageUrl = computed(() => {
      return `https://www.npmjs.com/package/${props.data.name}`;
    });

    const series = computed(() => {
      return [
        {
          name: translate(langIndex.value, 'chart.times'),
          data: downloadData.value,
        },
      ];
    });

    const options = computed(() => {
      return createChartOptions(props.type);
    });

    const _extractToWeekly = (data: any[]) => {
      data.reverse();
      let weekData = Array(Math.ceil(data.length / WEEK))
        .fill(0)
        .map((entry, index) => {
          let count = 0;
          for (
            let i = index * WEEK;
            i < Math.min((index + 1) * WEEK, data.length);
            i++
          ) {
            count += data[i].downloads;
          }
          return count;
        });
      return weekData.reverse();
    };

    function _getDownloads(pkgName: string) {
      API_npmAPI.getPackageDownloads(pkgName).then(({ data }) => {
        downloadData.value = _extractToWeekly(data.downloads);
      });
    }

    onMounted(() => {
      _getDownloads(props.data.name);
    });

    return {
      reviseISOString,

      props,
      packageUrl,
      downloadData,
      series,
      options,

      langIndex,
      translate
    };
  },
});
</script>

<style lang="scss">
.btb-overview-package-widget {
  @include padding($padding-lg);
  @include border-solid(1px);
  @include radius($border-radius-md);
  @include shadow-sm;
  border-color: $color-gray-ll;
  background-color: $color-white;
  height: 100%;

  .widget_title {
    @include font-lg-b;
  }

  .widget_description {
    @include margin-t($margin-sm);
    @include margin-b($margin-md);
    color: $color-gray;
  }

  .widget_entry {
    @include font-md-b;
  }

  .widget_value {
    color: $color-gray;
  }

  .widget_chart {
    @include margin-b($margin-md);
    height: 6rem;

    &.chart-loading {
      height: calc(6rem + 20px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
