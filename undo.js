var undoObject = {
  states: [],
  actionCount: 0,
  savePoint: 0,
  undoAction: function () {
    if (undoObject.actionCount > 1) {
      undoObject.actionCount--;
      undoObject.savePoint = undoObject.actionCount;

      contextReal.fillStyle = "white";
      contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

      contextReal.drawImage(undoObject.states[undoObject.actionCount - 1], 0, 0);
    }
  },

  redoAction: function () {
    if (undoObject.actionCount < undoObject.states.length && undoObject.actionCount == undoObject.savePoint) {
      undoObject.actionCount++;
      undoObject.savePoint++;

      contextReal.fillStyle = "white";
      contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

      contextReal.drawImage(undoObject.states[undoObject.actionCount - 1], 0, 0);
    } else if (undoObject.actionCount != undoObject.savePoint) {
      undoObject.states.splice(undoObject.actionCount);
      undoObject.savePoint = undoObject.actionCount;
    }
  }
}

let undoButton = document.getElementById('undo');
undoButton.addEventListener('click', function() {
  undoObject.undoAction();
  console.log('did I work?')
});

let redoButton = document.getElementById('redo');
redoButton.addEventListener('click', function() {
  undoObject.redoAction();
  console.log('did I work yet?')
});


