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
        defaultCollapsed: false,
        children: [
          {
            id: 'PACKAGES_LIST_BASIC',
            routename: 'packages.list.basic',
            title: 'Basic',
            langIndex: 'route.basic'
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE',
            routename: 'packages.list.example',
            title: 'Example',
            langIndex: 'route.example'
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
