import repositoryService from "./repository"

const DeletePeople = (props, id) => {
    console.log('before delete :', props,'  ',id.id)
    window.confirm(`Delete ${id.name} ?`) ? 
    repositoryService
    .remove(id.id)
    .then(response => {const removeId = response.data.id
        console.log('then promise response  :',removeId)
        //console.log('filtering out deleted id:  ',(props.persons.filter((checkId) => checkId.id !== removeId)))
        props.setPersons(props.persons
          .filter((checkId) => checkId.id !== removeId))
        //props.setPersons('')
        //props.setPersons(props.persons.map(persons => persons.id !== id.id ? persons : response))
        //setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }) 
    : console.log('Kept')
    return (console.log('After delete', props.persons))
}
export default DeletePeople