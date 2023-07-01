import usePageTitle from "../../core/hooks/usePageTitle";
import EditorList from "../Features/EditorList";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function EditorsListView() {
  usePageTitle('Lista de editores')
  return <DefaultLayout>
    <EditorList />
  </DefaultLayout>
}