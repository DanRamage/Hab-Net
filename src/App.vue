<template>
  <div id="app">
    <router-link :to="{name: 'HomePage'}"></router-link>
    <router-link :to="{name: 'Residents'}"></router-link>
    <router-view></router-view>

    <!--
    <component :is="activePage"></component>
    -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import HomePage from './components/home-page'

export default {
  name: 'App',
  data () {
    return {
      //activePage: 'HomePage'
    }
  },

  components: {
    //HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100% !important;
}

.montserat-font {
  font-family: 'Montserrat';

}
.font-avenir {
  font-family: 'Avenir';
}
.avenir-font-light {
  font-family: 'Avenir';
  font-weight: lighter;
}

.blue-background-color {
  background-color: #2d5b92;
}
.sidebar-background-color {
  background-color: #1483b7;
}
.text-blue {
  color: rgba(0, 61, 126, .85);
}

</style>
