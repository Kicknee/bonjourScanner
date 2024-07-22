export const examineEntries = (key: string, value: string) => {
  const displayKey = key == "SHIPPING_COMPANY" ? "SHIPPING COMPANY" : key;
  const displayValue =
    typeof value === "string" && value.length > 11
      ? `${value.substring(0, 9)}...`
      : value;

  return { displayKey, displayValue };
};
