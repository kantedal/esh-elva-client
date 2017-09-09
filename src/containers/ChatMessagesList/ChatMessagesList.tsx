import * as React from 'react'
import {animateScroll, Element} from 'react-scroll'
import * as ChatMessagesListActions from './chatMessagesListActions'
import {RootState} from '../../reducers/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ChatMessage} from '../../models/ChatMessage'
import ChatMessagesContent from './ChatMessagesContent'
import ChatScrollArea from './components/ChatScrollArea'
import TG = require('react-transition-group/TransitionGroup')
const TransitionGroup: any = TG
const SA: any = require('react-scrollbar')
const ScrollArea = SA.default

export namespace ChatMessagesList {
  export interface ConnectedState {
    messages: ChatMessage[]
    messageLoading: boolean
    chatTextFieldFocus: boolean
  }

  export interface ConnectedDispatch {
    actions: typeof ChatMessagesListActions
  }

  export interface InputProps {}

  export interface Props extends ChatMessagesList.ConnectedState, ChatMessagesList.ConnectedDispatch, ChatMessagesList.InputProps {}
}

class ChatMessagesList extends React.Component<ChatMessagesList.Props, {}> {
  render() {
    const { messages, chatTextFieldFocus, messageLoading } = this.props
    const scrollAreaHeight = chatTextFieldFocus ? 50 : 100
    return (
      <ScrollArea
        speed={0.8}
        horizontal={false}
        smoothScrolling={true}
        style={{position: 'absolute', bottom: '100px', height: 'calc(100% - 100px)', width: '100%' }}
      >
        <ChatMessagesContent messageLoading={messageLoading} messages={messages} />
      </ScrollArea>
    )
  }
}

const mapStateToProps = (state: RootState): ChatMessagesList.ConnectedState => ({
  messages: state.chatServer.messages,
  messageLoading: state.chatServer.chatMessageLoading,
  chatTextFieldFocus: state.chatTextField.inputFocus
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ChatMessagesListActions as any, dispatch)
})

export default connect<ChatMessagesList.ConnectedState, ChatMessagesList.ConnectedDispatch, {}>(mapStateToProps, mapDispatchToProps)(ChatMessagesList) as any
