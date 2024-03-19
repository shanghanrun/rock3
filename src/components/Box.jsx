import React from 'react'

const Box = ({who}) => {
  return (
	<div className={who?.status }>
		<img src={who?.image} width="500px" height="500px" alt='' />
		<div>{who?.name}</div>
	</div>
  )
}

export default Box