import React from "react";
import { StyleSheet, View, TouchableOpacity,Text } from "react-native";


export default function CustomButton ({txt ,onClick}){
    return(
        <TouchableOpacity onPress={onClick}>
            <View style={styles.btn}>
                <Text style={styles.btntxt}>{txt}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    btn: {
        
        width: '50%', // Ancho del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      btntxt: {
        color: 'white',
        fontWeight:"bold",
        textAlign: 'center',
        fontSize:16,
      },


})