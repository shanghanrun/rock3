import React from 'react'

const Button = ({onClick, image}) => {
  return (
	<div onClick={onClick} className="btn">
		<img src={image} alt=''/>
	</div>
  )
}

export default Button