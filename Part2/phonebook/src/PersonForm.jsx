const PersonForm = (props) => {

    return(
        <form onSubmit={props.onSubmit}>
        <div>
          name: <input 
            value={props.value} 
            onChange={props.onChange}
            />
        </div>
        <div>
          number: <input 
            value={props.value2}
            onChange={props.onChange2}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm