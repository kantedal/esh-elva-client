import { createAction } from 'redux-actions'
import {CHAT_TEXTFIELD_ACTIVE, CHAT_TEXTFIELD_CHANGED, CHAT_TEXTFIELD_FOCUS} from '../../reducers/chatTextField';
import {ChatMessage} from '../../models/ChatMessage';
import {CHAT_SEND_MESSAGE} from '../../reducers/chatServer';

export const activateChat = createAction<boolean>(CHAT_TEXTFIELD_ACTIVE)
export const sendChatMessage = createAction<ChatMessage>(CHAT_SEND_MESSAGE)
export const chatInputChanged = createAction<string>(CHAT_TEXTFIELD_CHANGED)
export const chatInputFocus = createAction<boolean>(CHAT_TEXTFIELD_FOCUS)
