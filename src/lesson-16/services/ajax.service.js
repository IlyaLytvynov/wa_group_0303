export class AjaxService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', this.baseUrl, true);

      xhr.send();

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 ) {
          if(xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.message);
          }
        }
      });
    })

  }

  post() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', 'http://localhost:4001/list', true);
      const data = JSON.stringify({
        title: this.state.value
      });
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(data);

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.response));

        }
      });
    })
  }

  delete() {

  }

  put() {

  }
}