// const filters = document.getElementById('filters')
const cartShop = document.getElementById('cartShop')
const cartShop2 = document.getElementById('cartShop2')
// const api = [
//     { id: 1, name: 'mo' },
//     { id: 2, name: 'mos' },
//     { id: 3, name: 'moa' },
//     { id: 4, name: 'mov' },
//     { id: 5, name: 'mod' },
//     { id: 6, name: 'moc' },
//     { id: 7, name: 'mox' },
// ]




// const filter = [...new Set(api.map(e => e))]
// const category = [...new Set(product.map(e => e))]
// const filterItem = (e) => {
//     const filterCategories = category.filter(item)
//     function item(el) {
//         if (el.id == e) {
//             return (
//                 el.id
//             )
//         }
//     }
//     displayItems(filterCategories)
// }
// if (filters) {
//     filters.innerHTML = filter.map(e => {
//         const { name, id } = e;
//         return (
//             `<button class="fil-p" onclick="filter(${id})">${name}</button>`
//         )
//     }).join()

// }
if (cartShop) {
    displayItems = (item) => {
        cartShop.innerHTML = item.map(e => {
            const { img, title, price, category, rate } = e

            return (
                `
                <div class="h-auto max-w-full rounded-lg">
                <div
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md ">
                    <!-- (((((((((((((((start card image))))))))))))))) -->
        
                    <div class="rounded-2xl">
                        <a href="#" class="flex justify-center">
                            <img class="h-auto max-w-full rounded-t-lg mx-[2em]" src="${e.img}" alt="product image" />
                        </a>
                    </div>
                    <!-- (((((((((((((((start card image))))))))))))))) -->
                    <!-- (((((((((((((((end card details))))))))))))))) -->
        
        
                    <div class="px-5 pb-5">
                        <!-- (((((((((((((((start card details))))))))))))))) -->
        
                        <a href="#">
                            <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                ${e.name}
                            </h5>
                            <h5 class="text-xl font-semibold tracking-tight text-gray-700 dark:text-white">
                                ${e.category.type}
                            </h5>
                            <h5 class="text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
                                ${e.description}
                            </h5>
                        </a>
                        <!-- (((((((((((((((end card details text))))))))))))))) -->
                        <!-- (((((((((((((((start card details rating))))))))))))))) -->
        
                        <div class="flex items-center mt-2.5 mb-5">
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <!-- (((((((((((((((end card details rating))))))))))))))) -->
                        <!-- (((((((((((((((start card details rating))))))))))))))) -->
        
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">${e.price}.00$</span>
                            <a href="#"
                                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Add to cart
                            </a>
                        </div>
                        <!-- (((((((((((((((end card details rating))))))))))))))) -->
                    </div>
                    <!-- (((((((((((((((end card details))))))))))))))) -->
                </div>
            </div>
                `
            )
        }).join('')
    }
}
if(cartShop){
    firstPage=(item)=>{
        cartShop.innerHTML = item.map(e => {
            const { img, title, price, category, rate,id } = e
            if(e.id<=12){
                return (
                    `
                    <div class=" h-auto max-w-full rounded-lg">
                    <div
                        class="relative h-[35em] w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md no-wrap">
                        <!-- (((((((((((((((start card image))))))))))))))) -->
            
                        <div class="rounded-2xl">
                            <a href="#" class="flex justify-center">
                                <img class="max-h-[15em]  max-w-full rounded-t-lg " src="${e.img}" alt="product image" />
                            </a>
                        </div>
                        <!-- (((((((((((((((end card image))))))))))))))) -->
            
                        <!-- (((((((((((((((start card details))))))))))))))) -->
                        <div class="px-5 pb-5">
            
                            <a href="#">
                                <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    ${e.name}
                                </h5>
                                <h5 class="text-xl font-semibold tracking-tight text-gray-700 dark:text-white">
                                    ${e.category.type}
                                </h5>
                                <h5 class=" font-semibold tracking-tight text-gray-600 dark:text-white">
                                    ${e.description}
                                </h5>
                            </a>
                        <!-- (((((((((((((((end card details text))))))))))))))) -->
                        <!-- (((((((((((((((start card details rating))))))))))))))) -->
            
                            <div class="flex items-center mt-2.5 mb-5">
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    5.0
                                </span>
                            </div>
                            <!-- (((((((((((((((end card details rating))))))))))))))) -->
                            <!-- (((((((((((((((start card details rating))))))))))))))) -->
            
                            <div class="flex items-center justify-between absolute bottom-3">
                                <span class="mr-6 text-3xl font-bold text-gray-900 dark:text-white">${e.price}.00$</span>
                                <a href="#"
                                    class="ml-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    Add to cart
                                </a>
                            </div>
                            <!-- (((((((((((((((end card details rating))))))))))))))) -->
                        </div>
                        <!-- (((((((((((((((end card details))))))))))))))) -->
                    </div>
                </div>
                    `
                )
            } 
        }).join('')
        cartShop2.innerHTML = item.map(e => {
            const { img, title, price, category, rate,id } = e
            if(e.id>12&&e.id<=20){
                return (
                    `
                    <div class=" h-auto max-w-full rounded-lg">
                    <div
                        class="relative h-[35em] w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-md no-wrap">
                        <!-- (((((((((((((((start card image))))))))))))))) -->
            
                        <div class="rounded-2xl">
                            <a href="#" class="flex justify-center">
                                <img class="max-h-[15em]  max-w-full rounded-t-lg " src="${e.img}" alt="product image" />
                            </a>
                        </div>
                        <!-- (((((((((((((((end card image))))))))))))))) -->
            
                        <!-- (((((((((((((((start card details))))))))))))))) -->
                        <div class="px-5 pb-5">
            
                            <a href="#">
                                <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    ${e.name}
                                </h5>
                                <h5 class="text-xl font-semibold tracking-tight text-gray-700 dark:text-white">
                                    ${e.category.type}
                                </h5>
                                <h5 class=" font-semibold tracking-tight text-gray-600 dark:text-white">
                                    ${e.description}
                                </h5>
                            </a>
                        <!-- (((((((((((((((end card details text))))))))))))))) -->
                        <!-- (((((((((((((((start card details rating))))))))))))))) -->
            
                            <div class="flex items-center mt-2.5 mb-5">
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    5.0
                                </span>
                            </div>
                            <!-- (((((((((((((((end card details rating))))))))))))))) -->
                            <!-- (((((((((((((((start card details rating))))))))))))))) -->
            
                            <div class="flex items-center justify-between absolute bottom-3">
                                <span class="mr-6 text-3xl font-bold text-gray-900 dark:text-white">${e.price}.00$</span>
                                <a href="#"
                                    class="ml-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    Add to cart
                                </a>
                            </div>
                            <!-- (((((((((((((((end card details rating))))))))))))))) -->
                        </div>
                        <!-- (((((((((((((((end card details))))))))))))))) -->
                    </div>
                </div>
                    `
                )
            } 
        }).join('')
    }

}
// displayItems(category)

fetch('https://jsproject-2a224-default-rtdb.firebaseio.com/products.json')
    .then((response) => {
        return response.json();
    })
    .then(
        (data) => firstPage(data)
    )
console.log(cartShop2)
console.log(cartShop)












