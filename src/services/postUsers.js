import axios from 'axios'
import { API_BASE_URL } from '../config'

const URL = `${API_BASE_URL}/users`

export default async function createUser(body) {
  try {
    const response = await axios.post(URL, body)
    return response.data
  } catch (error) {
    throw new Error('Error de axios')
  }
}
