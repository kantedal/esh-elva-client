import { createAction } from 'redux-actions'
import {CHAT_SEND_MESSAGE, CHAT_TEXTFIELD_ACTIVE, CHAT_TEXTFIELD_CHANGED} from '../../reducers/chatTextField'
import {ChatMessage} from '../../models/ChatMessage';

export const activateChat = createAction<boolean>(CHAT_TEXTFIELD_ACTIVE)
export const sendChatMessage = createAction<ChatMessage>(CHAT_SEND_MESSAGE)
export const chatInputChanged = createAction<string>(CHAT_TEXTFIELD_CHANGED)
