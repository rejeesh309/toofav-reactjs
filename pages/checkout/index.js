import Head from 'next/head'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



// Import Swiper styles
import "swiper/css";

export default function Checkout() {


    const [addNewAddress, setShow4] = useState(false);

    const addNewAddressClose = () => setShow4(false);
    const addNewAddressShow = () => setShow4(true);


    const [addNewCard, setShow5] = useState(false);

    const addNewCardClose = () => setShow5(false);
    const addNewCardShow = () => setShow5(true);

    const [couponsShow, setShow6] = useState(false);

    const couponsShowClose = () => setShow6(false);
    const couponsShowShow = () => setShow6(true);


    
    return (
            <>
            <div class="container-fluid">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section className='product-detail-area checkout-area'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-9">
                            <div className='checkout-steps-wrap'>
                                <Accordion defaultActiveKey="0" flush="true">
                                            <Accordion.Item eventKey="0" flush="true">
                                                <Accordion.Header>
                                                    Shipping Address
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div class="list-group address-wrap">
                                                        <ul className='list-wrap'>
                                                            <li>
                                                                <label class="list-group-item">
                                                                <input class="form-check-input me-1" name='addrs' type="radio" value=""/>
                                                                <div className='ms-2'>
                                                                    <h5 className='name'>Jhone Doe</h5>
                                                                    <p className='txt'>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
                                                                    <div className='bottom-bar'>
                                                                        <p className='mobile'>
                                                                            <img src='/mobile-01.svg' className='icon me-2'/>
                                                                            +91 2345 6789
                                                                        </p>
                                                                        <div className='btn-wrap'>
                                                                            <a className='icon'><img src='/edit-01.svg'/></a>
                                                                            <a className='icon'><img src='/delete-01.svg'/></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item">
                                                                <input class="form-check-input me-1" name='addrs' type="radio" value=""/>
                                                                <div className='ms-2'>
                                                                    <h5 className='name'>Jhone Doe</h5>
                                                                    <p className='txt'>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
                                                                    <div className='bottom-bar'>
                                                                        <p className='mobile'>
                                                                            <img src='/mobile-01.svg' className='icon me-2'/>
                                                                            +91 2345 6789
                                                                        </p>
                                                                        <div className='btn-wrap'>
                                                                            <a className='icon'><img src='/edit-01.svg'/></a>
                                                                            <a className='icon'><img src='/delete-01.svg'/></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item">
                                                                <input class="form-check-input me-1" name='addrs' type="radio" value=""/>
                                                                <div className='ms-2'>
                                                                    <h5 className='name'>Jhone Doe</h5>
                                                                    <p className='txt'>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
                                                                    <div className='bottom-bar'>
                                                                        <p className='mobile'>
                                                                            <img src='/mobile-01.svg' className='icon me-2'/>
                                                                            +91 2345 6789
                                                                        </p>
                                                                        <div className='btn-wrap'>
                                                                            <a className='icon'><img src='/edit-01.svg'/></a>
                                                                            <a className='icon'><img src='/delete-01.svg'/></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item">
                                                                <input class="form-check-input me-1" name='addrs' type="radio" value=""/>
                                                                <div className='ms-2'>
                                                                    <h5 className='name'>Jhone Doe</h5>
                                                                    <p className='txt'>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
                                                                    <div className='bottom-bar'>
                                                                        <p className='mobile'>
                                                                            <img src='/mobile-01.svg' className='icon me-2'/>
                                                                            +91 2345 6789
                                                                        </p>
                                                                        <div className='btn-wrap'>
                                                                            <a className='icon'><img src='/edit-01.svg'/></a>
                                                                            <a className='icon'><img src='/delete-01.svg'/></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className='action-bar'>
                                                            <div className='btn-group-wrap'>
                                                                <button type="button" name="" id="" class="btn btn btn-outline-primary mb-3 me-3" onClick={addNewAddressShow}>Add new address</button>
                                                                <button type="button" name="" id="" class="btn btn-primary  mb-3">Continue</button>
                                                            </div>
                                                        </div>
                                                      </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1" flush="true">
                                                <Accordion.Header>
                                                    Payment methods
                                                </Accordion.Header>
                                                <Accordion.Body>

                                                <div class="address-wrap payment-wrap mb-3">

                                                <Swiper
                                                    slidesPerView={3}
                                                    spaceBetween={15}
                                                    className="mySwiper"
                                                    >
                                                    <SwiperSlide>
                                                        <div  className='list-wrap dcard-wrap'>
                                                            <label class="list-group-item">
                                                                    <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                    <div className='ms-2 w-100'>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <h5 className='number'>XXX XXXX XXX X 1234</h5>
                                                                            <img className='icon' src='/visa-01.svg'></img>
                                                                        </div>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <h5 className='h-name'>Jhone Doe</h5>
                                                                            <p className='txt'>Debit Card</p>
                                                                        </div>
                                                                        <div className='d-flex justify-content-between align-items-center bottom-bar  mt-md-4 mt-3'>
                                                                            <input type="text" class="form-control" placeholder='Enter CVV' name="" id=""/>
                                                                            <a className='popover-trigger'>What is CVV?</a>
                                                                        </div>
                                                                    </div>
                                                            </label>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div  className='dcard-wrap'>
                                                                <div className='add-new-card'  onClick={addNewCardShow}>
                                                                    <h4 className='txt'>Add new card</h4>
                                                                </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                                </div>
                                                <div class="list-group address-wrap payment-wrap">
                                                        <ul className='list-wrap'>
                                                            <li>
                                                                <label class="list-group-item  align-items-center">
                                                                <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                <div className='ms-2 d-flex justify-content-between w-100'>
                                                                    <div className='left d-flex align-items-center'>
                                                                        <img src='/wallet.svg' className='icon me-2'/>
                                                                        <h5 className='name mb-0'>Wallet</h5>
                                                                    </div>
                                                                    <div className='right text-end'>
                                                                        <h4 className='balance mb-0'>₹ 899.99</h4>
                                                                        <span className='label'>Available Balance</span>
                                                                    </div>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item  align-items-center">
                                                                <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                <div className='ms-2 d-flex  align-items-center'>
                                                                    <img src='/card-icon.svg' className='icon me-2'/>
                                                                    <h5 className='name mb-0'>Debit/Credit Card</h5>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item  align-items-center">
                                                                <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                <div className='ms-2 d-flex   align-items-center'>
                                                                    <img src='/apple.svg' className='icon me-2'/>
                                                                    <h5 className='name mb-0'>Apple Pay</h5>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item  align-items-center">
                                                                <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                <div className='ms-2 d-flex   align-items-center'>
                                                                    <img src='/google.svg' className='icon me-2'/>
                                                                    <h5 className='name mb-0'>Google Pay</h5>
                                                                </div>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label class="list-group-item  align-items-center">
                                                                <input class="form-check-input me-1" name='payment' type="radio" value=""/>
                                                                <div className='ms-2 d-flex   align-items-center'>
                                                                    <img src='/cash.svg' className='icon me-2'/>
                                                                    <h5 className='name mb-0'>Cash on Delivery</h5>
                                                                </div>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className='promo-code-card list-group-item align-items-center justify-content-between'>
                                                            <div className='left d-flex align-items-center '>
                                                                <img className='icon' src='/flash-deal.svg'/>
                                                                <div className='ms-3'>
                                                                    <p className='txt'>Have a gift card or promo code?</p>
                                                                    <p className='link' onClick={couponsShowShow}>View Coupons </p>
                                                                </div>
                                                            </div>
                                                            <div className='right position-relative'>
                                                              <input type="text" class="form-control" placeholder='Enter Code' name="" id=""/>
                                                              <button type="button" name="" id="" class="btn">APPLY</button>
                                                            </div>
                                                        </div>
                                                        <div className='action-bar'>
                                                            <div className='btn-group-wrap'>
                                                                <button type="button" name="" id="" class="btn btn-primary  mb-3">Continue</button>
                                                            </div>
                                                        </div>
                                                </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" flush="true">
                                                <Accordion.Header>
                                                    Items and Delivery
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                <div className='overview-wrap'>
                                                    <div className='cart-item-card align-items-center'>
                                                        <div className='img-area'>
                                                            <Image
                                                                className='pro-image'
                                                                src="/1920_750_29894mensxp-fragrances 1.jpg"
                                                                alt="Deals image"
                                                                fill
                                                            />
                                                        </div>
                                                        <div className='cont-area w-100'>
                                                            <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                                            <div className='price my-2'>
                                                                <h5 className='mb-0'>₹ 899.99</h5>
                                                            </div>
                                                            <div className='action'>
                                                                <p className='qty'>Qty:  2</p>
                                                                <h4 className='soldby'><span>Sold by :</span>   SKG Garments </h4>
                                                                <h4 className='expect-delivr'><span>Expected delivery :</span> 30 Jan 2023</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='cart-item-card align-items-center'>
                                                        <div className='img-area'>
                                                            <Image
                                                                className='pro-image'
                                                                src="/1920_750_29894mensxp-fragrances 1.jpg"
                                                                alt="Deals image"
                                                                fill
                                                            />
                                                        </div>
                                                        <div className='cont-area w-100'>
                                                            <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                                            <div className='price my-2'>
                                                                <h5 className='mb-0'>₹ 899.99</h5>
                                                            </div>
                                                            <div className='action'>
                                                                <p className='qty'>Qty:  2</p>
                                                                <h4 className='soldby'><span>Sold by :</span>   SKG Garments </h4>
                                                                <h4 className='expect-delivr'><span>Expected delivery :</span> 30 Jan 2023</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col-md-6'>
                                                            <h4 className='sub-title'>Shipping Address</h4>
                                                            
                                                        <div class="list-group address-wrap">
                                                            <ul className='list-wrap'>
                                                                <li>
                                                                    <label class="list-group-item">
                                                                        <div className='ms-2'>
                                                                            <h5 className='name'>Jhone Doe</h5>
                                                                            <p className='txt'>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
                                                                            <div className='bottom-bar'>
                                                                                <p className='mobile'>
                                                                                    <img src='/mobile-01.svg' className='icon me-2'/>
                                                                                    +91 2345 6789
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <h4 className='sub-title'>Payment Method</h4>
                                                            
                                                            
                                                <div class="address-wrap payment-wrap">
                                                        
                                                            <div  className='list-wrap dcard-wrap'>
                                                            <label class="list-group-item">
                                                                    <div className='ms-2 w-100'>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <h5 className='number'>XXX XXXX XXX X 1234</h5>
                                                                            <img className='icon' src='/visa-01.svg'></img>
                                                                        </div>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <h5 className='h-name'>Jhone Doe</h5>
                                                                            <p className='txt'>Debit Card</p>
                                                                        </div>
                                                                    </div>
                                                            </label>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                </Accordion>
                            </div>
                    </div>
                    <div class="col-lg-3">
                        <div className='action-card'>

                            
                        <Accordion defaultActiveKey={['1', '2']} flush="true" alwaysOpen>
                                            <Accordion.Item eventKey="1" flush="true">
                                                <Accordion.Header>
                                                    Order List
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                <div className='overview-wrap'>
                                                    <div className='cart-item-card align-items-center'>
                                                        <div className='img-area'>
                                                            <Image
                                                                className='pro-image'
                                                                src="/1920_750_29894mensxp-fragrances 1.jpg"
                                                                alt="Deals image"
                                                                fill
                                                            />
                                                        </div>
                                                        <div className='cont-area w-100'>
                                                            <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                                            <div className='price my-2'>
                                                                <h5 className='mb-0'>₹ 899.99</h5>
                                                            </div>
                                                            <div className='action'>
                                                                <p className='qty'>Qty:  2</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='cart-item-card align-items-center'>
                                                        <div className='img-area'>
                                                            <Image
                                                                className='pro-image'
                                                                src="/1920_750_29894mensxp-fragrances 1.jpg"
                                                                alt="Deals image"
                                                                fill
                                                            />
                                                        </div>
                                                        <div className='cont-area w-100'>
                                                            <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                                            <div className='price my-2'>
                                                                <h5 className='mb-0'>₹ 899.99</h5>
                                                            </div>
                                                            <div className='action'>
                                                                <p className='qty'>Qty:  2</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" flush="true">
                                                <Accordion.Header>
                                                    Price Details
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                <Table>
                                                <tbody>
                                                    <tr>
                                                    <td>Sub Total</td>
                                                    <td className='text-end'>₹ 899.99</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Discount</td>
                                                    <td className='text-end green'>-₹ 200.00</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Coupon Discount</td>
                                                    <td className='text-end green'>-₹ 50.00</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Delivery Charge</td>
                                                    <td className='text-end green'>Free</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Grand Total</td>
                                                    <th scope="row" className='text-end'>₹ 899.99</th>
                                                    </tr>
                                                </tbody>
                                                </Table>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                </Accordion>

                            <div className='btn-group-wrap'>
                                  <a name="" id="" class="btn btn-primary mb-3" href="#" role="button">Place Order</a>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                {/* Add New Address */}
                <Modal 
                show={addNewAddress} 
                size="lg" 
                backdrop="static"
                keyboard={false} 
                onHide={addNewAddressClose} 
                className='addNewAddress-pop' 
                centered>
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGriMobile">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile number" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Pin code</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 row mx-0" id="formGridRadio">
                                <Form.Label className='ps-0'>Address Type</Form.Label>
                                <Form.Check className='col-auto'  type="radio" label="Home" />
                                <Form.Check className='col-auto'  type="radio" label="Office" />
                        </Form.Group>


                        <Row className="align-items-center">
                            <Form.Group as={Col} className="mb-3" id="">
                                <Form.Check type="checkbox" label="Make this default address" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3 text-end" id="">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>

                </Modal.Body>
                </Modal>

                {/* Add New Card */}
                <Modal 
                show={addNewCard} 
                size="lg" 
                backdrop="static"
                keyboard={false} 
                onHide={addNewCardClose} 
                className='addNewAddress-pop' 
                centered>
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title>Add New Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row className="align-items-center">
                <Col>
                    <div className='card-layout'>
                        <div className='card-data'>
                            <img className='card-icn mb-3' src='/visa-01.svg'/>
                            <h4 className='card-no mb-3'>XXX XXXX XXX X 1234</h4>
                            <div className='d-flex justify-content-between'>
                                <h5 className='ex-date'>XX/XXXX</h5>
                                <h5 className='cvv-no'>Name</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridname">
                            <Form.Label>Card number</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>MM</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>YYYY</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGriMobile">
                            <Form.Label>Name on card</Form.Label>
                            <Form.Control type="text" placeholder="Mobile number" />
                            </Form.Group>
                        </Row>

                        <Row className="align-items-center">
                            <Form.Group as={Col} className="mb-3" id="">
                                <Form.Check type="checkbox" label="Make as default" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3 text-end" id="">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>
                </Modal.Body>
                </Modal>


                {/* Coupons Modal */}
                <Modal 
                show={couponsShow} 
                size="md" 
                backdrop="static"
                keyboard={false} 
                onHide={couponsShowClose} 
                className='addNewAddress-pop' 
                centered>
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title>Coupons for you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                            <Form.Group className='position-relative promo-code-wrap' controlId="formGridname">
                                {/* <Form.Label>Card number</Form.Label> */}
                                <Form.Control type="text" placeholder="Enter Code" />
                                <button type="button" name="" id="" class="btn">APPLY</button>
                            </Form.Group>
                    </Form>

                        <div className='coupons-wrap mt-4'>
                            <div className='coupon-item'>
                                <div className='top-area'>
                                    <img className='icon' src='/flash-deal.svg'/>
                                    <div className='data-area'>
                                        <h4 className='offer-nam'>50% OFF up to ₹500</h4>
                                        <p className='txt'>Save ₹99 with this code</p>
                                        <Accordion flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className='justify-content-between'>
                                                <div className='coupon-code'>WELCOME50</div>
                                                <span className='custom-link'>View details</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='pt-3'>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                                <a className='bottom-area'>
                                    Tap to Apply
                                </a>
                            </div>
                            <div className='coupon-item mt-3'>
                            <div className='top-area'>
                                <img className='icon' src='/flash-deal.svg'/>
                                <div className='data-area'>
                                    <h4 className='offer-nam'>50% OFF up to ₹500</h4>
                                    <p className='txt'>Save ₹99 with this code</p>
                                    <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='justify-content-between'>
                                            <div className='coupon-code'>WELCOME50</div>
                                            <span className='custom-link'>View details</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='pt-3'>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <a className='bottom-area'>
                                Tap to Apply
                            </a>
                            </div>
                        </div>
                        <h4 className='h5 text-center mt-3'>Other Coupons</h4>
                        <div className='coupons-wrap mt-4'>
                            <div className='coupon-item disabled'>
                                <div className='top-area'>
                                    <img className='icon' src='/flash-deal.svg'/>
                                    <div className='data-area'>
                                        <h4 className='offer-nam'>50% OFF up to ₹500</h4>
                                        <p className='txt'>Save ₹99 with this code</p>
                                        <Accordion flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className='justify-content-between'>
                                                <div className='coupon-code'>WELCOME50</div>
                                                <span className='custom-link'>View details</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='pt-3'>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                    <li>Save ₹99 with this code</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                                <a className='bottom-area'>
                                    Tap to Apply
                                </a>
                            </div>
                            <div className='coupon-item disabled mt-3'>
                            <div className='top-area'>
                                <img className='icon' src='/flash-deal.svg'/>
                                <div className='data-area'>
                                    <h4 className='offer-nam'>50% OFF up to ₹500</h4>
                                    <p className='txt'>Save ₹99 with this code</p>
                                    <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='justify-content-between'>
                                            <div className='coupon-code'>WELCOME50</div>
                                            <span className='custom-link'>View details</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='pt-3'>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                                <li>Save ₹99 with this code</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <a className='bottom-area'>
                                Tap to Apply
                            </a>
                            </div>
                        </div>
                </Modal.Body>
                </Modal>


            </section>
            </>
        )
}