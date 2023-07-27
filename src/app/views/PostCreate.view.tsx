import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../Features/PostForm";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function PostCreateView() {
  usePageTitle('Novo post')

  return <DefaultLayout>
    <PostForm />
  </DefaultLayout>
}