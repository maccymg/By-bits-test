import axios from 'axios'

const baseUrl = 'https://api.bybits.co.uk'

function headers() {
  return {
    headers: { 
      Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs',
      environment: 'mock',
      ContentType: 'application/json',
    },
  }
}

export function getDetails() {
  return axios.post(`${baseUrl}/policys/details`, formdata, headers())
}

export function loginUser() {
  return axios.post(`${baseUrl}/auth/token`, formdata)
}