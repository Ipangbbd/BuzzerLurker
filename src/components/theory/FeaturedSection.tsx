export default function FeaturedSection() {
  return (
    <div className="bg-gradient-to-r from-accent-teal to-neutral-600 text-white rounded-xl p-8 md:p-12 mt-8 relative overflow-hidden group">
      {/* Animated background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Theory Spotlight: Quantum Field Theory</h3>
        <p className="text-lg text-white/90 max-w-3xl text-center mx-auto leading-relaxed">
          Quantum Field Theory represents the marriage of quantum mechanics and special relativity, 
          describing how particles are created and destroyed through field fluctuations. 
          This framework has led to our most accurate predictions in physics, 
          with some calculations matching experimental results to 12 decimal places—a 
          precision unmatched in any other science.
        </p>
      </div>
    </div>
  );
}