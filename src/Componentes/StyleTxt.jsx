import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import theme from './theme'

const styles = StyleSheet.create({
   text:{
    color:theme.colors.txtPrimary,
    fontSizes:theme.fontSizes.Txt,
    fontFamily:theme.font.main,
    fontWeight:theme.fontWeights.normal,
   },
   colorPrimary:{
    color:theme.colors.txtPrimary,

   },
   colorSecondary:{
    color:theme.colors.txtSecondary,

   },
   bold:{
    fontWeight: theme.fontWeights.bold,
   },
   title:{
    fontSize: theme.fontSizes.Title,
    },
   subHeding:{
    fontSize: theme.fontSizes.subHeading
   },
   subHeding:{
    fontSize: theme.fontSizes.subHeading
   },
   titleText:{
    fontSize: theme.fontSizes.titleText,
   },

  })
  export default function StyleTxt({ children, color, fontSizes, fontWeight, style, ...restOfProps}){
    const TxtStyle = [
      styles.text,
      color ==='primary' && styles.colorPrimary,
      color ==='secondary' && styles.colorSecondary,
      fontSizes === 'subHeding' && styles.subHeding,
      fontWeight ==='bold' && styles.bold,
    ]
    return(
      <Text style={TxtStyle}{ ...restOfProps}>
        {children}
      </Text>
    )
  }