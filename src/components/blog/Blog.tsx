import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                  Latest Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Our Library Blog</h2>
                <p className="max-w-[700px] text-gray-600 md:text-lg">
                  Stay updated with the latest trends, tips, and news in library management and technology.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <img
                  src="/images/book-1.webp"
                  alt="Blog Post Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Technology
                    </span>
                    <span>• July 25, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
                    The Future of Libraries in a Digital Age
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    Explore how modern technology is transforming traditional libraries into dynamic learning hubs. From
                    digital archives to AI-powered recommendations, discover what's next.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/person-1.jpg"
                        alt="Author Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>By Jane Doe</span>
                    </div>
                    <Link to="/" className="text-emerald-600 hover:underline text-sm font-medium">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <img
                  src="/images/book-10.webp"
                  alt="Blog Post Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      Management
                    </span>
                    <span>• July 20, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
                    5 Essential Tips for Efficient Book Inventory
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    Learn practical strategies to optimize your library's book inventory, reduce loss, and improve
                    accessibility for your patrons.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/person-2.jpg"
                        alt="Author Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>By John Smith</span>
                    </div>
                    <Link to="/" className="text-emerald-600 hover:underline text-sm font-medium">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <img
                  src="/images/book-2.webp"
                  alt="Blog Post Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      Trends
                    </span>
                    <span>• July 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
                    Understanding Modern Book Borrowing Habits
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    Dive into the latest data on how patrons are interacting with library collections, from e-books to
                    physical copies. Marge with you thinking and boost that.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/person-3.jpg"
                        alt="Author Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>By Emily White</span>
                    </div>
                    <Link to="/" className="text-emerald-600 hover:underline text-sm font-medium">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Blog;