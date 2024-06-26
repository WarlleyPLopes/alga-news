import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

export interface MarkdownEditorProps {
  onChange?: (text: string) => any

}

function MarkdownEditor(props: MarkdownEditorProps) {
  return <MdEditor
    style={{
      height: 300
    }}
    renderHTML={text => parser.render(text)}
    onChange={({ text }) => props.onChange && (text)}
  />
}

export default MarkdownEditor