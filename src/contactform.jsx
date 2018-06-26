"use strict";
import React from 'react';
import './contactform.scss';

class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.email = null;
		this.name = null;
		this.message = null;
		this.sendStatus = null;
		this.emailText = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i ;
	};

	sendContact = () => {
		let errList = [];
		let errMessage = '';

		if(this.email.value.trim() === ""){
			errList.push({name:'email', status:' Email Name field is empty! '});
		} else
		    if(this.emailText.test(this.email.value) === false) {
			errList.push({name:'email', status:' Error Email! '});
		};

		if (this.name.value.trim() === ""){
			errList.push({name:'name', status:' Name field is empty! '});
		};

		if(this.message.value.trim() === ""){
			errList.push({name:'message', status:' Message field is empty! '});
		};

		if (errList.length > 0){

            for (let i = 0; i < errList.length; i++ ){
				errMessage = errMessage + errList[i].status + '<br/>';
			};

			this.sendStatus.innerHTML = errMessage ;

		} else {
			this.props.onSendContent( this.name.value.trim(), this.email.value.trim(), this.message.value.trim() );
		};

	};

	render = () => {
		return(
			<div className = "contact-form">
				<form role = "form" id="contactForm" data-toggle="validator" className = "shake" noValidate = "true">
					<div className = "row">
						<div className = "form-group col-sm-6">
							<input ref = {(input) => {this.name = input; }}
								   type = "text"
								   className = "form-control"
								   id = "name"
								   placeholder = "Your name"
								   required = ""
								   data-error = "Your name!"/>
							<div className = "help-block with-errors"></div>
						</div>
						<div className = "form-group col-sm-6">
							<input
								ref = { (input) => {this.email = input; } }
								type = "email"
								className = "form-control"
								id = "email"
								placeholder = "Your email"
								required = ""
								data-error = "Your email!"/>
							<div className = "help-block with-errors"></div>
						</div>
					</div>
					<div className = "form-group">
						<textarea
							ref = { (textarea) => {this.message = textarea;} }
							id = "message"
							className = "form-control"
							rows = "3"
							placeholder = "Enter a messag e"
							required = ""
							data-error = "Enter a message!">
						</textarea>
						<div ref = { (div) => {this.sendStatus = div;} }  id="with-errors-1" className = "help-block with-errors"></div>
					</div>
					<button onClick = {this.sendContact}   type = "submit" id = "form-submit" className = "disabled">Отправить</button>
					<div id = "msgSubmit" className = "h3 text-center hidden"></div>
					<div className = "clearfix">
					</div>
				</form>
			</div>
		);
	};
};

export default ContactForm;
