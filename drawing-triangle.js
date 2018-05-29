class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.actionCounter = 0;
    }

    onMouseDown(coord, event) {
        if (this.actionCounter === 0) {
            this.contextReal.fillStyle = "#f44";
            this.contextReal.strokeStyle = "black";
            this.contextReal.lineWidth = 5;
            this.contextReal.beginPath();
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.moveTo(this.origX, this.origY)
            console.log('you want something?');
            this.actionCounter = 1;
            // above starts the triangle, you starting coord
        }
        else if (this.actionCounter === 1) {
            this.contextDraft.beginPath();
            this.endX = coord[0];
            this.endY = coord[1];            
            this.contextDraft.lineTo(this.endX, this.endY);
            this.actionCounter = 2;
        }
    }
    // code above draws the first line

    onDragging(coord, event) {
        if (this.actionCounter === 2) {
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.closePath();
            this.contextDraft.stroke();
            this.actionCounter = 0;
        }
    }

    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.lineTo(this.endX, this.endY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
}