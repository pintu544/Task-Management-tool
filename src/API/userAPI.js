import axios from "axios";
const api_url = "http://localhost:8000";


export const signup = async (data) => {
    console.log(data);
    try {
      const response = await axios({
        method: "POST",
        url: `${api_url}/signup`,
        data: data
      });
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
};


export const signin = async (data) => {
    console.log(data);
    try {
      const response = await axios({
        method: "POST",
        url: `${api_url}/signin`,
        data: data
      });
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
};

