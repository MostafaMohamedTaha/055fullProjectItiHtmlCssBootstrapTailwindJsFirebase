const btns = document.getElementById('btns')
const root = document.getElementById('root')
const api = [
    { id: 1, name: 'mo' },
    { id: 2, name: 'mos' },
    { id: 3, name: 'moa' },
    { id: 4, name: 'mov' },
    { id: 5, name: 'mod' },
    { id: 6, name: 'moc' },
    { id: 7, name: 'mox' },
]
product=[
    {id:1,name:"",price:15,rate:1,category:{name:"",type:"home",class:"a"},img:"./imgMostafa/flours/  (1).jpg"},
    {id:2,name:"",price:16,rate:2,category:{name:"",type:"work",class:"a"},img:"./imgMostafa/flours/  (2).jpg"},
    {id:3,name:"",price:17,rate:3,category:{name:"",type:"gardenHome",class:"a"},img:"./imgMostafa/flours/  (3).jpg"},
    {id:4,name:"",price:18,rate:4,category:{name:"",type:"GardenWork",class:"a"},img:"./imgMostafa/flours/  (4).jpg"},
    {id:5,name:"",price:19,rate:5,category:{name:"",type:"forest",class:"a"},img:"./imgMostafa/flours/  (5).jpg"},
    {id:6,name:"",price:20,rate:1,category:{name:"",type:"lab",class:"a"},img:"./imgMostafa/flours/  (6).jpg"},
    {id:7,name:"",price:21,rate:2,category:{name:"",type:"medical",class:"a"},img:"./imgMostafa/flours/  (7).jpg"},
    {id:8,name:"",price:22,rate:3,category:{name:"",type:"poison",class:"a"},img:"./imgMostafa/flours/  (8).jpg"},
    {id:9,name:"",price:23,rate:4,category:{name:"",type:"home",class:"a"},img:"./imgMostafa/flours/  (9).jpg"},
    {id:10,name:"",price:24,rate:1,category:{name:"",type:"home",class:"b"},img:"./imgMostafa/flours/  (9).jpg"},
    {id:11,name:"",price:25,rate:2,category:{name:"",type:"work",class:"b"},img:"./imgMostafa/flours/  (10).jpg"},
    {id:12,name:"",price:26,rate:3,category:{name:"",type:"gardenHome",class:"b"},img:"./imgMostafa/flours/  (11).jpg"},
    {id:13,name:"",price:27,rate:4,category:{name:"",type:"GardenWork",class:"b"},img:"./imgMostafa/flours/  (12).jpg"},
    {id:14,name:"",price:28,rate:5,category:{name:"",type:"forest",class:"b"},img:"./imgMostafa/flours/  (13).jpg"},
    {id:15,name:"",price:29,rate:1,category:{name:"",type:"lab",class:"b"},img:"./imgMostafa/flours/  (14).jpg"},
    {id:16,name:"",price:30,rate:2,category:{name:"",type:"medical",class:"b"},img:"./imgMostafa/flours/  (15).jpg"},
    {id:17,name:"",price:31,rate:3,category:{name:"",type:"poison",class:"b"},img:"./imgMostafa/flours/  (16).jpg"},
    {id:18,name:"",price:32,rate:4,category:{name:"",type:"home",class:"b"},img:"./imgMostafa/flours/  (17).jpg"},
    {id:19,name:"",price:33,rate:5,category:{name:"",type:"work",class:"b"},img:"./imgMostafa/flours/  (18).jpg"},
    {id:20,name:"",price:34,rate:1,category:{name:"",type:"gardenHome",class:"b"},img:"./imgMostafa/flours/  (19).jpg"},
    {id:21,name:"",price:35,rate:2,category:{name:"",type:"GardenWork",class:"b"},img:"./imgMostafa/flours/  (20).jpg"},
    {id:22,name:"",price:36,rate:3,category:{name:"",type:"forest",class:"b"},img:"./imgMostafa/flours/  (21).jpg"},
    {id:23,name:"",price:37,rate:4,category:{name:"",type:"lab",class:"b"},img:"./imgMostafa/flours/  (22).jpg"},
    {id:24,name:"",price:38,rate:5,category:{name:"",type:"medical",class:"b"},img:"./imgMostafa/flours/  (23).jpg"},
    {id:25,name:"",price:39,rate:1,category:{name:"",type:"poison",class:"b"},img:"./imgMostafa/flours/  (24).jpg"},
    {id:26,name:"",price:40,rate:2,category:{name:"",type:"home",class:"c"},img:"./imgMostafa/flours/  (25).jpg"},
    {id:27,name:"",price:41,rate:3,category:{name:"",type:"work",class:"c"},img:"./imgMostafa/flours/  (26).jpg"},
    {id:28,name:"",price:42,rate:4,category:{name:"",type:"gardenHome",class:"c"},img:"./imgMostafa/flours/  (27).jpg"},
    {id:29,name:"",price:43,rate:5,category:{name:"",type:"GardenWork",class:"c"},img:"./imgMostafa/flours/  (28).jpg"},
    {id:30,name:"",price:44,rate:1,category:{name:"",type:"forest",class:"c"},img:"./imgMostafa/flours/  (29).jpg"},
    {id:31,name:"",price:45,rate:2,category:{name:"",type:"lab",class:"c"},img:"./imgMostafa/flours/  (30).jpg"},
    {id:32,name:"",price:46,rate:3,category:{name:"",type:"medical",class:"c"},img:"./imgMostafa/flours/  (31).jpg"},
    {id:33,name:"",price:47,rate:4,category:{name:"",type:"poison",class:"c"},img:"./imgMostafa/flours/  (32).jpg"},
    {id:34,name:"",price:48,rate:5,category:{name:"",type:"home",class:"c"},img:"./imgMostafa/flours/  (33).jpg"},
    {id:35,name:"",price:49,rate:1,category:{name:"",type:"work",class:"c"},img:"./imgMostafa/flours/  (34).jpg"},
    {id:36,name:"",price:50,rate:2,category:{name:"",type:"gardenHome",class:"c"},img:"./imgMostafa/flours/  (35).jpg"},
    {id:37,name:"",price:51,rate:3,category:{name:"",type:"GardenWork",class:"c"},img:"./imgMostafa/flours/  (36).jpg"},
    {id:38,name:"",price:52,rate:4,category:{name:"",type:"forest",class:"c"},img:"./imgMostafa/flours/  (37).jpg"},
    {id:39,name:"",price:53,rate:5,category:{name:"",type:"lab",class:"c"},img:"./imgMostafa/flours/  (38).jpg"},
    {id:40,name:"",price:54,rate:1,category:{name:"",type:"medical",class:"c"},img:"./imgMostafa/flours/  (39).jpg"},
    {id:41,name:"",price:55,rate:2,category:{name:"",type:"poison",class:"c"},img:"./imgMostafa/flours/  (40).jpg"},
    {id:42,name:"",price:56,rate:3,category:{name:"",type:"home",class:"d"},img:"./imgMostafa/flours/  (41).jpg"},
    {id:43,name:"",price:57,rate:4,category:{name:"",type:"work",class:"d"},img:"./imgMostafa/flours/  (42).jpg"},
    {id:44,name:"",price:58,rate:5,category:{name:"",type:"gardenHome",class:"d"},img:"./imgMostafa/flours/  (43).jpg"},
    {id:45,name:"",price:59,rate:1,category:{name:"",type:"GardenWork",class:"d"},img:"./imgMostafa/flours/  (44).jpg"},
    {id:46,name:"",price:60,rate:2,category:{name:"",type:"forest",class:"d"},img:"./imgMostafa/flours/  (45).jpg"},
    {id:47,name:"",price:61,rate:3,category:{name:"",type:"lab",class:"d"},img:"./imgMostafa/flours/  (46).jpg"},
    {id:48,name:"",price:62,rate:4,category:{name:"",type:"medical",class:"d"},img:"./imgMostafa/flours/  (47).jpg"},
    {id:49,name:"",price:63,rate:5,category:{name:"",type:"poison",class:"d"},img:"./imgMostafa/flours/  (48).jpg"},
    {id:50,name:"",price:64,rate:1,category:{name:"",type:"home",class:"d"},img:"./imgMostafa/flours/  (49).jpg"},
    {id:51,name:"",price:65,rate:2,category:{name:"",type:"work",class:"d"},img:"./imgMostafa/flours/  (50).jpg"},
    {id:52,name:"",price:66,rate:3,category:{name:"",type:"gardenHome",class:"d"},img:"./imgMostafa/flours/  (51).jpg"},
    {id:53,name:"",price:67,rate:4,category:{name:"",type:"GardenWork",class:"d"},img:"./imgMostafa/flours/  (52).jpg"},
    {id:54,name:"",price:68,rate:5,category:{name:"",type:"forest",class:"d"},img:"./imgMostafa/flours/  (53).jpg"},
    {id:55,name:"",price:69,rate:1,category:{name:"",type:"lab",class:"d"},img:"./imgMostafa/flours/  (54).jpg"},
    {id:56,name:"",price:70,rate:2,category:{name:"",type:"medical",class:"d"},img:"./imgMostafa/flours/  (55).jpg"},
    {id:57,name:"",price:71,rate:3,category:{name:"",type:"poison",class:"d"},img:"./imgMostafa/flours/  (56).jpg"},
    {id:58,name:"",price:72,rate:4,category:{name:"",type:"home",class:"e"},img:"./imgMostafa/flours/  (57).jpg"},
    {id:59,name:"",price:73,rate:5,category:{name:"",type:"work",class:"e"},img:"./imgMostafa/flours/  (58).jpg"},
    {id:60,name:"",price:74,rate:1,category:{name:"",type:"gardenHome",class:"e"},img:"./imgMostafa/flours/  (59).jpg"},
    {id:61,name:"",price:75,rate:2,category:{name:"",type:"GardenWork",class:"e"},img:"./imgMostafa/flours/  (60).jpg"},
    {id:62,name:"",price:76,rate:3,category:{name:"",type:"forest",class:"e"},img:"./imgMostafa/flours/  (61).jpg"},
    {id:63,name:"",price:77,rate:4,category:{name:"",type:"lab",class:"e"},img:"./imgMostafa/flours/  (62).jpg"},
    {id:64,name:"",price:78,rate:5,category:{name:"",type:"medical",class:"e"},img:"./imgMostafa/flours/  (63).jpg"},
    {id:65,name:"",price:79,rate:1,category:{name:"",type:"poison",class:"e"},img:"./imgMostafa/flours/  (64).jpg"},
    {id:66,name:"",price:80,rate:2,category:{name:"",type:"home",class:"e"},img:"./imgMostafa/flours/  (65).jpg"},
    {id:67,name:"",price:81,rate:3,category:{name:"",type:"work",class:"e"},img:"./imgMostafa/flours/  (66).jpg"},
    {id:68,name:"",price:82,rate:4,category:{name:"",type:"gardenHome",class:"e"},img:"./imgMostafa/flours/  (67).jpg"},
    {id:69,name:"",price:83,rate:5,category:{name:"",type:"GardenWork",class:"e"},img:"./imgMostafa/flours/  (68).jpg"},
    {id:70,name:"",price:84,rate:1,category:{name:"",type:"forest",class:"e"},img:"./imgMostafa/flours/  (69).jpg"},
    {id:71,name:"",price:85,rate:2,category:{name:"",type:"lab",class:"e"},img:"./imgMostafa/flours/  (70).jpg"},
    {id:72,name:"",price:86,rate:3,category:{name:"",type:"medical",class:"e"},img:"./imgMostafa/flours/  (71).jpg"},
    {id:73,name:"",price:87,rate:4,category:{name:"",type:"poison",class:"e"},img:"./imgMostafa/flours/  (72).jpg"},
    {id:74,name:"",price:88,rate:5,category:{name:"",type:"home",class:"f"},img:"./imgMostafa/flours/  (73).jpg"},
    {id:75,name:"",price:89,rate:1,category:{name:"",type:"work",class:"f"},img:"./imgMostafa/flours/  (74).jpg"},
    {id:76,name:"",price:90,rate:2,category:{name:"",type:"gardenHome",class:"f"},img:"./imgMostafa/flours/  (75).jpg"},
    {id:77,name:"",price:91,rate:3,category:{name:"",type:"GardenWork",class:"f"},img:"./imgMostafa/flours/  (76).jpg"},
    {id:78,name:"",price:92,rate:4,category:{name:"",type:"forest",class:"f"},img:"./imgMostafa/flours/  (77).jpg"},
    {id:79,name:"",price:93,rate:5,category:{name:"",type:"lab",class:"f"},img:"./imgMostafa/flours/  (78).jpg"},
    {id:80,name:"",price:94,rate:1,category:{name:"",type:"medical",class:"f"},img:"./imgMostafa/flours/  (79).jpg"},
    {id:81,name:"",price:95,rate:2,category:{name:"",type:"poison",class:"f"},img:"./imgMostafa/flours/  (80).jpg"},
    {id:82,name:"",price:96,rate:3,category:{name:"",type:"",class:"f"},img:"./imgMostafa/flours/  (81).jpg"},
    {id:83,name:"",price:97,rate:4,category:{name:"",type:"",class:"f"},img:"./imgMostafa/flours/  (82).jpg"},
    {id:84,name:"",price:98,rate:5,category:{name:"",type:"",class:"f"},img:"./imgMostafa/flours/  (83).jpg"},
    {id:85,name:"",price:99,rate:1,category:{name:"",type:"",class:"f"},img:"./imgMostafa/flours/  (84).jpg"},
    {id:86,name:"",price:100,rate:1,category:{name:"",type:"home",class:"i"},img:"./imgMostafa/flours/  (84).jpg"},
    {id:87,name:"",price:101,rate:2,category:{name:"",type:"work",class:"i"},img:"./imgMostafa/flours/  (85).jpg"},
    {id:88,name:"",price:102,rate:3,category:{name:"",type:"gardenHome",class:"i"},img:"./imgMostafa/flours/  (86).jpg"},
    {id:89,name:"",price:103,rate:4,category:{name:"",type:"GardenWork",class:"i"},img:"./imgMostafa/flours/  (87).jpg"},
    {id:90,name:"",price:104,rate:5,category:{name:"",type:"forest",class:"i"},img:"./imgMostafa/flours/  (88).jpg"},
    {id:91,name:"",price:105,rate:1,category:{name:"",type:"lab",class:"i"},img:"./imgMostafa/flours/  (89).jpg"},
    {id:92,name:"",price:106,rate:2,category:{name:"",type:"medical",class:"i"},img:"./imgMostafa/flours/  (90).jpg"},
    {id:93,name:"",price:107,rate:3,category:{name:"",type:"poison",class:"i"},img:"./imgMostafa/flours/  (91).jpg"},
    {id:94,name:"",price:108,rate:4,category:{name:"",type:"home",class:"i"},img:"./imgMostafa/flours/  (92).jpg"},
    {id:95,name:"",price:109,rate:5,category:{name:"",type:"work",class:"i"},img:"./imgMostafa/flours/  (93).jpg"},
    {id:96,name:"",price:110,rate:1,category:{name:"",type:"gardenHome",class:"i"},img:"./imgMostafa/flours/  (94).jpg"},
    {id:97,name:"",price:111,rate:1,category:{name:"",type:"forest",class:"i"},img:"./imgMostafa/flours/  (95).jpg"},
    {id:98,name:"",price:112,rate:1,category:{name:"",type:"lab",class:"i"},img:"./imgMostafa/flours/  (96).jpg"},
    {id:99,name:"",price:113,rate:1,category:{name:"",type:"poison",class:"i"},img:"./imgMostafa/flours/  (97).jpg"},
    {id:100,name:"",price:114,rate:1,category:{name:"",type:"home",class:"j"},img:"./imgMostafa/flours/  (97).jpg"},
    {id:101,name:"",price:139,rate:2,category:{name:"",type:"work",class:"j"},img:"./imgMostafa/flours/  (98).jpg"},
    {id:102,name:"",price:138,rate:3,category:{name:"",type:"gardenHome",class:"j"},img:"./imgMostafa/flours/  (99).jpg"},
    {id:103,name:"",price:137,rate:4,category:{name:"",type:"GardenWork",class:"j"},img:"./imgMostafa/flours/  (100).jpg"},
    {id:104,name:"",price:136,rate:5,category:{name:"",type:"forest",class:"j"},img:"./imgMostafa/flours/  (101).jpg"},
    {id:105,name:"",price:135,rate:1,category:{name:"",type:"lab",class:"j"},img:"./imgMostafa/flours/  (102).jpg"},
    {id:106,name:"",price:134,rate:2,category:{name:"",type:"medical",class:"j"},img:"./imgMostafa/flours/  (103).jpg"},
    {id:107,name:"",price:133,rate:3,category:{name:"",type:"poison",class:"j"},img:"./imgMostafa/flours/  (104).jpg"},
    {id:108,name:"",price:132,rate:4,category:{name:"",type:"home",class:"j"},img:"./imgMostafa/flours/  (105).jpg"},
    {id:109,name:"",price:131,rate:5,category:{name:"",type:"work",class:"j"},img:"./imgMostafa/flours/  (106).jpg"},
    {id:110,name:"",price:130,rate:1,category:{name:"",type:"gardenHome",class:"j"},img:"./imgMostafa/flours/  (107).jpg"},
    {id:111,name:"",price:129,rate:2,category:{name:"",type:"GardenWork",class:"j"},img:"./imgMostafa/flours/  (108).jpg"},
    {id:112,name:"",price:128,rate:3,category:{name:"",type:"forest",class:"j"},img:"./imgMostafa/flours/  (109).jpg"},
    {id:113,name:"",price:127,rate:4,category:{name:"",type:"lab",class:"j"},img:"./imgMostafa/flours/  (110).jpg"},
    {id:114,name:"",price:126,rate:5,category:{name:"",type:"medical",class:"j"},img:"./imgMostafa/flours/  (111).jpg"},
    {id:115,name:"",price:125,rate:1,category:{name:"",type:"poison",class:"j"},img:"./imgMostafa/flours/  (112).jpg"},
    {id:116,name:"",price:124,rate:2,category:{name:"",type:"home",class:"j"},img:"./imgMostafa/flours/  (113).jpg"},
    {id:117,name:"",price:123,rate:3,category:{name:"",type:"work",class:"j"},img:"./imgMostafa/flours/  (114).jpg"},
    {id:118,name:"",price:122,rate:4,category:{name:"",type:"gardenHome",class:"k"},img:"./imgMostafa/flours/  (115).jpg"},
    {id:119,name:"",price:121,rate:5,category:{name:"",type:"GardenWork",class:"k"},img:"./imgMostafa/flours/  (116).jpg"},
    {id:120,name:"",price:120,rate:1,category:{name:"",type:"forest",class:"k"},img:"./imgMostafa/flours/  (117).jpg"},
    {id:121,name:"",price:119,rate:2,category:{name:"",type:"lab",class:"k"},img:"./imgMostafa/flours/  (118).jpg"},
    {id:122,name:"",price:118,rate:3,category:{name:"",type:"medical",class:"k"},img:"./imgMostafa/flours/  (119).jpg"},
    {id:123,name:"",price:117,rate:4,category:{name:"",type:"poison",class:"k"},img:"./imgMostafa/flours/  (120).jpg"},
    {id:124,name:"",price:116,rate:5,category:{name:"",type:"lab",class:"k"},img:"./imgMostafa/flours/  (121).jpg"},
    {id:125,name:"",price:115,rate:1,category:{name:"",type:"poison",class:"k"},img:"./imgMostafa/flours/  (122).jpg"},
]

const filter = [...new Set(api.map(e => e))]
const category = [...new Set(product.map(e => e))]
const filterItem=(e)=>{
    const filterCategories=category.filter(item)
    function item(el){
        if(el.id==e){
            return (
                el.id
            )
        }
    }
    displayItems(filterCategories)
}
if (btns) {
    btns.innerHTML = filter.map(e => {
        const { name, id } = e;
        return (
            `<button class="fil-p" onclick="filter(${id})">${name}</button>`
        )
    }).join()

}
if (root) {
    displayItems = (item) => {
        root.innerHTML = item.map(e => {
            const { img, title, price ,category,rate} = e

            return (
            `<section id="product1" class="section-p1 grid justify-center mt-7 col-span-1">

            <div class="Pro-container">
                <!-- ((((((((((((((((start product1)))))))))))))))) -->
                <div class="pro">
                    <img src="${e.img}" alt="" class="rounded-2xl mx-auto">
                    <div class="des">
                        <span class="text-3xl capitalize">${e.category.type}</span>
                        <h5>${e.name}</h5>
                        
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${e.price}.00$</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart "></i> </a>
                </div>
                </div>
                </section>
                `
            )
        }).join('')
    }
}
displayItems(category)














