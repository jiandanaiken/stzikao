// 统一使用UTF-8编码，修复变量/年份/中文显示问题
const mydate = new Date();
const myweekday = mydate.getDay();
const mymonth = mydate.getMonth() + 1; // 月份从0开始，需+1
const myday = mydate.getDate();
const year = mydate.getFullYear(); // 替代废弃的getYear()，直接获取完整年份

// 定义中文星期（UTF-8编码）
const weekdayMap = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
const weekday = weekdayMap[myweekday];

// 输出格式化日期（避免直接document.write，推荐更灵活的方式）
document.write(`${year}年${mymonth}月${myday}日 ${weekday}`);
