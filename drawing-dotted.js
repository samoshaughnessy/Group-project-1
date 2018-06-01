class DrawingDotted extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextReal.lineCap = "square";
        this.contextDraft.lineCap = "square";                
        this.contextReal.lineWidth = document.getElementById('brushSize').value;
        this.contextDraft.lineWidth = document.getElementById('brushSize').value;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.setLineDash([5,30]);
        this.contextDraft.setLineDash([5,30]);
        this.contextReal.moveTo(this.origX,this.origY);
        console.log('does it draw dots??')
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
    }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextReal.lineJoin = "round";
    this.contextDraft.lineJoin = "round";
    this.contextReal.lineWidth = document.getElementById('brushSize').value;
    this.contextDraft.lineWidth = document.getElementById('brushSize').value;
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextReal.beginPath();
    this.contextReal.setLineDash([5, 15]);
    this.contextReal.moveTo(this.origX, this.origY);
    console.log('does it draw dots??')
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.setLineDash([5, 15]);
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseMove() { }
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
    this.onFinish();
  }
  onMouseLeave() { }
  onMouseEnter() { }
  onFinish() {
    undoObject.states[undoObject.actionCount] = new Image();
    undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
    undoObject.actionCount++;
  }

}  