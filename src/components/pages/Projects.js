import React from 'react';
import Marvel from "../../../src/assets/Marvel-Search.gif";
import JATE from "../../../src/assets/JATE.png";
import Budget from "../../../src/assets/Budget_Buddy.png";
import Password from "../../../src/assets/webscreenshot.png";
import Thoughts from "../../../src/assets/Your-Thoughts.png";
export default function Projects() {


  return (
    <div>
      <div id="project section" className="relative py-20 md:py-24 bg-gray-800">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span className="font-light">My</span> Projects
            </h2>
            <hr className="block  h-0.5 mx-auto my-5 bg-[#370043] border-[#370043]"></hr>
          </header>

          <div className="flex flex-wrap   text-center justify-items-center space-x-5 space-y-6">
            {/* item */}
            <a href="https://budget-buddy.herokuapp.com" class="block   sm:w-full flex group relative  -mx-4 text-center bg-black">
              <img
                alt="Developer"
                src={Budget}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                  Project
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">Buddget Buddy</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                      My second collaboration project, using graphs and charts. This is a financial app that helps you to keep track of your finances.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* item */}
            <a href="https://immense-river-37074.herokuapp.com" class="block  sm:w-full flex group relative  -mx-4 text-center bg-black">
              <img
                alt="Developer"
                src={JATE}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                  Project
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">JATE - Just Another Text Editor</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Take notes that save to your local cache and download
                    the app to view your notes even while not connected to
                    the internet!
                    </p>
                  </div>
                </div>
              </div>
            </a>
           
            {/* item */}
            <a href="https://github.com/Beaterok/Your-Thoughts" class="block  sm:w-full flex group relative  -mx-4 text-center bg-black">
              <img
                alt="Developer"
                src={Thoughts}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Project
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">Your Thoughts</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Creating backend using Mongoose. Able to update,create, and get users and post thoughts to the database.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* item */}
            <a href="https://beaterok.github.io/Marvel" class="block  sm:w-full flex group relative  -mx-4 text-center bg-black">
              <img
                alt="Developer"
                src={Marvel}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Project
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">Marvel Search</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    This is my first collaborating project with using fetch API.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* item */}
            <a href="https://Beaterok.github.io/Password_Generator" class=" block   sm:w-full flex group relative  -mx-4 text-center bg-black">
              <img
                alt="Developer"
                src={Password}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Project
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">Password Generator</p>

                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Generate unique passwords for your account.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
        </div>
  );
}