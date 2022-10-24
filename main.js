window.onload = function(){
    let container = document.querySelector(".container");
    let img_1 = document.querySelector(".img-1");
    let img_2 = document.querySelector(".img-2");
    let img_3 = document.querySelector(".img-3");
    let button = container.getElementsByTagName("button")[0];
    let coin = document.querySelector(".coin");
    let total = 100;
    
    button.onclick = function(){
        total -= 1;
        coin.innerHTML = "gain = " + total;
        const items = [
            "seven",
            "bar",
            "big-win",
            "cerise",
            "citron",
            "orange",
            "pasteque",
            "plum",
            "banane",
            "cerise",
            "citron",
            "orange",
            "pasteque",
            "plum",
            "banane",
            "cerise",
            "citron",
            "orange",
            "pasteque",
            "plum",
            "banane"
        ]
        const random = Math.floor(Math.random() * items.length)
        const random2 = Math.floor((Math.floor(Math.random() * items.length) + Math.floor(Math.random() * items.length)) / 2)
        const random3 = Math.floor((Math.floor(Math.random() * items.length) + Math.floor(Math.random() * items.length) + Math.floor(Math.random() * items.length)) / 3)

        const selectItem = items[random]
        const selectItem2 = items[random2]
        const selectItem3 = items[random3]

        img_1.src = `items/${selectItem}.png`
        img_2.src = `items/${selectItem2}.png`
        img_3.src = `items/${selectItem3}.png`

        if(random == 0 && random2 == 0 && random3 == 0){
            total += 40;
        }else if(random == 1 && random2 == 1 && random3 == 1){
            total += 50;
        }else if(random == 2 && random2 == 2 && random3 == 2  ){
            total += 100;
        }else if((selectItem == selectItem2 && selectItem == selectItem3 && selectItem2 == selectItem3 ) && selectItem != ("seven", "big-win", "bar")){
            total += 30;
        }
        coin.innerHTML = "gain = " + total;
    }

    
    coin.innerHTML = "gain = " + total;
}