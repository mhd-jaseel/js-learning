function task1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("task 1")
        },2000)
    })
}

function task2 (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("task 2")
        },1000)
    })
}

async function run() {
    console.log(await task1())
    console.log(await task2())
    
}
run()