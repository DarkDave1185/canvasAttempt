//****PARTICLE SETUP****//
//class information = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//this information = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//ctx information = a shorthand for the word "context". That's it.
//abs information = The abs() method returns the absolute value of a number.

//define random properties for every particle while still sharing common methods between all of them
//the first part of a class is the constructor method
//use it to store the custom properties of each particle
//also create two methods for our dots: project() and draw()

//variables
//field of view of our 3D scene
let PERSPECTIVE = width * 0.8; 
//x center of canvas
let PROJECTION_CENTER_X = width / 2; 
//y center of canvas
let PROJECTION_CENTER_Y = height / 2;
//store every particle in this array 
const dots = [];

class Square {
    //create particles on canvas
    constructor(){
        //random x position
        this.x = (Math.random()-0.5)*width;
        //random y position
        this.y = (Math.random()-0.5)*height;
        //random z position
        this.z = Math.random()*width;
        //size in 3D world
        this.radius = 10;

        //2D x coordinate
        this.xProjected = 0;
        //2D y coordinate
        this.yProjected = 0;
        //scale element in 2D(further=smaller)
        this.scaleProjected = 0;
    }
    //move particles from 2D to 3D
    project(){
        //info for element scaled to distance from screen
        this.scaleProjected = PERSPECTIVE/(PERSPECTIVE + this.z);
        //x position in 2D
        this.xProjected = (this.x*this.scaleProjected)+PROJECTION_CENTER_X;
        //y position in 2D
        this.yProjected = (this.y*this.scaleProjected)+PROJECTION_CENTER_Y;
    }
    //draw particles on string
    draw(){
        //value of the elements
        this.project();
        //particle opacity based on distance from screen
        ctx.globalAlpha = Math.abs(1-this.z/width);
        //draw rectangle based on prjected coordinates and scale
        ctx.fillReact(this.xProjected-this.radius, this.yProjected-this.radius, this.radius*2*this.scaleProjected, this.radius*2*this.scaleProjected);
    }
}

//create 750 squares
for (let i=0; i<750; i++){
    //create dots in array until 750
    dots.push(new Square());
}