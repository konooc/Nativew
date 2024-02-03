import React from 'react';
import { FlatList, Text,} from 'react-native';
import cupones from '../data/cupones';
import CuponItems from'./CuponItems'

const Cuponeslist = () => {
    return ( 
        <FlatList
            data={cupones} 
            ItemSeparatorComponent={() =><Text> </Text>}
            renderItem={({ item:cupo }) =>( 
                
                <CuponItems {...cupo} />
                    
                )
            }   
        />
    );
  };

 
  
  export default Cuponeslist;