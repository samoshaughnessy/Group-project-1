class DrawingStraight extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = rgbaColor;
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextReal.lineCap = "round";
        this.contextDraft.lineCap = "round";
        this.contextReal.lineWidth = 5;
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1]; 
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);  
        console.log('Does it fit?') 
    }
    onDragging(coord,event){
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}

}  