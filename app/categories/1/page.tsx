import Link from 'next/link';

export default function TechnologyCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Technology</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Technology</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Quantum Computing Breakthrough</h2>
            <p className="text-gray-600 mb-4">
              Researchers at Google and Stanford have demonstrated quantum supremacy with a 53-qubit processor solving a problem that would take classical supercomputers thousands of years. This milestone opens new possibilities for quantum algorithms and simulations.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 574, October 2019</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">AI System Predicts Protein Structures</h2>
            <p className="text-gray-600 mb-4">
              DeepMind's AlphaFold AI system has achieved remarkable accuracy in predicting protein structures, a fundamental challenge in biology. The breakthrough promises to accelerate scientific discovery in drug development and understanding disease mechanisms.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 588, December 2020</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Neuromorphic Computing Advances</h2>
            <p className="text-gray-600 mb-4">
              New brain-inspired computing architectures show promise in dramatically reducing energy consumption while improving performance for AI tasks. These neuromorphic systems mimic the brain's neural structure and could revolutionize edge computing.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Electronics, Vol. 4, March 2021</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Silicon Photonics: The Future of Computing Interconnects</h3>
        <p className="text-gray-600 mb-4">
          Silicon photonics—the study and application of photonic systems that use silicon as an optical medium—has emerged as a promising technology for addressing bandwidth limitations in computing interconnects. Recent advancements allow for integration with existing CMOS fabrication processes, enabling high-bandwidth, energy-efficient data transmission between chips and within data centers.
        </p>
        <p className="text-gray-600 mb-4">
          A recent breakthrough from MIT researchers demonstrates wavelength division multiplexing on silicon chips, enabling multiple data streams to be transmitted simultaneously on different wavelengths of light. This technology could increase current interconnect bandwidths by orders of magnitude while consuming significantly less power.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Photonics, Vol. 15, June 2021</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200">
          Quantum Computing
        </Link>
        <Link href="#" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200">
          Artificial Intelligence
        </Link>
        <Link href="#" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200">
          Photonics
        </Link>
        <Link href="#" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200">
          Semiconductors
        </Link>
        <Link href="#" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200">
          Machine Learning
        </Link>
      </div>
    </div>
  );
} 