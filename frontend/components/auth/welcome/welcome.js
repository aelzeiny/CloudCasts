import Particle from './particle';
import BoundingBox from './boundingbox';

// Particle Generation Constants
const PARTICLE_COUNT = 100;

const PARTICLE_RADIUS_MIN = 2;
const PARTICLE_RADIUS_MAX = 4;

const PARTICLE_VELOCITY_MIN = .005;
const PARTICLE_VELOCITY_MAX = .02;

const RADIUS_CIRCLE_INNER = 150;

class Welcome {
  constructor(width, height) {
    this.setSize(width, height);
    this._generateParticles();
    this.mousePos = [0,0];
    this.currentTime = new Date().getTime();
    this.mouseHover = false;
  }

  setSize(width, height) {
    this.dim = [width, height];
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {
      this.setSize(canvasEl.width, canvasEl.height);
      this.update();

      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      this.draw(ctx);
      requestAnimationFrame(animateCallback);
    };
    animateCallback();
  }

  update() {
    const delta = new Date().getTime() - this.currentTime;
    this._update(delta);
    this.currentTime += delta;
  }

  draw(ctx) {
    // draw paritcles
    for(let i=0;i<this.particles.length;i++)
      this.particles[i].draw(ctx);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = .8;
    // Draw Links
    let highlight = (this.mouseHover) ? this.mousePos : [this.dim[0]/2, this.dim[1]/2];
    // this._drawMouse(ctx, highlight);
    const inner = this._getNearbyLinks(highlight);
    for(let i=0;i<inner.length;i++) {
      let from = inner[i];
      for(let j=0;j<inner.length;j++) {
        if(i === j)
          continue;
        this._line(ctx, from, inner[j])
      }
    }

    ctx.lineWidth = .5;
    for(let x=0;x<inner.length;x++) {
      const box = new BoundingBox(inner[x][0], inner[x][1], RADIUS_CIRCLE_INNER);
      for(let i=0;i<this.particles.length;i++) {
        if(box.contains(this.particles[i].pos))
          this._line(ctx, inner[x], this.particles[i].pos);
      }
    }
  }

  _line(ctx, from, to) {
    ctx.beginPath();
    ctx.moveTo(from[0],from[1]);
    ctx.lineTo(to[0],to[1]);
    ctx.stroke();
  }

  _drawMouse(ctx, highlight) {
    // draw mouse
    ctx.beginPath();
    ctx.arc(
      highlight[0], highlight[1],
      RADIUS_CIRCLE_INNER, 0, 2 * Math.PI, false);

    ctx.fillStyle = 'limegreen';
    ctx.fill();
    ctx.closePath();
  }

  _update(delta) {
    // (1) Update all particles based on time elapsed between frames
    // (not frame-rate for consistency)
    // update particle positions
    for(let i=0;i<this.particles.length;i++) {
      let particle = this.particles[i];
      particle.update(delta);

      // bounce particles in X & Y axes
      for(let i=0;i<this.dim.length;i++) {
        // If particle is out-of-bounds in a certain axis
        let j = (i + 1) % this.dim.length;
        if(particle.pos[i] < 0) {
          particle.pos[i] = 0; // constrain current axis to bounds
          particle.velo[i] *= -1; // bounce other axis velocity
        }
        else if(particle.pos[i] > this.dim[i]) {
          particle.pos[i] = this.dim[i]; // constrain current axis to bounds
          particle.velo[i] *= -1; // bounce other axis velocity
        }
      }
    }
  }

  _getNearbyLinks(hightlight) {
    const innerBox = new BoundingBox(hightlight[0], hightlight[1], RADIUS_CIRCLE_INNER);

    // Strong connections with inner particles
    const innerParticles = [];

    for(let i=0;i<this.particles.length;i++) {
      if(innerBox.contains(this.particles[i].pos))
        innerParticles.push(this.particles[i].pos);
    }

    return innerParticles;
  }

  _generateParticles() {
    this.particles = new Array(PARTICLE_COUNT);
    for(let i=0; i<this.particles.length; i++) {
      // randomize position
      this.particles[i] = new
        Particle(
          Math.random() * this.dim[0],
          Math.random() * this.dim[1],
          Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN
      );

      this.particles[i].setVelocity(
        Math.random() * (PARTICLE_VELOCITY_MAX - PARTICLE_VELOCITY_MIN) + PARTICLE_VELOCITY_MAX,
        Math.random() * (PARTICLE_VELOCITY_MAX - PARTICLE_VELOCITY_MIN) + PARTICLE_VELOCITY_MAX
      );
    }
  }

  mouseMove(rect, evt) {
    this.mousePos[0] = evt.clientX - rect.left;
    this.mousePos[1] = evt.clientY - rect.top;
  }
}

export default Welcome;
