import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollToTop from '../ScrollTop'

const Footer = props => {
  const { footerLogo, footerClass } = props
  return (
    <>
      <footer
        className={footerClass ? footerClass : 'ms-footer ms-footer--template'}>
        <section className='container footer-container' data-parallax='on'>
          <div className='footer-title text-center'>
            <h1>
              Got a <strong>PROJECT</strong> <br /> <strong>IN MIND?</strong>{' '}
              <a href='#' className='btn-footer'>
                Let's Talk <i className='fas fa-arrow-right'></i>
              </a>
            </h1>
          </div>
          <div className='social-area'>
            <div className='row area-inner'>
              <div className='col-lg-3 col-md-6 col-sm-2 col-2'>
                <div className='social-wrapper'>
                  <div className='content'>
                    <h3 className='platform'>LinkedIn</h3>
                    <a
                      href='https://www.linkedin.com/in/itxhamza/'
                      target='_blank'
                      className='link'>
                      @itxhamza
                    </a>
                  </div>
                  <div className='social'>
                    <a
                      href='https://www.linkedin.com/in/itxhamza/'
                      target='_blank'
                      className='icon'>
                      <i className='socicon-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-2 col-2'>
                <div className='social-wrapper'>
                  <div className='content'>
                    <h3 className='platform'>Github</h3>
                    <a
                      href='https://github.com/itxhamza'
                      target='_blank'
                      className='link'>
                      @itxhamza
                    </a>
                  </div>
                  <div className='social'>
                    <a
                      href='https://github.com/itxhamza'
                      target='_blank'
                      className='icon'>
                      <i className='socicon-github'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-2 col-2'>
                <div className='social-wrapper'>
                  <div className='content'>
                    <h3 className='platform'>Instagram</h3>
                    <a
                      href='https://www.instagram.com/itxhamzajaved/'
                      target='_blank'
                      className='link'>
                      @itxhamzajaved
                    </a>
                  </div>
                  <div className='social'>
                    <a
                      href='https://www.instagram.com/itxhamzajaved/'
                      target='_blank'
                      className='icon'>
                      <i className='socicon-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-2 col-2'>
                <div className='social-wrapper'>
                  <div className='content'>
                    <h3 className='platform'>Facebook</h3>
                    <a
                      href='https://www.facebook.com/people/Hamza-Javed/pfbid02zkjjcRafLBYouR5X8E3Usk5boEqKxYpSrzKrZwM6CpWwnyB9uMDyS8vNqaWifCLkl/'
                      target='_blank'
                      className='link'>
                      @itxhamzajaved
                    </a>
                  </div>
                  <div className='social'>
                    <a
                      href='https://www.facebook.com/people/Hamza-Javed/pfbid02zkjjcRafLBYouR5X8E3Usk5boEqKxYpSrzKrZwM6CpWwnyB9uMDyS8vNqaWifCLkl/'
                      target='_blank'
                      className='icon'>
                      <i className='socicon-facebook'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright-area'>
            <div className='left-side'>
              <p>
                ©{new Date().getFullYear()}{' '}
                <a href='#0' className='author'>
                  Hamza Javed
                </a>
                , All Rights Reserved.
              </p>
            </div>
            <div className='right-side'>
              <p>Hamza Javed</p>
            </div>
          </div>
        </section>
      </footer>
      <ScrollToTop />
    </>
  )
}

export default Footer
