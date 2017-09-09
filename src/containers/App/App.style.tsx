import styled, {keyframes} from 'styled-components'

// language=SCSS
const backgroundAnimation = keyframes`
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

  100% {
    opacity: 1;
  }
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
    //background: linear-gradient(141deg, #0fb8ad 0%, #2cb5e8 100%);
    //background: linear-gradient(141deg, rgb(252, 0, 255), rgb(0, 219, 222));
    //background: linear-gradient(141deg, #1488CC, #2B32B2);
    //background: linear-gradient(141deg, #314755, #26a0da); // BEST
    //background: linear-gradient(141deg, #16222A, #3A6073);
    //background: linear-gradient(141deg, #ffd89b, #19547b);
    background: linear-gradient(141deg, #e96443, #904e95);
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased;
    overflow: hidden;
  }
`

export const AppChatContent = styled.div`
  position: relative;
  min-width: 230px;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
`

export const AppChatTextFieldWrapper = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

