import React from 'react'

function UserCard(props) {
    console.log(props.data)
  return (
    <div className='user_card'>
<img className='user_imag'/>
<h1>{props.data.name.first}</h1>
<p>{props.data.phone}</p>
<p>{props.data.location.city},{props.data.location.state}</p>

    </div>
  )
}

export default UserCard