import React from 'react'
import Slider from 'react-slick'
import { css } from '@emotion/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const carouselStyles = css`
  .slick-prev,
  .slick-next {
    z-index: 2;
    &:before {
      background-color: white;
    }
  }
  .slick-prev {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' width='100%25' height='100%25' viewBox='0 0 80 80' %3E%3Cpath fill='black' d='M48.64 18.84L25 42.5L48.64 66.16L50.38 64.43L28.57 42.5L50.38 20.67L48.64 18.84Z'/%3E%3C/svg%3E");
    }
  }
  .slick-next {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' width='100%25' height='100%25' viewBox='0 0 80 80' %3E%3Cpath fill='black' d='M31.36 16.34L55 40L31.36 63.66L29.62 61.93L51.43 40L29.62 18.17L31.36 16.34Z'/%3E%3C/svg%3E");
    }
  }
`

const Carousel = ({ children }) => (
  <Slider
    className={'classCarouselFullWidth'}
    css={[carouselStyles]}
  >
    {children}
  </Slider>
)

export default Carousel
