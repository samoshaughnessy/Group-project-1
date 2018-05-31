class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = document.getElementById('brushSize').value;
        this.contextReal.beginPath();
        this.contextReal.setLineDash([]);
        this.contextReal.moveTo(coord[0],coord[1]);
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
        this.contextReal.lineTo(x,y);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();    
    }
} 