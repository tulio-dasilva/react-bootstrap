import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const tooltipRoot = document.getElementById('overlay-trigger-root');

class PortalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    tooltipRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    tooltipRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

PortalWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PortalWrapper;
