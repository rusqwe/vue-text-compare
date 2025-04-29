<template>
  <div id="nav">
    <router-link to="/">Сравнение текстов онлайн</router-link> |
    <router-link to="/prefix">Добавление префиксов</router-link> |
    <router-link to="/speller">Проверка орфографии онлайн</router-link>
  </div>
  <router-view/>
</template>

<style>


#nav {
  padding: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(52, 104, 160);
}
</style>
