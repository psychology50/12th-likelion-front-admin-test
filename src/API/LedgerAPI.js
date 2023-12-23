import axios from "axios"
import URL from "./URL"
const getLedgerAPI = async() => {
  const res = axios.get(URL+"ledger")
    .then((res) => {
      console.log("getLedgerAPI", res)
      return res.data
    })
    .catch((e) => {
      console.error(e)
      return []
    })
  return res
}

const postLedgerAPI = async(data) => {
  const res = axios.post(URL+"ledger", data)
    .then((res) => {
      console.log("postLedgerAPI", res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}
export {getLedgerAPI, postLedgerAPI}