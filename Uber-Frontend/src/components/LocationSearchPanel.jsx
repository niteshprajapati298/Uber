import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  const locations = [
    "B3/118 Raghunath",
    "Sector 10, Noida",
    "MG Road, Gurugram",
    "Indirapuram, Ghaziabad",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
        onClick={()=>{props.setVehiclePanelOpen(true)
          props.setPanelOpen(false)
        }}
          key={index}
          className="gap-4 border-gray-50 active:border-black border-2 p-3 rouned-xl flex items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium ">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
