
$('#clear-button').on("click", function () {
    contextReal.fillStyle = "white";
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.fillStyle = "white";
    contextDraft.fillRect(0, 0, canvasReal.width, canvasReal.height); 

})