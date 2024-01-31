import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../src/Componentes/Button';


export default function CupSave({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contTitle}>
        <Text style={styles.title}>Guardados</Text>
      </View>
      <View style={styles.contBody}>
        <View style={styles.contElement}>
          <Text style={styles.txtCont}>McDonald</Text>
        </View>
        <View style={styles.contElement}>
          <Text style={styles.txtCont}>Wendy's</Text>
        </View>
      </View>
      <View style={styles.contbtn}>
        <CustomButton txt="Regresar" onClick={handleGoBack} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //contenedor principal
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
    // backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  //contenido "Header"
  contTitle: {
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  //contenido "Body"
  contBody: {
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  contElement: {
    padding: 10,
    backgroundColor: "#eaeaea",
    width: "100%",
    height: "auto",
    //flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
 
  txtCont: {
    fontSize: 30,
    padding: 4,
    
  },
  //contenido "Footer"

  contbtn: {
    alignItems: "center",
  },
});
