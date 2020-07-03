//**** RENDERING ANIMATION ****/

function render(){
    //clear canvas from left to bottom right
    ctx.clearReact(0, 0, width, height);
    //loop through dots array
    for(var i = 0; i<dots.length; i++){
    //draw element
    dots[i].draw();
    }
//render once ready
window.requestAnimationFrame(render);
}