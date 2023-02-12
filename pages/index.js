import Layout from "@/components/layout/Layout"
import NavTop from "@/components/nav/NavTop"
import NavEnd from "@/components/nav/NavEnd"
import Card from "@/components/cards/Card"
import { sanityClient } from '../sanity'


export const getServerSideProps = async () => {
  const query = '* [_type == "property"]'
  const property = await sanityClient.fetch(query)

  return {
    props: {
      property
    }
  }
}

export default function Home({ property, filteredProperties }) {

  console.log(filteredProperties)

  return (
    <div>
      <NavTop />

      <Layout>
        <NavEnd />
        <div className="container flex-wrap md:flex">
          {
            property.map((element, index) => {
              return <Card element={ element } key={ index } />;
            })
          }
        </div>

      </Layout>
    </div>

  )
}
