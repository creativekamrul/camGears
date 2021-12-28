import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DslrCam from '../../images/dslr_cam.png'
import DslrLense from '../../images/dslr_lense.png'
import ProductCard from '../misc/ProductCard'

const TopProducts = () => {
    return (
        <div className="custom-container">
            <h1 className="top-section-heading">Top Products</h1>
            <Row>
                <Col md={3}>
                    <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrLense} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrLense} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrLense} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrCam} />
                </Col>
                <Col md={3}>
                <ProductCard productImg={DslrLense} />
                </Col>
            </Row>
        </div>
    )
}

export default TopProducts
