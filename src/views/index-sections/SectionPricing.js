import React from "react";


import {
    Container,
    Row,
    Col,
    CardTitle
} from "reactstrap";




function SectionPricing() {
    

    const [basicQr, setBasicQr] = React.useState(false);
    const toggleBasicQr = () => {
        setBasicQr(!basicQr);
    };

    const [mediumQr, setMediumQr] = React.useState(false);
    const toggleMediumQr = () => {
        setMediumQr(!mediumQr);
    };

    const [premiumQr, setPremiumQr] = React.useState(false);
    const togglePremiumQr = () => {
        setPremiumQr(!premiumQr);
    };

    return (
        <>
            <div className="section section-pricing cd-section" id="pricing">
                <Container>
                    <div className="title">
                        <h2 id="pricing" >Our plans</h2>
                        <h3 className="title-uppercase">
                            <small>Choose the best plan for you</small>
                        </h3>
                    </div>
                    <Row>
                        <Col md="4">
                            <div className="card card-pricing card-plain">
                                <div className="card-body">
                                    <h6 className="card-category">Basic</h6>
                                    <div className="icon icon-primary">
                                        <i className="now-ui-icons business_chart-bar-32"></i>
                                    </div>
                                    <CardTitle tag="h1">$29</CardTitle>
                                    <ul>
                                        <li>
                                            <b>10</b> Projects
                                        </li>
                                        <li>
                                            <b>5GB</b> Storage
                                        </li>
                                        <li>
                                            <b>100</b> Messages
                                        </li>
                                        <li>
                                            <b>50</b> Email Accounts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="card card-pricing card-plain">
                                <div className="card-body">
                                    <h6 className="card-category">Medium</h6>
                                    <div className="icon icon-primary">
                                        <i className="now-ui-icons business_chart-pie-36"></i>
                                    </div>
                                    <CardTitle tag="h1">$69</CardTitle>
                                    <ul>
                                        <li>
                                            <b>50</b> Projects
                                        </li>
                                        <li>    
                                            <b>25GB</b> Storage
                                        </li>
                                        <li>
                                            <b>500</b> Messages
                                        </li>
                                        <li>
                                            <b>250</b> Email Accounts


                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="card card-pricing card-plain">
                                <div className="card-body">
                                    <h6 className="card-category">Premium</h6>
                                    <div className="icon icon-primary">
                                        <i className="now-ui-icons business_chart-bar-32"></i>
                                    </div>

                                    <CardTitle tag="h1">$99</CardTitle>
                                    <ul>    
                                        <li>
                                            <b>Unlimited</b> Projects
                                        </li>
                                        <li>

                                            <b>Unlimited</b> Storage
                                        </li>
                                        <li>

                                            <b>Unlimited</b> Messages

                                        </li>
                                        <li>
                                            <b>Unlimited</b> Email Accounts
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>





    );
}

export default SectionPricing;