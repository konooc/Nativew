import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
  
} from "react-native";
import React from "react";
import CustomButton from "./Button" // Importar el componente CustomButton
import { useNavigation } from '@react-navigation/native'; // Importa hook de navegación


const deviceHeight = Dimensions.get("window").height;



export class ModalPop extends React.Component {
 
  

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };
  handleSubmit = () => {
    
  };//le agregue esto para que no haga ninguna funcion despues se agrega que lleve a otra pantalla
  
  
  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%",}} />;

    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }
  renderTitle = () =>{
      const {title} = this.props
      return(

        <View style ={{alignItems:"center"}}>
              <Text //texto dentro del pop
                 style={{
                  color: "#182E44",
                  fontSize: 25,
                  fontWeight: "500",
                  margin: 15,
                  marginBottom:30,
                }}
              >
                {title}
              </Text>
            </View>
      )
  }
  renderContent = ( ) => {
    const {data} = this.props
    
    return (
        <View>
          <FlatList 
            style = {{marginBottom: 20}}
                      showsVercticalScrollIndicator={false}
                      data = {data}
                      renderItem = {this.renderItem}
                      extraData={data}
                      keyExtractoe={(item, index) => index.toSting()}
                      ItemSeparatorComponent={this.renderSeparator}
                      contentContainerStyle={{
                          paddingBottom: 40
                      }} 
           />
           
        </View>
    )
  }
  contSave = () => {
    return (
      <View style={{marginTop: "70%",justifyContent:"center", alignItems: 'center',}}>
        <Text style={{color: '#00f',fontSize: 50, fontWeight: 'bold',}}>
            Haz guardado
        </Text>
      </View>
      
    );
  } 
  renderBtninfo = () => { 
   
    return (
      
      <View style={{marginTop: 40,
        alignItems: 'center'}}>
        <CustomButton txt="Ver Info" onClick={this.handleVerInfo} />
      </View>
    );
  } 
  renderBtnback = () => {
    return (
      <View style={{marginTop: 10,
        alignItems: 'center',}}>
        <CustomButton txt="Cerrar" onClick={this.close} />
      </View>
    
    );
  } 
  
  
 
  renderItem = ({item}) => {
    return(
      <View style={{
        height:50,
        flex: 1,
        alignItems:"flex-start",
        justifyContent:"center",
        marginLeft: 20,

      }}>
          <Text style={{fontSize:18, fontWeight: "normal", color:"#182E44",}}> {item.name} </Text>
      </View>
    )

  }
  renderSeparator = () => {
   return(
    <View style={{
      opacity: 0.1,
      backgroundColor: "#182E44",
      height:1,
    }}>
    </View>
    
   )
  }
  

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;
    

    return (


      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
         style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
          alignItems: "center", // Añadido para centrar horizontalmente
        }}
        >
          {this.renderOutsideTouchable(onTouchOutside)} 
          
          
          <View // este es el diseño del pop
            style={{
              
              backgroundColor: "#6E7B8B",
              width: "99%",
              height:"99%",
             // height: "20%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
            
              //maxHeight: deviceHeight * 0.4,
            }}
            
          >
            
            
            {/*this.renderContent()}*/}
            {this.contSave()}
            {this.renderTitle()}
            {this.renderBtninfo()}
            {this.renderBtnback()}

           
          </View>
          
        </View>
      </Modal>
    );
  }
}