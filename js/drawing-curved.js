class DrawingCurved extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.actionCounter = 0;
  }


  onMouseDown(coord, event) {
    if (this.actionCounter === 0) {
      this.contextReal.lineCap = 'round';
      this.contextDraft.lineCap = 'round';
      this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
      this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
      this.contextReal.lineWidth = document.getElementById('brushSize').value;
      this.contextDraft.lineWidth = document.getElementById('brushSize').value;
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextReal.beginPath();
      this.contextReal.setLineDash([]);
      this.contextDraft.setLineDash([]);
      this.contextReal.moveTo(this.origX, this.origY);

    }
    else if (this.actionCounter === 1) {
    }
  }

  onDragging(coord, event) {
    if (this.actionCounter === 0) {
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(this.origX, this.origY, this.endX, this.endY);
      this.contextDraft.stroke();
    } else if (this.actionCounter === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextDraft.stroke();
    }
  }

  onMouseUp(coord, event) {
    if (this.actionCounter === 0) {
      this.actionCounter = 1;
    } else if (this.actionCounter === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextReal.stroke();
      this.onFinish();
      this.actionCounter = 0;
      this.onFinish();
    }
  }

  onFinish() {
    undoObject.states[undoObject.actionCount] = new Image();
    undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
    undoObject.actionCount++;
  }
}
