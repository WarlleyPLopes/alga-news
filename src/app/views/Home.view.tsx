import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Home() {
  usePageTitle('Home')
  return <DefaultLayout>
    <h1>
      Home
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae reprehenderit esse dolor aspernatur hic veniam. Officia consequatur adipisci dolore?</p>
  </DefaultLayout>
}