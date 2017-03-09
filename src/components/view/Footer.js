import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="page-wrapper-row">
        <div className="page-wrapper-bottom">
            <div className="page-prefooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                            <h2>About</h2>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam dolore. </p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs12 footer-block">
                            <h2>Subscribe Email</h2>
                            <div className="subscribe-form">
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" placeholder="mail@email.com" className="form-control" />
                                        <span className="input-group-btn">
                                            <button className="btn" type="submit">Submit</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                            <h2>Follow Us On</h2>
                            <ul className="social-icons">

                                <li>
                                    <a href="#" data-original-title="facebook" className="facebook"></a>
                                </li>
                                <li>
                                    <a href="#" data-original-title="twitter" className="twitter"></a>
                                </li>
                                <li>
                                    <a href="#" data-original-title="linkedin" className="linkedin"></a>
                                </li>
                                <li>
                                    <a href="#" data-original-title="youtube" className="youtube"></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                            <h2>Contacts</h2>
                            <address className="margin-bottom-40"> Phone: 800 123 3456
                                <br/> Email:
                                <a href="mailto:info@metronic.com">info@metronic.com</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}