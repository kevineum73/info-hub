import Link from 'next/link';

// Mock data for demo
const categories = [
  { id: 1, name: 'Technology', count: 1243, color: 'bg-blue-100 text-blue-800' },
  { id: 2, name: 'Science', count: 856, color: 'bg-green-100 text-green-800' },
  { id: 3, name: 'Health', count: 753, color: 'bg-red-100 text-red-800' },
  { id: 4, name: 'Business', count: 642, color: 'bg-yellow-100 text-yellow-800' },
  { id: 5, name: 'Arts', count: 421, color: 'bg-purple-100 text-purple-800' },
  { id: 6, name: 'Education', count: 389, color: 'bg-indigo-100 text-indigo-800' },
  { id: 7, name: 'History', count: 267, color: 'bg-gray-100 text-gray-800' },
  { id: 8, name: 'Sports', count: 198, color: 'bg-orange-100 text-orange-800' },
];

const trendingTopics = [
  { id: 1, name: 'Machine Learning', count: 245 },
  { id: 2, name: 'React.js', count: 198 },
  { id: 3, name: 'COVID-19 Research', count: 176 },
  { id: 4, name: 'Climate Change', count: 154 },
  { id: 5, name: 'Nutrition', count: 132 },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            InfoHub
          </Link>
          <div className="flex space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-indigo-600">
              Log in
            </Link>
            <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Knowledge</h1>
          <p className="text-gray-600">
            Discover topics, questions, and articles from our community of experts and enthusiasts.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for topics, questions, or articles..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 text-center"
                >
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${category.color} mb-2`}>
                    {category.count} questions
                  </span>
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                </Link>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-6">Recent Questions</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    <Link href={`/questions/${i}`} className="text-indigo-600 hover:text-indigo-800">
                      How do I implement authentication in a Next.js application?
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I'm building a Next.js application and need to add user authentication. What's the best approach for implementing secure authentication with NextAuth.js?
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Next.js
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Authentication
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">Asked 2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Trending Topics</h2>
              <ul className="space-y-4">
                {trendingTopics.map((topic) => (
                  <li key={topic.id}>
                    <Link href={`/topics/${topic.id}`} className="text-indigo-600 hover:text-indigo-800 flex justify-between">
                      <span>{topic.name}</span>
                      <span className="text-gray-500">{topic.count} posts</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Users</h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      U{i}
                    </div>
                    <div>
                      <Link href={`/users/${i}`} className="text-gray-900 font-medium hover:text-indigo-600">
                        User {i}
                      </Link>
                      <p className="text-gray-500 text-sm">Reputation: {1000 - i * 100}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InfoHub</h3>
              <p className="text-gray-300">
                A platform for sharing knowledge and finding answers to your questions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">© 2023 InfoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 