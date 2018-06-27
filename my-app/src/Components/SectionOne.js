import React, { Component } from 'react';


class SectionOne extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      fullName: '',
      phone: '',
      email: '',
      reemail: '',
      address: '',
      city: '',
      state: '',
      region: '',
      zip: '',
      how: '',
      isTouched: {
        fullName: '',
        phone: '',
        email: '',
        reemail: '',
        address: '',
        city: '',
        state: '',
        region: '',
        zip: '',
        how: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert("Form is submitted..");
    
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };



  validate = (fullName, phone, email, reemail, address, city, state, region, zip, how) => {
    const errors = {
      fullName: /^[a-zA-Z\\s]+/.test(fullName)
      ? ''
      : 'you can have only alphabetic characters',
      phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
      ? ''
      : 'you can have only numeric characters',
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
      ? ''
      : 'enter a valid email',
      reemail:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(reemail)
      ? ''
      : 'enter a valid email',
      address: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(address)
      ? ''
      : 'address not valid',
      city: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(city)
      ? ''
      : 'enter the city',
      state: /^[a-z][ a-z|A-Z]{1,49}$/.test(state) 
      ? ''
      : 'enter the state',
      region: /^[a-z][ a-z|A-Z]{1,49}$/.test(region)
      ? ''
      : 'enter the region',
      zip: /^[0-9]{5}$/.test(zip)
      ? ''
      : 'enter the zip',
      how: /^[a-z][ a-z|A-Z|0-9]{1,99}$/.test(how)
      ? ''
      : 'please fill'
    };
    return errors;

  }

  handleFocus = e => {
		const field = e.target.name;
		this.setState(prevState => ({
			isTouched: {
				...prevState.isTouched,
				[field]: true
			}
    }));
  }
  

  render() {
    const { fullName, phone, email, reemail, address, city, state, region, zip, how, isTouched } = this.state;
    const errors = this.validate(fullName, phone, email, reemail, address, city, state, region, zip, how);
    // console.log(errors);
    return(
      <form className="user_info">
      <header>
        <h4>1.Personal Information</h4>
      </header>

      <div className="flex-box">

        <div className="flex-75">
          <input 
          id="fullName" 
          type="text" 
          name="fullName" 
          placeholder="Full name*"
          className={errors.fullName && isTouched.fullName ? 'invalid' : ''} 
          onChange={e => this.setState({ fullName: e.target.value })}
          onBlur= {this.handleFocus}
          value={fullName}/>
          {isTouched.fullName &&
					errors.fullName && <span className="err-msg">{errors.fullName}</span>}

        </div>

        <div className="flex-25">
          <input id="phone" 
          type="text" 
          name="phone" 
          placeholder="Phone*"
          className={errors.phone && isTouched.phone ? 'invalid' : ''} 
          onChange={e => this.setState({phone: e.target.value})}
          onBlur= {this.handleFocus}
          value={phone}/>
          {isTouched.phone &&
					errors.phone && <span className="err-msg">{errors.phone}</span>}
        </div>

        <div className="flex-75">
          <input id="email" 
          type="email" 
          name="email" 
          placeholder="Email*" 
          className={errors.email && isTouched.email ? 'invalid' : ''}
          onChange={e => this.setState({email: e.target.value})}
          onBlur= {this.handleFocus}          
          value={email} />
          {isTouched.email &&
          errors.email && <span className="err-msg">{errors.email}</span>}
        </div>

        <div className="flex-75">
          <input id="reemail" 
          type="email" 
          name="reemail" 
          placeholder="Re-enter email*"
          className={errors.reemail && isTouched.reemail ? 'invalid' : ''}
          onChange={e => this.setState({reemail: e.target.value})}
          onBlur= {this.handleFocus}
          value={reemail} />
          {isTouched.reemail &&
          errors.reemail && <span className="err-msg">{errors.reemail}</span>}
        </div>

        <div className="flex-100">
          <textarea id="address" 
          name="address" 
          rows="2" 
          placeholder="Address*" 
          className={errors.address && isTouched.address ? 'invalid' : ''}
          onChange={e => this.setState({address: e.target.value})}
          onBlur= {this.handleFocus}
          value={address}></textarea>
          {isTouched.address &&
          errors.address && <span className="err-msg">{errors.address}</span>}
        </div>

        <div className="flex-25">
          <input id="city" 
          type="text" 
          name="city" 
          placeholder="City*"
          className={errors.city && isTouched.city ? 'invalid' : ''}
          onChange={e => this.setState({city: e.target.value})}
          onBlur= {this.handleFocus}
          value={city}  />
          {isTouched.city &&
          errors.city && <span className="err-msg">{errors.city}</span>}
        </div>
        
        <div className="flex-25">
          <input id="state"
          type="text" 
          name="state" 
          placeholder="State"
          className={errors.state && isTouched.state ? 'invalid' : ''}
          onChange={e => this.setState({state: e.target.value})}
          onBlur= {this.handleFocus}
          value={state}/>
          {isTouched.state &&
          errors.state && <span className="err-msg">{errors.state}</span>}
        </div>

        <div className="flex-25">
          <input id="region" 
          type="text" 
          name="region" 
          placeholder="Country/Region*"
          className={errors.region && isTouched.region ? 'invalid' : ''}
          onChange={e => this.setState({region: e.target.value})}
          onBlur= {this.handleFocus}
          value={region} />
          {isTouched.region &&
          errors.region && <span className="err-msg">{errors.region}</span>}
          
        </div>

        <div className="flex-25">
          <input id="zip" 
          type="text" 
          name="zip" 
          placeholder="Zip/PostalCode"
          className={errors.zip && isTouched.zip ? 'invalid' : ''}
          onChange={e => this.setState({zip: e.target.value})} 
          onBlur= {this.handleFocus}
          value={zip} />
          {isTouched.zip &&
          errors.zip && <span className="err-msg">{errors.zip}</span>}
        </div>

        <div className="flex-100">
          <input id="how" 
          type="text" 
          name="how" 
          placeholder="How did you hear about us"
          className={errors.how && isTouched.how ? 'invalid' : ''} 
          onChange={e => this.setState({how: e.target.value})}
          onBlur= {this.handleFocus}
          value={how} />
          {isTouched.how &&
          errors.how && <span className="err-msg">{errors.how}</span>}
        </div>

        <button id="submit" className="btn" type="submit" name="submit" 
        onClick={this.handleSubmit}
        disabled={this.isSubmitDisabled(errors)}>
					submit
				</button>

      </div>
    </form>
  );

  }
    
} 

export default SectionOne;