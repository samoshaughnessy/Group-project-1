class DrawingStraight extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextReal.lineCap = "round";
    this.contextDraft.lineCap = "round";
    this.contextReal.lineWidth = document.getElementById('brushSize').value;
    this.contextDraft.lineWidth = document.getElementById('brushSize').value;
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextReal.beginPath();
    this.contextReal.setLineDash([]);
    this.contextDraft.setLineDash([]);
    this.contextReal.moveTo(this.origX, this.origY);
    console.log('Does it fit?')
  }
  onDragging(coord, event) {
    this.contextDraft.closePath();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
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