import { ref } from 'vue'
import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  
  const user = ref(null); // Define email in the store's state
  
  return {
    user, // Expose email as a store property
  };
});