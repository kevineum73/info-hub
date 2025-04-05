import Link from 'next/link';

export default function SportsCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Sports</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Exercise and the Brain</h2>
            <p className="text-gray-600 mb-4">
              Research reveals that physical exercise triggers neurogenesis in the hippocampus, improving memory and cognitive function. Studies show that aerobic exercise can increase brain-derived neurotrophic factor (BDNF), a protein crucial for neural health.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Reviews Neuroscience, Vol. 19, July 2018</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sports Technology and Performance</h2>
            <p className="text-gray-600 mb-4">
              Advanced biomechanical analysis and wearable sensors are revolutionizing athletic training and performance assessment. These technologies enable precise measurement of movement patterns, physiological responses, and recovery metrics.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Electronics, Vol. 3, September 2020</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Genetics of Athletic Performance</h2>
            <p className="text-gray-600 mb-4">
              Genomic studies identify genetic variants associated with elite athletic performance and exercise response. Research indicates that traits like muscle fiber composition and cardiorespiratory fitness have significant heritable components.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Genetics, Vol. 51, May 2019</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">The Science of Endurance: Pushing Human Limits</h3>
        <p className="text-gray-600 mb-4">
          Ultra-endurance events provide a unique window into human physiological limits. Recent research published in Nature has documented remarkable adaptations in athletes completing multi-day events like the Tour de France or ultramarathons across extreme environments.
        </p>
        <p className="text-gray-600 mb-4">
          These studies reveal how the human body adapts to sustained exertion, including metabolic shifts toward fat utilization, cardiovascular remodeling, and hormonal adaptations that preserve function under extreme conditions. Perhaps most intriguing are findings suggesting that perceived effort and psychological factors may be as limiting as physiological constraints in determining human endurance capabilities.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Metabolism, Vol. 3, August 2021</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200">
          Exercise Physiology
        </Link>
        <Link href="#" className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200">
          Sports Medicine
        </Link>
        <Link href="#" className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200">
          Biomechanics
        </Link>
        <Link href="#" className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200">
          Sports Genetics
        </Link>
        <Link href="#" className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200">
          Sports Nutrition
        </Link>
      </div>
    </div>
  );
} 