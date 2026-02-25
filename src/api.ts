export const fetchOrders = async () => {
  try {
    const result = await fetch("/data.json");

    if (!result.ok) {
      throw new Error("Error occured during data fetching");
    }

    const data = await result.json();
    return data.orders;
  } catch (error) {
    console.error("Error occured during data fetching", error);
    return [];
  }
};
