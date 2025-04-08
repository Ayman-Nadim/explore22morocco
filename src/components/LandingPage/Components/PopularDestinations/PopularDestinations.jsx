import destinations from './destinations.json'

function PopularDestinations() {

  return (
    <>
      <section id="destinations" className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(({ city, imgSrc }) => (
              <div key={city} className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={require(`${imgSrc}`)}
                    alt={city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{city}</h3>
                  <p className="text-sm text-gray-500 mt-2">Discover the unique charm and attractions of {city}</p>
                  <a href="#" className="text-orange-600 text-sm mt-2 inline-block">
                    Explore {city}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularDestinations;
