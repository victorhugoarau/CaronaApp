import { View, Text, Image} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
const index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
      

      <Link href= "/auth/rotina">
      <Image style={{ width: 186, height: 186 }} source={ require('../assets/noooo.png')} /> </Link>
      <Text style={{fontSize:32, fontWeight: 'bold' }} >SUA ROTINA</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
         PERSONALIZE SUA ROTINA
      </Text>
    </View>
  )
}

export default index