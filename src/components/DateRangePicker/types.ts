import type { Dayjs } from "dayjs";

export type DateRangePickerProps = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleChangeStartDate: (newDate: Dayjs | null) => void;
  handleChangeEndDate: (newDate: Dayjs | null) => void;
  minDate: Dayjs | null;
  maxDate: Dayjs | null;
};
