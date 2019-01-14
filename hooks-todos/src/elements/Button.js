import styled from 'styled-components'
import { darken } from 'polished'
import { lightBlue, red } from '../colors'

const Button = styled.button`
  background: ${props => (props.type === 'danger' ? red : lightBlue)};
  padding: 0.8rem 1.4rem;
  border-radius: 2px;
  color: white;
  border: none;
  font-size: 1.4rem;

  &:hover {
    background: ${props =>
      darken(0.1, props.type === 'danger' ? red : lightBlue)};
  }
`
export default Button
