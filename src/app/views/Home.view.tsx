import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../Features/PostsList"
import UserMetrics from "../Features/UserMetrics"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Home() {
  usePageTitle('Home')

  return <DefaultLayout>
    <UserMetrics />
    <PostList />
  </DefaultLayout>
}