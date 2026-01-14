export const NavBar = () => {
  return (
    <div className="mx-10 mt-6 bg-black p-[1px] 
      bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-indigo-600/40">
      
   
      <div className="flex items-center justify-between bg-black px-6 py-3 text-white">
        

        <div className="flex items-center">
          <img className="h-8 w-auto" src="/images/logo.jpeg" alt="Trivara" />
        </div>

   
        <ul className="hidden md:flex gap-7 text-sm text-white/80">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">What We Do</li>
          <li className="hover:text-white transition cursor-pointer">Products</li>
          <li className="hover:text-white transition cursor-pointer">Why Trivara</li>
          <li className="hover:text-white transition cursor-pointer">Process</li>
        </ul>

  
        <div className="flex items-center gap-5 text-sm">
          <button className="text-white/80 hover:text-white transition">
            Log In
          </button>

          <button className="rounded-lg bg-gradient-to-r from-[#07043f] to-[#7a76c8] px-4 py-2 text-white font-medium shadow-md hover:opacity-90 transition">
            Start your project
          </button>
        </div>

      </div>
    </div>
  );
};
