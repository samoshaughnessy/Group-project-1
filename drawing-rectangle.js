class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
<<<<<<< HEAD
        this.contextReal.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value; 
=======
        this.contextReal.fillStyle = rgbaColor;
        this.contextReal.strokeStyle = "black"; 
>>>>>>> b0d8097a2f6572a41ddddb39feb5ecb21b2617dc
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
        console.log('you clicked?');
    }

    onDragging(coord,event){       
<<<<<<< HEAD
        this.contextDraft.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value; 
=======
        this.contextDraft.fillStyle = rgbaColor;
        this.contextDraft.strokeStyle = "black"; 
>>>>>>> b0d8097a2f6572a41ddddb39feb5ecb21b2617dc
        this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();        
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);        
        this.contextDraft.fill(); 
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);        
        this.contextReal.fill();        
        this.contextReal.stroke();
        this.contextReal.closePath();

    }
    
    onMouseLeave(){}
    onMouseEnter(){}
}