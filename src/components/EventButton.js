import { Pressable,Text } from "react-native";

const EventButton =()=>{

  const _onPressIn =()=>console.log("PressIn!!! \n")
  const _onPressOut =()=>console.log("PressOut!!! \n")
  const _onPress =()=>console.log("Press!!! \n")
  const _onLongPress =()=>console.log("LongPress!!! \n")

  return (
    <Pressable
      style={{
        backgroundColor:'#f1c40f',
        padding:16,
        margin:10,
        borderRadius:8,
        

      }}
      onPressIn = {_onPressIn}
      onLongPress = {_onLongPress}
      onPressOut = {_onPressOut}
      onPress = {_onPress} 
      delayLongPress={3000}
      >
      <Text style={{color:'white',fontSize:24}}>Press</Text>
    </Pressable>
  )
}

export default EventButton;