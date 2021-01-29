export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours(),
    min = d.getMinutes();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  var time = [hour, min].join(":");
  var f_date = [day, month, year].join("/");
  return [time, f_date].join(" ");
};
