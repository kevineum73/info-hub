import Link from 'next/link';

export default function HealthCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Health</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Health</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">mRNA Vaccines: A New Era in Immunology</h2>
            <p className="text-gray-600 mb-4">
              The development and success of mRNA vaccines against COVID-19 represents a landmark achievement in medical science. These vaccines use messenger RNA to instruct cells to produce a protein that triggers an immune response, offering a novel approach to immunization.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 595, July 2021</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Gut Microbiome and Mental Health</h2>
            <p className="text-gray-600 mb-4">
              Research reveals bidirectional communication between gut bacteria and the brain, suggesting that manipulating the microbiome could potentially influence mental health conditions. This emerging field of "psychobiotics" may lead to novel therapeutic approaches.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Reviews Neuroscience, Vol. 21, March 2020</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">CRISPR-Based Cancer Therapy</h2>
            <p className="text-gray-600 mb-4">
              Clinical trials using CRISPR-Cas9 gene editing to modify T cells for cancer immunotherapy show promising results. This approach enables precise modification of immune cells to better target and destroy cancer cells.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Medicine, Vol. 26, February 2020</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Circadian Rhythms and Metabolic Health</h3>
        <p className="text-gray-600 mb-4">
          The human body's circadian system regulates almost all aspects of physiology and behavior, including metabolism, sleep-wake cycles, and hormone release. Research shows that disruption to these natural rhythms—common in our 24/7 society—can contribute to metabolic disorders like diabetes and obesity.
        </p>
        <p className="text-gray-600 mb-4">
          A groundbreaking study published in Nature reveals how time-restricted eating patterns that align with circadian rhythms can improve metabolic markers even without changing caloric intake. These findings suggest that when we eat may be as important as what we eat for maintaining metabolic health.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Metabolism, Vol. 4, January 2022</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200">
          Immunology
        </Link>
        <Link href="#" className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200">
          Neuroscience
        </Link>
        <Link href="#" className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200">
          Genetics
        </Link>
        <Link href="#" className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200">
          Nutrition
        </Link>
        <Link href="#" className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200">
          Microbiology
        </Link>
      </div>
    </div>
  );
} 