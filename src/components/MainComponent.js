import React, {PropTypes} from 'react';
import UserContainer from './containers/UserContainer';
import {connect} from 'react-redux';

class MainComponent extends React.Component {
  render () {
    return (
      <div className="col2">
        <UserContainer />
      </div>
    );
  }
}

MainComponent.propTypes = {
};

function mapStateToProps(state, ownProps) {
} 

export default connect(mapStateToProps)(MainComponent);
