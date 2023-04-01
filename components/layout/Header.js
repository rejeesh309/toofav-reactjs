
import Image from 'next/image'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';

// import styles from '@/styles/layout.css'


export default function Header() {
    // return <h1>Header</h1>
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
      setQuantity(quantity + 1);
    };
  
    const handleMin = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    const [cart, setShow1] = useState(false);
    const cartClose = () => setShow1(false);
    const cartShow = () => setShow1(true);


    const [auth, setShow2] = useState(false);

    const authClose = () => setShow2(false);
    const authShow = () => setShow2(true);


    const [activeTab, setActiveTab] = useState('login');

    const handleLoginClick = () => {
      setActiveTab('login');
    };
  
    const handleRegisterClick = () => {
      setActiveTab('register');
    };

    const handleOtpClick = () => {
        setActiveTab('otp');
      };
    
   
    
      const [wishlist, setShow3] = useState(false);
      const wishlistClose = () => setShow3(false);
      const wishlistShow = () => setShow3(true);
  
      

    return (
        <>
        <header  className="main-header">
            <div className="top-header">
                <div className="container-fluid">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-auto">
                        <Link className="logo" href='/'>
                            <Image
                                className="main-logo"
                                src="/Logo-white.svg"
                                alt="Next.js Logo"
                                width={165}
                                height={48}
                                priority
                            />
                            </Link></div>
                        <div class="col">
                            <div class="input-group">
                            <Form.Select aria-label="Default select example" className='seach-select'>
                                <option>All Categories</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control type="text" placeholder="What would you need today?" />
                            <img src='/search-01.svg' className='seach-icon'/>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div className='right-navs'>
                                <Nav className='d-flex align-items-center'>
                                <Nav.Item>
                                    <Nav.Link  onClick={cartShow}>
                                        <img src='/cart-icon-01.svg' className='icon me-4'/>
                                        <span className='cart-count'>05</span>
                                        Cart</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1"   onClick={wishlistShow}>
                                        <img src='/wishlist-01.svg' className='icon me-2'/>
                                        Wishlist</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" onClick={authShow} className='d-flex'>
                                        <img src='/user-01.svg' className='icon me-2'/>
                                        <div>
                                        <span className='wlcm-txt'>Welcome</span> <br/>
                                        User name</div></Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar bg="" expand="lg" className='class="navbar navbar-expand-lg bg-body-tertiary'>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div className='hamburg-contain d-flex'>
                        <Button className='btn btn-hamburg me-2' onClick={handleShow}>
                            <img src='/hamburger-2.svg' className='hamburg-icon'/>
                        </Button>
                        <Nav.Link href="#"  onClick={handleShow}>All</Nav.Link>
                    </div>

                    <Nav.Link href="#home">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                    <Nav.Link href="#link">Menu Item</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>All Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div class="fliter-card">
                    <div class="fliter-widget categories-filter">
                                    <Accordion defaultActiveKey="0" flush="true">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Fashion</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column ps-3">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">All fashion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        {/* <a class="nav-link" href="#">Women</a> */}
                                                        <Accordion defaultActiveKey="1" flush="true">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>Women</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul class="nav flex-column">
                                                                        <li class="nav-item">
                                                                            <a class="nav-link" href="#">All Women</a>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Men</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Bags & Luggage</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Girls</a>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" flush="true">
                                            <Accordion.Header>Beauty & Health</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column ps-3">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">All fashion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Men</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Bags & Luggage</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Girls</a>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" flush="true">
                                            <Accordion.Header>Home & Kitchen</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column ps-3">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">All fashion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Men</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Bags & Luggage</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Girls</a>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" flush="true">
                                            <Accordion.Header>Bags & Luggage</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column ps-3">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">All fashion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Men</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Bags & Luggage</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Girls</a>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" flush="true">
                                            <Accordion.Header>Girls</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column ps-3">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">All fashion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Men</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Bags & Luggage</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Girls</a>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                    </div>
                </div>

                </Offcanvas.Body>
            </Offcanvas>


            <Offcanvas show={cart} onHide={cartClose} placement="end" className="cart-sidebar">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart <span className='count'>(2 items)</span> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='cart-list'>
                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <ul className='attr-list'>
                                    <li><span>Colour:</span> Creamy White</li>
                                    <li><span>Size:</span> Medium</li>
                                </ul>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/delete-01.svg'/>
                                    </a>
                                    <div className='qty-box'>
                                        <button className='btn min-btn' onClick={handleMin}><img className='icon' src='/min-01.svg'/></button>
                                        <input type="text" value={quantity} class="form-control" name="" id=""/>
                                        <button className='btn add-btn' onClick={handleAdd}><img className='icon' src='/add-01.svg'/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/delete-01.svg'/>
                                    </a>
                                    <div className='qty-box'>
                                        <button className='btn min-btn' onClick={handleMin}><img className='icon' src='/min-01.svg'/></button>
                                        <input type="text" value={quantity} class="form-control" name="" id=""/>
                                        <button className='btn add-btn' onClick={handleAdd}><img className='icon' src='/add-01.svg'/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-bar'>
                        <h4 className='price-line'>
                            <span>Sub total</span>
                            ₹ 899.99
                        </h4>
                        <div className='btn-group-wrap'>
                            <button type="button" name="" id="" class="btn btn btn-outline-primary mb-3 me-2">Continue Shopping</button>
                            <Link href="/checkout"  onClick={cartClose} name="" id="" class="btn btn-primary mb-3" role="button">Checkout</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            
            <Offcanvas show={wishlist} onHide={wishlistClose} placement="end" className="cart-sidebar wishlist-sidebar">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Wishlist <span className='count'>(2 items)</span> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='cart-list'>

                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/heart-fill-o1.svg'/>
                                    </a>
                                    <div className='btn-group-wrap'>
                                        <button type="button" name="" id="" class="btn btn btn-primary">
                                            <img src='/cart-icon-03.svg' className="icon"/> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/heart-fill-o1.svg'/>
                                    </a>
                                    <div className='btn-group-wrap'>
                                        <button type="button" name="" id="" class="btn btn btn-primary">
                                            <img src='/cart-icon-03.svg' className="icon"/> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/heart-fill-o1.svg'/>
                                    </a>
                                    <div className='btn-group-wrap'>
                                        <button type="button" name="" id="" class="btn btn btn-primary">
                                            <img src='/cart-icon-03.svg' className="icon"/> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-card'>
                            <div className='img-area'>
                                <Image
                                    className='pro-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                            </div>
                            <div className='cont-area'>
                                <p className='pro-name'>Matuki Designer Studio Women Kurta And Pant Set</p>
                                <div className='price'>
                                    <h5 className='mb-0'>₹ 899.99</h5>
                                    <span className='ms-2 stock-txt instock'>In Stock</span>
                                </div>
                                <div className='action'>
                                    <a className='delete-btn'>
                                        <img className='icon' src='/heart-fill-o1.svg'/>
                                    </a>
                                    <div className='btn-group-wrap'>
                                        <button type="button" name="" id="" class="btn btn btn-primary">
                                            <img src='/cart-icon-03.svg' className="icon"/> Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-bar'>
                        <div className='btn-group-wrap'>
                            <button type="button" name="" id="" class="btn btn btn-outline-primary mb-3 me-2">Clear Wishlist</button>
                            <Link href="/checkout"   onClick={wishlistClose}  name="" id="" class="btn btn-primary mb-3" role="button">Move to Cart</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>


            <Modal show={auth} size="lg" onHide={authClose} className='auth-pop' centered>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='img-area'>
                                <Image
                                class="img-item"
                                src="/login-img-02151.jpg"
                                alt="Product image"
                                fill
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Modal.Header closeButton className='border-bottom-0'>
                            <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <div className='content-area' style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
                                <h4 className='sub-title'>Welcome back!</h4>
                                <h3 className='title'>Sign in to your account</h3>
                                <p className='txt'>Don't have an account? <a onClick={handleRegisterClick} className={activeTab === 'register' ? 'active' : 'inactive link'}>Sign Up</a></p>
                                <Form className='form-container'>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <div className='row'>
                                            <div className='col-4'>
                                            <Form.Select aria-label="Default select example">
                                                <option value="91">+91</option>
                                                <option value="971">+971</option>
                                                <option value="1">+1</option>
                                            </Form.Select>
                                            </div>
                                            <div className='col-8'>
                                                <Form.Control type="tel" placeholder="Enter Mobile Number" />
                                            </div>
                                        </div>
                                        <Form.Text className="text-muted">
                                        Please enter a valid mobile number.
                                        </Form.Text>
                                    </Form.Group>

                                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    <Button variant="primary" type="button"  onClick={handleOtpClick} className={activeTab === 'otp' ? 'active' : 'inactive'}>
                                        Continue
                                    </Button>
                                </Form>
                            </div>
                            <div className='content-area' style={{ display: activeTab === 'otp' ? 'block' : 'none' }}>
                                {/* <h4 className='sub-title'>Welcome back!</h4> */}
                                <h3 className='title'>OTP Verification</h3>
                                <p className='txt'>To verify your mobile number, please enter the OTP that is sent to your mobile device ending in xxxxxx345 
                                <br/>
                                <a onClick={handleLoginClick} className={activeTab === 'login' ? 'active' : 'inactive link'}>Change Mobile Number</a></p>
                                <Form className='form-container'>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label>Verification code</Form.Label>
                                        <div className='row'>
                                            <div className='col'>
                                                <Form.Control type="text" placeholder="" />
                                            </div>
                                            <div className='col'>
                                                <Form.Control type="text" placeholder="" />
                                            </div>
                                            <div className='col'>
                                                <Form.Control type="text" placeholder="" />
                                            </div>
                                            <div className='col'>
                                                <Form.Control type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Link variant="primary" onClick={authClose} className='btn btn-primary' type="button" href="/account">
                                        Continue
                                    </Link>
                                </Form>
                            </div>
                            <div className='content-area' style={{ display: activeTab === 'register' ? 'block' : 'none' }}>
                                {/* <h4 className='sub-title'>Welcome back!</h4> */}
                                <h3 className='title'>Create an account</h3>
                                <p className='txt'>Already have an account? <a onClick={handleLoginClick} className={activeTab === 'login' ? 'active' : 'inactive link'}>Sign In</a></p>
                                <Form className='form-container'>
                                    <Form.Group className="mb-4" controlId="">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                    <Button variant="primary" type="button"  onClick={handleLoginClick} className={activeTab === 'login' ? 'active' : 'inactive'}>
                                        Continue
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={authClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>

        </header>
        </>
    )
}