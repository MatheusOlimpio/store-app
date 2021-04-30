<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: { TheHeader, TheFooter },
};
</script>


<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style-type: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #345;
  background: url(./assets/pattern.svg) repeat top;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

main {
  flex: 1;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.4);
  border-color: #87f;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
</style>
