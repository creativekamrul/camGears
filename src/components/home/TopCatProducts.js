import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../misc/ProductCard'
import DslrCam from '../../images/dslr_cam.png'
const TopCatProducts = () => {
    return (
        <div className='custom-container'>
            <h1 className='top-section-heading'>Top Cameras</h1>
            <Row>
                <Col md={3}>
                    <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>

            </Row>
        </div>
    )
}

export default TopCatProducts
