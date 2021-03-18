import axios from "axios";

const URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => { // принимает callback который нужно вызвать на случай неавторизованности
  const api = axios.create({ // callback будет редиректить на страницу куда нужно ввести почту/пароль
    baseURL: URL,
    timeout: REQUEST_TIMEOUT, // + С fetch пришлось бы описывать логику !!!
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized(); // callback – который берется из функции createAPI

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;

};

// import AdapterModel from "../models/adapter";

// const Method = {
//   GET: `GET`,
//   PUT: `PUT`,
//   POST: `POST`,
//   DELETE: `DELETE`
// };

// const SuccessHTTPStatusRange = {
//   MIN: 200,
//   MAX: 299
// };

// export default class Api {
//   constructor(endPoint, authorization) {
//     this._endPoint = endPoint;
//     this._authorization = authorization;
//   }

//   getFilms() {
//     return this._sendRequest({
//       url: `movies`
//     })
//       .then(Api.toJSON)
//       .then(AdapterModel.createFilms);
//   }

//   updateFilm(id, film) {
//     return this._sendRequest({
//       url: `movies/${id}`,
//       method: Method.PUT,
//       body: JSON.stringify(film.adaptToServer()),
//       headers: new Headers({ "Content-Type": `application/json` })
//     })
//       .then(Api.toJSON)
//       .then(AdapterModel.createFilm);
//   }

//   getComment(id) {
//     return this._sendRequest({
//       url: `comments/${id}`
//     })
//       .then(Api.toJSON);
//   }

//   addComment(id, comment) {
//     return this._sendRequest({
//       url: `comments/${id}`,
//       method: Method.POST,
//       body: comment,
//       headers: new Headers({ "Content-Type": `application/json` })
//     });
//   }

//   deleteComment(id) {
//     return this._sendRequest({
//       url: `comments/${id}`,
//       method: Method.DELETE
//     });
//   }

//   _sendRequest({ url, method = Method.GET, body = null, headers = new Headers() }) {
//     headers.append(`Authorization`, this._authorization);

//     return fetch(`${this._endPoint}/${url}`, { method, body, headers })
//       .then(Api.checkStatus)
//       .catch(Api.catchError);
//   }

//   static checkStatus(response) {
//     if (
//       response.status < SuccessHTTPStatusRange.MIN &&
//       response.status > SuccessHTTPStatusRange.MAX
//     ) {
//       throw new Error(`${response.status}: ${response.statusText}`);
//     }

//     return response;
//   }

//   static toJSON(response) {
//     return response.json();
//   }

//   static catchError(err) {
//     throw err;
//   }
// }
