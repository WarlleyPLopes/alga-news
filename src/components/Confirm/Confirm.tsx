import * as C from './Confirm.styles'

export interface ConfirmProps {
  titles: string
  onConfirm: () => any
  onCancel: () => any
}

export default function Confirm(props: ConfirmProps) {
  return <C.Wrapper>
    <C.Title>{props.titles}</C.Title>
    <C.ConfirmButtonDisplay>
      <button onClick={props.onCancel}>Não</button>
      <button onClick={props.onConfirm}>Sim</button>
    </C.ConfirmButtonDisplay>
  </C.Wrapper>
}