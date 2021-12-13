import * as React from 'react'
import ReactSlider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IProps {
  children
}

export const Slider = (props: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return <ReactSlider {...settings}>{props.children}</ReactSlider>
}
