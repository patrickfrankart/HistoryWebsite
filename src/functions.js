function Image(url, alt, caption){
    this.url = url;
    this.alt = alt;
    this.caption = caption;
    
    this.setUrl = function(s){
      this.url = s;
    }
    this.setAlt = function(s){
      this.alt = s;
    }
    this.setCaption = function(s){
      this.caption = s;
    }
    this.getUrl = function(s){
      return this.url;
    }
    this.getAlt = function(s){
      return this.alt;
    }
    this.getCaption = function(s){
      return this.caption;
    }
}


function createImageArray(){
    var imgArray = new Array();
    
    for(let i = 1; i <= 62; ++i){ 
        imgArray[i] = new Image();
        var path = "../images/WWII_Korea_0" + i + ".jpg";
        imgArray[i].setUrl(path);
        imgArray[i].setCaption("");
        imgArray[i].setAlt("");
        
    }
    
    return imgArray;
}

function setDisplay(images){
  var photo = document.getElementById("photo");
	var temp = images[1];
	photo.src = temp.url;
	photo.alt = temp.alt;
	photo.caption = temp.caption;

}

function advanceImage(back){
    if(back){
        index = (index-1)%images.length;
        if(index === 0){
            index = images.length-1;
        }
    }
    else{
        index = (index+1)%images.length;
    }
    if(index === 0){
        index = 1;
    }
    var photo = document.getElementById('photo');
    var replace = images[index];
    photo.src = replace.url;
    photo.alt = replace.alt;
    photo.caption = replace.caption;
    //magnify("photo", 3);
    var number = document.getElementById('number');
    number.innerText = '' + index;
    console.log(index);
}


/*
Works Cited:
https://www.w3schools.com/howto/howto_js_image_zoom.asp
https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
*/


function magnify(img, scale){
  var photo = document.getElementById(img);
  var lens = document.getElementById('zoom');
  lens.style.height =  500 + "px";
  lens.style.width = 500 + "px";
  var h = lens.offsetHeight/2;
  var w = lens.offsetWidth/2;
  console.log(h + " " + w)
  lens.style.backgroundImage = "url('" + photo.src + "')";
  lens.style.backgroundRepeat = "no-repeat";
  lens.style.backgroundSize = photo.width*scale + "px" + photo.height*scale + "px";
  lens.addEventListener("mousemove", shift);
  photo.addEventListener("mousemove", shift);

  function shift(e){
    e.preventDefault();
    var position = getCursorPosition(e);
    var x = position.x;
    var y = position.y;
   
    
    if(x > 0) {
      lens.style.visibility= "visible";
    } else {
      lens.style.visibility= "hidden";
    };
    if(x < photo.width-50) {
      lens.style.visibility= "visible";
    } else {
      lens.style.visibility= "hidden";
    };
    if(y > 0) {
      lens.style.visibility= "visible";
    } else {
      lens.style.visibility= "hidden";
    };
    if(y < photo.height-50) {
      lens.style.visibility= "visible";
    } else {
      lens.style.visibility= "hidden";
    };
    
    
    lens.style.backgroundPosition = "-" + ((x*scale)-scale*w) + "px -" + ((y*scale)-scale*h) + "px"; 
    
  }
  function getCursorPosition(e) {
    var rectangle = photo.getBoundingClientRect();
    var x = e.pageX - rectangle.left;
    var y = e.pageY - rectangle.top;
    return {x: x, y: y};
  }
}






var index = 1;
images = createImageArray();
setDisplay(images);
// magnify("photo", 3);
