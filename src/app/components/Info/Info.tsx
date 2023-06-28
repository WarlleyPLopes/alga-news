import { mdiInformation } from "@mdi/js"
import Icon from "@mdi/react"
import * as I from "./Info.styles"

export interface InfoProps {
  title: string,
  description: string
}

export default function Info(props: InfoProps) {
  return <I.Wrapper>
    <I.InnerContent>
      <I.Icons>
        <Icon
          color='#09F'
          size="48px"
          path={mdiInformation}
        />
      </I.Icons>
      <I.Messages>
        <I.Title>{props.title}</I.Title>
        <p>{props.description}</p>
      </I.Messages>
    </I.InnerContent>
  </I.Wrapper>
}

