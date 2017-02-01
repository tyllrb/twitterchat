import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserComponent from '../UserComponent';
import LoginComponent from '../LoginComponent';
import * as userActions from '../../actions/user';

class UserContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userInfo: this.props.userInfo,
      tokens: this.props.tokens,
      loggedIn: this.props.loggedIn
    };

    this.doLogin = this.doLogin.bind(this);
    this.storeRequestToken = props.actions.storeRequestToken.bind(this);

  }

  componentDidMount() {
    if (!this.loggedIn && !this.state.tokens.requestToken) {
      console.log(this.props.actions);
      this.props.actions.generateRequest();
    }
  }

  doLogin() {
    console.log('do login');
    this.props.actions.doLogin();
  }

  static storeRequestToken() {
    console.log('really');
  }

  render () {
    if (this.props.userInfo) {
      return (
        <div className="userPanel">
          <UserComponent user={this.state.userInfo}/>
        </div>
      );
    } else {
      return (
        <div className="userPanel">
          <LoginComponent onLogin={this.doLogin} />
        </div>
      );
    }
  }
}

UserContainer.propTypes = {
  userInfo: PropTypes.object,
  tokens: PropTypes.object,
  loggedIn: PropTypes.boolean,

  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state);

  return {
    userInfo: state.user,
    tokens: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
