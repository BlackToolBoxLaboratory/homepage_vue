export default {
  menu: {
    about: "About",
    overview: "Overview",
    packages: {
      root: "Packages",
      basic: 'Basic',
      list: {
        root: 'List',
        example: {
          list: 'Example: List',
          menu: 'Example: Menu',
          style: 'Example: Style',
          slot: 'Example: Slot',
        },
      },
      table: {
        root: 'Table',
        example: {
          list: 'Example: List',
          info: 'Example: Info',
          compare: 'Example: Compare',
          style: 'Example: Style',
          slot: 'Example: Slot',
        },
      },
    },
    application: {
      root: 'Application',
      languages: 'Languages',
      validator: 'Validator',
    }
  },
  about: {
    description: "I aim to develope some useful and simple UI components for front-end development. And here all of packages are made For Vue3. For hoping to let user handle the customized layout easier and more concentrate. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know."
  },
  overview: {
    title: 'Overview',
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    download_colon: 'Latest Downloads: ',
    downloads_colon: 'Weekly Downloads: ',
  },
  package: {
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    section: {
      installation: 'INSTALLATION',
      render: 'RENDER',
      parameters: 'PARAMETERS',
      nodeTree: 'NODE TREE',
      example: 'EXAMPLE',
      sourceCode: 'SOURCE CODE',
    },
    property: {
      title: 'Name',
      type: 'Type',
      props: 'Property',
      default: 'Default',
      notice: 'Notice'
    },
    paramType: {
      array: 'Array',
      object: 'Object',
      string: 'String',
      number: 'Number',
      function: 'Function',
      boolean: 'Boolean',
      node: 'Node',
      any: 'Any',
    },
    list: {
      name: 'List',
      description: {
        basic: 'This module of list creator with Vue3 can do the help to make a list or menu component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.'
      },
      property: {
        dataList: 'List of ListItemObj.',
        collapseEnable: 'Enable collapse feature.',
        activeID: 'Active entry\'s ID which is v-model\'s value.',
        styleObj: 'Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree.'
      },
      entryObj: {
        id: 'Identity of entry.',
        title: 'Name of entry.',
        href: 'Link of entry. Used for menu link',
        defaultCollapsed: 'Default value to collapsed of extend.',
        children: 'Sublist.',
      },
      emit: {
        clickEntry: 'click function of entry.',
        toggleCollapsed: 'toggle function of entry.'
      },
      slotObj: {
        entryObj:
          'Slot for customized entry. Here is the example for function if used. And the item is the source data.',
      },
      nodeTree: {
        notice: 'Note: The layer count is counted base on 0.',
      },
      example: {
        list: {
          title: 'Example: List',
          description: 'Here is a very simple example for a list, if we just give a data list.',
        },
        menu: {
          title: 'Example: Menu',
          description:
            'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the @toggleCollapsed emit function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the @clickEntry emit function too. Besides for a menu, it can utilize the ref to work with activeID (v-model).',
        },
        style: {
          title: 'Example: Style',
          description:
            'Here is going to show you about how to use the styleObj and the example v-model of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.',
        },
        slot: {
          title: 'Example: Slot',
          description:
            'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.',
        },
      },
    },
    table: {
      name: 'Table',
      description: {
        basic: 'This module of table creator with Vue can do the help to make a table component to our page. It has modes of list, info and compare which are different ways to show data.',
      }
    },
    popover: {
      name: 'Popover',
      description: {
        basic: 'This module of popover creator made with Vue3 can do the help to make a popover component to our page. The popover can do the thing about popover and dropdown.'
      }
    }
  },
  chart: {
    times: 'Times',
  },
}