function examineEntries(key: string): { displayKey: string };
function examineEntries(
  key: string,
  value: string
): { displayKey: string; displayValue: string };
function examineEntries(
  key: string,
  value?: string
): { displayKey: string; displayValue?: string } {
  const displayKey = key == "SHIPPING_COMPANY" ? "SHIPPING" : key;

  if (value !== undefined) {
    const displayValue =
      value.length > 11 ? `${value.substring(0, 9)}...` : value;

    return { displayKey, displayValue };
  }
  return { displayKey };
}

export { examineEntries };
