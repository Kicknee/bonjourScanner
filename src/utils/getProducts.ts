export default async () => {
  try {
    let response = await fetch("/.netlify/functions/get_products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("err", error);
  }
};

/*

export default async () => {
  try {
    const response = await fetch("/.netlify/functions/get_products");
    
    // Log response status and headers for debugging purposes
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);

    // Check if response is OK and has content type JSON
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (!response.headers.get('content-type')?.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const text = await response.text();
    console.log('Response Text:', text); // Log the response text for debugging

    // Attempt to parse the JSON
    const products = JSON.parse(text);

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

*/
