import {handleActions} from 'redux-actions'
import {CHAT_SEND_MESSAGE} from './chatServer';

export const CHAT_TEXTFIELD_ACTIVE = 'CHAT_TEXTFIELD_ACTIVE'
export const CHAT_TEXTFIELD_CHANGED = 'CHAT_TEXTFIELD_CHANGED'
export const CHAT_TEXTFIELD_FOCUS = 'CHAT_TEXTFIELD_FOCUS'

export interface ChatTextFieldState {
  readonly activeChat: boolean
  readonly inputValue: string
  readonly inputFocus: boolean
}

const initialState: ChatTextFieldState = {
  activeChat: false,
  inputValue: '',
  inputFocus: false
}

export default handleActions<ChatTextFieldState, any>({
  [CHAT_TEXTFIELD_ACTIVE]: (state: ChatTextFieldState, action) => {
    return {...state, activeChat: action.payload }
  },
  [CHAT_TEXTFIELD_CHANGED]: (state: ChatTextFieldState, action) => {
    return {...state, inputValue: action.payload }
  },
  [CHAT_SEND_MESSAGE]: (state: ChatTextFieldState, action) => {
    return {...state, inputValue: '', activeChat: true }
  },
  [CHAT_TEXTFIELD_FOCUS]: (state: ChatTextFieldState, action) => {
    return {...state, inputFocus: action.payload }
  },
}, initialState)
