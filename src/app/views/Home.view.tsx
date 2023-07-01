import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../Features/PostsList"
import UserEarnings from "../Features/UserEarnings"
import UserPerformance from "../Features/UserPerformance"
import UserTopTags from "../Features/UserTopTags"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Home() {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}