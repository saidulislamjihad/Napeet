import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Heading from './Heading';
import './Testimonial.css'

function Testimonial(){
    return(
        <section className='testimonial-section'>
            <Heading/>
            <OwlCarousel items={1} className='testimonial-items-wrapper' loop margin={10} nav dots={false}>
                <div className='testimonial-item-outer'>
                   <div className='testimonial-item-image'>
                        <img src='/src/assets/images/img-29-227x254_c.webp' alt='Image'/>
                   </div>
                   <div className='testimonial-item-content'>
                        <p className='message'>
                            Perfect grooming is one of the features of a successful man. The main signature of ae of the features of a successful man.
                        </p>
                        <h3 className='author-name'>
							David Miller                            
                        </h3>
                        <p className='company-name'>
                            Marketing Envato Pvt Ltd 
                        </p>
                   </div>
                </div>
                <div className='testimonial-item-outer'>
                   <div className='testimonial-item-image'>
                        <img src='/src/assets/images/img-30-227x254_c.webp' alt='Image'/>
                   </div>
                   <div className='testimonial-item-content'>
                        <p className='message'>
                            Perfect grooming is one of the features of a successful man. The main signature of ae of the features of a successful man.
                        </p>
                        <h3 className='author-name'>
                            Clifford                            
                        </h3>
                        <p className='company-name'>
                            Electric Hair Clipper  
                        </p>
                   </div>
                </div>
                <div className='testimonial-item-outer'>
                   <div className='testimonial-item-image'>
                        <img src='/src/assets/images/testimonial-image-227x254_c.webp' alt='Image'/>
                   </div>
                   <div className='testimonial-item-content'>
                        <p className='message'>
                            Perfect grooming is one of the features of a successful man. The main signature of ae of the features of a successful man.
                        </p>
                        <h3 className='author-name'>
                            Adelbert                           
                        </h3>
                        <p className='company-name'>
                            Marketing Envato Pvt Ltd 
                        </p>
                   </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Testimonial