import * as React from 'react'
import * as ChatTextFieldActions from './chatTextFieldActions'
import ChatInput from './components/ChatInput'
import ChatTextFieldBox from './components/ChatTextFieldBox'
import ChatSendButton from './components/ChatSendButton'
import ChatHintText from './components/ChatHintText'
import {RootState} from '../../reducers/index'
import * as moment from 'moment'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

export namespace ChatTextField {
  export interface ConnectedState {
    activeChat: boolean
    inputValue: string
  }

  export interface ConnectedDispatch {
    actions: typeof ChatTextFieldActions
  }

  export interface InputProps {}

  export interface Props extends ChatTextField.ConnectedState, ChatTextField.ConnectedDispatch, ChatTextField.InputProps {}
}

class ChatTextField extends React.Component<ChatTextField.Props, {}> {

  render() {
    const { activeChat, inputValue, actions } = this.props

    const onInputChange = (e: React.ChangeEvent<any>) => actions.chatInputChanged(e.target.value)
    const onSendSubmit = (e: React.FormEvent<any>) => {
      e.preventDefault()
      actions.sendChatMessage({
        timeSent: moment().valueOf(),
        userMessage: true,
        message: inputValue,
      })

      // setTimeout(() => {
      //   actions.sendChatMessage({
      //     timeSent: moment().valueOf(),
      //     userMessage: false,
      //     message: 'Det var en dum fråga',
      //   })
      // }, 1000)
    }

    return (
      <ChatTextFieldBox activeChat={activeChat}>
        <form onSubmit={onSendSubmit}>
          <ChatHintText activeChat={activeChat} inputValue={inputValue} />
          <ChatInput inputValue={inputValue} onChange={onInputChange}/>
          <ChatSendButton inputValue={inputValue} />
        </form>
      </ChatTextFieldBox>
    )
  }
}

const mapStateToProps = (state: RootState): ChatTextField.ConnectedState => ({
  activeChat: state.chatTextField.activeChat,
  inputValue: state.chatTextField.inputValue,
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ChatTextFieldActions as any, dispatch)
})

export default connect<ChatTextField.ConnectedState, ChatTextField.ConnectedDispatch, {}>(mapStateToProps, mapDispatchToProps)(ChatTextField) as any
