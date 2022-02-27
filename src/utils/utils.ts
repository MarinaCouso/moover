import moment from "moment";

export const parseYear = (date: string) => {
  const formatDate = moment(date, "YYYY-MM--DD");
  const year = formatDate.year();
  return year.toString();
};
