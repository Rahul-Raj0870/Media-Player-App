import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
   <div style={{width:'400px'}}> 
    <h5>Bootstrap</h5>
    Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
    Code licensed MIT, docs CC BY 3.0.
    Currently v5.3.3.
   </div>
   {/* link */}
   <div className='d-flex flex-column'>
    <h5>Links</h5>
    <a to={'/'} style={{textDecoration:'none',color:'white'}} href="" target='_blank' >React</a>

   </div>


      </div>
    </div>
  )
}

export default Footer