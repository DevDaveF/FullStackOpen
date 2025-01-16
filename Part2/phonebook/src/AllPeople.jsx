//import button as button...add button to end of li element see if will display a delete button for every component?
import Button from './Button.jsx'
import DeletePeople from './services/DeletePeople.js'

const AllPeople = (props) => {
  console.log('AllPeople handoff', props)
return(
    <ul style={{listStyleType: 'none'}}>
    {props.persons
      .filter((item) => {
        return props.nameFilter.toLowerCase() ==='' 
          ? item 
          : item.name.toLowerCase().includes(props.nameFilter.toLowerCase())
    } ).map(add => <li key={add.id}>{add.name} {add.number} <Button text = 'delete' click={() => DeletePeople(props, add)}/> </li>)}
  </ul>
)
}
export default AllPeople