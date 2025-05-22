import { View,Text,Pressable } from "react-native";

const P_Button = (props)=>{
  return(
    <Pressable
      style={{padding:10,backgroundColor:'#1abc9c'}}
      onPressIn={()=>console.log('Press In')}
      onPressOut={()=>console.log('Press Out')}
      onLongPress={()=>console.log('Long Press')}
      onPress={()=>console.log('Press')}
      delayLongPress={2500}
      pressRetentionOffset={{bottom:50,left:50,right:50,top:50}}
      hitSlop={50}
    >
      <Text style ={{padding:10,fontSize:30}}>{props.title}</Text>
    </Pressable>
  )
}

export default P_Button;