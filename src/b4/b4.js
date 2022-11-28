// import fetch from '../../node_modules/node-fetch';
let list = []
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {}
    }).then(result => {
        return result.json()
    }).then(result => {
        return result
    }).catch(error => { console.log(error); })
    list = response
    show(response)
}

function show(data) {
    let item_card = ``

    data.map((item) => {
        item_card += `
        <div class="item-container">
            <div>ID: ${item.id}</div>
            <div>Name: ${item.name}</div>
            <div>Email: ${item.email}</div>
            <div>Phone: ${item.phone}</div>
        </div>`
    })

    document.getElementById("list-data").innerHTML = item_card;
}

function handleSearch() {
    const input = document.getElementById("myInput")
    if (input) {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                if (event.target.value === "") {
                    show(list)
                } else {
                    const new_list = list.filter(item => {
                        return item.id === parseInt(event.target.value)
                    })
                    show(new_list)
                }
            }
        });
    }
}



