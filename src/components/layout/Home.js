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
                        <div className="page-head">
                            <div className="container">
                                <div className="page-title">
                                    <h1>Fixed Mega Menu </h1>
                                </div>
                                <div className="page-toolbar">
                                    <div className="btn-group btn-theme-panel">
                                        <a href="#" className="btn dropdown-toggle" data-toggle="dropdown">
                                            <i className="icon-settings"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-content">
                            <div className="container">
                                <div className="row">
                                    {props.children}
                                </div>
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