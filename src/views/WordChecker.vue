<template>
	<section class="p-6  text-gray-900">
		<form  action="" class="container flex flex-col mx-auto space-y-12 font-thin">	
            <h6 class="text-xl  font-semibold text-center inline-flex items-center mt-11 justify-center">Palindrome Word Checker</h6>
            <router-link to="/" class="px-4 py-2 border rounded-md border-gray-800">Back Home</router-link>	 
			<fieldset class="grid grid-cols-4 mt-48 gap-6 p-6 rounded-md shadow-lg bg-white">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium ">App Flow:</p>
                    <li>When the user clicks the "Check" button, the app sends the word to the backend server.</li>
					<li>Backend Processing: The server reverses the word and checks if the reversed word matches the original word.</li>
                    <li>Result Display: The result is then displayed on the screen, indicating whether the word is a palindrome or not.</li>
                    <li>Suggestions: If the word is a palindrome, the app also suggests five random palindrome words to the user.</li>
                    
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					
					<div class="col-span-full">
						<label for="word" class="text-sm">Input Word</label>
						<textarea id="word"  v-model="word" placeholder="Enter a Word" class="w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-blue-600 border-gray-300" data-gramm="false" wt-ignore-input="true"></textarea>
					</div>
                    <div v-if="result !== null" class="col-span-full">
						<p class="font-semibold">
                            The word <strong>"{{ result.word }}"</strong> is <strong>{{ result.isPalindrome ? 'indeed' : 'not' }}</strong> a palindrome.
                        </p>
                        <p>
                            Original: {{ result.word }}<br>
                            Reversed: {{ result.reversedWord }}
                        </p><br/>
                        <p v-if="result">
                            Here are 5 random palindrome words:
                        </p>
                        <ul v-if="result">
                            <p v-for="palindrome in result.randomPalindromes" :key="palindrome">{{ palindrome }}</p>
                        </ul>
					</div>
                    <div class="col-span-full sm:col-span-3">
						<button type="button" @click="checkPalindrome" class="px-4 py-2 border rounded-md border-gray-800">Check</button>
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
      word: '',
      result: null,      
      error: null
    };
  },
  methods: {
    async checkPalindrome() {
      this.error = null;
      try {
        const response = await fetch('http://localhost:5000/api/v1/check-word', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ word: this.word }),
        });
        if (response.ok) {
            this.$toast.success('Word Checked Successfully.', {
                  timeout: 5000, 
            });
        }
        else{
          this.$toast.error('An error occured, Try again later', {
                      timeout: 5000, 
            });
          throw new Error('Failed to check palindrome');
        }
        const data = await response.json();
        this.result = data;
      } catch (error) {
        this.error = error.message;
      }
    },
    
  },
};
</script>