import React from 'react'
import BeatLoader from "react-spinners/BeatLoader"

const Loader = ({loading}) => {
  return (
    <div>
        <BeatLoader color='red' loading={loading} size={60}/>
    </div>
  )
}

export default Loader