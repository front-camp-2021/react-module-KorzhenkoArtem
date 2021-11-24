const API_ROOT = "http://localhost:3030";

// export const getProducts = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };

export const getProducts = async () => {
  const response = await fetch(`${API_ROOT}/products`);
  const data = await response.json();

  return data;
};

export const getBrands = async () => {
  const response = await fetch(`${API_ROOT}/brands`);
  const data = await response.json();

  return data;
};

export const getCategories = async () => {
  const response = await fetch(`${API_ROOT}/categories`);
  const data = await response.json();

  return data;
};
