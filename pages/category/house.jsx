import Layout from "@/components/layout/Layout"
import NavEnd from "@/components/nav/NavEnd"
import Card from "@/components/cards/Card"
import { sanityClient } from '../../sanity'


export const getServerSideProps = async () => {
  const query = '* [_type == "property"]'
  const property = await sanityClient.fetch(query)

  const filteredProperties = property.filter(element => element.category == "House")

  return {
    props: {
      filteredProperties,
    }
  }
}

export default function house({ filteredProperties, }) {

  return (
    <div>
      <Layout>
        <NavEnd />
        <div className="container flex-wrap md:flex">
          {
            filteredProperties.map((element, index) => {
              return <Card element={ element } key={ index } />;
            })
          }
        </div>

      </Layout>
    </div>

  )
}
