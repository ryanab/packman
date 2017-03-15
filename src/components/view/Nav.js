import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="page-header-menu">
        <div className="container">
            <form className="search-form" action="page_general_search.html" method="GET">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search By Order #" name="query"/>
                    <span className="input-group-btn">
                        <a href="#" className="btn submit">
                            <i className="icon-magnifier"></i>
                        </a>
                    </span>
                </div>
            </form>
            <div className="hor-menu  ">
              <ul className="nav navbar-nav"> 
                <li> <a> To Pack </a> </li>
                <li> <a> All Orders Today </a> </li>
                <li> <a> All Orders Past 7 days </a> </li>
              </ul>
            </div>
        </div>
    </div>
  )
}