import Link from 'next/link';

export default function EducationCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/explore" className="text-indigo-600 hover:text-indigo-800">Explore</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Education</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Education</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based Teaching Strategies</h2>
            <p className="text-gray-600 mb-4">
              Cognitive science research reveals that active learning techniques significantly improve student performance compared to traditional lectures. Studies demonstrate up to 50% reduction in failure rates across STEM subjects.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature, Vol. 523, May 2015</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Digital Education Transformation</h2>
            <p className="text-gray-600 mb-4">
              The pandemic accelerated adoption of educational technology, but research shows significant disparities in outcomes. Studies identify key factors for successful online learning environments, emphasizing the importance of interaction and engagement.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Human Behaviour, Vol. 5, February 2021</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Diversity in STEM Education</h2>
            <p className="text-gray-600 mb-4">
              Analysis of interventions to increase diversity in science, technology, engineering and mathematics reveals that mentorship programs and representation significantly impact participation rates among underrepresented groups.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Nature Reviews Psychology, Vol. 1, April 2022</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">The Neuroscience of Learning: Implications for Education</h3>
        <p className="text-gray-600 mb-4">
          Recent advances in neuroscience are transforming our understanding of how learning occurs at the neurobiological level. Research using techniques such as functional neuroimaging and electrophysiological recordings has revealed that learning involves complex interactions between various brain regions, particularly the hippocampus, prefrontal cortex, and amygdala.
        </p>
        <p className="text-gray-600 mb-4">
          One particularly significant finding is the importance of spaced repetition and retrieval practice in forming lasting memories. Studies show that distributing learning over time and actively recalling information strengthens neural connections, leading to more durable learning than passive study or cramming. These insights are beginning to influence educational practices, with schools implementing evidence-based approaches to maximize learning efficiency.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Nature Reviews Neuroscience, Vol. 23, September 2022</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="#" className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200">
          Cognitive Science
        </Link>
        <Link href="#" className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200">
          Educational Technology
        </Link>
        <Link href="#" className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200">
          STEM Education
        </Link>
        <Link href="#" className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200">
          Learning Psychology
        </Link>
        <Link href="#" className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200">
          Educational Neuroscience
        </Link>
      </div>
    </div>
  );
} 