import React, {PropTypes} from 'react';

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="userAccount">
        <a href="#" onClick={this.props.onLogin}>Sign in to Twitter</a>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  onLogin: React.PropTypes.func.isRequired
};

export default LoginComponent;
