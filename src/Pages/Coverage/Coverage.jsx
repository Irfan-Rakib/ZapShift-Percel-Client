import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Coverage = () => {
  const position = [23.7104, 90.40744];
  const ServiceCentres = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value.toLowerCase();

    const District = ServiceCentres.find((c) =>
      c.district.toLowerCase().includes(location)
    );

    if (District) {
      const coord = [District.latitude, District.longitude];

      // SUCCESS TOAST
      toast.success(`${District.district} found!`, {
        position: "top-center",
        autoClose: 2000,
      });

      // Fly to district
      mapRef.current.flyTo(coord, 13, {
        animate: true,
        duration: 1.5,
      });
    } else {
      // ERROR TOAST
      toast.error("District not found!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="my-14 px-4">
      {/* Toast Container */}
      <ToastContainer />

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-secondary">
          We are available in 64 districts
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Search your district to see if our service is available in your area.
        </p>
      </div>

      <div className="max-w-md  mb-8">
        <form onSubmit={handleSearch}>
          <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-secondary">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
              <path d="m21 21-4.3-4.3" strokeWidth="2"></path>
            </svg>

            <input
              name="location"
              type="search"
              placeholder="Search your district..."
              required
              className="w-full outline-none text-sm md:text-base"
            />
            <button className=" text-secondary font-bold px-2 py-1 rounded-xl ">
              {" "}
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="w-full  mx-auto">
        <div className="w-full h-[60vh] md:h-[75vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-lg ">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={true}
            className="h-full w-full"
            ref={mapRef}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {ServiceCentres.map((Centre, index) => (
              <Marker
                key={index}
                position={[Centre.latitude, Centre.longitude]}
              >
                <Popup>
                  <strong>{Centre.district}</strong>
                  <br />
                  Service Area: {Centre.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
