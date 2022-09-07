import { View, Text } from 'react-native'
import React from 'react'

const ImageCountSlider = ({index, imageIndex}) => {
  return (
    <View style={{backgroundColor: index===imageIndex?"#56BB54": "#838383", width: "45%", paddingVertical: 2, borderRadius: 8}}>
   
    </View>
  )
}

export default ImageCountSlider