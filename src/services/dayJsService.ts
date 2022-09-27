import dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export const getToday = () => {
  let now = dayjs();
  return now.format(DEFAULT_DATE_FORMAT);
};

export const getNumberOfDaysAfterFromADate = (
  numberOfDays: number,
  fromDate?: Date
) => {
  const from = fromDate ? dayjs(fromDate) : dayjs();

  return from.add(numberOfDays, "day").format(DEFAULT_DATE_FORMAT);
};
