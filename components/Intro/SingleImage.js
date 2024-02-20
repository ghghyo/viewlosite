import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';

const SingleImage = () => {
    return (
        <section id="home" className="banner image-bg">
			{/*
            <BackgroundSlider
                duration={100000}
                transition={0.75}
                className="image-bg"
                images={['/images/banner/single-image.jpg']}
            />
			*/}
			{/* <!-- Container --> */}
			<Container>
				
				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">

						{/* <!-- Banner text --> */}
						<div className="banner-text">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
							View, Stream, Earn: <br />  Experience the World Live.
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							Welcome to Viewlo, the visionary mobile app that's reimagining connectivity. Experience the pulse of live news, dive into the heart of events, and stay connected to your culture or explore new ones, wherever you are, whenever you want. Download now and witness the revolution of live streaming.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="https://form.jotform.com/240485308097057" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
									<i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p>
								</a>
								
								<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0">
									<i className="fab fa-apple"></i><p>Download on<span>App Store</span></p>
								</a>
							
							</div>

						</div>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-6">
					<div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s" style={{ marginTop:'5px', position: 'relative', maxWidth: '455px', maxHeight: '550px', width: '100%', height: '50%', borderRadius: '40px', overflow: 'hidden' }}>
    <video className="bounce-effect" src="images/video_intro_viewlo.mp4" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} id="myVideo" controls />
</div>
					</Col>

					
				</Row>
				
			</Container>
			
			{/* <!-- Wave effect --> */}
			<div className="wave-effect wave-anim">
				
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
				
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
				
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
				
            </div>
			
		</section>
    );
}

export default SingleImage;