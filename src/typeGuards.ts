import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export function isDayjs(value: unknown): value is Dayjs {
  return value !== null && dayjs.isDayjs(value);
}
