
var sliderCurrent = 1
//số lượng item (ít nhất 6 item)
const soluongitem = [...document.querySelectorAll('.slider__group')].length
//khởi tạo mặt định
sliderDefault()
function sliderDefault(){
    const arrItem = [...document.querySelectorAll('.slider__group')]
    arrItem.forEach(item=>{
        item.classList.add('unShow')
    })
    arrItem[0].classList.remove('unShow')
    arrItem[1].classList.remove('unShow')
    arrItem[2].classList.remove('unShow')

    arrItem[0].style.left = '0%'
    arrItem[0].style.transform = 'scale(0.6)'
    arrItem[1].style.left = '50%'
    arrItem[1].style.transform = 'translateX(-50%) scale(1)'
    arrItem[2].style.left = '70%'
    arrItem[2].style.transform = 'scale(0.6)'

    //sự kiện onclick
    arrItem[0].classList.add('slider__group-btnleft')
    arrItem[2].classList.add('slider__group-btnright')
    document.querySelector('.slider__group-btnleft').onclick = (e)=>{
        sliderItemLeft()
        return false
    }
    document.querySelector('.slider__group-btnright').onclick = (e)=>{
        sliderItemRight()
        return false
    }

    //hàng chờ
    arrItem[soluongitem-1].style.left = '-30%'
    arrItem[soluongitem-1].style.transform = 'scale(0.6)'
    arrItem[soluongitem-1].classList.remove('unShow')
    arrItem[3].style.left = '100%'
    arrItem[3].style.transform = 'scale(0.6)'
    arrItem[3].classList.remove('unShow')


}

//hàm di chuyển sang trái
function sliderItemLeft(){
    //ẩn các phần tử không cần thiết
    const arrItem = [...document.querySelectorAll('.slider__group')]
    

    //khỏi tạo các biến index
    const mid = sliderCurrent
    const right = sliderCurrent + 1 < soluongitem?sliderCurrent+1: 0
    const left = sliderCurrent - 1 >= 0?sliderCurrent-1: soluongitem-1
    const leftout = left - 1 >=0?left-1:soluongitem-1

    arrItem.forEach(item=>{
        item.classList.add('unShow')
    })
    arrItem[leftout].classList.remove('unShow')
    arrItem[left].classList.remove('unShow')
    arrItem[mid].classList.remove('unShow')
    arrItem[right].classList.remove('unShow')

    sliderCurrent -= 1
    if(sliderCurrent < 0)
        sliderCurrent = soluongitem - 1

    //di chuyển item
    arrItem[right].style.left = '100%'
    arrItem[mid].style.transform = 'scale(0.6)'
    arrItem[mid].style.left = '70%'
    arrItem[left].style.left = '50%'
    arrItem[left].style.transform = 'translateX(-50%) scale(1)'
    arrItem[leftout].style.left = '0%'

    //sự kiện onclick
    document.querySelector('.slider__group-btnleft').onclick = ()=>{
    }
    document.querySelector('.slider__group-btnright').onclick = ()=>{
    }
    arrItem.forEach(item=>{
        item.classList.remove('slider__group-btnleft')
        item.classList.remove('slider__group-btnright')
    })
    arrItem[leftout].classList.add('slider__group-btnleft')
    arrItem[mid].classList.add('slider__group-btnright')
    document.querySelector('.slider__group-btnleft').onclick = (e)=>{
        sliderItemLeft()
        var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
        return false
    }
    document.querySelector('.slider__group-btnright').onclick = (e)=>{
        sliderItemRight()
        var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
        return false
    }

    //hàng chờ
    const hangcho = leftout - 1 >=0?leftout-1:soluongitem-1
    arrItem[hangcho].classList.add('unShow');
    arrItem[hangcho].style.left = '-30%'
    arrItem[hangcho].style.transform = 'scale(0.6)'
    arrItem[hangcho].classList.remove('unShow');

    //btn
   
}

//hàm di chuển sang phải
function sliderItemRight(){
    //khỏi tạo các biến index
    const mid = sliderCurrent
    const right = sliderCurrent + 1 < soluongitem?sliderCurrent+1: 0
    const left = sliderCurrent - 1 >= 0?sliderCurrent-1: soluongitem-1
    const rightout = right + 1 > soluongitem-1?0:right+1

    //ẩn các phần tử không cần thiết
    const arrItem = [...document.querySelectorAll('.slider__group')]
    arrItem.forEach(item=>{
        item.classList.add('unShow')
    })
    arrItem[left].classList.remove('unShow')
    arrItem[mid].classList.remove('unShow')
    arrItem[right].classList.remove('unShow')
    arrItem[rightout].classList.remove('unShow')

    sliderCurrent += 1
    if(sliderCurrent > soluongitem-1)
        sliderCurrent = 0

    //di chuyển item
    arrItem[left].style.left = '-30%'
    arrItem[mid].style.transform = 'scale(0.6)'
    arrItem[mid].style.left = '0%'
    arrItem[right].style.left = '50%'
    arrItem[right].style.transform = 'translateX(-50%) scale(1)'
    arrItem[rightout].style.left= '70%'

    //sự kiện onclick
    document.querySelector('.slider__group-btnleft').onclick = ()=>{
    }
    document.querySelector('.slider__group-btnright').onclick = ()=>{
    }
    arrItem.forEach(item=>{
        item.classList.remove('slider__group-btnleft')
        item.classList.remove('slider__group-btnright')
    })
    arrItem[mid].classList.add('slider__group-btnleft')
    arrItem[rightout].classList.add('slider__group-btnright')
    document.querySelector('.slider__group-btnleft').onclick = (e)=>{
        sliderItemLeft()
        var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
        return false
    }
    document.querySelector('.slider__group-btnright').onclick = (e)=>{
        sliderItemRight()
        var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
        return false
    }

    //hàng chờ
    const hangcho = rightout + 1 < soluongitem?rightout+1:0
    arrItem[hangcho].classList.add('unShow');
    arrItem[hangcho].style.left = '100%'
    arrItem[hangcho].style.transform = 'scale(0.6)'
    arrItem[hangcho].classList.remove('unShow');

    
}


//Load btn
LoadSliderBtn()
function LoadSliderBtn(){
    var divcha = document.createElement('div')
    divcha.classList.add('slider__group-btns')
    for(var i =0;i<soluongitem;i++){
        var divcon = document.createElement('div')
        divcon.classList.add('slider__group-btns-item')
        if(i==0){
            divcon.classList.add('slider__group-btns-item-active')
        }
        divcha.appendChild(divcon)
    }
    document.querySelector('.Thoai__slider-group').appendChild(divcha)

}

//Thiết lập sự kiện btn
[...document.querySelectorAll('.slider__group-btns-item')].forEach((item,index,arr)=>{
    item.onclick = ()=>{
        arr.forEach(item2=>{
            item2.classList.remove('slider__group-btns-item-active')
        })
        arr[index].classList.add('slider__group-btns-item-active')
        funcsliderbtn(index)
    }
});
funcsliderbtn(0)
function funcsliderbtn(n){
    if(n > sliderCurrent){
        var slloop = n - sliderCurrent
        function loop(){
            setTimeout(()=>{
                sliderItemRight()
                slloop--
            if(slloop > 0)
                loop()
            },50)
        }
        loop()
    }
    if(n<sliderCurrent){
        var slloop = sliderCurrent - n
        function loop(){
            setTimeout(()=>{
                sliderItemLeft()
                slloop--
            if(slloop > 0)
                loop()
            },50)
        }
        loop()
    }
}

//sự kiện drap
let isReadyToDrap = false
let curentLocation
let isMouseUp = false
document.querySelector('.slider__wrap').addEventListener('mousedown',evt=>{
    isReadyToDrap = true
    curentLocation = evt.clientX
    isMouseUp = true
})

document.addEventListener('mousemove',evt=>{
    if(isReadyToDrap){
        const vitri = evt.clientX - curentLocation
        document.querySelector('.slider__wrap').style.transform = `translateX(${vitri}px)`
    }
})

document.addEventListener('mouseup',evt=>{
    if(isMouseUp){
        
        isReadyToDrap = false
    
        if(evt.clientX - curentLocation != 0){
            if(evt.clientX - curentLocation >=200){
                sliderItemLeft()
                var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
            }
            if(evt.clientX - curentLocation <= -200){
                sliderItemRight()
                var btns = [...document.querySelectorAll('.slider__group-btns-item')]
        btns.forEach((item)=>{
            item.classList.remove('slider__group-btns-item-active')
        });
        btns[sliderCurrent].classList.add('slider__group-btns-item-active')
            }
        }
        else{
       
        }
        document.querySelector('.slider__wrap').style = 'transition: all 0.7s linear;'
        document.querySelector('.slider__wrap').style.transform = ''
        setTimeout(()=>{
            document.querySelector('.slider__wrap').style = ''
        },700)
        curentLocation = evt.clientX
        isMouseUp =false
    }
})