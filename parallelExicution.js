function task1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve("task 1"),2000)
    })
}

function task2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve("task2"),4000)
    })
}
async function run() {
    const result=await Promise.all([task1(),task2()])
    console.log(result)
    
}
run()