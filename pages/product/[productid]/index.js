import Head from 'next/head'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useRouter } from 'next/router'
import { Rating } from 'react-simple-star-rating'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import ProductCarousel from '@/components/ProductCarousel'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


export default function ProductDetails() {
    const router = useRouter()
    const productid = router.query.productid
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
            <>
            <div class="container-fluid">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Fashion</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Women
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Shoes</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <section className='product-detail-area'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div className='product-gallery'>
                        <Swiper
                            style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product-gallery-view"
                        >
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product-thumb"
                        >
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div className='product-detail'>
                            <h4 className='brand'>Reebok</h4>
                            <h1 className='product-nam'>DayStart Walking Slip-Ons</h1>
                            <div className='rating-wrap'>
                                <div class="ratings me-3">
                                    <Rating
                                    initialValue={4}
                                    size={24}
                                    onClick={function noRefCheck(){}}
                                    readonly
                                    />
                                    <span class="rating-count">(200)</span>
                                </div>
                                <span className='modl-no'>Model Number : GW0852</span>
                            </div>
                            <p className='sml-descrip'>
                                Cras volutpat, metus vitae mattis sollicitudin, mi nisi finibus eros, id commodo sem libero eget erat.
                            </p>

                            <div className='price-area d-flex justify-content-between align-items-end'>
                                <div>
                                    <p className='free-delivery'><span className='green'>Free Delivery</span> above ₹300</p>
                                    <h3 className='price'><span className='strike-price me-3'>₹ 1499.99</span>  ₹ 899.99</h3>
                                </div>
                                <span className='offer-badge'>20% OFF</span>
                            </div>


                            <div className='attrb-wrap'>
                                <Accordion defaultActiveKey="0" flush="true">
                                            <Accordion.Item eventKey="0" flush="true">
                                                <Accordion.Header>
                                                    <div className='detail-header'>
                                                        <span className='label'>Color:</span> 
                                                        <h4 className='value'>Creamy White</h4>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <Swiper
                                                    slidesPerView={6}
                                                    spaceBetween={25}
                                                    className="mySwiper"
                                                    >
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Pink</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Red</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr active'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Creamy White</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Dark Blue</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Pink</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Red</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Pink</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Pink</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide
                                                    className='card-attr'
                                                    >
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                        <p className='attr-nam'>Pink</p>
                                                    </SwiperSlide>
                                                </Swiper>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1" flush="true">
                                                <Accordion.Header>
                                                    <div className='detail-header'>
                                                        <span className='label'>Size: <a href='#' className='link'>Size chart</a> </span> 
                                                        <h4 className='value'>Medium</h4>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='attr-list'>
                                                        <ul>
                                                            <li className='item'><a>Extra Small</a></li>
                                                            <li className='item'><a>Small</a></li>
                                                            <li className='item active'><a>Medium</a></li>
                                                            <li className='item'><a>Large</a></li>
                                                            <li className='item'><a>Extra Large</a></li>
                                                            <li className='item'><a>X Extra Large</a></li>
                                                            <li className='item'><a>XX Extra Large</a></li>
                                                        </ul>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                </Accordion>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div className='action-card'>
                            <div className='sold-by'>
                                <span className='label'>Sold by :</span>
                                <h4 className='seller'>SKG Garments </h4>
                            </div>

                            <div className='btn-group-wrap'>
                                  <button type="button" name="" id="" class="btn btn btn-outline-primary mb-3">
                                    <img src='/cart-icon-02.svg' className="icon me-3"/> Add to cart</button>
                                  <a name="" id="" class="btn btn-primary mb-3" href="#" role="button">Buy now</a>
                                  <a name="" id="" class="btn link-btn" href="#" role="button">Add to Wishlist</a>
                            </div>

                            <div className='icon-farm-container'>
                                <div className='item-wrap d-flex align-items-center'>
                                    <div className='icon-area me-3'>
                                        <img className='icon' src='/delivery-icm-01.svg'/>
                                    </div>
                                    <div className='text-area'>
                                        <p className='bold-txt'>Free Delivery</p>
                                        <span className='sml-txt'>Sed a orci sed tellus commodo</span>
                                    </div>
                                </div>
                                <div className='item-wrap d-flex align-items-center'>
                                    <div className='icon-area me-3'>
                                        <img className='icon' src='/delivery-icm-01.svg'/>
                                    </div>
                                    <div className='text-area'>
                                        <p className='bold-txt'>7 days Replacement</p>
                                        <span className='sml-txt'>Sed a orci sed tellus commodo</span>
                                    </div>
                                </div>
                                <div className='item-wrap d-flex align-items-center'>
                                    <div className='icon-area me-3'>
                                        <img className='icon' src='/delivery-icm-01.svg'/>
                                    </div>
                                    <div className='text-area'>
                                        <p className='bold-txt'>6 Year Warranty</p>
                                        <span className='sml-txt'>Sed a orci sed tellus commodo</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className='more-product-info mb-4'>
                <div class="container-fluid">
                    <div className='card-area'>
                        <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Overview</Nav.Link>
                                <Nav.Link href="#action2">Specifications</Nav.Link>
                                <Nav.Link href="#action3">Reviews</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>

                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                            <div className='content-area mb-4' id='action1'>
                                <h4 className='sub-title'>Highlights</h4>
                                <ul class="">
                                    <li class="">Breathable and stretchy knit upper</li>
                                    <li>EVA midsole is lightweight and soft under your feet</li>
                                    <li>Responsive FuelFoam cushioning</li>
                                    <li>Patterned outsole provides traction</li>
                                    <li>Reebok signature branding</li>
                                </ul>
                                <p>Duis finibus odio leo, vitae rutrum diam auctor eu. Aenean dignissim tempor nisl, ut molestie urna laoreet eu. Mauris sagittis nunc eget rhoncus feugiat. Phasellus gravida pulvinar nunc, et sodales leo ultricies in. Morbi magna urna, mollis vel condimentum in, bibendum bibendum turpis. Praesent id sapien non leo eleifend fermentum. Donec non dictum metus. Ut eleifend eros ut rhoncus faucibus. Mauris blandit nisl id interdum egestas. Sed consequat tincidunt ligula vitae faucibus.</p>
                                <div className='row'>
                                    <div className='col-md-6 mb-3'>
                                        <div className='img-area' style={{ width: '100%' }}>
                                            <Image
                                                src="/main-banner-0584589056.jpg"
                                                alt="My Image"
                                                layout="responsive"
                                                width={1000}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div className='img-area' style={{ width: '100%' }}>
                                            <Image
                                                src="/main-banner-0584589056.jpg"
                                                alt="My Image"
                                                layout="responsive"
                                                width={1000}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>Morbi magna urna, mollis vel condimentum in, bibendum bibendum turpis. Praesent id sapien non leo eleifend fermentum. </p>
                                <div className='row'>
                                    <div className='col-md-12 mb-3'>
                                        <div className='img-area' style={{ width: '100%' }}>
                                            <Image
                                                src="/main-banner-0584589056.jpg"
                                                alt="My Image"
                                                layout="responsive"
                                                width={1000}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-area mb-4' id='action2'>
                                
                                <h2 className='main-title mb-3'>Specifications</h2>
                                <div className='row'>
                                    <div className='col-md-6 mb-3'>
                                    <Table striped hover>
                                    <tbody>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                    </tbody>
                                    </Table>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                    <Table striped hover>
                                    <tbody>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                        <tr>
                                        <td>Duis finibus</td>
                                        <th scope="row" className='text-end'>tempor nisl</th>
                                        </tr>
                                    </tbody>
                                    </Table>
                                    </div>
                                </div>
                            </div>
                            <div className='content-area' id='action3'>
                                <div className='top-sec d-flex justify-content-between align-items-center'>
                                    <h2 className='main-title '>Reviews</h2>
                                  <a type="button" name="" id="" class="btn btn-outline-secondary">
                                    Write a review</a>
                                </div>
                                <div className='star-rate-images'>
                                    <div className='row  align-items-center'>
                                        <div className='col-md-6 mb-3'>
                                            <div className='overall-rate'>
                                                <h4 className='sub-title'>Overall Rating</h4>
                                                <div class="ratings d-flex align-items-center">
                                                    <Rating
                                                    initialValue={4}
                                                    size={50}
                                                    onClick={function noRefCheck(){}}
                                                    readonly
                                                    />
                                                    <span class="rating">4.0</span>
                                                </div>
                                                <span className='txt me-3'>Based on 200 ratings</span>
                                                <a className='link'>View all reviews and reatings</a>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <div className='review-images d-md-flex align-items-center'>
                                                <h4 className='sml-title'>Review images</h4>
                                                <Swiper
                                                    slidesPerView={5}
                                                    spaceBetween={25}
                                                    className="mySwiper"
                                                    >
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='img-area'>
                                                            <Image
                                                            class="img-item"
                                                            src="/chanel-farangece-7854880.jpg"
                                                            alt="Product image"
                                                            fill
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='review-list'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className='review-card'>
                                                <span className='title'>Nice Product, I really liked it!</span>
                                                <p className='txt'>Morbi magna urna, mollis vel condimentum in, bibendum bibendum turpis. Praesent id sapien non leo eleifend fermentum. </p>
                                                <div className='bottom-area d-flex justify-content-between'>
                                                    <span className='date'>Jhone - 16 Jan 2023</span>
                                                    <div class="ratings">
                                                        <Rating
                                                        initialValue={4}
                                                        size={24}
                                                        onClick={function noRefCheck(){}}
                                                        readonly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='review-card'>
                                                <span className='title'>Nice Product, I really liked it!</span>
                                                <p className='txt'>Morbi magna urna, mollis vel condimentum in, bibendum bibendum turpis. Praesent id sapien non leo eleifend fermentum. </p>
                                                <div className='bottom-area d-flex justify-content-between'>
                                                    <span className='date'>Jhone - 16 Jan 2023</span>
                                                    <div class="ratings">
                                                        <Rating
                                                        initialValue={4}
                                                        size={24}
                                                        onClick={function noRefCheck(){}}
                                                        readonly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='review-card'>
                                                <span className='title'>Nice Product, I really liked it!</span>
                                                <p className='txt'>Morbi magna urna, mollis vel condimentum in, bibendum bibendum turpis. Praesent id sapien non leo eleifend fermentum. </p>
                                                <div className='bottom-area d-flex justify-content-between'>
                                                    <span className='date'>Jhone - 16 Jan 2023</span>
                                                    <div class="ratings">
                                                        <Rating
                                                        initialValue={4}
                                                        size={24}
                                                        onClick={function noRefCheck(){}}
                                                        readonly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newarrival-carousel">
                <div class="container-fluid">
                <ProductCarousel products itemCount={8} caroselTitle={"Similar products"}/>
                </div>
            </section>


            <section class="offer-mini-banner-3">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="col-widget">
                            <div class="offer-card">
                                <div class="img-area">
                                <Image
                                    className='offer-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="col-widget">
                            <div class="offer-card">
                                <div class="img-area">
                                <Image
                                    className='offer-image'
                                    src="/1920_750_29894mensxp-fragrances 1.jpg"
                                    alt="Deals image"
                                    fill
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>

            <section class="newarrival-carousel">
                <div class="container-fluid">
                <ProductCarousel products itemCount={8} caroselTitle={"You may like also"}/>
                </div>
            </section>
            </>
        )
}