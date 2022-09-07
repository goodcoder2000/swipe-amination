import { View,Button, Text } from 'react-native'
import React,{useState} from 'react'
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import ImageCountSlider from './ImageCountSlider'

const Card = ({card}) => {
    const [ imageIndex, setImageIndex] = useState(0)

    const imageCount = () =>{
        if(card.image.length-1 === imageIndex ){
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex+1)
        }
    }
  return (
      <TouchableWithoutFeedback style={Styles.card}
      onPress={() => imageCount()}
      >
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: "100%", position: 'absolute', top: 8, zIndex: 3}}>
                  {card.image.map((item, index) =>(<ImageCountSlider key={index} index={index} imageIndex={imageIndex}/>))}
                </View>
                
                <Image
                style={{width: '100%', height: 515, borderRadius: 8}}
                source={card.image[imageIndex]}
                />
              </View>
    </TouchableWithoutFeedback>
  )
}

export default Card

const Styles = StyleSheet.create({
 
    card: {
      flex: 1,
      width: 343,
      borderRadius: 8,
      backgroundColor: "#def",
      overflow: 'hidden',
      zIndex: 3
    }
  })