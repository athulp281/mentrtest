import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const request = (options) => {
  //Request header options
  let headers;
  if (options.headers) {
    headers = options.headers;
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }

  //Assigning header to options
  Object.assign(options, { headers });

  //Actual axios request
  return axios(options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error in request", err.response);
      return err.response.data;
    });
};

export default request;
