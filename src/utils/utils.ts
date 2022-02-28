export const parseYear = (date: string) => {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  if (isNaN(year)) {
    return "Not available";
  }
  return year.toString();
};
