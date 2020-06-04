const routeMap = [
  {
    id: 'ABOUT',
    routename: 'about',
    title: 'About',
    langIndex: 'route.about'
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
            langIndex: 'route.basic'
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_LIST',
            routename: 'packages.list.exampleList',
            title: 'Example-List',
            langIndex: 'route.example.list'
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_MENU',
            routename: 'packages.list.exampleMenu',
            title: 'Example-Menu',
            langIndex: 'route.example.menu'
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_STYLE',
            routename: 'packages.list.exampleStyle',
            title: 'Example-Style',
            langIndex: 'route.example.style'
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_SLOT',
            routename: 'packages.list.exampleSlot',
            title: 'Example-Slot',
            langIndex: 'route.example.slot'
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
            langIndex: 'route.basic'
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
        langIndex: 'route.languages'
      },
      {
        id: 'APPLICATIONS_VALIDATOR',
        routename: 'applications.validator',
        title: 'Validator',
        langIndex: 'route.validator'
      }
    ]
  }
]

export default routeMap
