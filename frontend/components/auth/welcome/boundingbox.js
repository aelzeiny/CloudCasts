class BoundingBox {
  constructor(centerX, centerY, radius){
    this.x = centerX - radius;
    this.y = centerY - radius;
    this.right = centerX + radius;
    this.top = centerY + radius;
  }

  contains(point) {
    return point[0] >= this.x && point[0] <= this.right &&
      point[1] >= this.y && point[1] <= this.top;
  }
}

export default BoundingBox;
