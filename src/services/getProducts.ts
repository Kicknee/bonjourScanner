export default async () => {
  try {
    let response = await fetch("/.netlify/functions/get_products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("err", error);
  }
};
