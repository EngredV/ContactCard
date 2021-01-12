import React, { Component } from "react";
import PropTypes from "prop-types";
	
class ContactCard extends Component {
	 render(){
	    return (
	        <div id="cc">
	            <h1>{this.props.name}</h1>
	            <ul>
	                <li>mobile: {this.props.mobile}</li>
	                <li>work: {this.props.work}</li>
	                <li>email: {this.props.email}</li>
	            </ul>
	        </div>
	    );
	}
}
	
ContactCard.propTypes = {
	name: PropTypes.string.isRequired,
	mobile: PropTypes.string.isRequired,
	work: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
}
	
export default ContactCard;
