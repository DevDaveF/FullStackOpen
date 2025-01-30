import { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import AllPeople from './AllPeople'
import repositoryService from './services/repository.js'
import Notification from './Notification.jsx'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('add a new person...')
  const [newNum, setNewNum] = useState('add a phone number...')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)
  
  let messageType = null

  useEffect(() => {
    repositoryService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNum,
     }

    const checkName = persons.find(({name}) => name.toLowerCase() === personObject.name.toLowerCase())

    console.log('checkname return: ',checkName)

    if(checkName){
      checkName.number = newNum
      console.log('checkname update number: ',checkName.number)
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          repositoryService
          .update(checkName)
          .then(response => {
            setPersons(persons.map(persons => persons.id === checkName.id ? response.data : persons))
          })
          setMessage(`Updated the number of ${checkName.name}`)
          messageType = 0
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }
      }
    else{
      repositoryService
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNum('')
      })
      setMessage(`Added ${personObject.name} to the phonebook`)
      messageType = 0
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
      
  }

  const handleFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message} type={messageType}/>
        <Filter value = {nameFilter} onChange = {handleFilter}/>

      <h2>add a new</h2>
    
        <PersonForm 
          onSubmit={addPerson} 
          value={newName} 
          onChange={handleAddPerson}
          value_2 = {newNum}
          onChange_2={handleAddNumber}
        />

      <h2>Numbers</h2>

        <AllPeople persons = {persons} nameFilter = {nameFilter} setPersons = {setPersons} useEffect = {useEffect}/>

    </div>
  )
}

export default App
