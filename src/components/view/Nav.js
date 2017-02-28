import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="page-header-menu">
        <div className="container">
            <form className="search-form" action="page_general_search.html" method="GET">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" name="query"/>
                    <span className="input-group-btn">
                        <a href="#" className="btn submit">
                            <i className="icon-magnifier"></i>
                        </a>
                    </span>
                </div>
            </form>
            <div className="hor-menu  ">
              <ul className="nav navbar-nav"> 
                <li> <a> Home </a> </li>
                <li> <a> Link 1 </a> </li>
                <li> <a> Link 2 </a> </li>
                <li> <a> Link 3 </a> </li>
              </ul>
            </div>
        </div>
    </div>
  )
}