import React from 'react';
import { connect } from 'react-redux';
import LayoutProvider from '../../layouts/LayoutProvider';


const leftAction = () => ({
  type: 'LEFT_ACTION',
});

const rightAction = () => ({
  type: 'RIGHT_ACTION',
});

const Welcome = ({left, right }) => <LayoutProvider>
<button onClick={left}> LEFT </button>
<button onClick={right}> RIGHT </button>

Welcome</LayoutProvider>;

const mapDispatchToProps = ({ left: leftAction, right: rightAction });

export default connect(null, mapDispatchToProps)(Welcome);
