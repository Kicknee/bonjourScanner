export default async () => {
  try {
    const products = await fetch("/.netlify/functions/get_products").then(
      (response) => response.json()
    );
    return products;
  } catch (error) {
    console.error(error);
  }
};
