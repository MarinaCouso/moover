import { IMAGE_PATH, IMAGE_PLACEHOLDER } from "../constants";
import { strings } from "../strings";

export const parseYear = (date: string) => {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  if (isNaN(year)) {
    return strings.errorText;
  }
  return year.toString();
};

export const renderImage = (imagePath: string | null) => {
  if (imagePath !== null) {
    return `${IMAGE_PATH}${imagePath}`;
  }
  return IMAGE_PLACEHOLDER;
};
