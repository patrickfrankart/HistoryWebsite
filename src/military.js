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

let images = [new Image("../images/military/WWII_Korea_020.jpg", "", ""), new Image("../images/military/WWII_Korea_021.jpg", "", ""), new Image("../images/military/WWII_Korea_023.jpg", "", ""), new Image("../images/military/WWII_Korea_027.jpg", "", ""), new Image("../images/military/WWII_Korea_039.jpg", "", ""), new Image("../images/military/WWII_Korea_040.jpg", "", ""), new Image("../images/military/WWII_Korea_042.jpg", "", ""), new Image("../images/military/WWII_Korea_044.jpg", "", ""), new Image("../images/military/WWII_Korea_045.jpg", "", ""), new Image("../images/military/WWII_Korea_046.jpg", "", ""), new Image("../images/military/WWII_Korea_047.jpg", "", ""), new Image("../images/military/WWII_Korea_049.jpg", "", ""), new Image("../images/military/WWII_Korea_050.jpg", "", ""), new Image("../images/military/WWII_Korea_051.jpg", "", ""), new Image("../images/military/WWII_Korea_053.jpg", "", ""), new Image("../images/military/WWII_Korea_054.jpg", "", ""), new Image("../images/military/WWII_Korea_055.jpg", "", ""), new Image("../images/military/WWII_Korea_056.jpg", "", ""), new Image("../images/military/WWII_Korea_059.jpg", "", ""), new Image("../images/military/WWII_Korea_060.jpg", "", ""), new Image("../images/military/WWII_Korea_061.jpg", "", ""), new Image("../images/military/WWII_Korea_062.jpg", "", ""),];
let index = 0;

