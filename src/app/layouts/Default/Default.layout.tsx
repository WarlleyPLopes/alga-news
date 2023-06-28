import NavBar from '../../components/NavBar'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
  return <DL.Wrapper>
    <DL.Header>
      header
    </DL.Header>
    <DL.Main>
      <DL.Navigation>
        <NavBar />
      </DL.Navigation>
      <DL.FeatureContent>
        {props.children}
      </DL.FeatureContent>
      <DL.Aside>c</DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout