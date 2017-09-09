import * as React from 'react'
import styled from 'styled-components'
import ChatMessageLoaderDot from './ChatMessageLoaderDot'
import ChatMessageBox from './ChatMessageBox'

interface ChatMessageLoaderProps extends React.HTMLProps<HTMLDivElement> {}

const ChatMessageLoader: React.SFC<ChatMessageLoaderProps> = ({...props}) => {
  return (
    <ChatMessageBox>
      <div {...props}>
        <ChatMessageLoaderDot animationDelay={0}/>
        <ChatMessageLoaderDot animationDelay={0.33} />
        <ChatMessageLoaderDot animationDelay={0.66} />
      </div>
    </ChatMessageBox>
  )
}

// language=SCSS
const StyledChatMessageLoader = styled(ChatMessageLoader)`
  & {
  
  }
`

export default StyledChatMessageLoader
