import restaurantsData from "../TopRestaurantsHotels/restaurantsData.json";
import hotelsData from "../TopRestaurantsHotels/hotelsData.json";

function TopRestaurantsHotels() {
  return (
    <>
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Restaurants */}
          <div id="restaurants" className="pl-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Top Restaurants</h2>
            <div className="space-y-6">
              {restaurantsData.map((restaurant) => (
                <div key={restaurant.name} className="flex items-center gap-6">
                  <div className="relative h-32 w-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={require(`${restaurant.image}`)}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">{restaurant.description}</p>
                  </div>
                </div>
              ))}
              <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold shadow-md transition duration-300">
                Explore More Accommodations
              </button>
            </div>
          </div>

          {/* Hotels */}
          <div id="hotels" className="pl-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Luxury Hotels & Riads</h2>
            <div className="space-y-6">
              {hotelsData.map((hotel) => (
                <div key={hotel.name} className="flex items-center gap-6">
                  <div className="relative h-32 w-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={require(`${hotel.image}`)}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{hotel.name}</h3>
                    <p className="text-sm text-gray-500">{hotel.description}</p>
                  </div>
                </div>
              ))}
              <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold shadow-md transition duration-300">
                Explore More Accommodations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default TopRestaurantsHotels;
