const GetToday = () => {
  const date = new Date();

  const week = new Array(
    "Sunday",
    "Monsday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
  const months = new Array(
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  const month = date.getMonth();
  const day = date.getDate();
  const today = date.getDay();
  const dayLabel = week[today];
  const monthLabel = months[month];

  return {
    dayLabel,
    monthLabel,
    day
  };
};

export default GetToday;
