import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

const app = createApp(App);

// Configuration d'Axios avec les paramètres CORS
axios.defaults.baseURL = 'https://cykt-app-mef67kip3a-ew.a.run.app'; // Remplacez par l'URL de votre API
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost'; // Remplacez par l'origine autorisée
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Méthodes autorisées
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'; // En-têtes autorisés

// Vous pouvez également ajouter des en-têtes d'authentification ici si nécessaire

app.config.globalProperties.$axios = axios;

app.mount('#app');
