import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// import portfolioBanner from '../../public/images/portfolio/profile.jpeg'
import portfolioBanner from '../../public/images/portfolio/most-hero.png'

const HomeBanner = () => {
  return (
    <>
      <div className='ms-page-content portfolio-banner'>
        <div className='container'>
          <div className='portfolio-banner-inner'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-lg-7 col-md-7'>
                <div className='banner-content'>
                  <h2 className='heading-title'>Hi, i'm</h2>
                  <h2 className='sub-title'>Hamza Javed</h2>
                  <h2 className='title'>
                    Creative <br />
                    &nbsp;&nbsp;Tech <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Visionary.
                  </h2>
                  <p className='desc' style={{ whiteSpace: 'pre-wrap' }}>
                    Greetings! I’m Hamza Javed — a passionate Software Engineer
                    with over six years of experience architecting cutting-edge
                    solutions across mobile, web, and desktop platforms. With
                    expertise spanning 25+ programming languages, I don't just
                    write code; I craft digital experiences that drive
                    innovation and deliver impactful results.
                    <div style={{ marginTop: 10 }}>
                      Beyond building scalable software, I’m deeply committed to
                      mentoring aspiring tech professionals, fostering their
                      growth, and empowering them to thrive in an ever-evolving
                      tech landscape. My journey is fueled by an insatiable
                      curiosity for emerging technologies and a dedication to
                      excellence, ensuring every project I touch leaves a mark
                      of quality and forward-thinking craftsmanship.
                    </div>
                    <div style={{ marginTop: 10 }}>
                      Let’s shape the future of technology, one line of code at
                      a time. 🚀
                    </div>
                  </p>
                  <div className='ms-social-icon'>
                    <div className='ms-s-w'>
                      <a
                        className='ms-s-i mono s-it'
                        href='https://www.linkedin.com/in/itxhamza/'
                        target='_blank'>
                        <i className='socicon-linkedin'>
                          {/* <span>LinkedIn</span> */}
                        </i>
                      </a>

                      <a
                        className='ms-s-i mono s-it'
                        href='https://www.instagram.com/itxhamzajaved/'
                        target='_blank'>
                        <i className='socicon-instagram'>
                          {/* <span>500px</span> */}
                        </i>
                      </a>

                      <a
                        className='ms-s-i mono s-it'
                        href='https://www.facebook.com/people/Hamza-Javed/pfbid02zkjjcRafLBYouR5X8E3Usk5boEqKxYpSrzKrZwM6CpWwnyB9uMDyS8vNqaWifCLkl/'
                        target='_blank'>
                        <i className='socicon-facebook'>
                          {/* <span>pinterest</span> */}
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-5'>
                <div className='banner-hero'>
                  <Image src={portfolioBanner} alt='Portfolio Banner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner
