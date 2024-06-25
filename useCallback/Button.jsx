/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react"
const Button = ({content,handleClick}) => {
  return (
    <div>
        <button onClick={handleClick}>{content}</button>
    </div>
  )
}

export default React.memo(Button)