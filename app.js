let cards = document.getElementById('cards')
let productCard= document.getElementById('productCard')
let productsData  = []
let sebet = []

function getData(){
    fetch('https://69f28857b15130b97352fd41.mockapi.io/productSale')
    .then(res=>res.json())
    .then(json=>{
         productsData = json; 
        json.map(item=>{
            let discount = ((item.price-item.discountPrice)/item.price)*100
            if(item.discountPrice === null){

                
            cards.innerHTML+=`
                 <div class="rounded-2xl p-4 bg-white w-full sm:w-[300px] flex flex-col gap-4 shadow transition duration-300 hover:-translate-y-2 " >

                    <div class="flex flex-col mb-2">
                        <h3 class="font-semibold">${item.name}</h3>
                        <p class="text-xs text-gray-500">Yüksək keyfiyyətli səs</p>
                    </div>

                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold">${item.price} AZN</span>

                        <button onclick="showCard(${item.id})" class="text-white bg-black px-3 py-1 rounded-2xl cursor-pointer hover:bg-black/80 transition">
                            Əlavə Et
                        </button>
                    </div>

                </div>
            `}else{
                cards.innerHTML+=`
                     <div class="rounded-2xl p-4 bg-white w-full sm:w-[300px] flex flex-col gap-4 shadow transition duration-300 hover:-translate-y-2 ">

                    <div class="flex items-start justify-between gap-2 w-full">

                        <div class="flex flex-col">
                            <h3 class="font-semibold">${item.name}</h3>
                            <p class="text-xs text-gray-500">Yüksək keyfiyyətli səs</p>
                        </div>

                        <span class="text-red-700 text-sm font-medium">
                           ${discount.toFixed(2)}% endirim
                        </span>

                    </div>

                    <div class="flex items-center justify-between">
                       <div class="flex flex-col">
                         <span class="text-2xl font-bold text-red-700 ">${item.discountPrice} AZN</span>
                         <span class="text-xs font-light text-gray-500">${item.price} AZN</span>
                       </div>

                        <button  onclick="showCard(${item.id})" class="text-white bg-black px-3 py-1 rounded-2xl cursor-pointer hover:bg-black/80 transition">
                            Əlavə Et
                        </button>
                    </div>

                </div>
                `
            }
        })
    })
}

function showCard(id){
console.log(id)
sebet.push(id)
showBasket()
}

function showBasket(){
productCard.innerHTML = ""

sebet.map(id=>{
     const product = productsData.find(p => p.id == id);
     productCard.innerHTML += `
         <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl flex-wrap gap-2">
            <div class="flex flex-col">
                <h3 class="font-medium">${product.name}</h3>
                <span class="text-xs text-gray-500">${product.discountPrice? 'Endirimli' : "Sade" } qiymət</span>
            </div>
            <span class="font-semibold">${product.discountPrice ?? product.price}</span>
        </div>
     `
})

}
getData()