// class ClearButton extends PaintFunction {
//     constructor(contextReal, contextDraft) {
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;
//     };
// };

$('#clear-button').on("click", function () {
    contextReal.fillStyle = "#06604b";
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    // contextDraft.fillStyle = "white";
    // contextDraft.fillRect(0, 0, canvasReal.width, canvasReal.height); 

    // increment undo action count
    undoObject.states[undoObject.actionCount] = new Image();
    undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
    undoObject.actionCount++;
})
