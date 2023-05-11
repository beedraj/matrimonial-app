import React, { Component } from 'react'
import { showMessage, hideMessage } from 'react-native-flash-message'
import fonts from './Fonts'
import { RF } from './responsive'

class FlushMsg extends Component {
  static showError = message => {
    showMessage({
      message: message,
      description: '',
      type: 'danger',
      //color: '#000000',
      backgroundColor: 'red',
      duration: 2000,
    })
  }

  static showSuccess = (message, duration = 2000) => {
    showMessage({
      message: message,
      description: '',
      type: 'success',
      backgroundColor: '#006400', //'#228B22',
      duration: duration,
    })
  }
}
//const FlushMsg = new FlushMsg();
export default FlushMsg
