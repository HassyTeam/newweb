"use client"

import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [funnyImage, setFI] = useState(false);

  function coolButton() {
    setFI(true)
  }

  return (
    <main className="bg-white dark:bg-gray-800 antialiased">
      { /* Hero */ }
      <section className="bg-gradient-to-br from-[#B42ECA] to-[#B29600] min-h-screen grid place-items-center">
          {funnyImage ? <Image alt="pöö" src="/img/hassy.png" fill /> : ""}
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            {
              /*

              Announcement alert

              <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                  <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Important</span> <span className="text-sm font-medium">SOME SHIT HAPPENED</span> 
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
              */
            }
              <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-8xl text-white">We are Hassy Team™</h1>
              <p className="mb-8 text-xl font-normal lg:text-2xl sm:px-16 xl:px-48 text-gray-300">A (very cool) small development team from finland</p>
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <Link href="/callmemaybe" className="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 hover:shadow-md hover:shadow-primary-800">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" clip-rule="evenodd"></path></svg>
                      Contact us
                  </Link>
                  <a onClick={coolButton} href="#" className="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-md">
                      super cool button plz press me
                  </a>  
              </div>
          </div>
      </section>

      <Projects />
      <hr />
      <Footer />
    </main>
  );
}
