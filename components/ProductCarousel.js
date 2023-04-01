// import Swiper core and required modules
import { Navigation, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTimer } from 'react-timer-hook';
import { useRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
// import ProductItemCard from '@/components/ProductCard'
import { Rating } from 'react-simple-star-rating'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

export default function ProductCarousel({ products, itemCount, caroselTitle, flashsale }){
    const router = useRouter();
    const now = 60;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    // console.log(new Date())

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return(
        <>
        {/* <ProductItemCard /> */}
        <section class="products-carousel">
            <div class="title">
                <div class="row">
                <div class="col">
                    <h3 class="title-txt">{caroselTitle}</h3>
                </div>
                <div class="col-auto d-flex align-items-center">
                    <div class="custm-nav prev-btn me-3" ref={prevRef}><img src='/left-arrow-01.svg'/></div>
                    <div class="custm-nav next-btn"  ref={nextRef}><img src='/right-arrow-01.svg'/></div>
                </div>
                </div>
            </div>
            <div class="product-slider-area">

            {/* <h1>{itemCount}</h1> */}

            {/* {products.map((product) => {
                return (
                  <div key={product.id}>
                      <ProductItemCard product={product}/>
                  </div>
                )
            })} */}

            <Swiper
              modules={[A11y, Navigation]}
              spaceBetween={20}
              slidesPerView={itemCount}
              // navigation
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="product-item">
                      <div class="product-img">
                        <a class="add-wish">
                          <img src='/wishlist-02.svg'/>
                        </a>
                        {flashsale && (
                          <div class="timer-wrap">
                            <MyTimer expiryTimestamp={time} />
                          </div>
                        )}
                        {!flashsale && (
                          <div class="offer-badge">
                            <span>20% OFF</span>
                          </div>
                        )}
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
                        {flashsale && (
                          <div class="ratings">
                            <Rating
                              initialValue={4}
                              size={20}
                              onClick={function noRefCheck(){}}
                              readonly
                            />
                            <span class="rating-count">(200)</span>
                          </div>
                        ) }
                        <div class="price">
                          <strike>₹ 1499.99</strike>
                          <span class="cur-price">₹ 1499.99</span>
                        </div>
                        {flashsale && (
                          <div class="remain-indicator">
                            <ProgressBar now={now} />
                            <span class="txt">40 remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
          </div>
          
        </section>
        </>
    )
}