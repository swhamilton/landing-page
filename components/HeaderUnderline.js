/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { HYPER_PINK } from '../src/colors';

const HeaderUnderline = () => (
  <hr
    css={css`
      width: 120px;
      border: none;
      border-top: 3px solid ${HYPER_PINK};
      margin-bottom: 1rem;
    `}
  />
);

export default HeaderUnderline;
