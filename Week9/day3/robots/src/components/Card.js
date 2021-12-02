import './Card.css'
const Card = (props) => {
    const {robot} = props
    const {name,email,username,id} = robot;
    return(
        <div className="container">
      <div className="cards">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
        <h2>{name}</h2>
        <p>{email}</p>
        <h4>{username}</h4>
      </div>
        </div>
     
    )
  }
  export default Card