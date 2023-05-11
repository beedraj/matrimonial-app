import Moment from 'moment-timezone'
import { Linking, Platform } from 'react-native'

var formatDate = function (date) {
  return Moment(date).format('MMM DD, YYYY')
}

var formatDateTime = function (date) {
  console.log('formatDateTime', date)
  return (
    Moment(date).format('MMM DD, YYYY') +
    ' at ' +
    Moment(date).format('HH:mm A')
  )
}

var timeAgo = function (date, type) {
  console.log('formatDateTime', date)
  console.log('typetypetype', type)
  if (type != '') {
    return Moment(date).local().startOf(type).fromNow()
  }
  return Moment(date).local().fromNow()
}

var dialCall = function (callNo) {
  let phoneNumber = ''

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:' + callNo
  } else {
    phoneNumber = 'telprompt:' + callNo
  }

  Linking.openURL(phoneNumber)
}

const GlobalFunction = {
  formatDate,
  formatDateTime,
  timeAgo,
  dialCall,
}

export default GlobalFunction
