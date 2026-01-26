// date.js (UTF-8编码)
// 封装为函数，不直接输出，避免干扰其他代码
function getCurrentChineseDate() {
  const mydate = new Date();
  const myweekday = mydate.getDay();
  const mymonth = mydate.getMonth() + 1; // 月份从0开始，需+1
  const myday = mydate.getDate();
  const year = mydate.getFullYear(); // 替代废弃的getYear()

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

  // 返回格式化后的日期字符串，不直接输出
  return `${year}年${mymonth}月${myday}日 ${weekday}`;
}
