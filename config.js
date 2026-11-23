// 網站設定：通常只需要改 API_URL
window.APP_CONFIG = {
  // 貼上 Apps Script 部署後拿到的 /exec 網址。
  // 留空 = 示範模式（用內建假資料，帳號 admin / PIN 1234）
  API_URL: 'https://script.google.com/macros/s/AKfycbwjMyAyHtJcXu45caMQIkxElZqOv4rkBVMwaVLCt8-TxoI2kGAsZobk066rpuaMREPz/exec',

  TITLE: '我的收藏庫',

  // 狀態快速切換：{ 欄位名稱: [ {label, values} ] }
  STATUS_GROUPS: {
    '組裝狀態': [
      { label: '未組裝', values: ['Not started', '未開始'] },
      { label: '進行中', values: ['In progress', '進行中', '爛尾中', '托賣中'] },
      { label: '已完成', values: ['Done', '完成'] },
      { label: '已出清', values: ['已賣出', '交換出'] }
    ],
    '狀況': [                           // 水貼
      { label: '全新', values: ['全新'] },
      { label: '使用中', values: ['少部分使用', '部分使用', '使用一半'] },
      { label: '幾乎用完', values: ['幾乎用完', '用完'] }
    ],
    '狀態': [                           // 工具
      { label: '使用中', values: ['使用中'] },
      { label: '備用', values: ['備用', '未拆封'] },
      { label: '用完／損壞', values: ['用完', '已用完', '損壞'] }
    ]
  },

  // 下拉選單的預設選項：{ 分頁: { 欄位: [選項] } }（還沒有資料用到也會列出）
  FIELD_OPTIONS: {
    '水貼': {
      '分類': ['通用', '機體專用'],
      '比例': ['1:100', '1:144', '1:72', '1:35']
    }
  },

  // 頂部統計（欄位不存在的項目會自動略過）
  STATS: [
    { label: '總數量', type: 'count' },
    { label: '購入總額', type: 'sum', column: '購入價格', money: true },
    { label: '賣出回收', type: 'sum', column: '賣價', money: true },
    { label: '待組裝', type: 'count', column: '組裝狀態', values: ['Not started', '未開始'] },
    { label: '全新未用', type: 'count', column: '狀況', values: ['全新'] }
  ],

  // 標籤顏色（Notion 匯出不會帶顏色，在這裡指定）：
  // gray brown orange yellow green blue purple pink red
  TAG_COLORS: {
    'Done': 'green', '完成': 'green',
    'In progress': 'blue', '進行中': 'blue',
    '爛尾中': 'red', '托賣中': 'orange',
    'Not started': 'gray', '未開始': 'gray',
    '已賣出': 'brown', '交換出': 'purple',
    'Bandai': 'red', 'Kotobukiya': 'blue', 'Tamiya': 'yellow',
    'PB': 'purple', '初回限定': 'pink',
    // 水貼（沿用 Notion 顏色）
    '喵匠': 'brown', 'EVO': 'purple', '大林': 'blue', '其他': 'green', 'Gaia': 'gray',
    'HiQ': 'orange', '鋼魂': 'pink', '雪焰': 'gray',
    '一般版': 'orange', '燙金版': 'brown', '燙銀版': 'pink', '螢光版': 'green', '限定版': 'gray',
    '全新': 'blue', '少部分使用': 'purple', '部分使用': 'orange', '使用一半': 'red', '幾乎用完': 'pink',
    // 工具
    '使用中': 'blue', '備用': 'yellow', '用完': 'gray', '損壞': 'red'
  },

  // 只在點開詳細頁才顯示、不放在卡片上的欄位
  DETAIL_ONLY: ['流水號', 'ID', '重複', '備註'],

  // 勾選後要在卡片上標示的欄位
  FLAG_COLUMNS: ['重複']
};
