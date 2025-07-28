import React from 'react';

const States = () => {
    return (
        <div  className="bg-cover bg-fixed  bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/states.jpg')",
            }}>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-white/5 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-3">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-emerald-600">10,000+</div>
                <div className="text-xl font-semibold">Books Managed</div>
                <p className="text-gray-600">Average library capacity supported by our system</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-emerald-600">500+</div>
                <div className="text-xl font-semibold">Libraries Served</div>
                <p className="text-gray-600">Educational institutions and public libraries worldwide</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-emerald-600">99.9%</div>
                <div className="text-xl font-semibold">Uptime</div>
                <p className="text-gray-600">Reliable service you can count on every day</p>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default States;