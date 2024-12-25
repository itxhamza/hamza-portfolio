import { useRef, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";

SwiperCore.use([Mousewheel]);

import bannerImg1 from "../../public/images/slider/most_slide_1.jpg";
import bannerImg2 from "../../public/images/slider/most_slide_2.jpg";
import Link from "next/link";

const sliderOption = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  spaceBetween: 0,
  slidesPerView: "1",
  parallax: true,
  speed: 800,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
};

const HomeSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current, sliderOption;
    }
  }, []);

  return (
    <div className="banner-horizental">
      <div className="swiper swiper-container-h">
        <Swiper
          {...sliderOption}
          mousewheel={true}
          ref={swiperRef}
          watchSlidesProgress
          className="swiper-wrapper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="slider-inner" data-swiper-parallax="100">
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background: "rgba(0,0,0,0.3)",
                  position: "absolute",
                }}
              />
              <img
                src="images/portfolio/first_slider.png"
                alt="full-screen image"
                style={{}}
              />

              <div className="swiper-content" data-swiper-parallax="2000">
                <div className="title-area">
                  <p className="tag" style={{ marginLeft: 10 }}>
                    Innovation at the Core
                  </p>
                  <a href="#" className="title">
                    <span style={{ marginLeft: 12 }}>Innovating</span>
                    <br />
                    <span>Solutions</span>
                  </a>
                </div>

                <div className="disc-bg">
                  <p className="disc" style={{ marginLeft: 5 }}>
                    Driven by a passion for problem-solving, I leverage over 25
                    programming languages to innovate scalable solutions. With
                    each line of code, I weave robustness into the fabric of
                    digital products. My projects embody the fusion of
                    technology and creativity, transforming complex challenges
                    into seamless user experiences. I architect systems that are
                    as resilient as they are elegant, exceeding the demands of
                    modern functionality. Through my code, I empower businesses
                    and individuals alike to harness the full potential of
                    digital innovation.
                  </p>
                </div>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-circle btn--md"
                    role="button"
                    href="/home"
                  >
                    <div className="ms-btn--circle">
                      <div className="circle">
                        <div className="circle-fill"></div>
                        <svg
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          className="circle-outline"
                        >
                          <circle cx="25" cy="25" r="23"></circle>
                        </svg>
                        <div className="circle-icon">
                          <svg
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-arrow"
                          >
                            <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="ms-btn--label">
                      <div className="ms-btn__text">Let's Go</div>
                      <div className="ms-btn__border"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="slider-inner" data-swiper-parallax="100">
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background: "rgba(0,0,0,0.3)",
                  position: "absolute",
                }}
              />
              <img
                src="images/portfolio/second_slider.png"
                alt="full-screen image"
                style={{}}
              />

              <div className="swiper-content" data-swiper-parallax="2000">
                <div className="title-area">
                  <p className="tag" style={{ marginLeft: 10 }}>
                    Leadership in Technology
                  </p>
                  <a href="#" className="title">
                    <span style={{ marginLeft: 12 }}>Leading with</span>
                    <br />
                    <span>Expertise</span>
                  </a>
                </div>

                <div className="disc-bg">
                  <p className="disc" style={{ marginLeft: 5 }}>
                    With six years in software engineering, my mission extends
                    beyond coding; I mentor aspiring tech professionals towards
                    excellence. Through this journey, I share a wealth of
                    knowledge, nurturing an environment ripe for innovation. In
                    this space, the next generation of engineers is inspired to
                    thrive, pushing the boundaries of technology and creativity.
                    My guidance helps them forge new paths, turning ambitious
                    ideas into tangible, groundbreaking solutions
                  </p>
                </div>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-circle btn--md"
                    role="button"
                    href="/home"
                  >
                    <div className="ms-btn--circle">
                      <div className="circle">
                        <div className="circle-fill"></div>
                        <svg
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          className="circle-outline"
                        >
                          <circle cx="25" cy="25" r="23"></circle>
                        </svg>
                        <div className="circle-icon">
                          <svg
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-arrow"
                          >
                            <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="ms-btn--label">
                      <div className="ms-btn__text">Let's Go</div>
                      <div className="ms-btn__border"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="slider-inner" data-swiper-parallax="100">
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background: "rgba(0,0,0,0.3)",
                  position: "absolute",
                }}
              />
              <img
                src="images/portfolio/third_slider.png"
                alt="full-screen image"
                style={{}}
              />

              <div className="swiper-content" data-swiper-parallax="2000">
                <div className="title-area">
                  <p className="tag" style={{ marginLeft: 10 }}>
                    Lifelong Learning & Sharing
                  </p>
                  <a href="#" className="title">
                    <span style={{ marginLeft: 12 }}>Continuous</span>
                    <br />
                    <span>Learning</span>
                  </a>
                </div>

                <div className="disc-bg">
                  <p className="disc" style={{ marginLeft: 5 }}>
                    The IT field is ever-evolving, and so is my journey. I
                    commit to continuous learning and sharing my expertise,
                    ensuring that my mentees and I stay at the forefront of
                    technological advancements. By embracing change and
                    fostering a culture of curiosity, we collectively pave the
                    way for innovative breakthroughs. Together, we challenge the
                    status quo, constantly seeking new knowledge and approaches
                    to shape the future of technology.
                  </p>
                </div>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-circle btn--md"
                    role="button"
                    href="/home"
                  >
                    <div className="ms-btn--circle">
                      <div className="circle">
                        <div className="circle-fill"></div>
                        <svg
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          className="circle-outline"
                        >
                          <circle cx="25" cy="25" r="23"></circle>
                        </svg>
                        <div className="circle-icon">
                          <svg
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-arrow"
                          >
                            <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="ms-btn--label">
                      <div className="ms-btn__text">Let's Go</div>
                      <div className="ms-btn__border"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-wrapper">
          <div
            className="swiper-button-next"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
          ></div>
          <div
            className="swiper-button-prev"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
          ></div>
        </div>
        <div className="slider-pagination-area">
          <h5 className="slide-range one">01</h5>
          <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
            <span className="swiper-pagination-progressbar-fill"></span>
          </div>
          <h5 className="slide-range three">03</h5>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
