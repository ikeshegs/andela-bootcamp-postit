import 'whatwg-fetch';

const Api = (body, url, method) => (new Promise((resolve, reject) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  if (sessionStorage.getItem('user') !== null) {
    headers.append('x-access-token',
      JSON.parse(sessionStorage.getItem('user')).token);
  }

  if (body === null) {
    body = '';
  }
  if (method.toUpperCase() === 'GET') {
    fetch(url, { method,
      headers
    })
      .then(response => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  } else if (method.toUpperCase() === 'DELETE') {
    fetch(url, { method,
      headers
    })
      .then(response => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  } else {
    fetch(url, { method,
      body,
      headers
    })
      .then(response => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  }
}));

export default Api;
