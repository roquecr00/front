import React from 'react'

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from "reactstrap";

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (

        <>
            <div className="section section-about-us" id="contactUs" m="50px" >
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Contact Us</h2>

                            <form name="sentMessage" onSubmit={onSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">{formStatus}</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default ContactForm


