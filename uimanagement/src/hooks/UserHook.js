import axios from "axios";
import config from '../config.js';

const UseLogin = (formData) => {
    return axios.post(`${config.baseApiUrl}/users/login`, formData)
      .then((response) => {
        if (!sessionStorage.getItem(formData.email)) {
          sessionStorage.setItem(formData.email, response.data.accessToken);
        }
        return true;
      });
  };

export default UseLogin;