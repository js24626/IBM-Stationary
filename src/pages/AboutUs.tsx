import Container from "@/components/shared/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="bg-white">
        <header className="bg-cPrimary text-white text-center py-12">
          <h1 className="text-4xl font-bold mt-16">About Us</h1>
        </header>

        {/* Our Mission and Values */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission and Values</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At IBM Stationary, we aim to spark creativity and productivity by
            offering top-notch stationery products. Our values focus on quality,
            affordability, and a seamless shopping experience.
          </p>
          <div className="flex justify-center space-x-10 sm:space-x-16 mt-10">
            <div className="transition transform hover:scale-110 cursor-pointer">
              <h3 className="text-3xl font-extrabold text-cPrimary">5000+</h3>
              <p className="text-gray-600 mt-1">Products Available</p>
            </div>
            <div className="transition transform hover:scale-110 cursor-pointer">
              <h3 className="text-3xl font-extrabold text-cPrimary">10+</h3>
              <p className="text-gray-600 mt-1">Years in Business</p>
            </div>
          </div>
        </section>

        {/* Our Best-Selling Categories */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Best-Selling Categories</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Curated collections loved by thousands of customers every single day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/bOQQ7bHwahF1KHSM?width=2560"
                alt="Assorted notebooks"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Notebooks
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/yeuy7ORqLWKB982T?width=2560"
                alt="Art brushes and paints"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Art Supplies
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/Bqd4CsZE0758Z0i3?width=2560"
                alt="Assorted pens and pencils"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Pens &amp; Pencils
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/Z4W6j6fCdG5MXTTv?width=2560"
                alt="Office supplies and desk organizer"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Office Essentials
              </span>
            </div>
          </div>
        </section>

        {/* Customer Favorites */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-900">Customer Favorites</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The products our customers come back for — again and again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/zwOG8Y6t3TTQjcBX?width=2560"
                alt="Elegant leather journal"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Premium Journals
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/Uu9MUfJ8FqiUkULm?width=2560"
                alt="Calligraphy fountain pen writing"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Calligraphy Kits
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/BvsjEpxmCOx27clu?width=2560"
                alt="Organized desk workspace"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                Desk Organizers
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://sspark.genspark.ai/i/IsQwMkc4uVbHHFwa?width=2560"
                alt="DIY craft supplies with washi tape"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white">
                DIY Craft Supplies
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-900">FAQs</h2>
          <div className="max-w-2xl mx-auto mt-10 text-left space-y-4">
            <div className="p-5 border border-gray-100 rounded-xl shadow-md bg-white transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-gray-900">
                Do you offer bulk discounts?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer discounts for bulk orders. Contact us for more
                information.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl shadow-md bg-white transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-gray-900">
                Can I customize my stationery?
              </h3>
              <p className="mt-2 text-gray-600">
                Absolutely! We offer customizable options for notebooks, pens,
                and more.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl shadow-md bg-white transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-gray-900">
                What are your delivery times?
              </h3>
              <p className="mt-2 text-gray-600">
                Orders are typically delivered within 3-5 business days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;