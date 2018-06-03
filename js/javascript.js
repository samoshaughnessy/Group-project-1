
currentFunction = new DrawingRectangle(contextReal, contextDraft);

$('#clear-button').click(() => {
});
$('#drawing-rectangle').click(() => {
  currentFunction = new DrawingRectangle(contextReal, contextDraft);

});
$('#dotted-line').click(() => {
  currentFunction = new DrawingDotted(contextReal, contextDraft);

});
$('#drawing-line').click(() => {
  currentFunction = new DrawingLine(contextReal);

});
$('#drawing-ellipse').click(() => {
  currentFunction = new DrawingEllipse(contextReal, contextDraft);
});
$('#straight-line').click(() => {
  currentFunction = new DrawingStraight(contextReal, contextDraft);
});
$('#curved-line').click(() => {
  currentFunction = new DrawingCurved(contextReal, contextDraft);
});
$('#text').click(() => {
  currentFunction = new Text(contextReal);
});
$('#triangle').click(() => {
  currentFunction = new DrawingTriangle(contextReal, contextDraft);
});
$('#rubber').click(() => {
  currentFunction = new Rubber(contextReal, contextDraft);
});

// Initialise blank canvas as undoObject's first state
undoObject.states[undoObject.actionCount] = new Image();
undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
undoObject.actionCount++;