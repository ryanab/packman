import React, { Component } from 'react'
import { OrderItem } from './'

export default (props) => {
  return (
    <div className="portlet light portlet-fit ">
        <div className="portlet-body" style={{padding: '0px'}}>
            <div className="mt-element-list">
                <div className="mt-list-head list-news font-white bg-blue">
                    <div className="list-head-title-container">
                        <span className="badge badge-primary pull-right">3</span>
                        <h3 className="list-title">{props.title}</h3>
                    </div>
                </div>
                <div className="mt-list-container list-news">
                  <ul>
                  {
                    props.list.map((item, i) =>{
                      return <OrderItem key={i} item={item}/>
                    })  
                  }
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}