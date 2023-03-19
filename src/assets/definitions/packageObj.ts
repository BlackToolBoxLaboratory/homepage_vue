import { ROUTE } from "./constants";

export type PackageObj = Record<string, PackageItem>;

export type PackageItem = {
  name: string;
  routename: string;
  description: string;
  version: string;
  updated: string;
};

const packageObj: PackageObj = {
  list: {
    name: "List",
    routename: ROUTE.PACKAGES_LIST_BASIC,
    description:
      "This module of list creator with Vue can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.",
    version: "2.0.8",
    updated: "Mar. 19, 2023",
  },
  table: {
    name: "Table",
    routename: ROUTE.PACKAGES_TABLE_BASIC,
    description:
      "This module of table creator with Vue can do the help to make a table component to our page.",
    version: "2.0.6",
    updated: "Mar. 17, 2023",
  },
  popover: {
    name: "Table",
    routename: ROUTE.PACKAGES_POPOVER_BASIC,
    description:
      "This module of popover creator made with Vue3 can do the help to make a popover component to our page. The popover can do the thing about popover and dropdown.",
    version: "1.0.1",
    updated: "Mar. 19, 2023",
  },
};

export default packageObj;
