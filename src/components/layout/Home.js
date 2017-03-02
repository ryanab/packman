import React, { Component } from 'react'
import {Header, Footer, Nav } from '../view'
import { Orders } from '../containers'

export default (props) => {
  return(
    <div className="page-wrapper">
        <div className="page-wrapper-row">
            <div className="page-wrapper-top">
                <div className="page-header">
                  <Header />
                  <Nav />
                </div>
            </div>
        </div>
        <div className="page-wrapper-row full-height">
            <div className="page-wrapper-middle">
                <div className="page-container">
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <div className="container">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}