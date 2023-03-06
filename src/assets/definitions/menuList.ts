import ROUTE from './constants/routeName.json';

export type RouteList = {
  id: string,
  routename: string,
  title: string,
  langIndex: string,
  href?: string,
  defaultCollapsed?: boolean,
  children?: RouteList[]
}

const redirectUrl = (path:string) => {
  return `/vue/#${path}`;
};

const routeList: RouteList[] = [
  {
    id: 'ABOUT',
    routename: 'about',
    title: 'About',
    langIndex: 'route.about',
    href: redirectUrl(ROUTE.ABOUT),
  },
  {
    id: 'OVERVIEW',
    routename: 'overview',
    title: 'Overview',
    langIndex: 'route.overview',
    href: redirectUrl(ROUTE.OVERVIEW),
  },
  {
    id: 'PACKAGES',
    routename: 'packages',
    title: 'Packages',
    langIndex: 'route.packages',
    defaultCollapsed: false,
    children: [
      {
        id: 'PACKAGES_LIST',
        routename: 'packages.list',
        title: 'List',
        langIndex: 'route.list',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_LIST_BASIC',
            routename: 'packages.list.basic',
            title: 'Basic',
            langIndex: 'route.basic',
            href: redirectUrl(ROUTE.PACKAGES_LIST_BASIC),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_LIST',
            routename: 'packages.list.exampleList',
            title: 'Example-List',
            langIndex: 'route.example.list',
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_LIST),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_MENU',
            routename: 'packages.list.exampleMenu',
            title: 'Example-Menu',
            langIndex: 'route.example.menu',
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_MENU),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_STYLE',
            routename: 'packages.list.exampleStyle',
            title: 'Example-Style',
            langIndex: 'route.example.style',
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_STYLE),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_SLOT',
            routename: 'packages.list.exampleSlot',
            title: 'Example-Slot',
            langIndex: 'route.example.slot',
            href: redirectUrl(ROUTE.PACKAGES_LIST_EXAMPLE_SLOT),
          }
        ]
      },
      {
        id: 'PACKAGES_TABLE',
        routename: 'packages.table',
        title: 'Table',
        langIndex: 'route.table',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_TABLE_BASIC',
            routename: 'packages.table.basic',
            title: 'Basic',
            langIndex: 'route.basic',
            href: redirectUrl(ROUTE.PACKAGES_TABLE_BASIC),
          }
        ]
      }
    ]
  },
  {
    id: 'APPLICATIONS',
    routename: 'applications',
    title: 'Applications',
    langIndex: 'route.applications',
    defaultCollapsed: false,
    children: [
      {
        id: 'APPLICATIONS_LANGUAGES',
        routename: 'applications.languages',
        title: 'Languages',
        langIndex: 'route.languages',
        href: redirectUrl(ROUTE.APPLICATIONS_LANGUAGES),
      },
      {
        id: 'APPLICATIONS_VALIDATOR',
        routename: 'applications.validator',
        title: 'Validator',
        langIndex: 'route.validator',
        href: redirectUrl(ROUTE.APPLICATIONS_VALIDATOR),
      }
    ]
  }
]

export default routeList
