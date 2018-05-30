class DrawingCurved extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.actionCounter = 0;           
    }


    onMouseDown(coord, event){
        if (this.actionCounter === 0){
        this.contextReal.lineCap = 'round';
        this.contextDraft.lineCap = 'round';
        this.contextReal.strokeStyle = rgbaColor; 
        this.contextDraft.strokeStyle = rgbaColor;  
        this.contextReal.lineWidth = 5;
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath(); 
        this.contextReal.moveTo(this.origX, this.origY);
        console.log('yummy');
    }
    else if (this.actionCounter === 1){
    }
    }

    onDragging(coord,event){
        if (this.actionCounter === 0){
        this.endX = coord[0];
        this.endY = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.quadraticCurveTo(this.origX, this.origY, this.endX, this.endY); 
        this.contextDraft.stroke();
        } else if (this.actionCounter === 1){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
        this.contextDraft.stroke();
        }
    }

    onMouseUp(coord, event){
        if (this.actionCounter === 0){
            this.actionCounter = 1;
        } else if (this.actionCounter === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
            this.contextReal.stroke();
            this.actionCounter = 0;
    }
    }

}