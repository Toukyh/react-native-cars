import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carcontainer:{
        width:'100%',
        height:'100%',
      },
      titles:{
        marginTop:'30%',  
        alignItems:'center',
        width:'100%'
      },
      title:{
        fontSize:40,
        fontWeight:'bold',
      },
      subtitle:{
        fontSize:16, 
        color:'gray',
      },
      image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute'
      }
});

export default styles;