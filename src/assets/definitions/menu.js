const routeMap = [
  {
    id: 'ABOUT',
    pathname: 'about',
    title: 'About',
    langIndex: 'route.about'
  },
  {
    id: 'PACKAGES',
    pathname: 'packages',
    title: 'Packages',
    langIndex: 'route.packages',
    defaultCollapsed: false,
    children: [
      {
        id: 'PACKAGES_LIST',
        pathname: 'packages.list',
        title: 'List',
        langIndex: 'route.list'
      }
    ]
  },
  {
    id: 'APPLICATIONS',
    pathname: 'applications',
    title: 'Applications',
    langIndex: 'route.applications',
    defaultCollapsed: false,
    children: [
      {
        id: 'APPLICATIONS_LANGUAGES',
        pathname: 'applications.languages',
        title: 'Languages',
        langIndex: 'route.languages'
      },
      {
        id: 'APPLICATIONS_VALIDATOR',
        pathname: 'applications.validator',
        title: 'Validator',
        langIndex: 'route.validator'
      }
    ]
  }
]

export default routeMap
