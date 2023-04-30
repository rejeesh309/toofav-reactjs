
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import MainBanner from "@/components/MainBanner"
import ProductItemCard from "@/components/ProductCard";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function ProductList() {

    const [rangeValues, setRangeValues] = React.useState({
        min: 20,
        max: 80
      });
      const handleRangeChange = (values) => {
        setRangeValues(values);
      }
    return (
        <>
            <section className="product-list-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">

                            <div class="fliter-card">
                                {/* Categories */}
                                <div class="fliter-widget categories-filter">
                                    <span class="title-label">Category</span>
                                    <Accordion defaultActiveKey="0" flush="true">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Fashion</Accordion.Header>
                                            <Accordion.Body>
                                                <ul class="nav flex-column">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" flush="true">
                                            <Accordion.Header>Home & Kitchen</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" flush="true">
                                            <Accordion.Header>Bags & Luggage</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" flush="true">
                                            <Accordion.Header>Girls</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                                {/* Brands */}
                                <div class="fliter-widget brands-filter">
                                    <span class="title-label">Brand</span>
                                    <Form>
                                        <div class="mb-3">
                                            <Form.Control type="text" placeholder="Search brands..." />
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`1`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`2`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`3`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`4`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`5`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`6`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`7`}
                                            name="group2"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`TOMMY HILFIGER`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                    </Form>
                                    <a class="link">See All</a>
                                </div>

                                


                                {/* Price Range */}
                                <div class="fliter-widget newarrival-filter">
                                    <span class="title-label">Price (AED)s</span>
                                    {/* <Form.Range /> */}
                                    < InputRange
                                    maxValue={100}
                                    minValue={0}
                                    value={rangeValues}
                                    onChange={handleRangeChange}
                                    />
                                </div>


                                {/* New Arrivals */}
                                <div class="fliter-widget newarrival-filter">
                                    <span class="title-label">New Arrivals</span>
                                    <Form>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`nw1`}
                                            name="group1"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Last 7 Days`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`nw2`}
                                            name="group1"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Last 30 Days`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`nw3`}
                                            name="group1"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Last 60 Days`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                    </Form>
                                </div>


                                {/* Data Filters */}
                                <div class="fliter-widget data-filter">
                                    <span class="title-label">Filter title</span>
                                    <Form>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d1`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -1`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d2`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -2`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d3`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -3`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d4`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -4`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d5`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -5`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                        <div class="mb-3">
                                            <Form.Check 
                                            id={`d6`}
                                            name="group3"
                                            aria-label="option 1">
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label>{`Data -6`}</Form.Check.Label>
                                            <span class="counts">(660)</span>
                                            </Form.Check>
                                        </div>
                                    </Form>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8">
                            <section className='inner-mini-banner'>
                                <MainBanner/>
                            </section>
                            <section class="product-list-area">
                                <div class="top-sec d-flex justify-content-between">
                                        {/* <Button className='btn btn-filter only-mob order-md-2' onClick={filterShow}>
                                            <img src='/filter-icon.svg' className='hamburg-icon'/><span>Filter</span>
                                        </Button> */}
                                    <div  class="right-action d-flex align-items-center order-md-2">
                                        <label class="form-label text-nowrap mb-0 me-3">Sort by</label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Recommended </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    <h2 class="title flex-grow-1 order-md-1"><span class="none-bold">8784 Results for</span> "Women's Fashion"</h2>
                                </div>
                                <div class="selected-filters">
                                    <div class="filter-item">
                                        <span class="txt">Selected Attributes</span>
                                        <a class="close"><img src="/close-01.svg"/></a>
                                    </div>
                                </div>

                                <div class="product-list">
                                    <div class="row g-2">
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                    </div>


                                    <section class="offer-mini-banner-3">
                                        <div class="row">
                                            <div class="col-md-6">
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
                                            <div class="col-md-6">
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
                                    </section>


                                    <div class="row g-2">
                                        <div class="col-lg-2 col-md-3   col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                        <div class="col-lg-2 col-md-3  col-6">
                                            <ProductItemCard/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}