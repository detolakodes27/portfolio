import React, {useState, useEffect} from 'react'
// import {Container, Row, Col} from 'reactstrap'
import Slider from 'react-slick'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/Testimonial.module.css'


const Testimonial = () =>{

	const settings = {
      dots: false,
      autoplay:true,
      speed: 500,
      autoplaySpeed:2100,
      infinite: true,
      swipeToSlide:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

	return(

		<section id='testimonial'>
			<div className='container px-5'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-6 justify-content-center'>
						<img alt='Testimonial image' src='/images/PF41.png'   className='rounded-lg cl-img mt-n ml-n'/>
						 <style jsx>{`
                    .cl-img{
                    	width:500px;
                    	height:500px;
                        object-fit:contain;
                    }

                    @media only screen and (max-width: 600px){
                    	.cl-img{
                    		width:400px;
                    	}
                    }
                     @media only screen and (max-width: 400px){
                    	.cl-img{
                    		width:300px;
                    	}
                    }
                `}</style>
					</div>

					<div className='col-lg-6 col-md-6 my-5'>
						<SectionSubtitle subtitle='Testimonials'/>
						<h4 className='my-4'>
							What my clients say
						</h4>

						<Slider {...settings}>
					          <div className={styles.testimonial_item}>
					            <div className={styles.testimonial_client}>
					            	<img alt='client image' src='/images/lady-img.jpg' />
					            	<div>
					            		<h6 className='mt-3'>
					            			Benjamin Ajayi
					            		</h6>
					            		<h6 className='mt-3'>
					            			Sports enthusiast/journalist
					            		</h6>
					            	</div>
					            </div>
				            	<p className='mt-3'>
				            		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua.
				            	</p>
					          </div>

					          <div className={styles.testimonial_item}>
					            <div className={styles.testimonial_client}>
					            	<img alt='client image' src='/images/man-img1.jpg' width='200px' height='200px' />
					            	<div>
					            		<h6 className='mt-3'>
					            			Chuks Donchester
					            		</h6>
					            		<h6 className='mt-3'>
					            			Digital marketer and web designer
					            		</h6>
					            	</div>
					            </div>
				            	<p className='mt-3'>
				            		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua.
				            	</p>
					          </div>

					          <div className={styles.testimonial_item}>
					            <div className={styles.testimonial_client}>
					            	<img alt='client image' src='/images/man-img2.jpg' width='200px' height='200px' />
					            	<div>
					            		<h6 className='mt-3'>
					            			Sanni Ridwan
					            		</h6>
					            		<h6 className='mt-3'>
					            			Accountant and Graphic designer
					            		</h6>
					            	</div>
					            </div>
				            	<p className='mt-3'>
				            		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua.
				            	</p>
					          </div>
				        </Slider>
					</div>
				</div>
			</div>
		</section>

	);
};


export default Testimonial