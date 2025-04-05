import Link from 'next/link';

export default function HistoryCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">History</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ancient DNA Revolution</h2>
            <p className="text-gray-600 mb-4">
              Advances in ancient DNA analysis have transformed our understanding of human migrations and ancestry. Research on Neanderthal and Denisovan genomes reveals extensive interbreeding with early Homo sapiens, challenging previous views of human evolution.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 591, March 2021</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Climate and Historical Collapse</h2>
            <p className="text-gray-600 mb-4">
              Tree ring and ice core data provide evidence that climate shocks played significant roles in historical societal collapses. Research links extended droughts to the fall of Mayan civilization and Angkor, highlighting historical vulnerabilities to environmental change.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Geoscience, Vol. 13, October 2020</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Historical Pandemics</h2>
            <p className="text-gray-600 mb-4">
              Genomic analysis of ancient pathogens provides new insights into historical pandemics. DNA recovered from skeletal remains confirms Yersinia pestis as the cause of the Black Death and reveals the evolutionary history of this devastating pathogen.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Communications, Vol. 12, June 2021</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Agricultural Origins: New Perspectives on the Neolithic Revolution</h3>
        <p className="text-gray-600 mb-4">
          The transition from hunting and gathering to farming—the Neolithic Revolution—was one of the most profound transformations in human history. Recent archaeological and genomic evidence is challenging traditional narratives about this pivotal period, suggesting a more complex process than previously understood.
        </p>
        <p className="text-gray-600 mb-4">
          New research indicates that agriculture emerged independently in at least 12 different regions worldwide, rather than spreading solely from the Fertile Crescent. Archaeological findings from East Asia suggest rice domestication began as early as 10,000 years ago, while genetic studies of early farmers reveal complex population movements that shaped the modern human genome. These discoveries highlight the ingenuity of ancient peoples in adapting to local environments through plant and animal domestication.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Plants, Vol. 8, April 2022</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
          Archaeogenetics
        </Link>
        <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
          Paleoclimate
        </Link>
        <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
          Ancient Civilizations
        </Link>
        <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
          Human Evolution
        </Link>
        <Link href="#" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">
          Historical Epidemiology
        </Link>
      </div>
    </div>
  );
} 