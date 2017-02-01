import React, {PropTypes} from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  children: PropTypes.object.isRequired
};

export default AppComponent;
