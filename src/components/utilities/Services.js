import { costumAlert } from "./Methods";

/**
 * @param {*} obj Ruang Lingkup class
 * @param {*} endpoint API endpoint.
 * @param {*} data Body if data is Saat Dikirim.
 * @param {*} returnMethod callback
 * @param {*} type Method POST,GET,DELETE.
 * @param {*} loader loader
 */

export async function callRemoteMethod(obj, endpoint, data, returnMethod, type = "GET", loader) {
  if (loader == true) {
    obj.setState({ isLoading: true });
  }
  var request = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (type != "GET") {
    request.body = JSON.stringify(data);
  }

  await fetch(endpoint, request)
    .then(response => response.json())
    .then(responseJson => {
      if (loader == true) {
        obj.setState({ isLoading: false });
      }
      eval("obj." + returnMethod + "(responseJson)");
    })
    .catch(error => {
      obj.setState({ isLoading: false });
      setTimeout(() => {
        customAlert(error.message);
      }, 500);
    });
}