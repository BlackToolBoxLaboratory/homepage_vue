export default {
  menu: {
    about: "關於本站",
    overview: "套件總覽",
    packages: {
      root: "套件",
      basic: '基本介紹',
      list: {
        root: '清單',
        example: {
          list: '範例：清單',
          menu: '範例：選單',
          style: '範例：客製化外觀',
          slot: '範例：客製化渲染',
        },
      },
      table: {
        root: '表格',
        example: {
          list: '範例：清冊表',
          info: '範例：資料表',
          compare: '範例：比較表',
          style: '範例：客製化外觀',
          slot: '範例：客製化渲染',
        },
      },
      popover: {
        root: '彈出框',
        example: {
          position: '範例：顯示位置',
          align: '範例：對齊方式',
        },
      },
    },
    application: {
      root: '應用套件',
      languages: '多語言切換器',
      validator: '驗證器',
    }
  },
  about: {
    description: "我主要開發簡單又實用的前端開發用組件，而這邊展示的套件都是基於 Vue3 的開發組件，為了讓使用者可以更自由地進行客製，以及更集中注意力在滿足網頁的業務需求，這些套件都是基於純粹、單位化的邏輯設計，低套件的依賴與高彈性的自由度，達成使用者的客製化需求，如果這些套件在使用上有什麼困難，或者對於套件的開發有其他的想法或期待，還請多多與我分享您的想法。"
  },
  overview: {
    title: '套件總覽',
    version_colon: '發布版本：',
    release_colon: '發布日期：',
    download_colon: '本周下載量：',
    downloads_colon: '每周下載量：',
  },
  package: {
    version_colon: '發布版本：',
    release_colon: '發布日期：',
    section: {
      installation: '安裝',
      render: '渲染',
      parameters: '參數',
      nodeTree: '節點樹',
      example: '範例',
      sourceCode: '源代碼',
    },
    property: {
      title: '名稱',
      type: '型別',
      props: '參數',
      default: '預設',
      notice: '備註'
    },
    paramType: {
      array: '陣列',
      object: '物件',
      string: '字串',
      number: '數字',
      function: '函式',
      boolean: '布林',
      node: '節點',
      any: '任何',
    },
    list: {
      name: '清單',
      description: {
        basic: '這個套件結合清單與選單的功能，利用展開收闔的功能，以及導頁的功能(vue-router, history,...等)，便是後台網站常見的選單，配合我們設計的彈出框。還可成為下拉式選單。'
      },
      parameters: {
        styleObj: '套件中任何具有 class 的節點，皆能使用 styleObj 定義 inline CSS。',
        slotObj: '在 Vue 的版本，我們可以用 $slot 來客製 TableHeadObj.id ，但請記得加上前綴 `th-` 或 `td-`。'
      },
      property: {
        dataList: 'ListItemObj 的陣列。',
        collapseEnable: '開啟展開 / 收合功能。',
        activeID: '指定激活的 entry 之 id。支援雙向綁定。',
        styleObj: '客製化外觀。'
      },
      entryObj: {
        id: '項目識別名。',
        title: '項目顯示名。',
        href: '項目的超連結。主要用於選單連結。',
        defaultCollapsed: '當項目具有子清單，可預設展開 / 收合狀態。',
        children: '子清單。',
      },
      emit: {
        clickEntry: '項目點擊事件。',
        toggleCollapsed: '項目展開 / 收合事件。'
      },
      slotObj: {
        entryObj:
          '套件支援客製化節點的功能，其中輸入值為該節點的原始資料。',
      },
      nodeTree: {
        notice: '附註：層的計算係由0開始。',
      },
      example: {
        list: {
          title: '範例：清單',
          description: '最基本的清單，僅需要輸入資料的陣列即可。',
        },
        menu: {
          title: '範例：選單',
          description:
            '當我們啟用展開/收合的功能時，簡易地選單就產生了，同時當資料的物件被點擊時，還會觸發 @toggleCollapsed 或 @clickEntry ，如果是有子目錄的物件，便會觸發 @toggleCollapsed ，反之則觸發 @clickEntry ，如果是有子目錄的物件，便會觸發，並且，事件函式的輸入參數為被點擊物件的原始資料。另外，我們能用 ref 控制 activeID (v-model)。',
        },
        style: {
          title: '範例：客製化外觀',
          description:
            '這邊將展示如何使用 styleObj，以 inline CSS 的方式客製化套件的外觀，並示範如何結合 activeID 的使用，標記出激活中的物件，但也可以僅以 defaultActiveID 標記初始激活的物件，最後再以 styleObj 於對應的 class 設定外觀。',
        },
        slot: {
          title: '範例：客製化渲染',
          description:
            '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 slotObj 的方式，用字串、節點或函式的方式客製化節點的渲染。',
        },
      },
    },
    table: {
      name: '表單',
      description: {
        basic: '表格的設計本身分成三種模式：列表（清冊表）、資訊（資料表）與資訊並列（比較表），使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。'
      },
      parameters: {
        styleObj: '套件中任何具有 class 的節點，皆能使用 styleObj 定義 inline CSS。',
      },
      property: {
        headData: 'TableHeadObj 的陣列。',
        bodyData: 'TableBodyObj 的陣列。',
        mode: '切換表的顯示方式：list、info、compare。',
        identity: '資料的識別欄位。',
        emptyText: '沒資料時顯示的文字。',
        styleObj: '客製化外觀。'
      },
      entryObj: {
        id: '表頭的 Id。',
        name: '表頭的名稱。'
      },
      emit: {
        clickTh: 'Th 點擊事件。',
        clickTd: 'Td 點擊事件。'
      },
      slotObj: {
        th:'客製化 Th 的功能，其中輸入值為該節點的 TableHeadObj 之原始資料。',
        td: '客製化 Td 的功能，其中輸入值為該節點的 TableHeadOb 與 TableBodyObj 之原始資料。',
        'td-empty':'用於在清冊表與比較表模式，客製化資料的功能',
        'info-empty': '用於在資料表模式，客製化資料的功能',
      },
      nodeTree: {
        notice: '附註：資料的流水號係由0開始。',
        list: '清冊表',
        info: '資料表',
        compare: '比較表',
      },
      example: {
        list: {
          title: '範例：清冊表',
          description: '輸入表頭、資料後，即可匯出最基本的表。',
        },
        info: {
          title: '範例：資料表',
          description: '輸入表頭、資料後，再切換成資料模式即可。',
        },
        compare: {
          title: '範例：比較表',
          description: '輸入表頭、資料後，再切換成比對模式即可。',
        },
        style: {
          title: '範例：客製化外觀',
          description: '這邊將展示如何使用 styleObj，以 inline CSS 的方式，於對應的 class 設定外觀。',
        },
        slot: {
          title: '範例：客製化渲染',
          description:
            '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 $slot 的方式，用字串、節點或函式的方式客製化節點的渲染。',
        },
      },
    },
    popover: {
      name: '彈出框',
      description: {
        basic: '彈出框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合彈出框與清單的套件，便可成為下拉式選單。'
      },
      property: {
        id: '彈出框的 ID，預設為隨機產生，也可以自己行定義。',
        state: '彈出框的顯示狀態，支援 v-model。',
        position: '控制彈出框顯示位置：top、right、bottom、left。',
        align: '控制彈出框對齊位置：begin、center、end。',
        withArrow: '控制顯示為對話框。',
        autoDetect: '自動偵測式窗邊界功能，並自動切換彈出框顯示與對齊位置。預設為啟用。',
        styleObj: '客製化外觀。',
      },
      emit: {
        updatestate: 'v-model 變更事件。',
        toggle: '切換事件。',
        show: '顯示事件。',
        hide: '隱藏事件。'
      },
      slotObj: {
        default: '彈出框的內容',
        trigger: '觸發按鈕',
      },
      example: {
        vertical: '垂直',
        horizontal: '水平',
        position: {
          title: '範例：顯示位置',
          description:
            '簡單地展示如何控制彈出框顯示的位置。彈出框預設啟用瀏覽器邊界偵測（autoDetect），當彈出框超出瀏覽器邊界時，會依據顯示位置與對齊方式做濤整，此功能也可以關掉。',
        },
        align: {
          title: '範例：對齊方式',
          description:
            '簡單地展示如何控制彈出框顯示的位置。彈出框預設啟用瀏覽器邊界偵測（autoDetect），當彈出框超出瀏覽器邊界時，會依據顯示位置與對齊方式做濤整，此功能也可以關掉。',
        },
      },
    },
  },
  application: {
    version_colon: '發布版本：',
    release_colon: '發布日期：',
    section: {
      installation: '安裝',
      initializer: '初始化',
      impletement: '實體',
      trigger: '觸發',
      result: '結果',
      sourceCode: '源代碼'
    },
    languages: {
      name: '多語言切換器',
      description:
        '對於跨國性服務來說，多國語言的支援往往是基本需求，雖然我們已有一些很出色的語言相關套件，如i18n，但我想開發的多語言切換器，主要是想降低套件的依賴性，以及降低一些非必要的功能支援，以最單純的核心功能，並且提供良好的擴充彈性，如果您需要很完整、方便的功能，可以考慮使用 i18n 之類的傑出套件，倘若需要的功能並不複雜，那麼也許你會想要試試看BTB Lab. 的多語言切換器。這邊我們將說明如何結合與基於 React 開發的網站使用。',
      installation: {
        description: '比較詳細的操作說明在我的 JavaScript Lab，這邊著重在如何與基於 Vue 開發的網站使用。',
        linkName: '說明文件連結',
      },
      initializer: '@blacktoolbox/prototype-languages 需要在使用前執行初始化的動作。',
      impletement:
        '套件本身內有儲存語言字典的機制，也就是在執行 initializer 時，所執行的事情. 但我們還需要再使用前多語言切換器之前，實踐至少一個實體出來，而主要的產生語言清單、激活指定的語言，以及翻譯的動作皆須仰賴此實體，藉由：menu(), get(), set(), translate().',
      trigger: {
        description:
          '這邊則是說明如何在切換語言之後，重新顯示或渲染網頁。當然地我們仍可以結合localStorage，用重新載入網站的方式，使得網頁以新指定的語言顯示對應翻譯。基本地我們能應用 Vue 的機制，觸發網頁換新：ref.',
        ref:
          '我們可以結合儲存管理機制的套件（Vuex、Pinia、...），但根據 Vue 的特性，並不會像 React 因為 dispatch 的機制而重新渲然整個頁面，所以我們還需要利用 Vue 本身對於值變的監控機制，把透過 Ref() 包裹起來的語言設定，與 translate 或其他函數做相關聯，如此才會在設定語言的時候，同時觸發重新翻譯的動作。'
      },
    },
    validator: {
      name: '驗證器',
      description:
        '大多數的排版框架皆含有驗證表單的功能，但各自排版框架的驗證器使用方式不盡相同，對於有些需要對於不同的案子，使用不同的排版框架的團隊而言，已經存在的驗證邏輯在移植上，可能就不是這麼方便，因此，我試著開發一般化的表單驗證器，或者可以更深一層地說它是變數驗證器，因為即使不與排版框架合用，單純寫在函數裡的變數格式驗證也是可以的，如此期望，應用此套件的人，可以一致地整合表單的驗證與函數的驗證。',
      installation: {
        description: '比較詳細的操作說明在我的 JavaScript Lab，這邊著重在如何與基於 Vue 開發的網站使用。',
        linkName: '說明文件連結',
      },
      initializer: '@blacktoolbox/prototype-validator 需要在使用前執行初始化的動作。',
      result: '每一個驗證事件的驗證狀態的物件結構。每一個驗證事件的狀態包含 null、false、true 。而 null 表示尚未觸發驗證的狀態。這些狀態可以透過 reset() 做初始化。',
    },
  },
  chart: {
    times: '次數',
  },
}