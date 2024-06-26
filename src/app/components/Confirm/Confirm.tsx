import Button from '../Button/Button'
import * as C from './Confirm.styles'

export interface ConfirmProps {
  title: string
  onConfirm: () => any
  onCancel: () => any
}

export default function Confirm(props: ConfirmProps) {
  return <C.Wrapper>
    <C.Title>{props.title}</C.Title>
    <C.ConfirmButtonDisplay>
      <Button variant='danger' label='Não' onClick={props.onCancel} />
      <Button variant='primary' label='Sim' onClick={props.onConfirm} />
    </C.ConfirmButtonDisplay>
  </C.Wrapper>
}