export default async (product) => {
  const obj = {};
  for (let i = 0; i < 7; i++) {
    obj[product[i].id] = product[i].value;
  }
  try {
    const response = await fetch("/.netlify/functions/update_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
