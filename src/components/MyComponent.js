import { Pressable,Text } from "react-native";
//let props = {"title":"button"}
//자식컴포넌트로 데이터 전달하는 방식
// 1. 부모 컴포넌트에서 자식을 사용하면서 속성으로 전달하기
// 2. 컴포넌트 태그 사이에 값을 입력해서 전달하는 방법
const MyButton=({title="기본버튼",children})=>{
  // default가 안되면, 구조분해할당으로 기본값 부여
  MyButton.defaultProps={
    title:'Button'
  }
  // 타이틀에는 문자열이 넘어오는데, propstypes를 이용해
  // 전달되어야 하는 값의 타입이 숫자여야안다고 지정
  MyButton.propTypes ={
    title : PropTypes.number
  }
  // console.log(props)
  return(
    <Pressable
      style={{
        backgroundColor:"#3498db",
        padding:16,
        margin:10,
        borderRadius:8,
      }}
      onPress={()=>{alert("Click!")}}>
      <Text style={{fontSize:24}}>{title}</Text>
    </Pressable>
  )
}

export default MyButton;