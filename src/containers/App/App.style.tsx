import styled, {keyframes} from 'styled-components'

// language=SCSS
const backgroundAnimation = keyframes`
	0% { opacity: 1; }
	50% { opacity: 0; }
  100% { opacity: 1; }
`

// language=SCSS
export const AppAnimatedBackground = styled.div`
  & {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-100deg, #e96443, #904e95);
    opacity: 1;
    animation: ${backgroundAnimation} 6s linear infinite;
  }
`
// language=SCSS
export const AppContent = styled.div`
  & {
    position: absolute;
    background: linear-gradient(141deg, #e96443, #904e95);
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
`

// language=SCSS
export const AppChatContent = styled.div`
  & {
    display: flex;
    max-width: 800px;
    width: 100%;
    position: relative;
    min-width: 230px;
    margin: 0 auto;
    margin-top: 80px;
    height: calc(100% - 80px);
  }
`

// language=SCSS
export const AppChatTextFieldWrapper = styled.div`
  & {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

