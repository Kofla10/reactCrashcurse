import React from 'react'

const names = ['Jose Fernando', 'Luz Zuleima', 'Cristopher'];

export const Post = ({autor, body}) => {
  console.log('the autor is: ', autor, 'the body is', body)

  // const chosenName = Math.random()> 0.5?names[0]:names[1]//selected the name to random
  return (
    <>
      <div className='post'>
        <h1>{ autor }</h1>
        <h2>{ body }</h2>
      </div>
    </>

  )
}
   