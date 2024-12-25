import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HomeSixProject from './ProjectSection'

import icon1 from '../../public/images/services/icon/code-1.svg'
import icon2 from '../../public/images/services/icon/code-2.svg'
import icon3 from '../../public/images/services/icon/code-3.svg'
import icon4 from '../../public/images/services/icon/code-4.svg'
import icon5 from '../../public/images/services/icon/code-5.svg'
import icon6 from '../../public/images/services/icon/code-6.svg'
import HomeFivePortfolio from '../home-5/PortfolioSection'
import ProjectGridSection from '../project/ProjectGridSection'
import ProjectMasonarySection from '../project/ProjectMasonarySection'

// give me description for these services of 4 lines

// 1) Web Development
// 2) Mobile App Development
// 3) Desktop Development
// 4) Artificial Intelligence
// 5) Web 3.0 (Blockchain)
// 6) UX / UI Design
// 7) DevOps
// 8) Digital Marketing
// 9) Quality Assurance
// 10) Business Development
// 11) Support and Maintenance

// and add one more in this list the list should have 12

const servicesData = [
  {
    title: 'Web Development',
    description:
      'Build dynamic, responsive websites with clean code and modern frameworks for seamless user experiences.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Mobile App Development',
    description:
      'Create user-friendly mobile apps tailored for iOS and Android with high performance and intuitive design.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Desktop Development',
    description:
      'Develop efficient desktop applications optimized for security, speed, and cross-platform compatibility.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Leverage AI to automate processes, analyze data, and create smarter business solutions.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Blockchain Solutions',
    description:
      'Build secure, decentralized systems using blockchain technology for transparency and trust.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'UX/UI Design',
    description:
      'Design intuitive interfaces and engaging user experiences that captivate and retain users.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'DevOps',
    description:
      'Streamline development workflows with continuous integration, automated deployments, and monitoring.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Digital Marketing',
    description:
      'Boost your online presence with data-driven strategies, SEO, and targeted marketing campaigns.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Quality Assurance',
    description:
      'Ensure software reliability with comprehensive testing for functionality, performance, and security.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Business Development',
    description:
      'Strategize growth, build partnerships, and unlock new revenue opportunities with expert consulting.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Keep systems running smoothly with ongoing updates, performance monitoring, and troubleshooting.',
    icon: 'images/services/icon/service_icon.png',
  },
  {
    title: 'Cloud Integration',
    description:
      'Optimize cloud resources for scalability, security, and cost-efficiency with tailored cloud solutions.',
    icon: 'images/services/icon/service_icon.png',
  },
]

const HomeSixService = () => {
  return (
    <>
      <div className='services-area home-six'>
        <div className='container'>
          <h2 className='sub-title'>Services</h2>
          <h2 className='heading-title'>
            The Services <br /> We Provide For You
          </h2>
          <div className='services-item'>
            <div className='row'>
              {servicesData.map((service, index) => (
                <div key={index} className='col-lg-4 col-md-6 col-12'>
                  <div className='ms-sb img-top'>
                    <div
                      className={`ms-sb--img boxed ${
                        index % 4 === 0
                          ? 'one'
                          : index % 4 === 1
                          ? 'two'
                          : index % 4 === 2
                          ? 'three'
                          : 'four'
                      }`}>
                      <img
                        src={service.icon}
                        width={20}
                        height={20}
                        alt={service.title}
                      />
                    </div>
                    <div className='ms-sb--inner'>
                      <h3 className='ms-sb--title'>
                        <span>{service.title}</span>
                      </h3>
                      <p className='ms-sb--text'>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 100 }} />
        <ProjectMasonarySection />
      </div>
    </>
  )
}

export default HomeSixService
