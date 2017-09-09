import {handleActions} from 'redux-actions'
import {ChatMessage} from '../models/ChatMessage'
import {chatServer} from '../index';

export const CHAT_MESSAGE_RECEIVED = 'CHAT_MESSAGE_RECEIVED'
export const CHAT_MESSAGE_LOADING = 'CHAT_MESSAGE_LOADING'
export const CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE'

export interface ChatServerState {
  readonly messages: ChatMessage[]
  readonly chatMessageLoading: boolean
}

const initialState: ChatServerState = {
  messages: [],
  chatMessageLoading: false,
}

export default handleActions<ChatServerState, ChatMessage>({
  [CHAT_MESSAGE_RECEIVED]: (state: ChatServerState, action) => {
    return {...state, messages: [...state.messages, action.payload], chatMessageLoading: false}
  },
  [CHAT_MESSAGE_LOADING]: (state: ChatServerState, action) => {
    return {...state, chatMessageLoading: true}
  },
  [CHAT_SEND_MESSAGE]: (state: ChatServerState, action) => {
    chatServer.emit('chatMessage', action.payload.message)
    return {...state, messages: [...state.messages, action.payload]}
  },
}, initialState)
