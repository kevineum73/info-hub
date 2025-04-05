import Link from 'next/link';

// Mock data for the question
const questionData = {
  id: '1',
  title: 'How do I implement authentication in a Next.js application?',
  content: `
  <p>I'm building a Next.js application and need to add user authentication. What's the best approach for implementing secure authentication with NextAuth.js?</p>
  <p>I've looked at various authentication providers like Google, GitHub, and also want to support email/password. Are there any best practices or common pitfalls I should be aware of?</p>
  <p>Additionally, how do I protect routes to ensure only authenticated users can access certain pages?</p>
  `,
  createdAt: '2023-04-05T12:00:00Z',
  updatedAt: '2023-04-05T12:00:00Z',
  authorId: '1',
  author: {
    id: '1',
    name: 'Jane Smith',
    image: null,
    reputation: 1245
  },
  tags: [
    { id: '1', name: 'next.js' },
    { id: '2', name: 'authentication' },
    { id: '3', name: 'web-development' }
  ],
  upvotes: 24,
  downvotes: 2,
  viewCount: 342,
  answers: [
    {
      id: '1',
      content: `
      <p>NextAuth.js is indeed the go-to solution for authentication in Next.js applications. Here's how to implement it:</p>
      <h3>1. Installation</h3>
      <pre><code>npm install next-auth</code></pre>
      <h3>2. Create API Route</h3>
      <p>Create a file at <code>app/api/auth/[...nextauth]/route.ts</code>:</p>
      <pre><code>
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      // Your credentials logic here
    })
  ],
  // Additional options...
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
      </code></pre>
      <h3>3. Protect Routes</h3>
      <p>Use the <code>useSession</code> hook or Server Components to protect routes:</p>
      <pre><code>
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ProtectedPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  // Your protected content
}
      </code></pre>
      <p>Hope this helps you get started!</p>
      `,
      createdAt: '2023-04-05T14:30:00Z',
      updatedAt: '2023-04-05T14:30:00Z',
      author: {
        id: '2',
        name: 'John Doe',
        image: null,
        reputation: 3456
      },
      upvotes: 42,
      downvotes: 1,
      isAccepted: true
    },
    {
      id: '2',
      content: `
      <p>To add to the previous answer, here are some best practices and common pitfalls:</p>
      <h3>Best Practices:</h3>
      <ul>
        <li>Use environment variables for all sensitive credentials</li>
        <li>Implement CSRF protection (NextAuth.js handles this for you)</li>
        <li>Set secure cookies (also handled by NextAuth.js)</li>
        <li>Use JWT or database sessions based on your needs</li>
        <li>Properly handle errors and edge cases</li>
      </ul>
      <h3>Common Pitfalls:</h3>
      <ul>
        <li>Not setting the <code>NEXTAUTH_URL</code> environment variable correctly</li>
        <li>Forgetting to add callback URLs to OAuth providers</li>
        <li>Not handling session expiration gracefully</li>
        <li>Exposing sensitive information in client-side code</li>
      </ul>
      <p>For route protection in the App Router, you can also use middleware:</p>
      <pre><code>
// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
      </code></pre>
      `,
      createdAt: '2023-04-05T15:45:00Z',
      updatedAt: '2023-04-05T15:45:00Z',
      author: {
        id: '3',
        name: 'Alex Chen',
        image: null,
        reputation: 2789
      },
      upvotes: 18,
      downvotes: 0,
      isAccepted: false
    }
  ]
};

export default function QuestionPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the question data based on params.id
  // For demo purposes, we're using the mock data
  
  const question = questionData;
  
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/explore" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to questions
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{question.title}</h1>
              <div className="text-sm text-gray-500">
                Asked {new Date(question.createdAt).toLocaleDateString()} by{' '}
                <Link href={`/users/${question.author.id}`} className="text-indigo-600 hover:text-indigo-800">
                  {question.author.name}
                </Link>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Ask a Question
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:w-16">
              <button className="text-gray-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <span className="text-lg font-bold my-2">{question.upvotes - question.downvotes}</span>
              <button className="text-gray-500 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="mt-4 text-gray-500 hover:text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            <div className="flex-1">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: question.content }} />
              
              <div className="flex flex-wrap gap-2 mt-6">
                {question.tags.map(tag => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.name}`}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{question.answers.length} Answers</h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                    <select className="text-sm border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Highest votes</option>
                      <option>Date (newest first)</option>
                      <option>Date (oldest first)</option>
                    </select>
                  </div>
                </div>

                {question.answers.map((answer) => (
                  <div key={answer.id} className={`p-6 border ${answer.isAccepted ? 'border-green-300 bg-green-50' : 'border-gray-200'} rounded-lg mb-6`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center md:w-16">
                        <button className="text-gray-500 hover:text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        <span className="text-lg font-bold my-2">{answer.upvotes - answer.downvotes}</span>
                        <button className="text-gray-500 hover:text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {answer.isAccepted && (
                          <div className="mt-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: answer.content }} />
                        
                        <div className="mt-6 flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-indigo-600 text-sm">Share</button>
                            <button className="text-gray-600 hover:text-indigo-600 text-sm">Comment</button>
                          </div>
                          <div className="text-sm text-gray-500">
                            Answered {new Date(answer.createdAt).toLocaleDateString()} by{' '}
                            <Link href={`/users/${answer.author.id}`} className="text-indigo-600 hover:text-indigo-800">
                              {answer.author.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Your Answer</h2>
                  <div className="border border-gray-300 rounded-md p-2">
                    <div className="mb-2 flex justify-between items-center border-b pb-2">
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">
                          <span className="font-bold">B</span>
                        </button>
                        <button className="px-2 py-1 border border-gray-300 rounded italic hover:bg-gray-100">
                          <span className="italic">I</span>
                        </button>
                        <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">
                          Link
                        </button>
                        <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">
                          Code
                        </button>
                        <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">
                          List
                        </button>
                      </div>
                      <button className="text-xs text-gray-600 hover:text-indigo-600">
                        Markdown supported
                      </button>
                    </div>
                    <textarea
                      rows={8}
                      className="w-full p-2 focus:outline-none"
                      placeholder="Write your answer here..."
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                      Post Your Answer
                    </button>
                  </div>
                </div>
              </div>
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