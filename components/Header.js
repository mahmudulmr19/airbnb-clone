import {
  SearchIcon,
  UserCircleIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
function Header({ placeholder }) {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    console.log(ranges);
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  // const resetInput = () => {
  //   setsearchInput("");
  // };

  function resetInput() {
    setsearchInput("");
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div onClick={() => router.push("/")}>
        <Image
          className="header__logo  cursor-pointer my-auto"
          src="https://res.cloudinary.com/drilwd3mg/image/upload/v1670883714/assets/Airbnb%20/Airbnb_Logo_B%C3%A9lo.svg_cinuac.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="header__logo"
        />
      </div>
      {/* middle -Search */}
      <div className="flex items-center md:border-2 rounded-full py-2  md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          className="pl-5 text-sm text-gray-600 placeholder-gray-600 outline-none flex-grow   bg-transparent"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className=" hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 cursor-pointer rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5 hover" />
            <input
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <div className="pl-28" onClick={resetInput}>
              <button onClick={search} className="flex-grow mr-36 text-red-400">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
