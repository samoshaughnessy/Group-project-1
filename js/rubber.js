class Rubber extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = "white";
        this.context.lineJoin = "round";
        this.context.lineWidth = document.getElementById('brushSize').value;
        this.context.beginPath();
        this.context.setLineDash([]);
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        console.log('rubbing??')
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
} 