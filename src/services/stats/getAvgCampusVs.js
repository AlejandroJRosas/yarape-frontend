import axios from 'axios'
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/stats/avg-campus-vs`

export default async function getAvgCampusVs() {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    throw new Error('Error de Axios')
  }
}
