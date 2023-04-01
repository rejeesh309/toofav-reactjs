
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'next/image'
import { useTimer } from 'react-timer-hook';
import { Rating } from 'react-simple-star-rating'

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div className='timer-div'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
    </div>
  );
}


export default function ProductItemCard({ article, flashsale }){

    const now = 60;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    // console.log(new Date())

    return(
        <>
        <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {/* <div class="timer-wrap">
                          <MyTimer expiryTimestamp={time} />
                        </div> */}
                        <div class="offer-badge">
                          <span>20% OFF</span>
                        </div>
                        <Image
                          class="img-item"
                          src="/chanel-farangece-7854880.jpg"
                          alt="Product image"
                          fill
                        />
                        <div class="color-variations">
                          <ul class="colors">
                            <li><span class="color" style={{ background: '#5855E8' }}></span></li>
                            <li><span class="color" style={{ background: '#A1E20A' }}></span></li>
                            <li><span class="color" style={{ background: '#E13693' }}></span></li>
                            <li><span class="color" style={{ background: '#E3000F' }}></span></li>
                          </ul>
                        </div>
                        <div class="bg-shape-btm"></div>
                      </div>
                      <div class="product-cont">
                        <a class="add-cart-btn">
                          <img src='/add-cart-01.svg'/>
                        </a>
                        <h4 class="product-nam">
                          Matuki Designer Studio Women Kurta And Pant Set
                        </h4>
                      <div class="ratings">
                        <Rating
                          initialValue={4}
                          size={20}
                          onClick={function noRefCheck(){}}
                          readonly
                        />
                        <span class="rating-count">(200)</span>
                      </div>
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {/* <div class="remain-indicator">
                          <ProgressBar now={now} />
                          <span class="txt">40 remaining</span>
                        </div> */}
                      </div>
                    </div>
        </>
    )
}