import * as React from 'react'
import styled from 'styled-components'

interface AppHeaderProps extends React.HTMLProps<HTMLDivElement> {
  activeChat: boolean
}

const AppHeader: React.SFC<AppHeaderProps> = ({activeChat, className, ...props}) => {
  console.log(className)
  return (
    <div className={className}>
      <div className={className + ' text'}>
        Elva Chatbot
      </div>
    </div>
  )
}

// language=SCSS
const StyledAppHeader = styled(AppHeader)`
  & {
    top: 0px;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transition: opacity 1.0s ease;
    opacity: ${({activeChat}) => activeChat ? 1.0 : 0.0};
    
    .text {
      display: flex;
      justify-content: flex-start;
      max-width: 800px;
      min-width: 230px;
      padding-left: 50px;
      margin: auto;
      background: transparent;
      text-align: left;
      font-size: 44px;
      line-height: 80px;
      text-transform: capitalize;
      font-family: 'Abel', cursive;
      color: #fff;
    }
   
  }
`

export default StyledAppHeader
