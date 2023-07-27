import axios from 'axios'
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/stats/surveyed-quantity`

export default async function getSurveyedQuantity() {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    throw new Error('Error de axios')
  }
}
