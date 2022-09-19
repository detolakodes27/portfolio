import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/About.module.css'


const About = () =>{

	return(
		<section id='about'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-12'>
						<SectionSubtitle subtitle='About me' />
						<h3 className='mt-3'> 
							Let me
						</h3>
						<h3>
							handle, your next project
						</h3>
						<p className='mt-30'>
							Adept understanding of my work means i get to deliver faster and more accurately. Get top-notch, modern digital contents made with the latest available technologies.
						</p>

						<div className='d-flex align-items-center flex-wrap justify-content-start fw-normal'>
							<div className='mr-5'>
								<h6 className='d-flex align-items-center mb-3 lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Problem solving
								</h6>

								<h6 className='d-flex align-items-center lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Fast & creative thinking
								</h6>
							</div>

							<div>
								<h6 className='d-flex align-items-center mb-3 lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Calm under pressure
								</h6>

								<h6 className='d-flex align-items-center lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Never-give-up mentality
								</h6>
							</div>
						</div>
						<div className='mt-5'>
							<button className='primarybtn'>
								<a href='#portfolio'>
									My works
								</a>
							</button>

							<button className='secondarybtn ml-4 rounded'>
								{/*<a href='HOW TO RAISE MONEY EASILY.pdf' download>
									Download CV
								</a>*/}
								<a href='#contact'>
									Hire me
								</a>
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-md-12 md-mt'>
						<div className={styles.about2}>
							<div className='flex-h-new3 gap-3'>
								<div className='d-flex flex-column mb-3'>
									<div className={`${styles.aboutimg} ${styles.aboutimg_box}`}>
										<img src='/images/profilepic4.jpg' width='150px' alt='About image' className='m-2 rounded-xlg' />
									</div>

									<div className={`${styles.aboutimg} ${styles.aboutimg_box}`}>
										<img src='/images/profilepic3.jpg' width='100px' alt='About image' className='m-2 rounded-xlg' />
									</div>
								</div>

								<div className='d-flex flex-column mb-3'>
									<div className={`${styles.aboutimg} ${styles.aboutimg_box}`}>
										<img src='/images/profilepic1.jpg' width='100px' alt='About image' className='m-2 rounded-xlg' />
									</div>

									<div className={`${styles.aboutimg} ${styles.aboutimg_box}`}>
										<img src='/images/profilepic2.jpg' width='150px' alt='About image' className='m-2 rounded-xlg' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default About
