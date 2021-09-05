import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item,"kkkkkkkk");
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image.url} alt='alter' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong> Name:</strong> {item.name}
            </li>
            <li>
              <strong>Aliases Name:</strong> {item.biography.aliases}
            </li>
            <li>
              <strong> Gender:</strong> {item.appearance.gender}
            </li>
            <li>
              <strong>Publisher:</strong> {item.biography.publisher}
            </li>
           
            <li>
              <strong>Occupation:</strong> {item.work.occupation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
