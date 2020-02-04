const routeMap = [
  {
    id: 'ABOUT',
    name: 'about',
    title: 'About',
    langIndex: 'route.about'
  },
  {
    id: 'PACKAGES',
    name: 'packages',
    title: 'Packages',
    langIndex: 'route.packages',
    children: [
      {
        id: 'PACKAGES_LIST',
        name: 'packages.list',
        title: 'List',
        langIndex: 'route.list'
      }
    ]
  },
  {
    id: 'PLUGINS',
    name: 'plugins',
    title: 'Plugins',
    langIndex: 'route.plugins',
    children: [
      {
        id: 'PLUGINS_LANGUAGES',
        name: 'plugins.languages',
        title: 'Languages',
        langIndex: 'route.languages'
      },
      {
        id: 'PACKAGES_VALIDATOR',
        name: 'packages.validator',
        title: 'Validator',
        langIndex: 'route.validator'
      }
    ]
  }
]

export default routeMap
