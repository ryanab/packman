import React, { Component }from 'react'
import { Link } from 'react-router'
import { DateTimeHelper } from '../../utils'

export default (props) => {
    let order = props.order
    return (
      <tr>
          <td> 1 </td>
          <td> {order.orderId }  </td>
          <td> {DateTimeHelper.formatDate(order.orderDate) } </td>
          <td> {DateTimeHelper.formatTime(order.orderDate) } </td>
          <td> ShipStation </td>
          <td> {order.items.length}</td>
          <td>
            <span className="label label-sm label-success"> 1 </span>
            <span className="label label-sm label-warning"> 2 </span>
            <span className="label label-sm label-info"> 3 </span>
            <span className="label label-sm label-danger"> 4 </span>
          </td>
      </tr>        
    )    
}