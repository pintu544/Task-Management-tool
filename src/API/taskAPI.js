import axios from "axios";
const api_url = "http://localhost:8000";

export const createTask = async(data) => {
    console.log(data)
    try {
        const response = await axios({
            method: "POST",
            url: `${api_url}/create-task`,
            data: data
          });
          return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const updateTask = async(id,statusData) =>{
    // console.log("====================================")
    console.warn("reactApi:" ,id,statusData)
    try {
        const response = await axios({
          method: "PATCH",
          url: `${api_url}/update-task/${id}`,
          data: {"status": statusData}
        });
        return response;
      } catch (err) {
        console.log(err);
        return err;
      }
}

export const deleteTask = async(id) =>{
    try {
        const responce = await axios({
            method:"DELETE",
            url: `${api_url}/task/${id}`
        })
        return responce
    } catch (error) {
        console.log(error);
        return error;
    }
}

