import Container from "@/components/shared/Container";
import { useEffect, useRef, useState } from "react";

/* Animated counter — counts up once when it enters the viewport (fires on page load) */
type CounterProps = {
  target: number;
  suffix?: string;
  duration?: number;
};

const Counter = ({
  target,
  suffix = "",
  duration = 2000,
}: CounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion — snap straight to the final value
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  return (
    <Container>
      <div className="bg-white">
        {/* Hero with background image (lightweight, optimized) */}
        <header className="relative bg-cPrimary text-white text-center py-24 overflow-hidden">
          {/* Optimized background image — swap the URL below for your own local /public image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://sspark.genspark.ai/i/wopJ4VVWw9L3Lmx5?width=1600')",
            }}
            aria-hidden="true"
          />
          {/* Brand-color overlay keeps the text readable */}
          <div className="absolute inset-0 bg-cPrimary/80" />
          <div className="relative z-10 mt-16">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-3 text-sm sm:text-base opacity-90 tracking-wide">
              IBM Stationary
            </p>
          </div>
        </header>

        {/* Our Mission and Values */}
        <section className="text-center py-16 px-4">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cPrimary">
            Our Mission
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Mission &amp; Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At IBM Stationary, we aim to spark creativity and productivity by
            offering top-notch stationery products. Our values focus on quality,
            affordability, and a seamless shopping experience.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-gray-100 shadow-md bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-cPrimary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Quality</h3>
              <p className="mt-2 text-sm text-gray-600">
                Premium stationery, curated for lasting everyday use.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-md bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-cPrimary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Affordability</h3>
              <p className="mt-2 text-sm text-gray-600">
                Great value on every product, every single day.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-md bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-cPrimary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">Seamless Experience</h3>
              <p className="mt-2 text-sm text-gray-600">
                A smooth, effortless online shopping journey.
              </p>
            </div>
          </div>

          {/* Animated counters */}
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24 mt-14">
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-cPrimary">
                <Counter target={5000} suffix="+" />
              </h3>
              <p className="text-gray-600 mt-2">Products Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-cPrimary">
                <Counter target={10} suffix="+" />
              </h3>
              <p className="text-gray-600 mt-2">Years in Business</p>
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