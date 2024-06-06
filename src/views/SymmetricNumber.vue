<template>
	<section class="p-6  text-gray-900">
		<form  action="" class="container flex flex-col mx-auto space-y-12 font-thin">	
            <h6 class="text-xl  font-semibold text-center inline-flex items-center mt-11 justify-center">Symmetric Numbers</h6>
            <router-link to="/" class="px-4 py-2 border rounded-md border-gray-800">Back Home</router-link>	 
			<fieldset class="grid grid-cols-4 mt-48 gap-6 p-6 rounded-md shadow-lg bg-white">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium ">App Flow:</p>
                    <li>User Input: The user specifies how many symmetric numbers they want to see by entering a number in the input field.</li>
					<li>Fetching Numbers: When the user clicks the "Fetch Symmetric Numbers" button, the app sends a request to the backend server with the specified count.</li>
                    <li>Backend Processing: The server generates the requested number of rotationally symmetric numbers. It checks each number to see if it reads the same when rotated 180 degrees.</li>
                    <li>Result Display: The symmetric numbers are then displayed on the screen for the user to explore.</li>
                    
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					
					<div class="col-span-full sm:col-span-12">
						<label for="number" class="text-sm">Enter Number</label>
						<input id="number" type="number"  v-model.number="count" placeholder="Number" class="w-full rounded-md focus:ring focus:ring-opacity-75   focus:ring-blue-600 border-gray-300">
					</div>
                    <div class="col-span-full sm:col-span-12">
                        <p v-if="symmetricNumbers.length" class="col-span-full">
                            <p class="font-semibold">
                                <li v-for="num in symmetricNumbers" :key="num">{{ num }}</li>
                            </p>                       
                        </p>                                               
                    </div>
                   
                    <div class="col-span-full sm:col-span-3">
                        <button type="button" @click="fetchSymmetricNumbers"  class="px-4 py-2 border rounded-md border-gray-800" :disabled="isFetchingSymmetricNumbers">
                            <span v-if="isFetchingSymmetricNumbers">Fetching...</span>
                            <span v-else>Fetch Symmetric Numbers</span>
                        </button>
                    </div>
                   
					 
				</div>
			</fieldset>
		</form>
	</section>
</template>

<script>
export default {
  data() {
    return {       
      count: 10,
      symmetricNumbers: [],
      error: null,
      isFetchingSymmetricNumbers: false
    };
  },
  methods: {
 
    async fetchSymmetricNumbers() {
      this.error = null;
      this.isFetchingSymmetricNumbers = true;
      try {
        const response = await fetch('https://palindrome-api.onrender.com/api/v1/check-symmetric', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ count: this.count }),
        });
        if (response.ok) {
            this.$toast.success('Numbers Fetched Successfully.', {
                      timeout: 5000, 
            });
        }
        else{
            this.$toast.error('An error occured, Try again later', {
                      timeout: 5000, 
            });
            throw new Error('Failed to fetch symmetric numbers');
        }
        const data = await response.json();
        this.symmetricNumbers = data.symmetricNumbers;
      } catch (error) {
        this.error = error.message;
      }
      finally {
        this.isFetchingSymmetricNumbers = false;
      }
    },
  },
};
</script>