import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Image from 'next/image';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OrderDetails from '@/components/OrderDetails';

export default function Account() {

    const [rechargeWallet, setShow7] = useState(false);
    const rechargeWalletClose = () => setShow7(false);
    const rechargeWalletShow = () => setShow7(true);


    const [addNewCard, setShow5] = useState(false);
    const addNewCardClose = () => setShow5(false);
    const addNewCardShow = () => setShow5(true);


    const [trackOrder, setShow6] = useState(false);
    const trackOrderClose = () => setShow6(false);
    const trackOrderShow = () => setShow6(true);


    const [helpSupport, setShow8] = useState(false);
    const helpSupportClose = () => setShow8(false);
    const helpSupportShow = () => setShow8(true);
    
    return (
      <>
        <section className="account-page">
          
          <div class="container-fluid">
            <Tab.Container id="left-tabs-example" defaultActiveKey="orders">
              <Row>
                <Col sm={3}>
                  <div className="user-panel ">
                    <div className="user-card">
                      <h4 className="user-nam">
                        <span className="wlcm-txt">Welcome</span> User name
                      </h4>
                      <p className="user-phone">+91 1234 5678 90</p>
                    </div>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="orders">
                          Orders{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="payments">
                          Manage Payments{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="wallet">
                          Wallet{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="accounts">
                          Manage Accounts{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="wishlist">
                          Wishlist{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="settings">
                          Settings{" "}
                          <img className="icn" src="/right-arrow-01.svg" />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="orders">
                      <div className="my-orders-wrap">
                        

                        <h2 className="main-title">Orders</h2>

                        <Accordion defaultActiveKey="0" flush="true">
                          <Accordion.Item eventKey="0" flush="true">
                            <Accordion.Header>Current Orders</Accordion.Header>
                            <Accordion.Body>
                              <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                  <span className="order-id">
                                    Order ID: <b>#FT908077</b>
                                  </span>
                                  <span className="date">
                                    28 Jan 2023 12:00 AM
                                  </span>
                                  <a className="view-detail">
                                    View order details{" "}
                                  </a>
                                </div>
                                <div class="card-body">
                                  <div className="cart-item-card align-items-center">
                                    <div className="img-area">
                                      <Image
                                        className="pro-image"
                                        src="/1920_750_29894mensxp-fragrances 1.jpg"
                                        alt="Deals image"
                                        fill
                                      />
                                    </div>
                                    <div className="cont-area w-100">
                                      <p className="pro-name">
                                        Matuki Designer Studio Women Kurta And
                                        Pant Set
                                      </p>
                                      <div className="action">
                                        <h4 className="expect-delivr">
                                          <span>Expected delivery :</span> 30
                                          Jan 2023
                                        </h4>
                                      </div>
                                      <div className="price my-2">
                                        <h5 className="mb-0">₹ 899.99</h5>
                                      </div>
                                    </div>
                                    <div className="action">
                                      <div className="btn-group-wrap">
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn btn-outline-primary mb-2"
                                          onClick={helpSupportShow}
                                        >
                                          Help and Support
                                        </button>
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn-primary"
                                          onClick={trackOrderShow}
                                        >
                                          Track Order
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card mt-3">
                                <div class="card-header d-flex justify-content-between">
                                  <span className="order-id">
                                    Order ID: <b>#FT908077</b>
                                  </span>
                                  <span className="date">
                                    28 Jan 2023 12:00 AM
                                  </span>
                                  <a className="view-detail">
                                    View order details{" "}
                                  </a>
                                </div>
                                <div class="card-body">
                                  <div className="cart-item-card align-items-center">
                                    <div className="img-area">
                                      <Image
                                        className="pro-image"
                                        src="/1920_750_29894mensxp-fragrances 1.jpg"
                                        alt="Deals image"
                                        fill
                                      />
                                    </div>
                                    <div className="cont-area w-100">
                                      <p className="pro-name">
                                        Matuki Designer Studio Women Kurta And
                                        Pant Set
                                      </p>
                                      <div className="action">
                                        <h4 className="expect-delivr">
                                          <span>Expected delivery :</span> 30
                                          Jan 2023
                                        </h4>
                                      </div>
                                      <div className="price my-2">
                                        <h5 className="mb-0">₹ 899.99</h5>
                                      </div>
                                    </div>
                                    <div className="action">
                                      <div className="btn-group-wrap">
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn btn-outline-primary mb-2"
                                          onClick={helpSupportShow}
                                        >
                                          Help and Support
                                        </button>
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn-primary"
                                          onClick={trackOrderShow}
                                        >
                                          Track Order
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" flush="true">
                            <Accordion.Header>Older Orders</Accordion.Header>
                            <Accordion.Body>
                              <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                  <span className="order-id">
                                    Order ID: <b>#FT908077</b>
                                  </span>
                                  <span className="date">
                                    28 Jan 2023 12:00 AM
                                  </span>
                                  <a className="view-detail">
                                    View order details{" "}
                                  </a>
                                </div>
                                <div class="card-body">
                                  <div className="cart-item-card align-items-center">
                                    <div className="img-area">
                                      <Image
                                        className="pro-image"
                                        src="/1920_750_29894mensxp-fragrances 1.jpg"
                                        alt="Deals image"
                                        fill
                                      />
                                    </div>
                                    <div className="cont-area w-100">
                                      <p className="pro-name">
                                        Matuki Designer Studio Women Kurta And
                                        Pant Set
                                      </p>
                                      <div className="action">
                                        <h4 className="expect-delivr">
                                          <span>Expected delivery :</span> 30
                                          Jan 2023
                                        </h4>
                                      </div>
                                      <div className="price my-2">
                                        <h5 className="mb-0">₹ 899.99</h5>
                                      </div>
                                    </div>
                                    <div className="action">
                                      <div className="btn-group-wrap">
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn btn-outline-primary mb-2"
                                        >
                                          Write a Review
                                        </button>
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn-primary"
                                        >
                                          Buy it again
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card mt-3">
                                <div class="card-header d-flex justify-content-between">
                                  <span className="order-id">
                                    Order ID: <b>#FT908077</b>
                                  </span>
                                  <span className="date">
                                    28 Jan 2023 12:00 AM
                                  </span>
                                  <a className="view-detail">
                                    View order details{" "}
                                  </a>
                                </div>
                                <div class="card-body">
                                  <div className="cart-item-card align-items-center">
                                    <div className="img-area">
                                      <Image
                                        className="pro-image"
                                        src="/1920_750_29894mensxp-fragrances 1.jpg"
                                        alt="Deals image"
                                        fill
                                      />
                                    </div>
                                    <div className="cont-area w-100">
                                      <p className="pro-name">
                                        Matuki Designer Studio Women Kurta And
                                        Pant Set
                                      </p>
                                      <div className="action">
                                        <h4 className="expect-delivr">
                                          <span>Expected delivery :</span> 30
                                          Jan 2023
                                        </h4>
                                      </div>
                                      <div className="price my-2">
                                        <h5 className="mb-0">₹ 899.99</h5>
                                      </div>
                                    </div>
                                    <div className="action">
                                      <div className="btn-group-wrap">
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn btn-outline-primary mb-2"
                                        >
                                          Write a Review
                                        </button>
                                        <button
                                          type="button"
                                          name=""
                                          id=""
                                          class="btn btn-primary"
                                        >
                                          Buy it again
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <OrderDetails />

                    </Tab.Pane>
                    <Tab.Pane eventKey="payments">
                      <div className="my-payment-wrap">
                        <h2 className="main-title">Manage Payments</h2>
                        <div className='address-wrap payment-wrap'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div  className='dcard-wrap'>
                                        <div className='add-new-card'  onClick={addNewCardShow}>
                                            <h4 className='txt'>Add new card</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=' dcard-wrap'>
                                    <label class="list-group-item mb-3">
                                        <input
                                        class="form-check-input me-1"
                                        name="payment"
                                        type="radio"
                                        value=""
                                        checked
                                        />
                                        <div className="ms-2 w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="number">XXX XXXX XXX X 1234</h5>
                                            <img className="icon" src="/visa-01.svg"></img>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="h-name">Jhone Doe</h5>
                                            <p className="txt">Debit Card</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bottom-bar  mt-md-4 mt-3">
                                            <button type="button" name="" id="" class="btn btn btn-outline-primary me-2">Edit</button>
                                            <button type="button" name="" id="" class="btn btn btn-outline-danger">Remove</button>
                                        </div>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=' dcard-wrap'>
                                    <label class="list-group-item mb-3">
                                        <input
                                        class="form-check-input me-1"
                                        name="payment"
                                        type="radio"
                                        value=""
                                        />
                                        <div className="ms-2 w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="number">XXX XXXX XXX X 1234</h5>
                                            <img className="icon" src="/visa-01.svg"></img>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="h-name">Jhone Doe</h5>
                                            <p className="txt">Debit Card</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bottom-bar  mt-md-4 mt-3">
                                            <button type="button" name="" id="" class="btn btn btn-outline-primary me-2">Edit</button>
                                            <button type="button" name="" id="" class="btn btn btn-outline-danger">Remove</button>
                                        </div>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=' dcard-wrap'>
                                    <label class="list-group-item mb-3">
                                        <input
                                        class="form-check-input me-1"
                                        name="payment"
                                        type="radio"
                                        value=""
                                        />
                                        <div className="ms-2 w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="number">XXX XXXX XXX X 1234</h5>
                                            <img className="icon" src="/visa-01.svg"></img>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="h-name">Jhone Doe</h5>
                                            <p className="txt">Debit Card</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bottom-bar  mt-md-4 mt-3">
                                            <button type="button" name="" id="" class="btn btn btn-outline-primary me-2">Edit</button>
                                            <button type="button" name="" id="" class="btn btn btn-outline-danger">Remove</button>
                                        </div>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=' dcard-wrap'>
                                    <label class="list-group-item mb-3">
                                        <input
                                        class="form-check-input me-1"
                                        name="payment"
                                        type="radio"
                                        value=""
                                        />
                                        <div className="ms-2 w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="number">XXX XXXX XXX X 1234</h5>
                                            <img className="icon" src="/visa-01.svg"></img>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="h-name">Jhone Doe</h5>
                                            <p className="txt">Debit Card</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bottom-bar  mt-md-4 mt-3">
                                            <button type="button" name="" id="" class="btn btn btn-outline-primary me-2">Edit</button>
                                            <button type="button" name="" id="" class="btn btn btn-outline-danger">Remove</button>
                                        </div>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wallet">
                      <div className="my-wallet-wrap">
                        <h2 className="main-title">Wallet</h2>
                        <div className="row">
                          <div className="col-md-8">
                            <div className="transaction-list">
                              <h5 className="sub-title">Transaction History</h5>
                              <span className="uptime">
                                Last updated 26 Jan 2023 12:50 PM
                              </span>

                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                              <div className="transaction-item mt-3">
                                <div className="d-flex justify-content-between">
                                  <p className="id">#05650609088</p>
                                  <p className="date">01 June 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="amount">₹ 100.00</p>
                                  <p className="method">Credit Card</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="wallet-card">
                              <div className="top-sec">
                                <img
                                  src="/wallat-image-02154484.png"
                                  className="icon-img"
                                />
                                <div className="content">
                                  <h3 className="balance">500.00</h3>
                                  <span className="label">
                                    Available Balance
                                  </span>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={rechargeWalletShow}
                                className="btn btn-primecolor mt-4"
                              >
                                Recharge Wallet
                              </button>
                              <p className="re-time mt-2">
                                Last recharged 26 Jan 2023 12:50 PM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>


          {/* Recharge Wallet */}
          <Modal
            show={rechargeWallet}
            size="lg"
            onHide={rechargeWalletClose}
            className="auth-pop wallet-pop"
            centered
          >
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <div className="img-area">
                    <img
                      className="img-item"
                      src="/wallat-image-02154484.png"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <Modal.Header closeButton className="border-bottom-0">
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <div className="content-area">
                    {/* <h4 className='sub-title'>Welcome back!</h4> */}
                    <h3 className="title">Recharge Wallet</h3>
                    {/* <p className='txt'>Already have an account? <a>Sign In</a></p> */}
                    <Form className="form-container">
                      <Form.Group className="mb-4" controlId="">
                        <Form.Label>Enter Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter Amount" />
                      </Form.Group>
                      <h5 className="sub-title">Payment Type</h5>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="payment"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <img src="/card-icon.svg" className="icon me-2" />
                            <h5 className="name mb-0">Debit/Credit Card</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="payment"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <img src="/apple.svg" className="icon me-2" />
                            <h5 className="name mb-0">Apple Pay</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="payment"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <img src="/google.svg" className="icon me-2" />
                            <h5 className="name mb-0">Google Pay</h5>
                          </div>
                        </label>
                      </Form.Group>

                      <Button
                        variant="primary"
                        className="btn-primecolor"
                        type="button"
                      >
                        Pay Now
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
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

          {/* Track Your Order */}
          <Modal 
                show={trackOrder} 
                size="md" 
                onHide={trackOrderClose} 
                className='track-pop' 
                centered>
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title>Track Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row className="align-items-center">
                <Col>
                    <div className='delivery-time text-center p-3 rounded'>
                      <span className='label'>Expected Delivery</span>
                      <h3 className='value mt-2 mb-0'>30 Jan 2023</h3>
                    </div>
                    <div className='steps-wrap mt-4'>
                      <ul className='step-path'>
                        <li className='item'>
                          <p className='title'>Delivery</p>
                          <span className='date-time'>30 jan 2023 05:00 AM</span>
                        </li>
                        <li className='item current'>
                          <p className='title'>Order Dispatched</p>
                          <span className='date-time'>30 jan 2023 05:00 AM</span>
                        </li>
                        <li className='item done'>
                          <p className='title'>Order Proccessing</p>
                          <span className='date-time'>30 jan 2023 05:00 AM</span>
                        </li>
                        <li className='item done'>
                          <p className='title'>Order placed</p>
                          <span className='date-time'>30 jan 2023 05:00 AM</span>
                        </li>
                      </ul>
                    </div>
                </Col>
            </Row>
                </Modal.Body>
          </Modal>

          {/* Help and Support*/}
          <Modal 
                show={helpSupport} 
                size="md" 
                onHide={helpSupportClose} 
                className='help-support-pop' 
                centered>
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title>Help and Support</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row className="align-items-center">
                <Col>
                <div className="cart-item-card align-items-center">
                                    <div className="img-area">
                                      <Image
                                        className="pro-image"
                                        src="/1920_750_29894mensxp-fragrances 1.jpg"
                                        alt="Deals image"
                                        fill
                                      />
                                    </div>
                                    <div className="cont-area w-100">
                                      <p className="pro-name">
                                        Matuki Designer Studio Women Kurta And
                                        Pant Set
                                      </p>
                                      <div className="action">
                                        <h4 className="expect-delivr">
                                          <span>Expected delivery :</span> 30
                                          Jan 2023
                                        </h4>
                                      </div>
                                      <div className="price my-2">
                                        <h5 className="mb-0">₹ 899.99</h5>
                                      </div>
                                    </div>
                                  </div>

                                  <h4 className='sub-title'>Reason for cancellation</h4>
                                  <p className='txt'>Please tell us the reason for cancellation. This information is only used to improve our service.</p>

                <Form className="form-container">
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Incorrect size order</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Product not required anymore</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Cash issue</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Ordered by mistake</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Want to change style / color</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Delayed delivery cancellation</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <label class="list-group-item  align-items-center">
                          <input
                            class="form-check-input me-1"
                            name="reason"
                            type="radio"
                            value=""
                          />
                          <div className="ms-2 d-flex  align-items-center">
                            <h5 className="name mb-0">Duplicate order</h5>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="">
                        <Form.Label>Additional comments</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: '100px' }}
                        />
                      </Form.Group>

                      <Form.Group className="text-center" controlId="">
                        <Button
                          variant="primary"
                          className="btn-primecolor"
                          type="button"
                        >
                          Proceed
                        </Button>
                      </Form.Group>
                    </Form>
                </Col>
            </Row>
                </Modal.Body>
          </Modal>
        </section>
      </>
    );
}