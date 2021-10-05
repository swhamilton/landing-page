/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const SectionAnchorTarget = (props) => (
  <div
    css={css`
      position: relative;
      display: inline-block;
      top: -40px;
      height: 0;
    `}
    {...props}
  />
);

export default SectionAnchorTarget;
