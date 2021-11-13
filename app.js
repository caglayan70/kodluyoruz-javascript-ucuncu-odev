const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  // <button class="btn btn-outline-dark btn-item" data-id="All">All</button>

  const container=document.querySelector(".btn-container")
  const button=document.createElement("button")
  button.className="btn btn-outline-dark btn-item"
  button.id="All"
  button.innerHTML="All"
  container.appendChild(button)

  const container1=document.querySelector(".btn-container")
  const button1=document.createElement("button")
  button1.className="btn btn-outline-dark btn-item"
  button1.id="Korea"
  button1.innerHTML="Korea"
  container1.appendChild(button1)

  const container2=document.querySelector(".btn-container")
  const button2=document.createElement("button")
  button2.className="btn btn-outline-dark btn-item"
  button2.id="Japan"
  button2.innerHTML="Japan"
  container2.appendChild(button2)

  const container3=document.querySelector(".btn-container")
  const button3=document.createElement("button")
  button3.className="btn btn-outline-dark btn-item"
  button3.id="China"
  button3.innerHTML="China"
  container3.appendChild(button3)

 const all=document.getElementById("All")
 const Korea=document.getElementById("Korea")
 const Japan=document.getElementById("Japan")
 const China=document.getElementById("China")
 const section=document.getElementById("section")

  eventListeners();

  function eventListeners(){
    all.addEventListener("click",addFood)
    Korea.addEventListener("click",addKorea)
    Japan.addEventListener("click",addJapan)  
    China.addEventListener("click",addChina)
    document.addEventListener("DOMContentLoaded",function(){
      let menus=getLocalStorage()
      menus.forEach(function(menu){
        menu.forEach(function(element){
          section.innerHTML +=`
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${element.img}" alt="Tteokbokki" class="photo">
       <div class="menu-info">
       <div class="menu-title">
           <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
         <div class="menu-text">
           ${element.desc}
           </div>
           </div>
           </div>
      `
        })
      })
    })
  }
  // <div class="menu-items col-lg-6 col-sm-12">
  //           <img src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg" alt="Tteokbokki" class="photo">
  //           <div class="menu-info">
  //             <div class="menu-title">
  //               <h4>Tteokbokki</h4>
  //               <h4 class="price">10.99</h4>
  //             </div>
  //             <div class="menu-text">
  //               Spicy rice cakes, serving with fish cake.
  //             </div>
  //           </div>
  //         </div>

  function addFood(){
    section.innerHTML=""
    menu.forEach(element=>{
      
      section.innerHTML +=`
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${element.img}" alt="Tteokbokki" class="photo">
       <div class="menu-info">
       <div class="menu-title">
           <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
         <div class="menu-text">
           ${element.desc}
           </div>
           </div>
           </div>
      `
    })

    let menus=getLocalStorage()
    if(menus.indexOf(menus[0])==-1){
      menus.push(menu)
    localStorage.setItem("menus",JSON.stringify(menus))
    }
    
  }
  


  function addKorea(){
    const menus=menu.filter(item=>{
      if(item.id=="1"||item.id=="3"||item.id=="7"){
        return item
      }
    })
    section.innerHTML=""
    menus.forEach(function(element){
      
      section.innerHTML +=`
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${element.img}" alt="Tteokbokki" class="photo">
       <div class="menu-info">
       <div class="menu-title">
           <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
         <div class="menu-text">
           ${element.desc}
           </div>
           </div>
           </div>
      `
    })
    
  }
  function addJapan(){
    const menus1=menu.filter(item=>{
      if(item.id=="2"||item.id=="6"||item.id=="9"){
        return item
      }
    })
    section.innerHTML=""
    menus1.forEach(function(element){
      
      section.innerHTML +=`
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${element.img}" alt="Tteokbokki" class="photo">
       <div class="menu-info">
       <div class="menu-title">
           <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
         <div class="menu-text">
           ${element.desc}
           </div>
           </div>
           </div>
      `
    })
  }
  function addChina(){
    const menus2=menu.filter(item=>{
      if(item.id=="4"||item.id=="5"||item.id=="8"){
        return item
      }
    })
    section.innerHTML=""
    menus2.forEach(function(element){
      
      section.innerHTML +=`
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${element.img}" alt="Tteokbokki" class="photo">
       <div class="menu-info">
       <div class="menu-title">
           <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
         <div class="menu-text">
           ${element.desc}
           </div>
           </div>
           </div>
      `
    })
  }
  function getLocalStorage(){
    let menus;
    if(localStorage.getItem("menus")===null){
      menus=[]
    }else{
      menus=JSON.parse(localStorage.getItem("menus"))
    }
    return menus
  }  
  
