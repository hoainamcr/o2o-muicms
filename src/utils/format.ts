import dayjs from "dayjs";
import { DATE_TIME_FORMAT } from "@/constants";

// Format utilities
export const format = {
  date: (date: string | Date) => {
    const d = new Date(date);
    return dayjs(d).format(DATE_TIME_FORMAT.DATE);
  },
  dateTime: (date: string | Date) => {
    const d = new Date(date);
    return dayjs(d).format(DATE_TIME_FORMAT.DATE_TIME);
  },

  currency: (amount: number, currency: string = "VND") => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency,
    }).format(amount);
  },

  phone: (phone: string) => {
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  },
};
