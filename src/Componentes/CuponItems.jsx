import React from 'react'
import { StyleSheet, View, Text} from "react-native";
import StyleTxt from './StyleTxt';
import theme from './theme';
import CuponConte from './CuponConte';



const CuponItems = (props) => (
    <View key={props.id} style={styles.contCup}>
        <CuponConte { ...props}/>
        
    </View>
)
const styles = StyleSheet.create({
    contCup:{
        padding: 20,
    },

    
  })
export default CuponItems

