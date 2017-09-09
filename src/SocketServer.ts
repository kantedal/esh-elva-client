import * as io from 'socket.io-client'
import {Store} from 'redux'
import * as moment from 'moment'
import {CHAT_SEND_MESSAGE} from './reducers/chatTextField'

export const startChatServer = (store: Store<any>) => {
  const chatServer = io('http://localhost:4000')

  chatServer.on('connect', () => {
    console.log('connected')
    chatServer.emit('chatMessage', 'heja blåvitt')
  })

  chatServer.on('chatMessage', (message: string) => {
    console.log('message recieved', message)
    store.dispatch({ type: CHAT_SEND_MESSAGE, payload: { timeSent: moment().valueOf(), userMessage: true, message }})
  })

  return chatServer
}

