

const LookingForDriver = (props) => {
  return (
    <div>
    <h5 onClick={()=>{props.setVehicleFound(false)}}  className="p-2 text-center absolute top-0  w-[93%]" ><i className="text-gray-300 text-3xl ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
    <div className="flex gap-2 flex-col justify-between item-center">
        <img className="ml-28 h-16 w-28" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2" >
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">Kankariya Talab , Ghaziabad</p>
                </div>
            </div>

            <div className="flex items-center gap-5 p-3  border-b-2" >
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">Kankariya Talab , Ghaziabad</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3" >
                <i className="text-lg ri-currency-line"></i>
                <div>
                    <h3 className="text-lg font-medium">$193.20</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                </div>
            </div>
        </div>
    </div>


</div>
  )
}

export default LookingForDriver;
