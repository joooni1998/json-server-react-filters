import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { editCharacter } from '../../features/characters/charactersSlice'
import { connect } from 'react-redux';

const EditCharacter = ({editCharacter}) => {
  const [characterInfoToEdit, setCharacterInfoToEdit] = useState({})
  const {id } = useParams()
  const idParams = id
  const navigate = useNavigate()


  const fetchCharacterInfo = async() => {
    // console.log('id    ', idParams)
    const response = await fetch(`http://localhost:3010/madeuppeople/${idParams}`)
    const res = await response.json()
    // console.log('res   [0]', res)
    setCharacterInfoToEdit(res[0])
  }


  useEffect(() => {
    fetchCharacterInfo()

  },[])


  const handleSubmit = (e) => {
    console.log('characterInfoToEdit   ', characterInfoToEdit)
    e.preventDefault()
    const name = e.target.elements.name.value ? e.target.elements.name.value  :characterInfoToEdit.name
    const lastName = e.target.elements.lastName.value ? e.target.elements.lastName.value  :characterInfoToEdit.lastName
    const age = e.target.elements.age.value? e.target.elements.age.value  :characterInfoToEdit.age
    const favoriteColor = e.target.elements.favoriteColor.value ? e.target.elements.favoriteColor.value  :characterInfoToEdit.favoriteColor
    const country = e.target.elements.country.value ? e.target.elements.country.value  :characterInfoToEdit.country
    const hobbie = e.target.elements.hobbie.value ? e.target.elements.hobbie.value  :characterInfoToEdit.hobbie
    const image = characterInfoToEdit.image

    // updateCharacterInfo(id, name, lastName, age, favoriteColor, country, hobbie)
    const body = {
      id: parseInt(idParams),
      name: name,
      lastName: lastName,
      age: parseInt(age),
      favoriteColor: favoriteColor,
      country: country,
      hobbie: hobbie,
      image: image
    }
    // console.log('body  ', body)
    editCharacter(body)
    // createNewCharacter(name, lastName, age, favoriteColor, country, hobbie)
    navigate(-1)
  }
  return (
    <div className="updateCharacter">

      <h2 className='updateH2'>Empty fields will remain the same</h2>

    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      {/* <p>Empty fields will remain the same</p> */}
      <div className='updateName'>
      {/* <label htmlFor='name'>Name: </label> */}
      <input className='editField' type="text" name='name' placeholder={characterInfoToEdit.name} id='name'/>
      </div>

      <div className='updateOtherInfo'>
      {/* <label htmlFor='lastName'>Last Name: </label> */}
      <input className='editField' type="text" name='lastName' placeholder={characterInfoToEdit.lastName} id='lastName'/>
      <br/>

      {/* <label htmlFor='age'>Age: </label> */}
      <input className='editField' type="text" name='age' placeholder={characterInfoToEdit.age} id='age'/>
      <br/>

      {/* <label htmlFor='favoriteColor'>Favorite Color: </label> */}
      <input  className='editField' type="text" name='favoriteColor' placeholder={characterInfoToEdit.favoriteColor} id='favoriteColor'/>
      <br/>

      {/* <label htmlFor='country'>Country: </label> */}
      <input  className='editField' type="text" name='country' placeholder={characterInfoToEdit.country} id='country'/>
      <br/>

      {/* <label htmlFor='hobbie'>Hobbie: </label> */}
      <input  className='editField' type="text" name='hobbie'placeholder={characterInfoToEdit.hobbie} id='hobbie'/>
      <br/>
      <input className='submitButton' type='submit' value="Update info"/>

      <img className='imgUpdate' src={characterInfoToEdit.image} />
      </div>


    </form>

  </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    editCharacter: (body) => dispatch(editCharacter(body))
  }
  }

export default connect(null, mapDispatchToProps)(EditCharacter);

