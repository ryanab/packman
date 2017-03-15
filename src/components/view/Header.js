import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends Component {

  render(){
    return (
      <div className="page-header-top">
          <div className="container">
              <div className="page-logo">
                  <a href="index.html">
                      <img src="/assets/global/img/duck_packer.png" alt="logo" className="logo-default" width={225} style={{marginTop: 15}}/>
                  </a>
              </div>
              <a href="#" className="menu-toggler"></a>
              <div className="top-menu">
                  <ul className="nav navbar-nav pull-right">
                      <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                              <i className="icon-bell" style={{fontSize: 24}}></i>
                              <span className="badge badge-default">7</span>
                          </a>
                          <ul className="dropdown-menu">
                              <li className="external">
                                  <h3>You have
                                      <strong>12 pending</strong> tasks</h3>
                                  <a href="app_todo.html">view all</a>
                              </li>
                              <li>
                                  <ul className="dropdown-menu-list scroller" style={{height: '250px'}} data-handle-color="#637283">
                                      <li>
                                          <a href="#">    
                                              <span className="time">just now</span>
                                              <span className="details">
                                                  <span className="label label-sm label-icon label-success">
                                                      <i className="fa fa-plus"></i>
                                                  </span> New user registered. </span>
                                          </a>
                                      </li>

                                  </ul>
                              </li>
                          </ul>
                      </li>

                      <li className="droddown dropdown-separator">
                          <span className="separator"></span>
                      </li>
                      <li className="dropdown dropdown-user dropdown-dark">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                              <span className="username username-hide-mobile" style={{paddingRight: 3}}>{this.props.user.name}</span>
                              <i className="fa fa-cog" style={{fontSize: 24}}></i>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-default">
                              <li>
                                  <Link to="/app/account">
                                      <i className="icon-user"></i> Account 
                                  </Link>
                              </li>
                              <li>
                                  <a href="app_calendar.html">
                                      <i className="icon-calendar"></i> My Calendar </a>
                              </li>
                              <li>
                                  <a href="app_inbox.html">
                                      <i className="icon-envelope-open"></i> My Inbox
                                      <span className="badge badge-danger"> 3 </span>
                                  </a>
                              </li>
                              <li>
                                  <a href="app_todo_2.html">
                                      <i className="icon-rocket"></i> My Tasks
                                      <span className="badge badge-success"> 7 </span>
                                  </a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                  <a href="page_user_lock_1.html">
                                      <i className="icon-lock"></i> Lock Screen </a>
                              </li>
                              <li>
                                  <a href="page_user_login_1.html">
                                      <i className="icon-key"></i> Log Out </a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(Header)