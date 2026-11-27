/* ===== Firebase 連線設定（所有節次共用）=====
   專案：classtool1141019（與基本電學練工坊共用；與引擎原理共用 engine_scores、engine_live 兩個集合；本課程的節次代碼一律以 AC- 開頭，教師大螢幕據此分開）
   清空 apiKey ＝ 離線模式（互學挑戰照常可玩，只是不上傳成績）。 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhamHPMCBjGQMpxTtX43JLcPab7QfsTgg",
  authDomain: "classtool1141019.firebaseapp.com",
  projectId: "classtool1141019",
  storageBucket: "classtool1141019.firebasestorage.app",
  messagingSenderId: "864195851107",
  appId: "1:864195851107:web:de3fd1a48896528b145956"
};

/* ===== 班級選項（學生端下拉選單、教師大螢幕共用）=====
   可自行增減；學生也可選「✏️ 手動輸入班級」。 */
window.CLASS_LIST = ['汽車301', '汽車302'];

/* ===== 組別數（分組互學挑戰／虛擬實作用，上限 30）===== */
window.GROUP_COUNT = 11;

/* ===== 班級人數（個人隨堂測驗用，教師大螢幕預設人數，座號選單 1～40 號）===== */
window.STUDENT_COUNT = 36;
