<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <a href="#" class="brand-logo center" style="font-family: 'Exo 2', sans-serif;">{{navTitle}}</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/#/">Home</a></li>
          <li><a href="/#/greedy">Greedy</a></li>
          <li><a href="badges.html">2-Opt</a></li>
          <li><a href="collapsible.html">Genetic</a></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      navTitle: 'Traveling Salesman Visualizer'
    }
  }
}
</script>

<style scoped>
ul li a:hover{
  color: #00BCD4;
}
</style>
