import React from 'react'

const Box = ({who}) => {
  return (
	<div style={{width:'40vw'}}className={who?.status }>
		<img src={who?.image} width="70%" height="100%" alt='' />
		<div>{who?.name}</div>
	</div>
  )
}

export default Box