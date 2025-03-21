import { View, Text, Image} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
const index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
      <Text style={{ fontSize: 32, fontWeight:'500', marginBottom: 32, textAlign: 'center'}} >
        Como você quer usar o App? 
      </Text> 
        
      <Link href= "/auth/driver">
      <Image style={{ width: 186, height: 186 }} source={ require('../assets/driver.png')} /> </Link>
      <Text style={{fontSize:32, fontWeight: 'bold' }} >Motorista</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Ofereça carona e ganhe dinheiro 
      </Text>
      
      <Link href= "/auth/passager">
      <Image style={{ width: 186, height: 186 }} source={ require('../assets/Passager.png')} /> </Link>
      <Text style={{fontSize:32, fontWeight: 'bold' }} >Carona</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
         Encontre carona e economize  
      </Text>
    </View>
  )
}

export default index