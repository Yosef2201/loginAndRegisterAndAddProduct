const baseUrl = "https://serverno-rh55.onrender.com";  // Replace with your machine's local IP address

// General API request handler
export const fetchApi = async (route, method, body) => {
  const url = baseUrl + route;
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });

    return await response.json();
  } catch (error) {
    console.error('fetch Error', error.message);
    throw error; // Rethrow the error to handle it in the component
  }
};
export const login = async (body) => {
  const url = "/login";
  return await fetchApi(url, 'POST', body);
};
export const createUser = async (body) => {
    const url = "/createUser";
    return await fetchApi(url, 'POST', body);
  };
  export const createProduct = async (body) => {
    const url = "/createProduct";
    return await fetchApi(url, 'POST', body);
  };
  export const getAllProducts = async () => {
    const url = "/getAllProducts";  // Get all products endpoint
    return await fetchApi(url, 'GET');  // No body needed for GET request
  };