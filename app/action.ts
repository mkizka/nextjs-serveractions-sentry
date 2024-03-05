"use server";
import * as Sentry from "@sentry/nextjs";

export const action = async () => {
  Sentry.captureMessage("Action called", "info");
};
