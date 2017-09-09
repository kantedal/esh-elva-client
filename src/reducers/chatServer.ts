import {handleActions} from 'redux-actions'
import {CHAT_SEND_MESSAGE} from './chatTextField'
import {ChatMessage} from '../models/ChatMessage';

export const CHAT_MESSAGE_RECEIVED = 'CHAT_MESSAGE_RECEIVED'

export interface ChatMessagesState {
  readonly messages: ChatMessage[]
}

const initialState: ChatMessagesState = {
  messages: []
}

export default handleActions<ChatMessagesState, ChatMessage>({
  [CHAT_SEND_MESSAGE]: (state: ChatMessagesState, action) => {
    console.log(state.messages)
    return {...state, messages: [...state.messages, action.payload]}
  },
}, initialState)
