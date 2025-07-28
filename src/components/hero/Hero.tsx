import React from 'react';
import { Button } from '../ui/button';
import { BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
             {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/book.png')",
            }}
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter leading-20 sm:text-5xl md:text-6xl lg:text-7xl">
                  Modern Library Management Made Simple
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Streamline your library operations with our comprehensive book management and borrowing system.
                  Perfect for schools, universities, and public libraries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/books">               
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700  cursor-pointer text-lg px-8 py-3">
                    View & Manage
                    </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-600" />
                  <span>Easy to Use</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Hero;