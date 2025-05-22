import { View, Text, Button,ScrollView } from "react-native";
import MyButton from "./components/MyComponent";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";
import P_Button from "./components/PressableButton";

const App=()=>{
  return(
    // <View
    //   style={{
    //     flex:1,
    //     backgroundColor:'#fff',
    //     alignItems:'center',
    //     justifyContent:'center'
    //   }}
    // >
    //   <Text style={{fontSize:30,marginBottom:10}}>Button component</Text>
    //   <Button 
    //   title="button" 
    //   onPress={()=>alert('Click')}
    //   color="#000"
    //   />
    // </View>
    <View style={{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    }}>
      {/* <MyButton title="button"/>
      컴포넌트 태그 사이에 전달된 값은
      컴포넌트의  props에서 children으로 전달된다
      <MyButton title="그거">
        Children Props
      </MyButton>
       <MyButton /> */}
      {/* <ScrollView>
        Array.form({length:20}) 길이 20의 배열 생성, 
        변수 _ : 이 값을 사용하지는 않는다. 그런데 머리수는 필요하다.
        {Array.from({length:50},(_,i)=>(
          <View key={i}>
            <Text>Item {i+1}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <Counter/> */}
      {/* <EventButton/> */}
      {/* <EventInput/> */}
      <P_Button title="button"/>
    </View>
  )
}
export default App;