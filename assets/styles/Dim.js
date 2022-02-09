import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../static_resources/colors'
//helper functions
import {Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const actualDimensions =  {
    height:  (height<width) ? height: height,
    width: (width>height) ? width/2: width,
    wp:(width>height) ? hp: wp,
    hp:(width>height) ? wp: hp,
  };

export function hrp(value){
    return hp(value*100 / actualDimensions.height);
  }
  
export function wrp(value){
    return actualDimensions.wp(value*100 / actualDimensions.width);
}

export let color = {...colors}