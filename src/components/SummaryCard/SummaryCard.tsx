import type { Dayjs } from "dayjs";
import { isDayjs } from "../../typeGuards";

import "./SummaryCard.css";

type SummaryCardProps = {
  title: string;
  visibleData: number | string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

const SummaryCard = ({
  title,
  visibleData,
  startDate,
  endDate,
}: SummaryCardProps) => {
  let formattedStartDate;
  let formattedEndDate;

  if (isDayjs(startDate) && isDayjs(endDate)) {
    formattedStartDate = startDate.format("MMMM D, YYYY");
    formattedEndDate = endDate.format("MMMM D, YYYY");
  }

  return (
    <div className="card card-summary">
      <h1 className="header">{title}</h1>
      <p className="data">{visibleData}</p>
      {formattedStartDate && formattedEndDate && (
        <>
          <p className="caption">collected between:</p>
          <p className="caption caption-data">{`${formattedStartDate} and ${formattedEndDate}`}</p>
        </>
      )}
    </div>
  );
};

export default SummaryCard;
