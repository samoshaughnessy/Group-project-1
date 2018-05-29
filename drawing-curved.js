class DrawingCurved extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.actionCounter = 0;           
    }

    onMouseDown(coord, event){
        if (this.actionCounter === 0){
        this.contextReal.fillStyle = "#ffff00";
        this.contextReal.strokeStyle = "black"; 
        this.contextDraft.fillStyle = "#ffff00";
        this.contextDraft.strokeStyle = "black";  
        this.contextReal.lineWidth = 5;
        this.contextDraft.lineWidth = 5;
        this.contextReal.beginPath(); 
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.moveTo(this.origX, this.origY);
        console.log('yummy');
    }else if (this.actionCounter === 1){
    }
}

    onDragging(coord,event){
        if (this.actionCounter === 0){
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();        
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.quadraticCurveTo(cp[0], cp[1], coord[0], coord[1]); 
        this.contextDraft.fill();
        this.contextDraft.stroke();
        }

    onMouseUp()



}