import React from 'react';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

const IfRaw = ({ children, condition }) => <>{ condition ? children : '' }</>;

IfRaw.defaultProps = { children: '', condition: false };
IfRaw.propTypes = { children: PropTypes.any, condition: PropTypes.any };

const UnlessRaw = ({ children, condition }) => <>{ condition ? '' : children }</>;

UnlessRaw.defaultProps = { children: '', condition: false };
UnlessRaw.propTypes = { children: PropTypes.any, condition: PropTypes.any };

export const If = view(IfRaw);
export const Unless = view(UnlessRaw);
