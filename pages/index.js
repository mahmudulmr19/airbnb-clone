import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcard from "../components/Smallcard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
export default function index({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Vacation Homes & Condo Rentals - Airbnb - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>

          {/* pull same data  from a server - API endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <Smallcard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          alt="ejngjwkeg"
          title=" The Greatest Outdoors"
          description="Wishlist created by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://res.cloudinary.com/drilwd3mg/raw/upload/v1670939690/assets/Airbnb%20/4G1G_nuynox.json"
  ).then((res) => res.json());

  const cardData = await fetch(
    "https://res.cloudinary.com/drilwd3mg/raw/upload/v1670952440/assets/Airbnb%20/VHHT_lgkzea.json"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
