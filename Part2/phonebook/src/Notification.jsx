const Notification = ({ message }, {type}) => {
    if (message === null) {
      return null
    }
    console.log('type of message', type)

    return (
      <div className="confirm">
        {message}
      </div>
        
    )
  }
  
  export default Notification