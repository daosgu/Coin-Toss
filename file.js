var nroImg = 0;
var arrimg = [];


function beginChange()
{
    nroImg = 5; //This is the number of images to upload in array.
    for(i = 0; i < nroImg; i++)
        arrimg.push("./img/img" + (i+1) + ".gif");

    ChangeImg();
    setInterval(ChangeImg, 2000);
}


function ChangeImg()
{
    do{
        var num = Math.floor(Math.random() * 5) + 1;
        console.log(num);
    }while(num > nroImg-1)
    imgchange.src = arrimg[num];
    document.getElementById("cmdClick").value = "Cliqueado";
}