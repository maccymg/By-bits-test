import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'https://api.bybits.co.uk'

function headers() {
  return {
    headers: { 
      Authorization: `Bearer ${getToken()}`,
      environment: 'mock',
      ContentType: 'application/json',
    },
  }
}

export function getDetails() {
  return axios.get(`${baseUrl}/policys/details`, headers())
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/token`, formdata, headers())
}