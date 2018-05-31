class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value; 
        this.contextReal.lineWidth = document.getElementById('brushSize').value;
        this.contextReal.beginPath();
        this.contextReal.setLineDash([]);
        this.contextDraft.setLineDash([]);
        this.origX = coord[0];
        this.origY = coord[1];
        console.log('you clicked?');
    }

    onDragging(coord,event){       
        this.contextDraft.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value; 
        this.contextDraft.lineWidth = document.getElementById('brushSize').value;
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