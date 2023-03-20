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
      }
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