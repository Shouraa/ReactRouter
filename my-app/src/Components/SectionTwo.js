import React, { Component } from 'react';


class SectionTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
          radiobtns: "dr",
          left_chckboxes: [],
          right_chckboxes:[]
          
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

    
  validate = (left_chckboxes, right_chckboxes) => {
    const errors = {
    left_chckboxes: left_chckboxes.length ? '' : 'pick at least one option',
    right_chckboxes: right_chckboxes.length ? '' : 'pick at least one option'
    };
    return errors;
  }
  
  handleCheck = e => {
    e.persist();
    const value = e.target.value;
    const index = this.state[e.target.name].indexOf(value);
  // console.log('e.target.name', e.target.name)
    index === -1
      ? this.setState(prevState => ({ [e.target.name]: [...prevState[e.target.name], value] }))
      : this.setState(prevState => {

          return {
            [e.target.name]: [
              ...prevState[e.target.name].slice(0, index),
              ...prevState[e.target.name].slice(index + 1)
            ]
          };
        });
  };

  handleRadioBtn = e => {
    this.setState({radiobtns: e.target.value});
  };

    render() {
      // console.log(this.state.radiobtns);

      const { left_chckboxes, right_chckboxes } = this.state;
      const errors = this.validate(left_chckboxes, right_chckboxes)
        return(
            <form className="user_info">
            <header>
              <h4>2. Skills and Location</h4>
            </header>
            <h5>Which is your primary design discipline?*</h5>
    
            <div className="flex-box">

              <div className="flex-25">
                <input type="radio" value="dr" name="rad_btn" checked={this.state.radiobtns==="dr"} onChange = {this.handleRadioBtn} id="dr" />
                <label className="label" htmlFor="dr">Design Research</label>
              </div>

              <div className="flex-25">
                <input type="radio" value="vd" name="rad_btn" checked={this.state.radiobtns==="vd"} onChange = {this.handleRadioBtn} id="vd" />
                <label className="label" htmlFor="vd">Visual Design</label>
              </div>

              <div className="flex-25">
                <input type="radio" value="ud" name="rad_btn" checked={this.state.radiobtns==="ud"} onChange = {this.handleRadioBtn} id="ud" />
                <label className="label" htmlFor="ud"> UX Design</label>
              </div>

              <div className="flex-25">
                <input type="radio" value="fd" name="rad_btn" checked={this.state.radiobtns==="fd"} onChange = {this.handleRadioBtn} id="fd"  />
                <label className="label" htmlFor="fd">Front-end Dev</label>
              </div>
    
            </div>
    
            <div id="wrap">
    
              <div className="left">
                <div className="left_chcbox">
                <h5>Do you have experience with any other <br /> disciplines?</h5>
    
                  <label htmlFor="Visual_d" className="checkbox">Visual Design
                    <input type="checkbox" 
                    id="Visual_d" 
                    onChange={this.handleCheck}
                    checked={left_chckboxes.includes('vd')}
                    name="left_chckboxes" 
                    value="vd" />
                      <span className="checkmark"></span>
                  </label>

                  <label htmlFor="ux_d" className="checkbox">UX-Design
                    <input type="checkbox" 
                    id="ux_d" 
                    onChange={this.handleCheck}
                    checked={left_chckboxes.includes('ux_d')}
                    name="left_chckboxes" 
                    value="ux_d" />
                      <span htmlFor="ux_d" className="checkmark"></span>
                  </label>

                  <label htmlFor="fe_d" className="checkbox">Front-end Developement
                    <input type="checkbox" 
                    id="fe_d" 
                    onChange={this.handleCheck}
                    checked={left_chckboxes.includes('fe_d')}
                    name="left_chckboxes" 
                    value="fe_d" />
                      <span className="checkmark"></span>
                  </label>

                  {left_chckboxes.length === 0 ? <span className="err-msg">{errors.left_chckboxes}</span> : <span></span>}
                </div>
              </div> 
    
              <div className="right">
                <div className="right_chcbox">
                <h5>Where are you interested in working?*</h5>
                <p> You must be legally authorized to work without visa <br /> sponsorship in the location(s) you choose. </p>
    
                <label htmlFor="aus" className="checkbox">Austin, Texas
                  <input type="checkbox" 
                  id="aus"
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('aus')}
                  name="right_chckboxes" 
                  value="aus" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="ny" className="checkbox">New York, New York
                  <input type="checkbox" 
                  id="ny" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('ny')}
                  name="right_chckboxes" 
                  value="ny" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="toronto" className="checkbox">Toronto, Canada
                  <input type="checkbox" 
                  id="toronto" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('toronto')}
                  name="right_chckboxes" 
                  value="toronto" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="shanghai" className="checkbox">Shanghai, China
                  <input type="checkbox" 
                  id="shanghai" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('shanghai')}
                  name="right_chckboxes" 
                  value="shanghai" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="dublin" className="checkbox">Dublin, Ireland
                  <input type="checkbox" 
                  id="dublin" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('dublin')}
                  name="right_chckboxes" 
                  value="dublin" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="hursley" className="checkbox">Hursley, United Kingdom
                  <input type="checkbox" 
                  id="hursley" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('hursley')}
                  name="right_chckboxes" 
                  value="hursley" />
                    <span className="checkmark"></span>
                </label>

                <label htmlFor="boeblingen" className="checkbox">Boeblingen, Germany
                  <input type="checkbox" 
                  id="boeblingen" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('boeblingen')}
                  name="right_chckboxes" 
                  value="boeblingen" />
                    <span className="checkmark"></span>
                </label>
                
                <label htmlFor="else" className="checkbox">Somwhere else
                  <input type="checkbox" 
                  id="else" 
                  onChange={this.handleCheck}
                  checked={right_chckboxes.includes('else')}
                  name="right_chckboxes" 
                  value="else" />
                    <span className="checkmark"></span>
                </label>
                {right_chckboxes.length === 0 ? <span className="err-msg">{errors.right_chckboxes}</span> : <span></span>}
    
                </div>
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

export default SectionTwo;


