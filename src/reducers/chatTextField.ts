import {handleActions} from 'redux-actions'

export const CHAT_TEXTFIELD_ACTIVE = 'CHAT_TEXTFIELD_ACTIVE'
export const CHAT_TEXTFIELD_CHANGED = 'CHAT_TEXTFIELD_CHANGED'
export const CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE'

export interface ChatTextFieldState {
  readonly activeChat: boolean
  readonly inputValue: string
}

const initialState: ChatTextFieldState = {
  activeChat: false,
  inputValue: ''
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
}, initialState)
