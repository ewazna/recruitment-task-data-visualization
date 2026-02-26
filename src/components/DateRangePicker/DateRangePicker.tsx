import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { DateRangePickerProps } from "./types";

import "./DateRangePicker.css";

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
      <div className="date-picker-container">
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
      </div>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
