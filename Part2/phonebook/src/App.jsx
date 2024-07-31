import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('add a new person...')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
     }
    
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleAddPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleAddPerson}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(add => <li key={add.name}>{add.name}</li>)}
        </ul> 
    </div>
  )
}

export default App
