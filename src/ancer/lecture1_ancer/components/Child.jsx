import React from 'react'

function Child({data}) {
  return (
    <>
        <div className='childContents'>
            Childコンポーネントです
            <p>{data}</p>
        </div>
    </>
  )
}

export default Child