import axios from 'axios'
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/stats/most-picked-options`

export default async function getMostPickedOptions() {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Holi')
  }
}
