import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWrapper } from './style';

/**
 ####Badge
**/
export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}

Badge.propTypes = {
  status: PropTypes.oneOf([
    'positive',
    'negative',
    'neutral',
    'error',
    'warning',
  ]),
};

Badge.defaultProps = {
  status: 'neutral',
};
