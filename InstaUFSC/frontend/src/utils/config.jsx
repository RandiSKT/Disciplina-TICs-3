export const api = "http://localhost:5000/api";
export const uploads = "http://localhost:5000/uploads";
export const requestConfig = (method, data, token = null, image = null) => {
  let config;
  if (image) {
    config = {
      //requisição que utiliza form-data
      method,
      body: data,
      headers: {}, //precisam existir, mesmo que fiquem vazios
    };
  } else if (method === "DELETE" || data === null) {
    //data será null durante uma função de like, por exemplo
    config = {
      method,
      headers: {}, //precisam existir, mesmo que fiquem vazios
    };
  } else {
    //nesse caso, dados serão enviados junto com a requisição
    config = {
      //requisição que utiliza raw/JSON
      method,
      body: JSON.stringify(data),
      headers: { "Content-type": "application/JSON" },
    };
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
