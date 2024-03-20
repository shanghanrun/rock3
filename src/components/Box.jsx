import React from 'react'

const Box = ({who}) => {
  return (
	<div width="400px" className={`${who?.status} image-box` }>
		<img src={who?.image} width="70%" height="100%" alt='' />
		<div>{who?.name}</div>
	</div>
  )
}

export default Box