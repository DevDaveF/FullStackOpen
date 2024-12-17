import { useState } from 'react'

const App = () => {
  // tracks state of phonebook entries used to track people in phonebook
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number : '39-44-5323532', id: 2},
    { name: 'Jack Schneider', number : '66-31-653421', id: 3},
    { name: 'John Smith', number : '973-951-8844', id: 4},
  ]) 
  // used to track the state of the name input field and add a new person to the phonebook
  const [newName, setNewName] = useState('add a new person...')

  // used to track the state of the phone number input field and add a new phone number to the persons
  //array
  const [newNum, setNewNum] = useState('add a phone number...')

  const [nameFilter, setNameFilter] = useState('')

  // At the trigger of the form onSubmit event the addperson Function activates 
  // It is used to check if a name already exists in the phonebook'persons' state 
  // produces an alert window if not a new name, and adds to phonebook if a new name
  const addPerson = (event) => {
    event.preventDefault()
    //At the trigger of the form submit event personObject is set to current newName state value
    const personObject = {
      name: newName,
      number: newNum,
      id: persons.length +1
     }
    
    // variable that takes in a value if a name is found in the persons state array searching for
    // the value in the object personObject using the .find method looking for an exact match
    const checkName = persons.find(({name}) => name === personObject.name)

    //if state that checks if the value was found by using truthiness of javaScript variables. 
    //if value found it will generate a window alert and not add the name to he persons state array
    //if value was not found the variable will have undefined and generate a false truthiness
    //which will trigger the else statement that uses .concat to create a new persons array with
    //the new name
    if(checkName){
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
    }
      
  }

  //This function logs every change in value of the name input field using the onChange event
  //the value in this input field is stored in the newName useState and is set on every change via
  //setNewName
  const handleAddPerson = (event) => {
    setNewName(event.target.value)
  }

  //This function logs every change in value of the number input field using the onChange event
  //the value in this input field is stored in the newNum useState and is set on every change via
  //setNewNum
  const handleAddNumber = (event) => {
    setNewNum(event.target.value)
  }

  //App returns the HTML form with an updated list of names added to the phonebook stored in persons
  //useState array as objects
  //using the .map method each object in the persons useState array is iterated through and displayed
  //as a list item in HTML
  console.log('filter value = ', nameFilter)

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input
          value = {nameFilter}
          onChange={(event) => {setNameFilter(event.target.value) 
          }}
          />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleAddPerson}
            />
        </div>
        <div>
          number: <input 
            value={newNum}
            onChange={handleAddNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons
            .filter((item) => {
              return nameFilter.toLowerCase() ==='' 
                ? item 
                : item.name.toLowerCase().includes(nameFilter)
          } ).map(add => <li key={add.id}>{add.name} {add.number}</li>)}
        </ul> 
    </div>
  )
}

export default App
