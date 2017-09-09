import * as React from 'react'
import styled from 'styled-components'

interface ChatListBoxProps extends React.HTMLProps<HTMLDivElement> {
}

const ChatListBox: React.SFC<ChatListBoxProps> = ({...props}) => {
  return <div {...props}>{props.children}</div>
}

// language=SCSS
const StyledChatListBox = styled(ChatListBox)`
  & {
    position: absolute;
    width: 100%;
    padding-top: 50px;
  }
`

export default StyledChatListBox
