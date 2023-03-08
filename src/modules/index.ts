import type { App, Component } from "vue";

import { Layout, Head, Foot, Aside } from "./layout";
import { Page, PageHead, Section, Block, Pre, Divider } from "./pageLayout";
import { LoadingDiv } from "./loadingDiv";

const _moduleMap: Record<string, Component> = {
  Layout,
  Head,
  Foot,
  Aside,

  Page,
  PageHead,
  Section,
  Block,
  Pre,
  Divider,

  LoadingDiv,
};

export default {
  install: (app: App) => {
    Object.keys(_moduleMap).forEach((key) => {
      app.component(_moduleMap[key].name || `Btb${key}`, _moduleMap[key]);
    });
  },
};
