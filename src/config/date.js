import dayjs from "dayjs";

export const GetDate = (date) => {
  return dayjs(new Date(parseInt(date.split("(")[1].split(")")[0]))).format(
    "D-MMM-YYYY hh:mm A"
  );
};
