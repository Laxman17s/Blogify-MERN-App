import axios from "axios";

import { API_SERVICE_URLS, API_NOTIFICTION } from "../constant/config";
import { getAccessToken } from "../utils/common-utils";

const API_URL = "http://localhost:8000";

// axios instance
const axiosTnstance = axios.create({
  baseurl: API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json,form-data", // "Content-Type":"application/json",//Authorization:`Bearer ${user.token}`
  },
});

// axios instance request interceptor
axiosTnstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// axios instance response interceptor
axiosTnstance.interceptors.response.use(
  function (response) {
    return ResponseProcess(response);
  },
  function (error) {
    return Promise.reject(ResponseError(error));
  }
);

// response process
const ResponseProcess = (response) => {
  if (response?.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      message: response?.message,
      code: response?.code,
    };
  }
};

// response error
const ResponseError = (error) => {
  if (error.response) {
    console.log("Error in response", error.toJSON());
    return {
      isError: true,
      message: API_NOTIFICTION.responseFailure,
      code: error.request?.status,
    };
  } else if (error.request) {
    console.log("Error in request", error.toJSON());

    return {
      isError: true,
      message: API_NOTIFICTION.requestFailure,
      code: "",
    };
  } else {
    console.log("Error in network", error.toJSON());

    return {
      isError: true,
      message: API_NOTIFICTION.networkError,
    };
  }
};

const API = {};

// api

for (const [key, value] of Object.entries(API_SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosTnstance({
      method: value.method,
      url: value.url,
      //   data: value.method === "DELETE" ? {} : body,
      headers: {
        Authorization: getAccessToken(),
      },
      // Type:getType(value,body)
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
  };
}

export { API };
