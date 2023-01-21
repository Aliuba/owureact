const Simpson = ({simpson}) => {
  const {id, name, image}=simpson
    return(
        <div>
            <h3>{id}--{name}</h3>
            <img src={image} alt={name}/>
        </div>
    )
}
export default Simpson;