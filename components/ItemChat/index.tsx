import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const ItemChat = ({thumb, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={thumb} style={styles.thumb}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ItemChat