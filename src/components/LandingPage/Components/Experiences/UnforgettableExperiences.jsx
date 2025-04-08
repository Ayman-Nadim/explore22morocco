import experiences from './experiences.json'
const UnforgettableExperiences = () => {

  return (
    <>
    <section id="experiences" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">Unforgettable Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(({ title, description, imgSrc }, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-80">
              <img
                src={require(`${imgSrc}`)}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default UnforgettableExperiences;
