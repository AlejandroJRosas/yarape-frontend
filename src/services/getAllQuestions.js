import axios from 'axios'
import { API_BASE_URL } from '../config'

const URL = `${API_BASE_URL}/getAllQuestions`

export default async function getAllQuestions() {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    throw new Error('Error de axios')
  }
}
