import React, { Component } from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import Spinner from 'react-native-spinkit'
import { Color, Fonts } from './'

const Loader = props => {
  const { loading } = props

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal')
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#00000040',
        }}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 100,
            width: 100,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {/* <ActivityIndicator
            color="#600f0c" //'#0137FF'
            animating={loading} /> */}
          <Spinner
            isVisible={loading}
            size={30}
            type={'Wave'}
            color={Color.darkbule}
          />
        </View>
      </View>
    </Modal>
  )
}

export default Loader
