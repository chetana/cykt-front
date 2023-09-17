<template>
  <div class="app">
    <h1>Exemple de saisie et d'appel API</h1>
    <div>
      <label for="inputText">Entrez une chaîne : </label>
      <input type="text" id="inputText" v-model="userInput" />
      <button @click="fetchData">Envoyer</button>
    </div>
    <div v-if="apiResponse">
      <h2>Réponse de l'API :</h2>
      <pre>{{ apiResponse }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      apiResponse: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        // Remplacez VOTRE_API_URL par l'URL de votre API
        const response = await fetch(`https://cykt-app-mef67kip3a-ew.a.run.app/chef/${this.userInput}`);
        const data = await response.json();
        this.apiResponse = data;
      } catch (error) {
        console.error('Erreur lors de la requête API :', error);
      }
    },
  },
};
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
}
</style>
