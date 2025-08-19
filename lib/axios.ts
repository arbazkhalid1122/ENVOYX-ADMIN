import axios from "axios"
import { getSession } from "next-auth/react"

const api = axios.create({
  baseURL: "http://localhost:5000", // your API base URL
})

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const session = await getSession()

console.log("session", session);    
    const token = session?.accessToken

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
