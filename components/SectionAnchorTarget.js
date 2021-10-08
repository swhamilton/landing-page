/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const SectionAnchorTarget = (props) => (
  <div
    css={css`
      position: relative;
      top: -80px;
      height: 0;
    `}
    {...props}
  />
);

export default SectionAnchorTarget;
