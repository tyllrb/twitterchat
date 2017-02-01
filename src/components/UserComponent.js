import React, {PropTypes} from 'react';

class UserComponent extends React.Component {
  render() {
    return (
      <div className="userAccount">
        <div className="userProfilePic">
          <img src="http://vignette3.wikia.nocookie.net/sopranos/images/d/d4/Tonyexpand.jpg/revision/latest?cb=20080630134836" />
        </div>
        <div className="userInfo">
          <div className="userName">{this.props.user.handle}</div>
        </div>
      </div>
    );
  }
}

UserComponent.propTypes = {
  user: PropTypes.object
};

export default UserComponent;
