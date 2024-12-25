import Image from 'next/image'
import testiImg1 from '../../public/images/testimonial/user.png'
import testiImg2 from '../../public/images/testimonial/user.png'
import testiImg3 from '../../public/images/testimonial/user.png'

const testimonialsData = [
  {
    image: testiImg1,
    name: 'Xaiver Cooper',
    content:
      "I recently worked with Hamza Javed on a mobile backend project involving MongoDB. His expertise was evident in the robust API solutions provided. Communication was top-notch, ensuring clarity and adherence to project requirements. He handled complex challenges efficiently, significantly enhancing our app's performance. Deliveries were on time and well-documented, making handovers seamless. I highly recommend him for any backend development needs and look forward to future collaborations.",
  },
  {
    image: testiImg2,
    name: 'John Lim',
    content:
      'Hamza Javed did an exceptional job on our project, integrating a secure payment gateway tailored for Bangladesh. They implemented robust security measures including SSL encryption and two-factor authentication, ensuring reliable and safe transactions. Highly recommend for their dedication and technical expertise!',
  },
  {
    image: testiImg2,
    name: 'Jade Ruzzo',
    content:
      'I had a great experience working with Hamza on a management system for my jewelry business, Jade Ruzzo. From start to finish, Hamza showed excellent technical skills, creativity, and dedication. He built the system from scratch, paying close attention to our needs and making it easy to use. Communication was clear and consistent, and he solved any issues quickly. I highly recommend Hamza to anyone looking for a skilled, reliable developer who can bring ideas to life.',
  },
]

const HomeSixTestimonial = () => {
  return (
    <>
      <div className='testimonial-area'>
        <div className='container'>
          <h2 className='sub-title'>Testimonials</h2>
          <h2 className='heading-title'>
            Some Reviews From <br /> Clients
          </h2>
          <div className='testimonial-item'>
            <div className='row'>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className='col-lg-4 col-md-6 col-12'>
                  <div className='testimonial-wraper'>
                    <div className='content'>{testimonial.content}</div>
                    <div className='author'>
                      <div className='author-image'>
                        <Image src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className='author-details'>
                        <h2 className='name'>{testimonial.name}</h2>
                        <p className='desc'>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSixTestimonial
