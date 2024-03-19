import React from 'react'

const Button = ({onClick, img}) => {
  return (
	<div onClick={onClick} className="btn">
		<img src={img} alt=''/>
	</div>
  )
}

export default Button