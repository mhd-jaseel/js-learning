function countDown(num) {
    if (num === 0) {      // Base condition
        console.log("Done");
        return;
    }

    console.log(num);
    countDown(num - 1);   // Function calls itself
}

countDown(5);

const categories = {
    name: "Electronics",
    children: [
        {
            name: "Mobiles",
            children: [
                { name: "Android", children: [] },
                { name: "iPhone", children: [] }
            ]
        },
        {
            name: "Laptops",
            children: [
                { name: "Gaming", children: [] },
                { name: "Business", children: [] }
            ]
        }
    ]
};

function printCategory(category) {
    console.log(category.name);

    for (let child of category.children) {
        printCategory(child);
    }
}

printCategory(categories);


function count(num){
   console.log(num)
   count(num+1)


}
// count(1)