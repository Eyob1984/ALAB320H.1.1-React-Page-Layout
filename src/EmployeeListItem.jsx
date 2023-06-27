import React from 'react'
import personImage from './asset/person-image.jpg'
export default function EmployeeList() {
  const employeLists = [
    {
      name: 'James King',
      position: 'President and CEO',
      personImage: personImage
    },
    {
      name: 'Juile Taylor',
      position: 'VP of Marketing',
      personImage: personImage
    },
    {
      name: 'Eugene Lee',
      position: 'CFO ',
      personImage: personImage
    }
    ]

  return (
    <div style={{padding: '4px'}}>
      {employeLists.map( (item, index) => {
        return (
          <div style={{border: '1px solid red',}}>
          <img style={{width: '50px', height: '50px'}} src={item.personImage} alt='person' />
          <span key={index}>{item.name}</span>
          <p key={index}>{item.position}</p>
          </div>
        )
      })}
    </div>
  )
}
