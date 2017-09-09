import * as React from 'react'
import styled from 'styled-components'

interface ChatTextFieldBoxProps extends React.HTMLProps<HTMLDivElement> {
  activeChat: boolean
}

const ChatTextFieldBox: React.SFC<ChatTextFieldBoxProps> = ({activeChat, ...props}) => {
  return <div {...props}>{props.children}</div>
}

// language=SCSS
const StyledChatTextFieldBox = styled(ChatTextFieldBox)`
  & {
    position: relative;
    top: ${(props: ChatTextFieldBoxProps) => !props.activeChat ? '50%' : '100%'};
    transform: ${(props: ChatTextFieldBoxProps) => !props.activeChat ? 'translateY(-50%)' : 'translateY(-125%)'};
    transition: all 1s ease;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    height: 50px;
    line-height: 50px;
    margin: 10px;
    width: calc(100% - 40px);
    padding: 10px;
    box-shadow: 0 0 12px rgba(0,0,0,0.1);
  }
`

export default StyledChatTextFieldBox
