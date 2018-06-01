class DrawingEllipse extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = document.getElementById('colorpickerfill').value;
    this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextDraft.fillStyle = document.getElementById('colorpickerfill').value;
    this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
    this.contextReal.lineWidth = document.getElementById('brushSize').value;
    this.contextDraft.lineWidth = document.getElementById('brushSize').value;
    this.contextReal.beginPath();
    this.contextReal.setLineDash([]);
    this.contextDraft.setLineDash([]);
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 45 * Math.PI / 180, 0, 2 * Math.PI);
    this.contextDraft.fill();
    this.contextDraft.stroke();
  }

  onMouseMove() { }
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 45 * Math.PI / 180, 0, 2 * Math.PI);
    this.contextReal.fill();
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