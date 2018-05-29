class DrawingTriangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = "#f44";
        this.contextReal.strokeStyle = "black"; 
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.moveTo(this.origX, this.origY)
        console.log('you want something?');
    }

    onDragging(coord, event){
        this.endX = coord[0];
        this.endY = coord[1];
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(this.endX, this.endY);
    }

    onMouseUp(coord, event){
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(this.endX, this.endY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
        




    }


}