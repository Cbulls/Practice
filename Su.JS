function Item (name, price){
    this.name = name;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}만원입니다`)
    }
}
const item1 = new Item ('마징가',300)
const item2 = new Item ('아이언맨',500)
const item3 = new Item ('태권V',600)
console.log(item1,item2,item3);

let target = document.querySelector('#dynamic');
let zerg_text = "Welcome to World of Starcraft"
let zerg_textSplit = zerg_text.split("");

function dynamic(randomArr){
        console.log(randomArr)
        if(randomArr.length>0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr)
            }, 90);
        }
}

dynamic (zerg_textSplit);

// let array = 
// for (let i=0; i < array.length; ++i){
//     alert(array[i])
// }

// let array = ['졸','지','마']
// for (i=0;i<array.length;++i){
//     alert(array[i]);
// }


// let i = 0
// let sum = 0
// while(i<=100){
//     sum += i;
//     ++i;
//     alert (sum)
// }

// let val
// while(true){
//     val = Math.floor(Math.random()*10)
//     alert(val);
//     if(val===3){
//         break
//     }
// }

// function solution (n){
//     let a = (n+'').split('');
//     let sum = 0;
//     for (i=0;i<a.length;++i){
//         sum += parseInt(a[i])
//     }
//     return sum;
// }
// alert (solution(245));

// function solution(n)
// {
//     var a = (n + '').split('');
//     var b = 0;
//     for(var i = 0; i < a.length; ++i) {
//         b += parseInt(a[i]);
//     }
//     return b;
//     //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
// }

// console.log(solution(123));
// solution(987);

// function soltion(n){
//     return n.toString().split('').reverse().map(n=>parseInt(n))
// }
// alert(soltion(12345));
