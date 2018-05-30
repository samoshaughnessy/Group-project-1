     /* let  saveImage = function (link, canvasId, filename) {
            link.href = document.getElementById(canvasId).toDataURL();
            link.download = filename;
            
            saveImage(this, 'canvas-real', 'image.png');
            console.log('I saved?');
      }*/
     let button = document.getElementById('download');
      button.addEventListener('click', function() {
        var dataURL = canvasReal.toDataURL('image/png');
        button.href = dataURL;
        console.log('why wont I work?')
      });


