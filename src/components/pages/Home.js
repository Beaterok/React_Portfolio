import React from "react";
import me from "../../assets/me.jpg";
export default function Home() {
  return (
    <div>
      <div id="overview" className="relative pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 mb-12 md:mb-16">
            <div
              className="flex-shrink w-full max-w-full md:w-1/2 md:order-2 px-12 lg:px-16 text-center"
            >
              <img
                src={me}
                className="mx-auto max-w-full h-auto"
                alt="me"
              ></img>
            </div>
            <div
              className="flex-shrink w-full max-w-full md:w-1/2 md:order-1 px-4 self-center"
            >
              <div className="mt-0 pt-6 text-center">
                <h1 className="text-2xl md:text-3xl leading-normal mb-2 font-semibold text-white">
                  About Me
                </h1>
                <hr className="block w-12 h-0.5 mx-auto my-5 bg-red-500 border-red-500"></hr>
              </div>
              <p className="text-gray-100 leading-relaxed font-light text-xl mx-auto pb-2 mt-4">
                Hi!
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl leading-normal mb-2 font-semibold text-white text-center">
        Technologies I Know:
      </h1>
      <div
        id="features"
        className="relative pt-20 pb-8 md:pt-24 md:pb-12 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 items-center justify-around ">
            {/* list start */}
            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    HTML
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    TailwindCSS
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    Javascript
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    Node.js
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    Express
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    MySQL
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    Sequelize
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    MongoDB
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full px-4 lg:w-1/2">
              <div className="p-6 bg-white mx-4 mb-12 rounded shadow">
                <div className="flex rounded items-center ltr:pl-4 ltr:pr-1 md:ltr:pl-1 md:ltr:pr-1 rtl:pr-4 rtl:pl-1 md:rtl:pr-1 md:rtl:pl-1 py-2 bg-white">
                  <img
                    src=""
                    className="w-10 h-10 mr-4 rtl:ml-4 inline-block"
                    alt="icon"
                  ></img>
                  <h3 className="text-xl leading-normal font-semibold mb-0">
                    React
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}