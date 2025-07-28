import React from 'react';
import { Button } from '../ui/button';
import { BarChart3, BookOpen, Calendar } from 'lucide-react';
import { Input } from '../ui/input';

const Features = () => {
    return (
        <div className=''>
       

          {/* Features Section */}
          <div className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white'>
            <section id="features" className="mx-auto max-w-7xl px-3">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2">
                    <div className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                    Core Features
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Simple & Powerful Library Management
                    </h2>
                    <p className="max-w-[700px] text-gray-600 md:text-lg">
                    Everything you need to manage your library efficiently with our intuitive interface.
                    </p>
                </div>
                </div>

                <div className="">
                {/* Left Side - Feature Cards */}
                    <div className="space-y-8 grid grid-cols-2 gap-6">
                    {/* Add Books */}
                    <div className="relative group">
                    <div className=" bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl transition-all duration-500"></div>
                    <div className="relative  rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                            <div className=" bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="relative p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="h-7 w-7 text-white" />
                            </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Add Books</h3>
                                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                                Essential
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Seamlessly add new books to your collection with intelligent ISBN scanning and auto-complete
                                features.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>Instant cataloging</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Bulk import</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-emerald-600">1,247</div>
                            <div className="text-xs text-gray-500">Books added</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Edit Books */}
                    <div className="relative group">
                    <div className=" bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative  rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                            <div className=" bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="relative p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                                </svg>
                            </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Edit Books</h3>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                Popular
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Update book information, modify availability status, and maintain accurate collection data
                                effortlessly.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Real-time updates</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span>Version history</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">89%</div>
                            <div className="text-xs text-gray-500">Usage rate</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Delete Books */}
                    <div className="relative group">
                    <div className=" bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative  rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                            <div className=" bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="relative p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                                </svg>
                            </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Delete Books</h3>
                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                Secure
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Safely remove outdated or damaged books with confirmation protocols and archive options.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>Safe deletion</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>Archive backup</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-red-600">156</div>
                            <div className="text-xs text-gray-500">Books archived</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Borrow Books */}
                    <div className="relative group">
                    <div className=" bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative  rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                            <div className=" bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="relative p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="h-7 w-7 text-white" />
                            </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Borrow Books</h3>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                                Core
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Streamlined checkout process with automated due dates, member verification, and instant
                                notifications.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Quick checkout</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>Auto reminders</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-purple-600">342</div>
                            <div className="text-xs text-gray-500">Active loans</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Summary of Borrowed Books */}
                </div>
                    <div className="flex justify-center mt-4 lg:w-[60%] mx-auto">
                    <div className=" bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl  transition-all duration-500"></div>
                    <div className="relative  rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                            <div className=" bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="relative p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <BarChart3 className="h-7 w-7 text-white" />
                            </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Borrow Summary</h3>
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                                Analytics
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Comprehensive reports and analytics of borrowing patterns, member activity, and collection
                                performance.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Real-time data</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span>Export reports</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-lg font-bold text-orange-600">95%</div>
                            <div className="text-xs text-gray-500">Return rate</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Right Side - Multiple Images with Styling */}
                    {/* <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
              
                        <div className="col-span-2 relative">
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 shadow-lg">
                            <img
                                src="/images/book-5.jpg"
                                alt="Library Management Dashboard"
                                className="w-full h-48 object-cover rounded-xl shadow-md"
                            />
                            </div>
                        </div>

                        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-3 shadow-md">
                            <img
                                src="/images/book-3.webp"
                                alt="Book Management Interface"
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            </div>
                        </div>

                       
                        <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-3 shadow-md">
                            <img
                                src="/images/book-4.webp"
                                alt="Borrowing System Interface"
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            </div>
                        </div>

                        <div className="col-span-2 relative transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-3 shadow-md">
                            <img
                                src="/images/book-2.webp"
                                alt="Analytics and Reports"
                                className="w-full h-24 object-cover rounded-lg"
                            />
                            </div>
                        </div>
                        </div>

                       
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    </div> */}
                </div>
            </div>
            </section>
          </div>

        {/* Stats Section */}
      

        {/* CTA Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Library?
                </h2>
                <p className="mx-auto max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of libraries already using LibraryPro to streamline their operations and improve user
                  experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-white" />
                  <Button type="submit" variant="secondary">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-emerald-100">Start your 30-day free trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default Features;