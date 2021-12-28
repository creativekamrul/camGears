import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <div className="custom-container">
            <h1 className='top-section-heading'>All Categories</h1>
            <Row className='categories-home'>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Camera</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Lense</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Tripod</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Bags</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Props</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Lights</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Storage</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Batterys</Link>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='category-holder'>
                        <Link to="/">Others</Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Categories
