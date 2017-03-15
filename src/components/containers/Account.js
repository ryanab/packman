import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component{

  constructor(){
    super()
    this.state = {
      profile:{}
    }
  }

  updateProfile(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.profile)
    updated[event.target.id] = event.target.value
    this.setState({
      profile: updated
    })
  }

  submitChanges(event){
    event.preventDefault()
    console.log(JSON.stringify(this.state.profile))
    this.props.updateProfile(this.props.user.id, this.state.profile)
    .then(()=>{
      alert('Profile updated successfully')
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

  render(){
    return(
      <div>
        <h3>Edit Account Information</h3>
        <div className="form-group">
          <label>Name:</label>
          <input onChange={this.updateProfile.bind(this)} id="name" type="text" className="form-control" placeholder={this.props.user.name} /> < br/>
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input onChange={this.updateProfile.bind(this)} id="email" type="text" className="form-control" placeholder={this.props.user.email} /> < br/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input onChange={this.updateProfile.bind(this)}  id="password" type="password" className="form-control" /> < br/>
        </div>
        <div className="form-group">
          <label>ShipStation API Key:</label>
          <input onChange={this.updateProfile.bind(this)}  id="shipstationAPIKey" type="text" className="form-control" placeholder={this.props.user.shipstationAPIKey} /> < br/>
        </div>
        <div className="form-group">
          <label>ShipStation API Secret:</label>
          <input onChange={this.updateProfile.bind(this)}  id="shipstationAPISecret" type="password" className="form-control" placeholder={this.props.user.shipstationAPISecret} /> < br/>
        </div>
        <button onClick={this.submitChanges.bind(this)} className="btn btn-primary" type="submit">Submit Changes</button>
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
    updateProfile: (id, params) => dispatch(actions.updateProfile(id, params))
  }
}

export default connect(stateToProps, dispatchToProps)(Account)