/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import moment from "moment";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";
import { MessageResponse } from "../types/api-types";

type ResType =
  | {
      data: MessageResponse;
      error?: undefined;
    }
  | {
      data?: undefined;
      error: FetchBaseQueryError | SerializedError;
    };

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
) => {
  if ("data" in res) {
    toast.success(res.data?.message!);
    if (navigate) navigate(url);
  } else {
    const error = res.error as FetchBaseQueryError;
    const messageResponse = error.data as MessageResponse;
    toast.error(messageResponse.message);
  }
};

export const getLastMonth = () => {
  const currentDate = moment();

  currentDate.date(1);

  const lastSixMonths: string[] = [];
  const last12Months: string[] = [];

  for (let index = 0; index < 6; index++) {
    const monthDate = currentDate.clone().subtract(index, "months");
    const monthName = monthDate.format("MMMM");
    lastSixMonths.unshift(monthName);
  }
  for (let index = 0; index < 12; index++) {
    const monthDate = currentDate.clone().subtract(index, "months");
    const monthName = monthDate.format("MMMM");
    last12Months.unshift(monthName);
  }
  return {
    last12Months,
    lastSixMonths,
  };
};