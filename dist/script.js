// document.body.style.backgroundColor="red"
const url="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

function ranNo(no){
    //because we have good img till 700
    if(no>700){
        no=700
    }
    let r_no=Math.floor((Math.random()*no)+1)
    return r_no
}


function renderCard(){
    let hp=document.querySelector("#hp")
    let spec1=document.querySelector("#spec1")
    let spec2=document.querySelector("#spec2")
    let attack=document.querySelector("#attack")
    let defense=document.querySelector("#defense")
    let speed=document.querySelector("#speed")
    let img=document.querySelector("img")
    let nam=document.querySelector("#name")
    let color_div=document.querySelector("#cDiv")
    // let spec_arr=document.querySelectorAll(".spec")

    // color_div.style.backgroundColor="red"
    fetch(url)
    .then((responce)=>{
        data=responce.json()
        return data
    })
    .then(data=>{
        // console.log(data.results)
        let ran_no=ranNo(data.results.length)
        // console.log(ran_no)
        let newUrl=data.results[ran_no].url
        console.log(newUrl)
        fetch(newUrl)
        .then((res)=>{
            // console.log(res)
            return res.json()
        })
        .then(newData=>{
            //all logic here
            spec2.style.display="block"

            hp.innerHTML=newData.stats[0].base_stat
            spec1.innerHTML=newData.types[0].type.name
            if(newData.types.length==2){
                spec2.innerHTML=newData.types[1].type.name
            }
            else{
                spec2.style.display="none"
            }
            attack.innerHTML=newData.stats[1].base_stat
            defense.innerHTML=newData.stats[2].base_stat
            speed.innerHTML=newData.stats[5].base_stat
            let og_name=newData.name
            nam.innerHTML=og_name[0].toUpperCase()+og_name.slice(1)
            let img_url=newData.sprites.other.dream_world.front_default
            if(img_url==null) img_url=newData.sprites.front_default
            img.setAttribute("src",img_url)

            let color_is=typeColor[spec1.innerHTML]
            color_div.style.backgroundColor=(color_is)
            spec1.style.backgroundColor=(color_is)
            spec2.style.backgroundColor=(color_is)

            

        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch((err)=>{console.log(err)})
}

renderCard()  //for part 1
// renderCard2()  //for part 2


let newPoke=document.querySelector("#btn")
newPoke.addEventListener("click",()=>{
    renderCard() //for part1
    // renderCard2()  //for part 2
})


let sun=document.querySelector("#sun")
let moon=document.querySelector("#moon")
let htmlTag=document.querySelector("html")

sun.addEventListener("click",()=>{
    sun.classList.add("hidden")
    moon.classList.remove("hidden")
    htmlTag.classList.remove("dark")


})
moon.addEventListener("click",()=>{
    moon.classList.add("hidden")
    sun.classList.remove("hidden")
    htmlTag.classList.add("dark")
    
})



//for part 2


// function renderCard2(){
//     let hp=document.querySelector("#hp")
//     let spec1=document.querySelector("#spec1")
//     let spec2=document.querySelector("#spec2")
//     let attack=document.querySelector("#attack")
//     let defense=document.querySelector("#defense")
//     let speed=document.querySelector("#speed")
//     let img=document.querySelector("img")
//     let nam=document.querySelector("#name")
//     let color_div=document.querySelector("#cDiv")
//     let newUrl=`https://pokeapi.co/api/v2/pokemon/${ranNo(1200)}/`
//     fetch(newUrl)
//         .then((res)=>{
//             // console.log(res)
//             return res.json()
//         })
//         .then(newData=>{
//             //all logic here
//             spec2.style.display="block"

//             let img_url=newData.sprites.other.dream_world.front_default
//             if(img_url==null) img_url=newData.sprites.front_default
//             img.setAttribute("src",img_url)

//             hp.innerHTML=newData.stats[0].base_stat
//             spec1.innerHTML=newData.types[0].type.name
//             if(newData.types.length==2){
//                 spec2.innerHTML=newData.types[1].type.name
//             }
//             else{
//                 spec2.style.display="none"
//             }
//             attack.innerHTML=newData.stats[1].base_stat
//             defense.innerHTML=newData.stats[2].base_stat
//             speed.innerHTML=newData.stats[5].base_stat
//             let og_name=newData.name
//             nam.innerHTML=og_name[0].toUpperCase()+og_name.slice(1)
            

//             let color_is=typeColor[spec1.innerHTML]
//             color_div.style.backgroundColor=(color_is)
//             spec1.style.backgroundColor=(color_is)
//             spec2.style.backgroundColor=(color_is)

            

//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }