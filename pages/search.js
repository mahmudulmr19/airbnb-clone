import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  // es6 straudet
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(router.query.location);

  const formateedStartDate = format(new Date(startDate), "dd MMM yy");
  const formateedEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formateedStartDate} - ${formateedEndDate}`;
  return (
    <div>
      <Head>
        <title>search - Airbnb</title>
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow  pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {/* {searchResults.map(
              ({ img, location, title, description, star, price, total }) => {
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />;
              }
            )} */}

            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://res.cloudinary.com/drilwd3mg/raw/upload/v1671489285/assets/Airbnb%20/5NPS_xs1alk.json"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}

// export async function getServerSideProps() {
//   const searchResults = await fetch(
//     "https://res.cloudinary.com/drilwd3mg/raw/upload/v1670939690/assets/Airbnb%20/4G1G_nuynox.json"
//   ).then((res) => res.json());

//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
