import axios from 'axios';
import config from '../config';

const UseGetCategories = () =>{
    return axios.get(`${config.baseApiUrl}/categories`)
      .then((res) => {return res.data})
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
    // .then((response) => {
    //   if (!sessionStorage.getItem(formData.email)) {
    //     sessionStorage.setItem(formData.email, response.data.accessToken);
    //   }
    //   return true;
    // });



    // , {
    //     headers: {
    //       'Authorization': `Bearer ${sessionStorage.getItem(sessionStorage.key(0))}`
    //     },
    //   }
}

export default UseGetCategories;