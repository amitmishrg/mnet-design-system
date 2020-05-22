import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { linkStyles, LinkInner, LinkA, LinkButton } from './style';

const applyStyle = (LinkWrapper) => {
  return (
    LinkWrapper &&
    styled(
      ({
        containsIcon,
        inverse,
        nochrome,
        secondary,
        tertiary,
        ...linkWrapperRest
      }) => <LinkWrapper {...linkWrapperRest} />
    )`
      ${linkStyles};
    `
  );
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link({ isButton, withArrow, LinkWrapper, children, ...rest }) {
  const content = (
    <Fragment>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && '🤜'}
      </LinkInner>
    </Fragment>
  );

  const StyledLinkWrapper = applyStyle(LinkWrapper);

  let SelectedLink = LinkA;
  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return <SelectedLink {...rest}>{content}</SelectedLink>;
}

Link.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  containsIcon: PropTypes.bool,
  LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inverse: PropTypes.bool,
  nochrome: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false,
};
