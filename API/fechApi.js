const baseUrl = "https://serverno-rh55.onrender.com";  // Replace with your machine's local IP address

// General API request handler
export const fetchApi = async (route, method = 'GET', body = null) => {
  const url = baseUrl + route;
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });

    // Log the response status for debugging
    console.log(`Response Status: ${response.status}`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Attempt to parse JSON response
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('fetch Error', error.message);
    throw error; // Rethrow the error to handle it in the component
  }
};

// API to handle user login
export const login = async (body) => {
  const url = "/logIn";
  return await fetchApi(url, 'POST', body);
};

export const createUser = async (body) => {
    console.log('Sending user data:', body);
    const url = "/createUser";  // זה הנתיב שהשרת אמור לקבל
    return await fetchApi(url, 'POST', body);
  };