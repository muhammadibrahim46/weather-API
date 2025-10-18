import React from 'react'

function changText(props) {
  console.log(props.mydata)
  return (
    <div>
      <h1>{props.mydata?.condition?.humidity || "No humidity data"}</h1>
      <p>{props.mydata?.location?.city||"no location data"}</p>
    </div>
  )
}

export default changText;
