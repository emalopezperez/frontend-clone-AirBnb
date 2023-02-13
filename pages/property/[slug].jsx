import { sanityClient } from "@/sanity";
import { isMultiple } from "../../utils.js";
import Review from "@/components/review/Review.jsx";
import Layout from "@/components/layout/Layout.jsx";
import Link from "next/link";
import Image from "@/components/image/Image.jsx";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`;

  const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      },
    };
  }
};

const Property = ({
  title,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  reviews,
}) => {
  const reviewAmount = reviews.length;

  return (
    <Layout>
      <div className="container2">
        <h1 className="text-[#222222] text-3xl">
          <b>{ title }</b>
        </h1>
        <p>
          { reviewAmount } reseñas{ isMultiple(reviewAmount) }
        </p>
        <div className="images-section">
        <Image identifier="main-image" image={mainImage}/>
        <div className="px-2 sub-images-section">
        {images.map(({ _key, asset }, image) => (
          <Image key={_key} identifier="image" image={asset} />
        ))}
      </div>
        </div>

        <div className="section">
          <div className="pt-2 information ">
            <h2 className="pt-2">
              <b>
                { propertyType } hosted by { host?.name }
              </b>
            </h2>
            <h4 className="pt-4">
              { bedrooms } bedroom{ isMultiple(bedrooms) } * { beds } bed
              { isMultiple(beds) }
            </h4>
            <hr />
            <h4 className="pt-4">
              <b>Enhanced Clean</b>
            </h4>
            <p className="">
              This host is committed to Airbnbs 5-step enhanced cleaning process.
            </p>
            <h4 className="pt-4">
              <b>Amenities for everyday living</b>
            </h4>
            <p>
              The host has equipped this place for long stays - kitchen, shampoo,
              conditioner, hairdryer included.
            </p>
            <h4 className="pt-4">
              <b>House rules</b>
            </h4>
            <p className="">
              This place isnt suitable for pets andthe host does not allow parties
              or smoking.
            </p>
          </div>
          <div className="price-box">
            <h2 className="pb-10 text-2xl">$U{ pricePerNight } UYU
              { "  " }
              <span className="text-sm text-gray-700">
                <span className="pr-4 ">noche</span>.{ reviewAmount } reseña{ isMultiple(reviewAmount) }
              </span></h2>

            <Link href="/">
              <div className="button">Change Dates</div>
            </Link>
          </div>
        </div>

        <hr />
        <h4 className="w-[700px] pt-4 pb-2">{ description }</h4>
        <hr />
        <h2 className="pt-6 pb-4">
          { reviewAmount } reseña{ isMultiple(reviewAmount) }
        </h2>
        { reviewAmount > 0 &&
          reviews.map((review) => <Review key={ review._key } review={ review } />) }

        <hr />
      </div>
    </Layout>
  );
};

export default Property;
