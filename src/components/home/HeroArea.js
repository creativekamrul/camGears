import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DslrCam from '../../images/dslr_cam.png'
const HeroArea = () => {
    return (
        <div className="hero-area custom-container">
            <Row>
                <Col className="hero-area-text">
                <div>
                <h1>The Best Camera Gear</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et tellus orci. Suspendisse fringilla varius ante ac gravida. In nec turpis a quam ornare placerat sed at nibh. Nam metus velit, suscipit.</p>
                <Link to="/all-products">Browse Gears</Link>
                </div>
                </Col>
                <Col className="hero-area-image-holder">
                    <img className="hero-product-image" src={DslrCam} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default HeroArea
