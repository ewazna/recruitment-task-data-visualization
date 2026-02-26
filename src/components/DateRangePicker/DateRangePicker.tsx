import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";

type DateRangePickerProps = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleChangeStartDate: (newDate: Dayjs | null) => void;
  handleChangeEndDate: (newDate: Dayjs | null) => void;
  minDate: Dayjs | null;
  maxDate: Dayjs | null;
};

const DateRangePicker = ({
  minDate,
  maxDate,
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
}: DateRangePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleChangeStartDate}
          minDate={minDate ?? undefined}
          maxDate={endDate ?? maxDate ?? undefined}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={handleChangeEndDate}
          minDate={startDate ?? minDate ?? undefined}
          maxDate={maxDate ?? undefined}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
