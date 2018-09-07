import React, { Component } from 'react';

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: '',
      isTouched: {
        portfolio: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Form is submitted..');
  };

  isSubmitDisabled = errors => Object.values(errors).some(errMsg => errMsg);

  validate = (portfolio) => {
    const errors = {
      portfolio: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
        portfolio,
      )
        ? ''
        : 'FILL THE FIELD',
    };
    return errors;
  };

  handleFocus = (e) => {
    const field = e.target.name;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true,
      },
    }));
  };

  render() {
    const { portfolio, isTouched } = this.state;
    const errors = this.validate(portfolio);
    return (
      <form className="user_info">
        <header>
          <h4>3. Portfolio</h4>
        </header>
        <h5>
          {
            "Prove you're IBM's next great designer by showing us who you are. What you've done. How you think. Thell us your story."
          }
        </h5>

        <div className="flex-box">
          <div className="flex-100">
            <input
              id="portfolio"
              type="text"
              name="portfolio"
              placeholder="Portfolio link*"
              className={errors.portfolio && isTouched.portfolio ? 'invalid' : ''}
              onChange={e => this.setState({ portfolio: e.target.value })}
              onBlur={this.handleFocus}
              value={portfolio}
            />
            {isTouched.portfolio
              && errors.portfolio && <span className="err-msg">{errors.portfolio}</span>}
          </div>
          <div className="flex-100">
            <textarea
              name="more_info"
              rows="5"
              placeholder="Anything else (another link, availability, etc)?"
            />
          </div>
          <div className="flex-25">
            <button
              id="submit"
              className="btn"
              type="submit"
              name="submit"
              onClick={this.handleSubmit}
              disabled={this.isSubmitDisabled(errors)}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SectionThree;
