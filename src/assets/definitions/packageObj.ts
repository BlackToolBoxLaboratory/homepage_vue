import { ROUTE } from "./constants";

export type PackageObj = Record<string, PackageItem>;

export type PackageItem = {
  name: string;
  routename: string;
  description: string;
  version: string;
  updated: string;
  link: Record<string,string>
};

const packageObj: PackageObj = {
  list: {
    name: 'package.list.name',
    routename: ROUTE.PACKAGES_LIST_BASIC,
    description: 'package.list.description.basic',
    version: "2.0.8",
    updated: "Mar. 19, 2023",
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/vue-list',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/vue-list',
    },
  },
  table: {
    name: 'package.table.name',
    routename: ROUTE.PACKAGES_TABLE_BASIC,
    description: 'package.table.description.basic',
    version: "2.0.6",
    updated: "Mar. 17, 2023",
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/vue-table',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/vue-table',
    },
  },
  popover: {
    name: 'package.popover.name',
    routename: ROUTE.PACKAGES_POPOVER_BASIC,
    description: 'package.popover.description.basic',
    version: "1.0.1",
    updated: "Mar. 19, 2023",
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/vue-popover',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/vue-popover',
    },
  },
};

export default packageObj;
