import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../constants/colors';
import {SLIDER_IMAGES} from '../../data/sliderImages';
import {View} from 'react-native';

const Slider = () => {
  return (
    <SliderBox
      ImageComponentStyle={{
        borderRadius: 10,
        width: '97%',
        marginTop: 5,
      }}
      renderNextButton={'VIAKS'}
      images={SLIDER_IMAGES}
      sliderBoxHeight={160}
      onCurrentImagePressed={index => {}}
      dotColor={COLORS.primary}
      inactiveDotColor="#90A4AE"
      autoplay
      circleLoop
      imageLoadingColor="#2196F3"
    />
  );
};

export default Slider;
