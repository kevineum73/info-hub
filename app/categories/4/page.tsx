import Link from 'next/link';

export default function BusinessCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Business</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Business</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Business Practices</h2>
            <p className="text-gray-600 mb-4">
              Companies implementing science-based targets for emissions reductions are showing better financial performance than peers. Research indicates sustainable practices can create competitive advantages through resource efficiency and stakeholder trust.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Climate Change, Vol. 12, August 2022</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Biotech Investment Trends</h2>
            <p className="text-gray-600 mb-4">
              Venture capital funding for biotech startups reached record levels after COVID-19, with particular focus on mRNA technologies, synthetic biology, and computational drug discovery platforms. This represents a significant shift in pharmaceutical R&D strategies.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Biotechnology, Vol. 40, February 2022</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Carbon Markets Evolution</h2>
            <p className="text-gray-600 mb-4">
              Analysis of global carbon markets shows increasing sophistication in pricing mechanisms and trading strategies. As climate policies tighten, businesses are developing more advanced approaches to managing carbon liabilities and opportunities.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Energy, Vol. 7, April 2022</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Green Innovation: Business Opportunities in the Transition to Net Zero</h3>
        <p className="text-gray-600 mb-4">
          An extensive analysis published in Nature reveals that the global transition to net-zero emissions could generate over $10 trillion in business opportunities by 2050. The research identifies five key sectors poised for extraordinary growth: renewable energy, electric transportation, sustainable agriculture, circular economy solutions, and climate-resilient infrastructure.
        </p>
        <p className="text-gray-600 mb-4">
          Companies that position themselves early in these sectors are likely to capture significant market share and establish competitive advantages. The study also highlights that successful businesses will need to integrate climate considerations into core strategy rather than treating sustainability as a separate initiative.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Sustainability, Vol. 5, November 2022</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200">
          Sustainable Business
        </Link>
        <Link href="#" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200">
          Biotechnology
        </Link>
        <Link href="#" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200">
          Climate Finance
        </Link>
        <Link href="#" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200">
          Green Innovation
        </Link>
        <Link href="#" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200">
          Technology Transfer
        </Link>
      </div>
    </div>
  );
} 