import { IMAGE_PATH, IMAGE_PLACEHOLDER } from "../constants";

export const parseYear = (date: string) => {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  if (isNaN(year)) {
    return "Not available";
  }
  return year.toString();
};

export const renderImage = (imagePath: string | null) => {
  if (imagePath !== null) {
    return `${IMAGE_PATH}${imagePath}`;
  }
  return IMAGE_PLACEHOLDER;
};
