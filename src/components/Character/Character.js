import "./style.css"
const Character = ({character}) => {
  const {id,name,status,species,gender,image}=character
      return(
          <div className="character">
              <div className={'image'}>
              <img src={image} alt={name}/>
              </div>
              <div>
                  <h3>{id}.{name}</h3>
                  <p>{status}--{species}--{gender}</p>
              </div>
          </div>
      )


}
export default Character;