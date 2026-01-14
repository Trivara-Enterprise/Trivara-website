import { NavBar } from "@/src/components/NavBar";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />

      <section className="flex flex-col items-center justify-center text-center px-6 pt-32">
        <img
    src="/images/Ellipse.png"
    alt=""
    className="pointer-events-none absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      w-[1000px] max-w-none opacity-70 blur-[2px]"
  />

        <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
          We Build{" "}
          <span className="bg-gradient-to-b from-[#2D00F4] via-[#5F56FB]/70 to-[#D6D0FC]/40 bg-clip-text text-transparent">
            SCALABLE
          </span>{" "}
          <br />
          <span className="bg-gradient-to-b from-[#2D00F4]/90 via-[#5F56FB]/80 to-[#D6D0FC]/90 bg-clip-text text-transparent">
            SOFTWARE
          </span>{" "}
          That Runs <br />
          Businesses
        </h1>

        <p className="mt-6 max-w-xl text-sm sm:text-base text-white/70">
          Custom enterprise SaaS solutions built with precision.
          <br />
          We power organizations at scale.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-gradient-to-r from-[#07043f] to-[#7a76c8] px-6 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition">
            Our Products →
          </button>

          <button className="relative rounded-2xl p-[1px]">
          
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400" />

          
            <span className="relative z-10 flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-white transition+">
              Work with us
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
