function Cat() {
    this.hello = hello;
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}

export default Cat;