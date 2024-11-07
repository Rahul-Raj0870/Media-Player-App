import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.png'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.webp'
import feature3 from '../assets/feature3.jpg'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-items-center'>
        <div className='col col-lg-5'>
          <h3>Welcom to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>

        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img style={{width:'300px'}} className='img-fluid ms-5' src={landingImg} alt="landing image" />
        </div>
      </div>
      {/* feature */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

          </div>

        </div>
        
        

      </div>
      {/* video */}
      <div className='my-5 row align-item-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple, Fast and Powerfull  </h3>
          <p style={{textAlign:'justify'}}><span className='fw-bolder fs-5' >Play Everything: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci pariatur vitae corrupti sapiente nesciunt facere voluptate, sequi ea consequuntur harum ut ratione natus modi praesentium saepe incidunt veniam beatae omnis!</p>

          
          <p style={{textAlign:'justify'}}><span className='fw-bolder fs-5' >Categorise Videos: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci pariatur vitae corrupti sapiente nesciunt facere voluptate, sequi ea consequuntur harum ut ratione natus modi praesentium saepe incidunt veniam beatae omnis!</p>

          
          <p style={{textAlign:'justify'}}><span className='fw-bolder fs-5' >Managing History: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci pariatur vitae corrupti sapiente nesciunt facere voluptate, sequi ea consequuntur harum ut ratione natus modi praesentium saepe incidunt veniam beatae omnis!</p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/P6yGr0zhuQI" title="ഇനി Apple ഒന്ന് വിറയ്ക്കും! Snapdragon 8 Elite 🔥പവർ Item!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing