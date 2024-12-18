import { useState } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import AllPeople from './AllPeople'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number : '39-44-5323532', id: 2},
    { name: 'Jack Schneider', number : '66-31-653421', id: 3},
    { name: 'John Smith', number : '973-951-8844', id: 4},
  ]) 

  const [newName, setNewName] = useState('add a new person...')

  const [newNum, setNewNum] = useState('add a phone number...')

  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNum,
      id: persons.length +1
     }

    const checkName = persons.find(({name}) => name.toLowerCase() === personObject.name.toLowerCase())

    if(checkName){
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
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

        <AllPeople persons = {persons} nameFilter = {nameFilter}/>

    </div>
  )
}

export default App
