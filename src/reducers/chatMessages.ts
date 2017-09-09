import {handleActions} from 'redux-actions'
import {ChatMessage} from '../models/ChatMessage';

export interface ChatMessagesState {
}

const initialState: ChatMessagesState = {
}

export default handleActions<ChatMessagesState, ChatMessage>({}, initialState)
