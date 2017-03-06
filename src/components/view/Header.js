import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="page-header-top">
        <div className="container">
            <div className="page-logo">
                <a href="index.html">
                    <img src="../assets/layouts/layout3/img/logo-default.jpg" alt="logo" className="logo-default"/>
                </a>
            </div>
            <a href="#" className="menu-toggler"></a>
            <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                    <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-bell" ></i>
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
                                    <li>
                                        <a href="#">
                                            <span className="time">3 mins</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> Server #12 overloaded. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">10 mins</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-warning">
                                                    <i className="fa fa-bell-o"></i>
                                                </span> Server #2 not responding. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">14 hrs</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-info">
                                                    <i className="fa fa-bullhorn"></i>
                                                </span> Application error. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">2 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> Database overloaded 68%. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">3 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> A user IP blocked. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">4 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-warning">
                                                    <i className="fa fa-bell-o"></i>
                                                </span> Storage Server #4 not responding dfdfdfd. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">5 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-info">
                                                    <i className="fa fa-bullhorn"></i>
                                                </span> System Error. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="time">9 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> Storage server failed. </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-calendar"></i>
                            <span className="badge badge-default">3</span>
                        </a>
                        <ul className="dropdown-menu extended tasks">
                            <li className="external">
                                <h3>You have
                                    <strong>12 pending</strong> tasks</h3>
                                <a href="app_todo_2.html">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{height: '275px'}} data-handle-color="#637283">
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">New release v1.2 </span>
                                                <span className="percent">30%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">40% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">Application deployment</span>
                                                <span className="percent">65%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">65% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">Mobile app release</span>
                                                <span className="percent">98%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">98% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">Database migration</span>
                                                <span className="percent">10%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">10% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">Web server upgrade</span>
                                                <span className="percent">58%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">58% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">Mobile development</span>
                                                <span className="percent">85%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">85% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="task">
                                                <span className="desc">New UI release</span>
                                                <span className="percent">38%</span>
                                            </span>
                                            <span className="progress progress-striped">
                                                <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">38% Complete</span>
                                                </span>
                                            </span>
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
                            <img alt="" className="img-circle" src="../assets/layouts/layout3/img/avatar9.jpg" />
                            <span className="username username-hide-mobile">Nick</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-default">
                            <li>
                                <a href="page_user_profile_1.html">
                                    <i className="icon-user"></i> My Profile </a>
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