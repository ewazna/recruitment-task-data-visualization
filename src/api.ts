import type { FetchedData } from "./types";

export const fetchOrdersWithMetadata =
  async (): Promise<FetchedData | null> => {
    try {
      const result = await fetch("/data.json");

      if (!result.ok) {
        throw new Error("Error occured during data fetching");
      }

      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Error occured during data fetching", error);
      return null;
    }
  };
