<template>
    <section class="relative pt-16 bg-blueGray-50 font-thin">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg">
                <blockquote class="relative p-8 mb-4">
                 
                  <h4 class="text-xl font-bold text-white">
                    Palindrome Word Checker
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Palindrome Word Checker is a simple yet powerful feature of our app that allows users to determine if a given word is a palindrome. A palindrome is a word that reads the same backward as forward, such as "civic" or "madam".
                  </p>
                </blockquote>
              </div>
            </div>
        
            <div class="w-full md:w-6/12 px-4">
              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-sitemap"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Palindrome Word Checker</h6>
                      <p class="mb-4 text-blueGray-500">
                       This feature of our app that allows users to determine if a given word is a palindrome.                       
                      </p>
                      <router-link to="/palindrome-word" class="self-start px-5 py-3 text-lg  rounded-2xl bg-blue-600 mt-3 text-gray-50">Get started</router-link>
                    </div>
                  </div>
                 
                </div>
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col min-w-0 mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-newspaper"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Symmetric Numbers</h6>
                      <p class="mb-4 text-blueGray-500">
                         These are numbers that look the same when rotated 180 degrees, such as 1961 and 6009.                         
                      </p>
                      <router-link to="/symmetric-number" class="self-start px-5 py-3 text-lg  rounded-2xl bg-blue-600 mt-3 text-gray-50">Get started</router-link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
       
        </section>
</template>