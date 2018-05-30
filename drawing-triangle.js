class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.actionCounter = 0;
    }

    onMouseDown(coord, event) {
        if (this.actionCounter === 0) {
            this.contextReal.fillStyle = "#f44";
            this.contextReal.strokeStyle = "black";
            this.contextReal.lineWidth = 5;
            this.contextReal.beginPath();
            this.origX = coord[0];
            this.origY = coord[1];
            console.log('you want something?');
            this.actionCounter = 1;
            // above starts the triangle, your starting coord
        }
        else if (this.actionCounter === 1) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.endX = coord[0];
            this.endY = coord[1];            
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(this.endX, this.endY);
            this.contextDraft.fill();
            this.contextDraft.stroke();
            console.log('im a meseek look at me');
            this.actionCounter = 2;
        }
    }
    // code above draws the first line

    onDragging(coord, event) {
        if (this.actionCounter === 2) {
            this.posX = coord[0];
            this.posY = coord[1];
            this.contextDraft.lineTo(this.posX, this.posY);
            this.contextDraft.fill();
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            console.log('hello general kenobi')
            this.actionCounter = 3;
        }
    }

    onMouseMove(){}
    onMouseUp(coord) {
        if (this.actionCounter === 3){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY)
        this.contextReal.lineTo(this.endX, this.endY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.closePath();
        this.contextReal.fill();
        this.contextReal.stroke();
        console.log('should I be here?')  
        this.actionCounter = 0;  
        } 
    }
}