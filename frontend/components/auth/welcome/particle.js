
class Particle {
  constructor(x, y, radius) {
    this.pos = [x,y];
    this.velo = [0,0];
    this.radius = radius;
  }

  setVelocity(x,y) {
    this.velo = [x,y];
    for(let i=0;i<this.velo.length;i++)
      if(Math.random() < .5)
        this.velo[i] *= -1;
  }

  update(delta) {
    // position_f = velocity * deltaTime + position_i
    for(let i=0;i<this.pos.length;i++)
      this.pos[i] += this.velo[i] * 16;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1],
      this.radius, 0, 2 * Math.PI, false);

    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

}

export default Particle;
