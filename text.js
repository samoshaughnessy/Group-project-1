class Text extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event){  
        addInput(event.clientX, event.clientY);
        function addInput(x, y) {
    
            var input = document.createElement('input');
            
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.left = (x - 4) + 'px';
            input.style.top = (y - 4) + 'px';
        
            input.onkeydown = handleEnter;
            
            document.body.appendChild(input);
        
            input.focus();
            
            hasInput = true;
        }
        
        function handleEnter(e) {
            var keyCode = e.keyCode;
            if (keyCode === 13) {
                drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
                document.body.removeChild(this);
                hasInput = false;
            }
        }
        
        function drawText(txt, x, y) {
            this.contextReal.textBaseline = 'top';
            this.contextReal.textAlign = 'left';
            this.contextReal.font = font;
            this.contextReal.fillText(txt, x - 4, y - 4);
        }
        
        /*this.contextReal.font = "25px Arial";
        this.contextReal.fillStyle = "red";
        this.contextReal.textAlign = "center";
        this.contextReal.fillText("Look I can fill ", coord[0], coord[1]);*/
    }


}