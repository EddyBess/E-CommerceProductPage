var count = 0;
var index=0;
var imagesList=["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
function incrementCount(){
    count = count+1;
    document.getElementById("Amount").innerHTML=count;
 
}
function decrementCount(){
    if(count-1>=0){
        count = count-1;
        document.getElementById("Amount").innerHTML=count;
    }
 
}




function showLightbox(){
    document.getElementById("Lightbox").style.display="flex";
}
function closeLightbox(){
    document.getElementById("Lightbox").style.display="none";
}
function next(){
    if (index+1<imagesList.length){
        index=index+1   
    }
    else{
        index=0
    }
    document.getElementById('lightBoxImg').src =imagesList[index]
}
function previous(){
    if (index-1>=0){
        index=index-1
     
    }
    else{
        index=imagesList.length-1
    }
    document.getElementById('lightBoxImg').src =imagesList[index]
}
function addToCart(){
    let selectedAmount = document.getElementById('Amount').innerHTML;
    if(selectedAmount >0){
        var price = selectedAmount*125
        document.getElementById('amount').innerHTML=selectedAmount;
        document.getElementById('price').innerHTML="$" + price;
        document.getElementById('empty').style.display='none'
        document.getElementById('filled').style.display='block'
        document.getElementById('NotificationAmount').innerHTML=selectedAmount
        document.getElementById('Notification').style.display='grid'
    }
    
}
function deleteItem(){
    document.getElementById('amount').innerHTML=0;
    document.getElementById('Notification').style.display='none'
    document.getElementById('empty').style.display='grid'
    document.getElementById('filled').style.display='none'
}