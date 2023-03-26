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
      popover: {
        root: 'Popover',
        example: {
          position: 'Example: Position',
          align: 'Example: Align',
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
      parameters: {
        styleObj: 'Any class in this module could add inline CSS by styleObj.',
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
        basic: 'This module of table creator with Vue3 can do the help to make a table component to our page. It has modes of list, info and compare which are different ways to show data.',
      },
      property: {
        headData: 'List of TableHeadObj.',
        bodyData: 'List of TableBodyObj.',
        mode: 'Value in list, info or compare.',
        identity: 'Identity of data.',
        emptyText: 'Showing text when no data available.',
        styleObj: 'Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree.'
      },
      entryObj: {
        id: 'As an identity to column and also an index to key name of dataObj',
        name: 'The name of table\'s head.'
      },
      parameters: {
        styleObj: 'Any class in this module could add inline CSS by styleObj.',
        slotObj: 'To vue, We can replace the default node with TableHeadObj.id by $slot. However we need the prefix to specify which node we want to customized th or td.'
      },
      emit: {
        clickTh: 'click function of Th.',
        clickTd: 'click function of Td.'
      },
      slotObj: {
        th: 'Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id with data of TableHeadObj.',
        td: 'Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id with data of TableHeadObj and TableBodyObj.',
        'td-empty': 'Slot for showing text when data is empty. This is for mode \'list\' and \'compare\'.',
        'info-empty': 'Slot for showing text when data is empty. This is for mode \'info\'.'
      },
      nodeTree: {
        notice: 'Note: The data order is counted base on 0.',
        list: 'List Mode',
        info: 'Info Mode',
        compare: 'Compare Mode',
      },
    },
    popover: {
      name: 'Popover',
      description: {
        basic: 'This module of popover creator made with Vue3 can do the help to make a popover component to our page. The popover can do the thing about popover and dropdown.'
      },
      property: {
        id: 'Id of popover, default to created in random. But we can difined by self.',
        state: 'State of popover, we can control it via v-model.',
        position: 'The position of popover. Options in top, right, bottom, left.',
        align: 'The align of popover. Options in begin, center, end.',
        withArrow: 'The tiny caret to let popover become conversation block. Get it false when we prefer a dropdown.',
        autoDetect: 'The feature of auto-detecting window\'s inner edge of browser. When the popover show overglow to browser, it will adjust by self. We could get it false, if we don\'t need the feature working. Default is ture.',
        styleObj: 'Object of customized style.',
      },
      emit: {
        updatestate: 'Emit updated event function of v-model.',
        toggle: 'Emit toggle function',
        show: 'Emit show function.',
        hide: 'Emit hide function.'
      },
      slotObj: {
        default: 'Slot for content of popover.',
        trigger: 'Slot for trigger button.',
      },
      example: {
        vertical: 'Vertical',
        horizontal: 'Horizontal',
        position: {
          title: 'Example: Position',
          description:
            'Here is simply to show the popover with position configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.',
        },
        align: {
          title: 'Example: Align',
          description:
            'Here is simply to show the popover with align configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.',
        },
      }
    }
  },
  application: {
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    section: {
      installation: 'INSTALLATION',
      initializer: 'INITIALIZER',
      impletement: 'IMPLEMENT',
      trigger: 'TRIGGER',
      result: 'RESULT',
      sourceCode: 'SOURCE CODE'
    },
    languages: {
      name: 'Languages',
      description:
        'For developing the website of international services, we usually have the requirement to develop with the feature of multiple-languages supported. We already have a lot of masterpice such like i18n. But here we created our own multiple-languages package for lowing down the dependencies. Here I am going to show you how to ultilize the @blacktoolbox/prototype-languages with React based website.',
      installation: {
        description:
          'The more detail is intoduced in JavaScript Lab. The more detail you could see it there. Here it only present how to work with Vue based website.',
        linkName: 'Link of Document',
      },
      initializer: 'As @blacktoolbox/prototype-languages required, it need to be initialized before using.',
      impletement:
        'The package has storage itself to save the each dicionary of language which is the thing initializer do. And the other thing to do before using is implement a instance of the package. Most action processed with it: menu(), get(), set(), translate().',
      trigger: {
        description:
          'Here we are talking about how to re-render the page after we change the language settings. Of cause, we can do reload to the browser with localStorage, no matter witch type of website is. We could ultilize the nature of Vue. Basically we have way to rerender the page: ref.',
        ref:
          'Combined the package with Store management related package(Flux, Redux, ...). However to the natural of Vue. They will not imediately updated when language setting updated. And we will need to utilize the Ref() and make a connection between Ref().value and our transalte or others functions.'
      },
    },
    validator: {
      name: 'Validator',
      description:
        "Most form UI packages have their own validator to use for convenience. But sometimes we don't use only one UI packages to develop every single project. So we try to create the validator generally to adapt to every kind of form UI packages to allow us using just one type of validator coding patteren to develop with every UI packages.",
      installation: {
        description:
          'The more detail is intoduced in JavaScript Lab. The more detail you could see it there. Here it only present how to work with Vue based website.',
        linkName: 'Link of Document',
      },
      initializer: 'As @blacktoolbox/prototype-validator required, it need to be initialized before using.',
      result: 'The structure of status for each event. Every event could be the three type of status: null, false, true. And null means the status is initialized. You can clean all via reset()',
    },
  },
  chart: {
    times: 'Times',
  },
}