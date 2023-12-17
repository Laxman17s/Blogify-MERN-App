// api notications according to error and success
export const API_NOTIFICTION = {
  loading: {
    title: "Loading ...",
    message: "Data being loaded . Please wait ",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded ",
  },
  responseFailure: {
    title: "Error",
    message: "Error while sending response data from server. Try Again ",
  },
  requestFailure: {
    title: "Error",
    message: "Error while passing request data to server .Try Again ",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect with server . Please check internet connection",
  },
};

// Api service call
// Nedd for service url : {url:"",method:"POST/GET/DELETE/PUT",params:true/false,query:true/false}

export const API_SERVICE_URLS = {
  userSignUp: { url: "", method: "POST" },
  userLogin: { url: "", method: "POST" },
};
