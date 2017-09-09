import {createAction} from 'redux-actions'
import {CHAT_TEXTFIELD_ACTIVE} from '../../reducers/chatTextField'

export const test = createAction<boolean>(CHAT_TEXTFIELD_ACTIVE)
