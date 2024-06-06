import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Index.vue';
import WordChecker from '../views/WordChecker.vue';
import SymmetricNumber from '../views/SymmetricNumber.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/palindrome-word', component: WordChecker },
  { path: '/symmetric-number', component: SymmetricNumber }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
