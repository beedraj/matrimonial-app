import React from 'react'
import { Dimensions, Platform, PixelRatio ,View} from 'react-native'
import { heightPercentageToDP as hdp, widthPercentageToDP as wdp } from 'react-native-responsive-screen'


//import styles from './styles';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

// based on iphone 6 scale
const scale = SCREEN_WIDTH / 375
const ScaleHeight = SCREEN_HEIGHT / 667
const ScaleWidth = SCREEN_WIDTH / 375
const ScaleWidthMenu = (SCREEN_WIDTH - 68) / 307

 function RF(size) {
  if (Platform.OS === 'ios') {
    return Math.round(size * ScaleWidth)
  } else {
    return Math.round(size * ScaleWidth)
  }
}
const Spacer = ({ space, row }) => {
  return (
    <View
      style={{
        marginVertical: space && hdp(`${space}%`),
        marginHorizontal: row && wdp(`${row}%`),
      }}
    />
  );
};
 function SH(height) {
  return Math.round(height * ScaleHeight)
}

 function SW(width) {
  return Math.round(width * ScaleWidth)
}

 function scaleWidthMenu(width) {
  return Math.round(width * ScaleWidthMenu)
}

 function normalizeFontMenu(size) {
  if (Platform.OS === 'ios') {
    return Math.round(size * ScaleWidthMenu)
  } else {
    return Math.round(size * ScaleHeight)
  }
}

//Extra Responsive functions

 function hp(percentage) {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('screen').height * percentage) / 100,
  )
}

 function wp(percentage) {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('screen').width * percentage) / 100,
  )
}

export {
  RF,
  SH,
  SW,
  scaleWidthMenu,
  normalizeFontMenu,
  hp,
  wp,
  hdp,
   wdp,
   Spacer,
  }