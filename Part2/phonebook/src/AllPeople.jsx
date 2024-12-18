const AllPeople = (props) => {

return(
    <ul>
    {props.persons
      .filter((item) => {
        return props.nameFilter.toLowerCase() ==='' 
          ? item 
          : item.name.toLowerCase().includes(props.nameFilter.toLowerCase())
    } ).map(add => <li key={add.id}>{add.name} {add.number}</li>)}
  </ul> 
)
}
export default AllPeople