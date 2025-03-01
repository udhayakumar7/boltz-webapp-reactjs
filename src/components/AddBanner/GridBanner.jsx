import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Container } from 'react-bootstrap'

const GridBanner = () => {

  return (
    <div className='grid-banner main_section'>
        <Container >
            <Row>
          
            <Col lg={6}>
            <div className='grid-image'>
                <img className='img-fluid' src="images/grid-image-1.webp" alt="grid-image" />
                 <div className='image-layer one'>
                    <div className='special-feature text-center'>
                        <p style={{textTransform: 'uppercase'}}>Discover Superior Sound</p>
                        <h2>Your Perfect Audio Partner</h2>
                        <p>Our Exclusive Collection of High-Fidelity Headphones</p>
                    </div>
                 </div>
            </div>
            </Col>


            <Col lg={6}>
            <div className='grid-image row-image one'>
                <img className='img-fluid' src="images/grid-image-2.webp" alt="grid-image" />
                <div className='image-layer two'>
                    <div className='special-feature '>
                        <p style={{textTransform: 'uppercase'}}>Comfort Meets Technology</p>
                        <h2>Wireless Freedom Awaits</h2>
                        <p>Upgrade to Bluetooth Headphones</p>
                    </div>
                 </div>
            </div>
            <div className='grid-image row-image'>
                <img className='img-fluid' src="images/grid-image-3.webp" alt="grid-image" />
                <div className='image-layer three'>
                    <div className='special-feature text-end'>
                        <p style={{textTransform: 'uppercase'}}>Wireless Freedom Awaits</p>
                        <h2>Noise-Canceling Excellence</h2>
                        <p>Enjoy Peaceful Listening with Advanced</p>
                    </div>
                 </div>
            </div>
            </Col>


            </Row>



        </Container>
        



    </div>
  )
}

export default GridBanner