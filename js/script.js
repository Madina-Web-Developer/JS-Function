
// ============= Dom part start ============//

let input = document.querySelector('.input')
let result = document.querySelector('.result')


//  ============= Button function part ============= //


let handelClick = ()=>{

    result.innerHTML = input.value
    input.value = ''
}

// ===================  Enter Key Function ============ //

let inputkey = (item)=>{

    if(item.key == "Enter"){

        handelClick()
    }
}



