<template>
  <div className="btb-overview-package-widget">
    <p className="widget_title">
      {{ props.data.name
      }}<a
        className="inline-link"
        :href="packageUrl"
        target="_blank"
        rel="noreferrer"
      >
        <fai :icon="['fas', 'external-link-alt']" fixedWidth size="xs" />
      </a>
    </p>
    <p className="widget_description">{{ props.data.description }}</p>
    <p>
      <!-- <span className="widget_entry">{{lang.translate('overview.version_colon')}}</span> -->
      <span className="widget_entry">{{ "Version: " }}</span>
      <span className="widget_value">{{ props.data.version }}</span>
    </p>
    <p>
      <!-- <span className="widget_entry">{{lang.translate('overview.release_colon')}}</span> -->
      <span className="widget_entry">{{ "Release Date: " }}</span>
      <span className="widget_value">{{
        reviseISOString(props.data.date).date
      }}</span>
    </p>
    <template v-if="series.length">
      <p>
        <!-- <span className="widget_entry">{lang.translate('overview.download_colon')}</span> -->
        <span className="widget_entry">{{ "Latest Downloads: " }}</span>
        <span className="widget_value">{{
          downloadData[downloadData.length - 1]
        }}</span>
      </p>
      <div className="widget_chart">
        <p className="widget_row">
          <!-- <span className="widget_entry">{lang.translate('overview.downloads_colon')}</span> -->
          <span className="widget_entry">{{ "Weekly Downloads: " }}</span>
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
      <div className="widget_chart chart-loading">
        <module-loading />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";

import { defineComponent, computed, onMounted, ref } from "vue";
import Apexchart from "vue3-apexcharts";

import API_npmAPI from "../../apis/npmAPI";
import reviseISOString from "../../utils/reviseISOString";

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

    const packageUrl = computed(() => {
      return `https://www.npmjs.com/package/${props.data.name}`;
    });

    const series = computed(() => {
      return [
        {
          // name: lang.translate('chart.times'),
          name: "Times",
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
