import * as io from 'socket.io-client'
import {Store} from 'redux'
import * as moment from 'moment'
import {CHAT_MESSAGE_RECEIVED, CHAT_SEND_MESSAGE, CHAT_MESSAGE_LOADING} from './reducers/chatServer'
declare const firebase // Workaround for react-create-app bug :-(

const firebaseConfig = {
  apiKey: 'AIzaSyCcTe46HFAsSU6OOmcoohcJfEgxHI37-Vo',
  authDomain: 'elva-ac7f6.firebaseapp.com',
  databaseURL: 'https://elva-ac7f6.firebaseio.com',
  projectId: 'elva-ac7f6',
  storageBucket: 'elva-ac7f6.appspot.com',
  messagingSenderId: '917605214188'
}
firebase.initializeApp(firebaseConfig)

const setupUser = (): Promise<{ sessionToken: string, userId: string }> => {
  let userId
  let sessionToken

  return firebase.auth().signInAnonymously().then((user) => {
    userId = user.uid
    return user.getToken(true)
  })
  .then((token) => {
    sessionToken = token
    return { sessionToken, userId }
  })
}

export const startChatServer = (store: Store<any>): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    setupUser().then((userData) => {
      const chatServer = io('http://localhost:4000')

      chatServer.on('connect', () => chatServer.emit('connectUser', userData))

      chatServer.on('chatMessage', (message: string) => {
        store.dispatch({ type: CHAT_MESSAGE_RECEIVED, payload: { timeSent: moment().valueOf(), userMessage: false, message }})
      })

      chatServer.on('userConnected', (message: string) => {
        console.log('userConnected')
      })

      chatServer.on('chatMessageLoading', (message: string) => {
        console.log('messageLoading')
        store.dispatch({ type: CHAT_MESSAGE_LOADING })
      })

      resolve(chatServer)
    })
  })
}
