var img = [];
var count = 0;
for (i = 0; i < 6; i++){
    img[i] = "assets/" + [i+1] + ".jpg";
}
previousImg =() => {
    count -=  1;
    if (count == img.length){
        count = 0;
    }
    if (count < 0) {
        count = img.length - 1;
    }
    document.getElementById("bImg").style.background = 'url(' + img[count] + ') no-repeat' ;
}

 nextImg =() => {
    count +=  1;
    if (count == img.length){
        count = 0;
    }
    document.getElementById("bImg").style.background = 'url(' + img[count] + ') no-repeat';
}