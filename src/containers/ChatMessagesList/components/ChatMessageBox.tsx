import * as React from 'react'
import styled from 'styled-components'
import {ChatMessage} from '../../../models/ChatMessage'
import Transition from 'react-transition-group/Transition'

interface ChatMessageBoxProps extends React.HTMLProps<HTMLDivElement> {
  message: ChatMessage
}

const ChatMessageBox: React.SFC<ChatMessageBoxProps> = ({message, ...props}) => {
  return (
    <div {...props}>
      {message.message}
    </div>
  )
}

// language=SCSS
const StyledChatMessageBox = styled(ChatMessageBox)`
  & {
    float: ${({message}) => message.userMessage ? `right` : `left`};
    clear: both;
    display: block;
    position: relative;
    background-color: ${({message}) => message.userMessage ? `#fff` : `#fff`};
    color: #333;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
    margin-top: 2px;
    margin-right: 15px;
    margin-left: 15px;
    padding: 15px;
    font-family: Roboto,sans-serif;
  }
`

export default StyledChatMessageBox
