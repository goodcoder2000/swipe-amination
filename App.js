import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Gstyle} from "./Gstyle"
import Swiper from 'react-native-deck-swiper';
import React, { useState, useRef }  from 'react';
import Card from './components/Card';

export default function App() {
  const swipeRef = useRef();
  
  const data = [
    {name: "myanmar girl", id: 1, image: [
      require("./assets/images/mygirl.jpg"),
      require("./assets/images/mygirl1.jpg"),
    ]},
    {name: "japan girl", id: 2, image: [
      require("./assets/images/jpgirl.png"),
      require("./assets/images/jpgirl2.jpg")
    ]}
  ];

  
  return (
  
      <View style={Styles.container}>
        <Swiper
            ref={swipeRef}
            containerStyle={{backgroundColor: "transparent"}}
            cards={data}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            renderCard={(card) =>< Card card={card}/>}
        />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'absolute', bottom: 200, zIndex: 10}}>

            <TouchableOpacity style={{backgroundColor: "#ECECEC", width: 80, height: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => swipeRef.current.swipeLeft()}
            >
              <Image
              source={ require("./assets/icon/back.png") }
              />
              <Text>いいね</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: "#E2A242", width: 80, height: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
            >
              <Image
              source={ require("./assets/icon/message.png") } 
              />
              <Text style={{color: "#fff"}}>メッセージ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: "#56BB54", width: 80, height: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => swipeRef.current.swipeRight()}
            >
              <Image
              source={ require("./assets/icon/Vector.png") }
              />
              <Text style={{color: "#fff"}}>いいね</Text>
            </TouchableOpacity>            
          </View>

          <View style={{width: '100%', height: 210,  position: 'absolute', bottom: 0, paddingHorizontal: 16}}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              >
               <View>
                  <Text style={{fontSize: 20, color: '#56BB54'}}>ひより 23歳</Text>
               </View>

               <View>
                  <View style={{flexDirection: 'row', justifyContent: "space-between" , alignItems: 'center', marginTop: 16}}>

                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                      
                        source={ require("./assets/icon/train.png")}
                        />
                        <Text style={{marginLeft: 11.33}}>居住地</Text>
                      </View>

                      <View>
                        <Text>西武池袋線 江古田</Text>
                      </View>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: "space-between" , alignItems: 'center', marginTop: 16}}>

                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                      
                        source={ require("./assets/icon/location.png")}
                        />
                        <Text style={{marginLeft: 11.33}}>よく行くエリア</Text>
                      </View>

                      <View>
                        <Text>日比谷、中目黒</Text>
                      </View>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: "space-between" , alignItems: 'center', marginTop: 18}}>

                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                      
                        source={ require("./assets/icon/people.png")}
                        />
                        <Text style={{marginLeft: 11.33}}>出会ったユーザー</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#D9D9D9', width: 24, height: 24, marginLeft: 8, borderRadius: 100 }}></View>
                        <View style={{backgroundColor: '#D9D9D9', width: 24, height: 24, marginLeft: 8, borderRadius: 100 }}></View>
                        <View style={{backgroundColor: '#D9D9D9', width: 24, height: 24, marginLeft: 8, borderRadius: 100 }}></View>
                        <View style={{backgroundColor: '#D9D9D9', width: 24, height: 24, marginLeft: 8, borderRadius: 100 }}></View>
                        <View style={{backgroundColor: '#D9D9D9', width: 24, height: 24, marginLeft: 8, borderRadius: 100 }}></View>
                      </View>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: "flex-end" , alignItems: 'center', marginTop: 18}}>
                      <Image
                       source={ require('./assets/icon/plus.png')}
                      />
                      <Text style={{marginLeft: 12.17}}>出会った</Text>
                  </View>

                  <View style={{backgroundColor: '#ECECEC', paddingVertical: 0.5, marginTop: 20, marginBottom: 16}}></View>

                  <View>
                    <Text>
                    都内でデザイナーをしています。今はリモートワークで家にいることが多く、気分転換に外出する時に一緒にお出かけできる友達ができたら良いなとおもって登録しました。

よろしくお願いします！
                    </Text>
                  </View>


               </View>
              </ScrollView>
          </View>
      </View>

  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})