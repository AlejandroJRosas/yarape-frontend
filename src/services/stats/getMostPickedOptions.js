import axios from 'axios'
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/stats/most-picked-options`

export default async function getMostPickedOptions(categoryId, questionId) {
  try {
    const response = await axios.get(`${URL}/${categoryId}/${questionId}`)
    return response.data
  } catch (error) {
    throw new Error('Error de axios')
  }
}
