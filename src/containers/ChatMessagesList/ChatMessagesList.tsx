import * as React from 'react';
import * as ChatMessagesListActions from './chatMessagesListActions';
import {RootState} from '../../reducers/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChatMessage} from '../../models/ChatMessage';
import ChatListBox from './components/ChatListBox';
import ChatMessageBox from './components/ChatMessageBox';
import ChatMessageAnimator from './components/ChatMessageAnimator';
import TG = require('react-transition-group/TransitionGroup')
const TransitionGroup: any = TG

export namespace ChatMessagesList {
  export interface ConnectedState {
    messages: ChatMessage[]
  }

  export interface ConnectedDispatch {
    actions: typeof ChatMessagesListActions
  }

  export interface InputProps {}

  export interface Props extends ChatMessagesList.ConnectedState, ChatMessagesList.ConnectedDispatch, ChatMessagesList.InputProps {}
}

class ChatMessagesList extends React.Component<ChatMessagesList.Props, {}> {
  render() {
    const { messages } = this.props

    const messagesList = (
      <TransitionGroup>
        {messages.map((message: ChatMessage, i: number) => (
          <ChatMessageAnimator key={i}>
            <ChatMessageBox message={message} />
          </ChatMessageAnimator>
        ))}
      </TransitionGroup>
    )
    return <ChatListBox>{messagesList}</ChatListBox>
  }
}

const mapStateToProps = (state: RootState): ChatMessagesList.ConnectedState => ({
  messages: state.chatMessages.messages
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ChatMessagesListActions as any, dispatch)
})

export default connect<ChatMessagesList.ConnectedState, ChatMessagesList.ConnectedDispatch, {}>(mapStateToProps, mapDispatchToProps)(ChatMessagesList) as any
