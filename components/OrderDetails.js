
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';


export default function OrderDetails(){

    const [trackOrder, setShow6] = useState(false);
    const trackOrderClose = () => setShow6(false);
    const trackOrderShow = () => setShow6(true);


    const [helpSupport, setShow8] = useState(false);
    const helpSupportClose = () => setShow8(false);
    const helpSupportShow = () => setShow8(true);

    return(
        <>
            <div className="my-order-detail-wrap">
                        <h2 className="main-title">Order Details</h2>
                        
                        <div className='row mt-5 mb-3'>
                                                        <div className='col-md-4'>
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
                                                        <div className='col-md-4'>
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
                                                        <div className='col-md-4'>
                                                          <h4 className='sub-title'>Order Summary</h4>
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
                                                        </div>
                                                    </div>
                              <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                  <span className="order-id">
                                    Order ID: <b>#FT908077</b>
                                  </span>
                                  <span className="date">
                                  Ordered on : 28 Jan 2023 12:00 AM
                                  </span>
                                  {/* <a className="view-detail">
                                    View order details{" "}
                                  </a> */}
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
                      </div>
        </>
    )
}