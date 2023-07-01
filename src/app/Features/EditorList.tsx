import styled from "styled-components"
import Profile from "../components/Profile/Profile"

export default function EditorList() {
  return <UserEditorWrapper>
    <Profile name="Warlley Lopes" description="editor há 8 anos" />
    <Profile name="Daniel Bonifacio" description="editor há 12 anos" />
    <Profile name="Karen Marvila" description="editor há 4 anos" />
    <Profile name="Marcos Felicio" description="editor há 7 anos" />
    <Profile name="Angelo Victor" description="editor há 3 anos" />
  </UserEditorWrapper>
}

const UserEditorWrapper = styled.div`
display:  grid;
grid-template-columns: repeat(2,1fr);
gap: 32px;
`