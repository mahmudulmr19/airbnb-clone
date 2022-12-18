import Header from "../components/Header";
import Footer from "../components/Footer";
function Search() {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

          <div className="">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
