import axios from "axios"
import URL from "./URL"
const getCategoryAPI = async() => {
  const res = axios.get(URL+"category")
    .then((res) => {
      console.log("getCategoryAPI", res)
      return res.data
    })
    .catch((e) => {
      console.error(e)
      return []
    })
  return res
}

export {getCategoryAPI}