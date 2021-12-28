import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../misc/ProductCard'
import DslrCam from '../../images/dslr_cam.png'

const TopDeals = () => {
    return (
        <div className='custom-container'>
            <div className='top-deal-header'>
            <h1 className='top-section-heading'>Top Deals</h1>

            </div>
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

export default TopDeals
