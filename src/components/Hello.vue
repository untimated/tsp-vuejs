<template>
  <div class="hello">
    <div class="row">
      <div class="col s12 m2 l2" style="background-color:#212121;height:100%;">
        <h4>{{subhead}}</h4>
        <p>
          {{msg}}
        </p>
        <p>
          Thank you and support my github page
          http://github.untimated
        </p>
      </div>
      <div class="col s12 m10 l10" style="padding:0px;height:100%;">
        <canvas ref="vCanvas" width="500" height="300" resize></canvas>
      </div>
    </div>

  </div>
</template>

<script>
import Paper from 'paper/dist/paper-full'

export default {
  name: 'hello',
  data () {
    return {
      subhead: 'Patch Note',
      msg: 'Simply choose algorithm to simulate the traveling salesman problem and run the graph construction module. The Current version support greedy,2-opt and genetic approach.'
    }
  },
  mounted: function () {
    var canvas = this.$refs.vCanvas
    canvas.style.backgroundColor = 'black'
    Paper.setup(canvas)
    var path = new Paper.Path.Rectangle([500, 300], [100, 100])
    path.strokeColor = 'white'
    var path2 = new Paper.Path.Rectangle([500, 300], [100, 100])
    path2.strokeColor = 'yellow'
    Paper.view.onFrame = function (event) {
      // On each frame, rotate the path by 3 degrees:
      path.rotate(3)
      path2.rotate(-3)
    }
  }
}
</script>

<style scoped>
.hello{
  height:100%;
  margin: 0px;
}
.row{
  padding: 0px;
  height:100%;
}
p, h4 {
  color: #BDBDBD;
}
canvas[resize] {
  width: 100%;
  height: 100%;
}
</style>
