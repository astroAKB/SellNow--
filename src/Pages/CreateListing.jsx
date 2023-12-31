import { useState } from "react";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

export default function CreateListing() {
  const [loading, setLoading] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
    images: {} 
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
    latitude,
    longitude,
    images,
  } = formData;
  function onChange(e) {
    let bool = null;
    if (e.target.value === "true") {
      bool = true;
    }
    if (e.target.value === "false") {
      bool = false;
    }
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: bool ?? e.target.value,
      }));
    }
  }
  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (discountedPrice >= regularPrice) {
      setLoading(false);
      toast.error("Discounted price must be less than regular price");
      return;
    }
    if(images.length > 6){
      setLoading(false)
      toast.error("Maximum 6 images are allowed")
      return
    }
    let location = {}
    let site 
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form onSubmit={onSubmit}>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex ">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 mr-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-[#F8F5E4] text-black"
                : "bg-[#3F497F] text-white"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`px-7 py-3 ml-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-[#F8F5E4] text-black"
                : "bg-[#3F497F] text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter the name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 text-xl text-center text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600"
              required
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 text-xl text-center text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600"
              required
            />
          </div>
        </div>

        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex ">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 mr-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 ml-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex ">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 mr-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 ml-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Enter the address"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600 mb-6"
        />
        {!locationEnabled && (
          <div className="flex space-x-6 justify-start mb-6">
            <div>
              <div>
                <p className="text-lg font-semibold">Latitude</p>
                <input
                  type="number"
                  id="latitude"
                  value={latitude}
                  onChange={onChange}
                  min="-90"
                  max="90"
                  required
                  className="w-full px-4 py-3 text-xl text-center bg-[#F8F5E4] text-black border-gray-300 rounded transition duration-150 ease-in-out focus:bg-[#F8F5E4] focus:text-black focus:border-slate-600"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="text-lg font-semibold">Longitude</p>
                <input
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={onChange}
                  min="-180"
                  max="180"
                  required
                  className="w-full px-4 py-3 text-xl text-center bg-[#F8F5E4] text-black border-gray-300 rounded transition duration-150 ease-in-out focus:bg-[#F8F5E4] focus:text-black focus:border-slate-600"
                />
              </div>
            </div>
          </div>
        )}
        <p className="text-lg  font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Provide a description"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-[#3F497F] bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-[#3F497F] focus:bg-[#F8F5E4] focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex ">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 mr-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 ml-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-[#F8F5E4] text-black" : "bg-[#3F497F] text-white"
            }`}
          >
            no
          </button>
        </div>
        <div className="my-6 flex items-center">
          <div>
            <p className="text-lg font-semibold ">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6 ">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="50000000"
                required
                className="w-full px-4 py-2 text-xl text-center text-black bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-[#F8F5E4] focus:border-slate-600 "
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="my-6 flex items-center">
            <div>
              <p className="text-lg font-semibold ">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6 ">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="50000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-center text-black bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-[#F8F5E4] focus:border-slate-600 "
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold ">Images</p>
          <p className="text-gray-600 ">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpeg,.png,.jpg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-[#F8F5E4] border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-[#F8F5E4] focus:border-slate-600 "
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
