import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Frequently Asked Questions</h3>
							
						</div>
						
					</Col>
				</Row>
				
				<Row>					
				<Col className="col-12 col-lg-10 offset-lg-1">
            <h2>FAQs for Callers:</h2>
            <Accordion defaultActiveKey="0" flush>
                {/* Callers FAQs */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header as="h5">
                        How do I sign up as a caller?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Exciting times! To join in, create an account with your phone, email, or through your existing Google/Apple account. A unique Viewlo ID will be assigned to your account. Make sure you've got a valid payment method to make calls.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h5">
                        What's the cost of using the app as a caller?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The app offers the first 15 seconds of any call for free! If your call lasts less than one minute, the charge is 99 cents. For longer calls, additional fees are incurred depending on the total call duration. We encourage you to visit the Pricing section for a comprehensive breakdown of the costs per minute.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h5">
                        How does billing work for callers?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Billing made simple! We’ve partnered with Stripe to process all payments. Add or update your payment information by going to the Payment Method section under “My Money”.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h5">
                        Why was I charged $5 when I initiated a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Please be assured that the $5 charge you see is a temporary authorization hold. This hold is part of our standard process to confirm your payment method and is required to initiate a call. It is not a final charge.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h5">
                        How can I find specific locations on the map?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            To locate a specific address or venue on the map, please utilize the search function located under the "Search" tab.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h5">
                        How can I start a video call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Explore the map using the "Search" tab, find an active broadcaster, view their profile, and tap the "Call" button.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header as="h5">
                        How can I use live commands during a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            If you find yourself in a noisy location, require silence, or wish to maintain anonymity during a call, live commands are at your disposal.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h5">
                        How do I end a video call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            During the call, tap on the end call icon, and find all the details, including the final price, on the confirmation page.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header as="h5">
                        How can I review a reporter after a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            After ending a call, provide a rating on a scale of 1-5. Share any issues or feedback in the comments section and feel free to tip the reporter if you had an excellent experience.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header as="h5">
                        What measures should I take to ensure my safety while using the call service?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Your safety and privacy are our utmost priorities.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header as="h5">
                        How can I get customer support?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Need assistance? Contact customer service via email at help@viewlo.co.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h2>FAQs for Reporters:</h2>
            <Accordion defaultActiveKey="0" flush>
                {/* Reporters FAQs */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header as="h5">
                        How do I register to become a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Becoming a broadcaster on our platform is straightforward.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h5">
                        How do I earn money as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Easy! Accept video calls from interested callers and earn based on the duration of the call.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h5">
                        What is the process for withdrawing my earned funds?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            We ensure that your earnings are conveniently deposited into your account every two weeks, provided you have a balance.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h5">
                        How can I stay safe as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Your safety and privacy are our utmost priorities.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h5">
                        Where can I find my call history as a broadcaster?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Simple! Check out the "Call Log" under the "Profile" tab.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h5">
                        What if I miss or decline a call?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            No worries! Missed or declined calls get recorded in your transaction history.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header as="h5">
                        What is the fee structure for broadcasters?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            As a broadcaster using our service, you are entitled to retain 70% of your total earnings.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header as="h5">
                        Am I required to report my earnings to the IRS?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Yes, as an independent contractor, you are responsible for reporting your income to the IRS.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        		</Col>
		
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
				<Col className="col-12">
    <p className="text-center mb-0">Still have a question? Email viewloinc@gmail.com or <a href="mailto:viewloinc@gmail.com"><strong>Ask your question here</strong></a></p>
</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;