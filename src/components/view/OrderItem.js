import React, { Component } from 'react'

export default (props) => {
    return (
        <li className="mt-list-item">
            <div className="list-icon-container">
                <a href="javascript:;">
                    <i className="fa fa-angle-left"></i>
                </a>
            </div>
            <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
            <div className="list-item-content">
                <h3 className="uppercase">
                    <span> {props.item.sku}</span>
                </h3>
                <br />
                <p>Name: {props.item.name}</p>
                <p>Quantity: {props.item.quantity}</p>
            </div>
        </li>        
    )
}