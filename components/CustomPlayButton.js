/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import React from 'react';
import { HYPER_PINK, HYPER_PURPLE } from '../src/colors';

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const BUTTON_WIDTH = '120px';
const BUTTON_HEIGHT = '120px';

const CustomPlayButton = ({ onClick }) => (
  <a
    onClick={onClick}
    id="play-video"
    className="video-play-button"
    css={css`
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      box-sizing: content-box;
      display: block;
      width: 32px;
      height: 44px;
      border-radius: 50%;
      padding: 18px 20px 18px 28px;
      &:before {
        content: '';
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: ${BUTTON_WIDTH};
        height: ${BUTTON_HEIGHT};
        background: #ba1f24;
        border-radius: 50%;
        animation: ${pulseBorder} 1500ms ease-out infinite;
      }
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: ${BUTTON_WIDTH};
        height: ${BUTTON_HEIGHT};
        background: ${HYPER_PINK}5c;
        border-radius: 50%;
        transition: all 200ms;
      }
      &:hover:after {
        background-color: ${HYPER_PINK};
      }
      & span {
        display: block;
        position: relative;
        z-index: 3;
        width: 0;
        height: 0;
        border-left: 32px solid #fff;
        border-top: 22px solid transparent;
        border-bottom: 22px solid transparent;
      }
    `}
    href="#"
  >
    <span></span>
  </a>
);

export default CustomPlayButton;
