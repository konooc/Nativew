import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../src/Componentes/Button';


export default function CupInfo({ navigation, route }) {
  const [cuponData, setCuponData] = useState(
    {title: "cargando..",
    price: "cargando..",
    description: "cargando..",
  }
  );

  const data = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchCuponData();
  }, []);

  const fetchCuponData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/"+data.id);
      const jsonData = await response.json();
      setCuponData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.contTitle}>
        <Text style={styles.title}>{cuponData.title}</Text>
      </View>
      <View style={styles.contBody}>
        <View style={styles.contElement}>
          <Text style={styles.txtCont}>${cuponData.price}</Text>
          <View style={styles.desCont}>
            <Text style={styles.desInfo}>
              {cuponData.description}
              </Text>
          </View>
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
  desCont:{

  },
  desInfo:{
    fontSize: 20,
    padding: 4,

  },
  //contenido "Footer"

  contbtn: {
    alignItems: "center",
  },
});
