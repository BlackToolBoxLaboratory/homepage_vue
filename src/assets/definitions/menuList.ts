import ROUTE from "./constants/routeName.json";

import type {  ListItemObj } from "@blacktoolbox/vue-list";

const redirectUrl = (path: string) => {
  return `/vue/#${path}`;
};

const routeList: ListItemObj[] = [
  {
    id: "ABOUT",
    routename: "about",
    title: "About",
    langIndex: "menu.about",
    href: redirectUrl(ROUTE.ABOUT),
  },
  {
    id: "OVERVIEW",
    routename: "overview",
    title: "Overview",
    langIndex: "menu.overview",
    href: redirectUrl(ROUTE.OVERVIEW),
  },
  {
    id: "PACKAGES",
    routename: "packages",
    title: "Packages",
    langIndex: "menu.packages.root",
    defaultCollapsed: false,
    children: [
      {
        id: "PACKAGES_LIST",
        routename: "packages.list",
        title: "List",
        langIndex: "menu.packages.list.root",
        defaultCollapsed: true,
        children: [
          {
            id: "PACKAGES_LIST_BASIC",
            routename: "packages.list.basic",
            title: "Basic",
            langIndex: "menu.packages.basic",
            href: redirectUrl(ROUTE.PACKAGES_LIST_BASIC),
          },
          {
            id: "PACKAGES_LIST_EXAMPLE_LIST",
            routename: "packages.list.exampleList",
            title: "Example-List",
            langIndex: "menu.packages.list.example.list",
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_LIST),
          },
          {
            id: "PACKAGES_LIST_EXAMPLE_MENU",
            routename: "packages.list.exampleMenu",
            title: "Example-Menu",
            langIndex: "menu.packages.list.example.menu",
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_MENU),
          },
          {
            id: "PACKAGES_LIST_EXAMPLE_STYLE",
            routename: "packages.list.exampleStyle",
            title: "Example-Style",
            langIndex: "menu.packages.list.example.style",
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_STYLE),
          },
          {
            id: "PACKAGES_LIST_EXAMPLE_SLOT",
            routename: "packages.list.exampleSlot",
            title: "Example-Slot",
            langIndex: "menu.packages.list.example.slot",
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_SLOT),
          },
        ],
      },
      {
        id: "PACKAGES_TABLE",
        routename: "packages.table",
        title: "Table",
        langIndex: "menu.packages.table.root",
        defaultCollapsed: true,
        children: [
          {
            id: "PACKAGES_TABLE_BASIC",
            routename: "packages.table.basic",
            title: "Basic",
            langIndex: "menu.packages.basic",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_BASIC),
          },
          {
            id: "PACKAGES_TABLE_EXAMPLE_LIST",
            routename: "packages.table.exampleList",
            title: "Example: Align",
            langIndex: "menu.packages.table.example.list",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_EXAMPLE_LIST),
          },
          {
            id: "PACKAGES_TABLE_EXAMPLE_INFO",
            routename: "packages.table.exampleInfo",
            title: "Example: Align",
            langIndex: "menu.packages.table.example.info",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_EXAMPLE_INFO),
          },
          {
            id: "PACKAGES_TABLE_EXAMPLE_COMPARE",
            routename: "packages.table.exampleCompare",
            title: "Example: Align",
            langIndex: "menu.packages.table.example.compare",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_EXAMPLE_COMPARE),
          },
          {
            id: "PACKAGES_TABLE_EXAMPLE_STYLE",
            routename: "packages.table.exampleStyle",
            title: "Example: Style",
            langIndex: "menu.packages.table.example.style",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_EXAMPLE_STYLE),
          },
          {
            id: "PACKAGES_TABLE_EXAMPLE_SLOT",
            routename: "packages.table.exampleSlot",
            title: "Example: Slot",
            langIndex: "menu.packages.table.example.slot",
            href: redirectUrl(ROUTE.PACKAGES_TABLE_EXAMPLE_SLOT),
          },
        ],
      },
      {
        id: "PACKAGES_POPOVER",
        routename: "packages.popover",
        title: "Table",
        langIndex: "menu.packages.popover.root",
        defaultCollapsed: true,
        children: [
          {
            id: "PACKAGES_POPOVER_BASIC",
            routename: "packages.popover.basic",
            title: "Basic",
            langIndex: "menu.packages.basic",
            href: redirectUrl(ROUTE.PACKAGES_POPOVER_BASIC),
          },
          {
            id: "PACKAGES_POPOVER_EXAMPLE_POSITION",
            routename: "packages.popover.examplePosition",
            title: "Example: Position",
            langIndex: "menu.packages.popover.example.position",
            href: redirectUrl(ROUTE.PACKAGES_POPOVER_EXAMPLE_POSITION),
          },
          {
            id: "PACKAGES_POPOVER_EXAMPLE_ALIGN",
            routename: "packages.popover.exampleAlign",
            title: "Example: Align",
            langIndex: "menu.packages.popover.example.align",
            href: redirectUrl(ROUTE.PACKAGES_POPOVER_EXAMPLE_ALIGN),
          },
        ],
      },
    ],
  },
  {
    id: "APPLICATIONS",
    routename: "applications",
    title: "Applications",
    langIndex: "menu.application.root",
    defaultCollapsed: false,
    children: [
      {
        id: "APPLICATIONS_LANGUAGES",
        routename: "applications.languages",
        title: "Languages",
        langIndex: "menu.application.languages",
        href: redirectUrl(ROUTE.APPLICATIONS_LANGUAGES),
      },
      {
        id: "APPLICATIONS_VALIDATOR",
        routename: "applications.validator",
        title: "Validator",
        langIndex: "menu.application.validator",
        href: redirectUrl(ROUTE.APPLICATIONS_VALIDATOR),
      },
    ],
  },
];

export default routeList;
