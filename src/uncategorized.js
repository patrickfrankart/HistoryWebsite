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

    return index;
}

let images = [new Image("../images/WWII_Korea_023A.jpg", "", ""), new Image("../images/WWII_Korea_023B.jpg", "", ""), new Image("../images/WWII_Korea_028A.jpg", "", ""), new Image("../images/WWII_Korea_028B.jpg", "", ""), new Image("../images/WWII_Korea_038A.jpg", "", ""), new Image("../images/WWII_Korea_038B.jpg", "", ""), new Image("../images/WWII_Korea_064.jpg", "", ""), new Image("../images/WWII_Korea_065.jpg", "", ""),  new Image("../images/WWII_Korea_066.jpg", "", "")];
let index = 0;
