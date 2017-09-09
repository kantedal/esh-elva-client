import * as React from 'react'
import styled from 'styled-components'
const SA: any = require('react-scrollbar')
const ScrollArea = SA.default

interface ChatScrollAreaProps extends React.HTMLProps<HTMLDivElement> {
  keyboardOpen: boolean
}

const ChatScrollArea: React.SFC<ChatScrollAreaProps> = ({keyboardOpen, children, ...props}) => {
  return (
    <ScrollArea
      speed={0.8}
      horizontal={false}
      smoothScrolling={true}
      style={{position: 'absolute', height: 'calc(100% - 100px)', width: '100%' }}
    >
      {children}
    </ScrollArea>
  )
}

// language=SCSS
const StyledChatScrollArea = styled(ChatScrollArea)`
  & {
    position: absolute;
    height: calc(50% - 100px);
    width: 100%;
  }
`

export default StyledChatScrollArea
