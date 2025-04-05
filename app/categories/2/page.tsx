import Link from 'next/link';

export default function ScienceCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Science</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Science</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">First Image of a Black Hole</h2>
            <p className="text-gray-600 mb-4">
              The Event Horizon Telescope collaboration revealed the first direct visual evidence of a supermassive black hole and its shadow. The image shows the black hole at the center of galaxy M87, a massive galaxy in the Virgo cluster.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 568, April 2019</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">CRISPR Gene Editing in Human Embryos</h2>
            <p className="text-gray-600 mb-4">
              Researchers report successful correction of a heterozygous mutation in human embryos using CRISPR-Cas9 gene editing. The study demonstrates the potential of gene editing for preventing inherited diseases.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 548, August 2017</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Detecting Gravitational Waves</h2>
            <p className="text-gray-600 mb-4">
              The Laser Interferometer Gravitational-Wave Observatory (LIGO) detected gravitational waves produced by merging black holes, confirming a major prediction of Einstein's general theory of relativity and opening a new window onto the cosmos.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 531, March 2016</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Exoplanet Atmospheres: New Frontiers in Astronomy</h3>
        <p className="text-gray-600 mb-4">
          The James Webb Space Telescope (JWST) has revolutionized our ability to characterize exoplanet atmospheres, detecting water vapor, carbon dioxide, and methane in the atmosphere of K2-18b, a potentially habitable exoplanet located 124 light-years from Earth.
        </p>
        <p className="text-gray-600 mb-4">
          These findings mark a significant step forward in our search for habitable worlds beyond our solar system. The atmospheric composition suggests K2-18b could be a "Hycean" world—with a hydrogen-rich atmosphere and a water ocean surface—which expands our understanding of potentially habitable environments.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Astronomy, Vol. 7, September 2023</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200">
          Astrophysics
        </Link>
        <Link href="#" className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200">
          Genetics
        </Link>
        <Link href="#" className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200">
          Particle Physics
        </Link>
        <Link href="#" className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200">
          Exoplanets
        </Link>
        <Link href="#" className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200">
          Quantum Physics
        </Link>
      </div>
    </div>
  );
} 