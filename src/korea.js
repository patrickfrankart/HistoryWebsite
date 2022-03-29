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

let images = [new Image("../images/korea/WWII_Korea_01.jpg", "", ""), new Image("../images/korea/WWII_Korea_02.jpg", "", ""), new Image("../images/korea/WWII_Korea_03.jpg", "", ""), new Image("../images/korea/WWII_Korea_05.jpg", "", ""), new Image("../images/korea/WWII_Korea_08.jpg", "", ""), new Image("../images/korea/WWII_Korea_09.jpg", "", ""), new Image("../images/korea/WWII_Korea_010.jpg", "", ""), new Image("../images/korea/WWII_Korea_011.jpg", "", ""), new Image("../images/korea/WWII_Korea_012.jpg", "", ""), new Image("../images/korea/WWII_Korea_013.jpg", "", ""), new Image("../images/korea/WWII_Korea_014.jpg", "", ""), new Image("../images/korea/WWII_Korea_015.jpg", "", ""), new Image("../images/korea/WWII_Korea_016.jpg", "", ""), new Image("../images/korea/WWII_Korea_018.jpg", "", ""), new Image("../images/korea/WWII_Korea_019.jpg", "", ""), new Image("../images/korea/WWII_Korea_022.jpg", "", ""), new Image("../images/korea/WWII_Korea_024.jpg", "", ""), new Image("../images/korea/WWII_Korea_032.jpg", "", ""), new Image("../images/korea/WWII_Korea_037.jpg", "", ""), new Image("../images/korea/WWII_Korea_038.jpg", "", ""), new Image("../images/korea/WWII_Korea_043.jpg", "", ""),];
let index = 0;

