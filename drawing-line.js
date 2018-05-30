class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }
    
    onMouseDown(coord,event){
<<<<<<< HEAD
        this.context.strokeStyle = document.getElementById('colorpickerstroke').value; ;
=======
        this.context.strokeStyle = rgbaColor;
>>>>>>> b0d8097a2f6572a41ddddb39feb5ecb21b2617dc
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        console.log('drawing?')
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