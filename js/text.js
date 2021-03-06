class Text extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.fontWeight = 600;
    this.fontSize = 15;
    this.fontStyle = "Arial";
    this.fillStyle = 'black';
    this.textX = [];
    this.textY = [];
  }


  onMouseDown(coord, event) {
    this.textX.push(coord[0]);
    this.textY.push(coord[1]);
    this.fontStartY = this.textY[0] - this.fontSize;
    $('#textInput').css({ "display": "block", "transform": "translateY(" + coord[1] + "px) translateX(" + coord[0] + "px)", "font-size": this.fontSize + "px", "color": this.fillStyle, "font-family": this.fontStyle, "font-weight": this.fontWeight, "padding": "0", "border-style": "dotted", "opacity": "0.5" });
    if ((this.textX.length > 1) && (event.target.id != $('#textInput'))) {
      this.outputText(this.contextReal);
    }
  }
  outputText(ctx) {
    let inputText = $('#textInput').val();
    contextReal.fillText(inputText, this.textX[0], this.textY[0] + parseInt(this.fontSize));
    $('#textInput').css({ "display": "none", "transform": "translateY(0) translateX(0)"});
    $('#textInput').val('');
    this.textX = [];
    this.textY = [];
    this.onFinish();
  }
  onFinish() {
    undoObject.states[undoObject.actionCount] = new Image();
    undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
    undoObject.actionCount++;
  }
}