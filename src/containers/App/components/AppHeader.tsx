import * as React from 'react'
import styled from 'styled-components'

interface AppHeaderProps extends React.HTMLProps<HTMLDivElement> {
  activeChat: boolean
}

const AppHeader: React.SFC<AppHeaderProps> = ({activeChat, ...props}) => {
  return <div {...props}>Chatbot</div>
}

// language=SCSS
const StyledAppHeader = styled(AppHeader)`
  & {
    position: relative;
    top: ${(props) => !props.activeChat ? '50%' : '0%'};
    transform: ${(props) => !props.activeChat ? 'translateY(-50%)' : 'translateY(0%)'};
    transition: all 0.7s ease;
    font-family: 'Sriracha', cursive;
    font-size: 80px;
    color: #fff;
    width: 100%;
    text-align: center;
  }
`

export default StyledAppHeader
