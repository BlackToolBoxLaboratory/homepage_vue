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
            '這邊將展示如何使用 styleObj，以 inline CSS 的方式客製化套件的外觀，並示範如何結合 activeID 的使用，標記出激活中的物件，但也可以僅以 defaultActiveID 標記初始激活的物件，最後再以 styleObj 於對應的 className 設定外觀。',
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
        basic: '表格的設計本身分成三種模式：列表、資訊與資訊並列，使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。'
      }
    },
    popover: {
      name: '彈出框',
      description: {
        basic: '彈出框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合彈出框與清單的套件，便可成為下拉式選單。'
      }
    },
  },
  chart: {
    times: '次數',
  },
}