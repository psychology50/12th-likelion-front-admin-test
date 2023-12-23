import axios from "axios"
import URL from "./URL"
const getPaymentAPI = async() => {
  const res = await axios.get(URL+"payment")
    .then((res) => {
      console.log("getPaymentAPI res : ", res)
      return res.data
    })
    .catch((e) => {
      console.error(e)
      return []
    })
  return res
}

export {getPaymentAPI}