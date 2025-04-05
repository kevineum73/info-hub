import Link from 'next/link';

export default function ArtsCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Arts</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Arts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Art and Neuroscience</h2>
            <p className="text-gray-600 mb-4">
              Neuroimaging studies reveal how visual art engages multiple brain regions simultaneously. Research shows that artistic appreciation activates not only visual processing areas but also emotional and reward circuits.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Reviews Neuroscience, Vol. 20, June 2019</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">AI in Creative Expression</h2>
            <p className="text-gray-600 mb-4">
              The emergence of artificial intelligence in artistic creation raises profound questions about creativity and authorship. Studies explore how AI systems like DALL-E and Midjourney are challenging traditional concepts of artistic expression.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Machine Intelligence, Vol. 5, March 2023</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Archaeology and Indigenous Art</h2>
            <p className="text-gray-600 mb-4">
              Advanced dating techniques reveal Australian Aboriginal rock art to be over 17,000 years old, making it among the oldest continuous art traditions in human history. The findings highlight the deep cultural significance of these artistic expressions.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Human Behaviour, Vol. 4, December 2020</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">The Science of Music: How Rhythm and Harmony Shape Our Brains</h3>
        <p className="text-gray-600 mb-4">
          The human brain's response to music offers a fascinating window into neural processing. Recent research using functional MRI has revealed that music engages nearly every region of the brain, from the cerebellum's processing of rhythm to the frontal lobe's analysis of structure and expectations.
        </p>
        <p className="text-gray-600 mb-4">
          Perhaps most intriguing is music's ability to activate the brain's reward center, releasing dopamine similar to other pleasurable experiences. This neurochemical response helps explain music's cross-cultural importance and its therapeutic potential for neurological conditions from Parkinson's to depression.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Neuroscience, Vol. 25, July 2022</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200">
          Neuroscience of Art
        </Link>
        <Link href="#" className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200">
          AI and Creativity
        </Link>
        <Link href="#" className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200">
          Cultural Heritage
        </Link>
        <Link href="#" className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200">
          Music and the Brain
        </Link>
        <Link href="#" className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200">
          Visual Perception
        </Link>
      </div>
    </div>
  );
} 