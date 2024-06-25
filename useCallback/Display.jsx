/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react"
const Display = ({text,displayValue}) => {
  return (
    <div>
        <h5>From Display Component, {text}, {displayValue}</h5>
    </div>
  )
}

export default React.memo(Display)
