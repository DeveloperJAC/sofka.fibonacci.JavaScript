// 0,1,1,2,3,5,8,13,21,34, 

function fibonacci(nIteracion){
    let fibArray=[ 0 , 1 ];

    for(let i=2; i<nIteracion; i++){
        let nElemento=fibArray[i-1]+fibArray[i-2];
        fibArray.push(nElemento);
    }

    for(const elemento of fibArray){
        document.write(elemento+"<br>");
    }
}
fibonacci(10);