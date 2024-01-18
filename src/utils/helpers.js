export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (value, type) => {
  let uniqueValues = value.map((data) => data[type]);
  if (type === "colors") {
    uniqueValues = uniqueValues.flat();
  }

  return ["all", ...new Set(uniqueValues)];
};
