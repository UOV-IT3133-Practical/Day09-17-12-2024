import { View, Text, Image } from 'react-native'

const Index = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text>Hello React Native</Text>
      <Image source={require('../assets/images/react-logo.png')} />
    </View>
  )
}

export default Index
