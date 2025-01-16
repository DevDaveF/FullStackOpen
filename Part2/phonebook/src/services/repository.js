    import axios from 'axios'
    const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const update = (changeObject) => {
  console.log('update id: ', changeObject.id)
  console.log('update phone number :', changeObject)
  return axios.put(`${baseUrl}/${changeObject.id}`, changeObject)
   
}

export default { getAll, create, remove, update}