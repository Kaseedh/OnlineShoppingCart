
    let shop = document.getElementById("shop");

    let generateShop = (lbw) => {
      
      shop.innerHTML="";
        return (shop.innerHTML = lbw.map((x) => {
            return `
        <div class="item product wd-hover-icons p-0"  onmouseover="btn(p${x.pid},pr${x.pid})" onmouseout="btnq(p${x.pid},pr${x.pid})" >
                <div class="product-element-top wd-quick-shop">
                <img src="./media/image/${x.imgpath1}" class="card-img-top hov a" id="p${x.pid}" alt="...">
                <img src="./media/image/${x.imgpath2}" class="card-img-top hov" id="pr${x.pid}" style="display: none;" >
                <span id="pri${x.pid}" style="display: none;">${x.pid}</span>
                    <div class="wrapp-buttons">
                        <div class="wd-buttons" id="sh">
                            <a id="btn1" style=\"font-size: 25px;font-weight: 1200;background-color:#fff;color:black;padding-left:5px;\"  title=\"Add To Cart\" class="btn1 wd-add-btn wd-action-btn wd-style-icon wd-add-cart-icon button product_type_simple add_to_cart_button add-cart" onclick="addCart(pri${x.pid}.innerText)"><i class="bi bi-cart"style="margin-right:20px;"></i></a>
                            <a id="btn" style=\"font-size: 25px;font-weight: 1200;background-color:#fff;color:black;margin-right:5px;\" title=\"Quick View\" class="btn1 quick-view wd-action-btn wd-style-icon wd-quick-view-icon button open-quick-view quick-view-button" onclick="popUp(pri${x.pid}.innerText)" data-bs-toggle="modal" data-bs-target="#exampleModal" titlt="Quick View"><i class="bi bi-search" style="margin-right:10px;"></i></a>
                        </div>
                    </div>
                </div>
                <h5 class="wd-entities-title text-center names">${x.pname}</h5>
                <p class="woocs_price_code woocommerce-Price-amount pri amount text-center">&#8377; ${x.pprice}</p>          
            </div>
        `
        })
            .join(""));
          };
      let tpro = document.getElementById("dvtop");
          function generateTopPro(arr){
            tpro.innerHTML="";
            for(x=0;x<arr.length;x=x+2){
              tpro.innerHTML=tpro.innerHTML+"<div style=\"height: 12vh;\"><div style=\"width: 45%; float: left;\">"+
                "<img src=\"./media/image/"+arr[x].imgpath1+"\" style=\"height: 12vh;\"/></div><div style=\"width: 55%; float: right;padding-left: 8px;\">"+
                  "<p style=\"font-size: 16px;color: #2f2f2f;\">"+arr[x].pname+"<br><span style=\"color: rgb(231, 169, 89);font-size: 16px;\">&#8377;"+arr[x].pprice+" </span> </p></div></div><br>";
            }
          }     
   function popUp(al)
   {
     for(x=0;x<arr.length;x++){
         if(arr[x].pid==al){
             var l=x;
         }
     }
     var r=document.getElementById("md1");
     
    var lol="<div class=\"modal-header\">"+"<button type=\"button\" id=\"modalclose\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>"+
    "</div>"+
    "<div class=\"modal-body\" style=\"background-color:#f4f4f4;\">"+
      "<div class=\"row\">"+
        "<div class=\"col-sm-5\" style=\"color: white; margin: 0px; padding: 0px;\">"+
          "<div id=\"carouselExample\" class=\"carousel slide\">"+"<div class=\"carousel-inner\">"+"<div class=\"carousel-item active\">"+"<img src=\"./media/image/"+arr[l].imgpath1+"\"  class=\"img-fluid\" class=\"d-block w-100\">"+"</div>"+"<div class=\"carousel-item\">"+"<img src=\"./media/image/"+arr[l].imgpath2+"\" class=\"d-block w-100\">"+"</div>"+"</div>"+"<button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">"+ "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>"+
    "<span class=\"visually-hidden\">Previous</span>"+
    "</button>"+
    "<button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"next\">"+ 
       "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"+"<span class=\"visually-hidden\">Next</span>"+
       "</button>"+
       "</div>"+ 
       "</div>"+
       "<!--Product details-->"+
       "<div class=\"col-sm-1\"></div>"+ 
       "<div class=\"col-sm-6\">"+ 
        "<p style=\"font-size: 25px;color:black;font-family=\"Marcellus SC\", Arial, Helvetica, sans-serif;\" id=\"mtPname\">"+arr[l].pname+"</p>"+
        "<h2 style=\"color: rgb(231, 169, 89);\" id=\"mtPrate\">&#8377; "+arr[l].pprice+" </h2>"+
        "<p id=\"mtPdetail\" style=\"color:black;\">"+arr[l].description+"</p>"+"<div class=\"mb-2\" style=\"height:1.5px;width=90%;background-color:grey\"></div>"+
        "<p style=\"font-weight: bold;color:black;\"><span style=\"font-weight: bold;color:black;\">Metal:</span>"+arr[l].metal+"</p>"+"<div class=\"mb-2\" style=\"height:1.5px;width=90%;background-color:grey\"></div>"+
        "<p style=\"font-weight: bold;color:black;\"><span style=\"font-weight: bold;color:black;\">Colour:</span>"+arr[l].colour+"</p>"+"<div class=\"mb-2\" style=\"height:1.5px;width=90%;background-color:grey;\"></div>"+
        "<p style=\"color:black;\"><span style=\"color: rgb(231, 169, 89);\">&#10003;</span id=\"mtPstock\"> 1 stock</p>"+
          "<button  type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal3\" class=\"btn btn-block ordernow m-2\" style=\"background-color: rgb(231, 169, 89);\"onclick=\"deliverpro("+al+")\">"+
            "order Now"+"</button>"+
            "<button  type=\"button\" id=\"\" class=\"btn btn-block m-2\" style=\"background-color: rgb(231, 169, 89);\" onclick=\"addCart("+al+")\">"+
              "Add to cart"+"</button>"+
              "<div class=\"mb-2\" style=\"height:1.5px;width=90%;background-color:grey\"></div>"+
                "<p style=\"color:black;\"><span style=\"font-weight: bold;color:black;\">Tags:</span>  Kundan & Polki, Pearls, Polki, Ruby, kanchsin,</p>"+"<p><span style=\"font-weight: bold;color:black;\">Share:</span></p>"+"</div>"+"</div>"+"</div>";;
  r.innerHTML=lol;
 }

    function btn(img1id, img2id) {
        img1id.style = "display: none;"
        img2id.style = "display: block;"
    }
    function btnq(img1id, img2id) {
        img1id.style = "display: block;"
        img2id.style = "display: none;"
    }
    function filtercard(indexes){
      var filbody="";
      var sortar=[];
      for(x=0,i=0;x<arr.length;x++){
        if(x==indexes[i]){
          sortar.push(arr[x]);
          i++;}}
          sortar.sort((a, b) => {
            return a.pprice - b.pprice;
          })
          for(x=0;x<sortar.length;x++){
         filbody= filbody+
         "<div class=\"item product wd-hover-icons p-0\"  onmouseover=\"btn(p"+sortar[x].pid+",pr"+sortar[x].pid+")\" onmouseout=\"btnq(p"+sortar[x].pid+",pr"+sortar[x].pid+")\" >"+
                "<div class=\"product-element-top wd-quick-shop\">"+
                "<img src=\"./media/image/"+sortar[x].imgpath1+"\" class=\"card-img-top hov a\" id=\"p"+sortar[x].pid+"\">"+
                "<img src=\"./media/image/"+sortar[x].imgpath2+"\" class=\"card-img-top hov\" id=\"pr"+sortar[x].pid+"\" style=\"display: none;\" >"+
                "<span id=\"pri"+sortar[x].pid+"\" style=\"display: none;\">"+sortar[x].pid+"</span>"+
                    "<div class=\"wrapp-buttons\">"+
                        "<div class=\"wd-buttons\" id=\"sh\">"+
                            "<a id=\"btn1\" style=\"font-size: 25px;font-weight: 1200;\"  title=\"Add To Cart\" class=\"btn1 wd-add-btn wd-action-btn wd-style-icon wd-add-cart-icon button product_type_simple add_to_cart_button\" onclick=\"addCart("+sortar[x].pid+")\"><i class=\"bi bi-cart\"></i></a>"+
                            "<a id=\"btn\"style=\"font-size: 25px;font-weight: 1200;\"  title=\"Quick View\" class=\"btn1 quick-view wd-action-btn wd-style-icon wd-quick-view-icon button open-quick-view quick-view-button\" onclick=\"popUp(pri"+sortar[x].pid+".innerText)\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" titlt=\"Quick View\"><i class=\"bi bi-search\"></i></a>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<h5 class=\"wd-entities-title text-center\">"+sortar[x].pname+"</h5>"+
                "<p class=\"woocs_price_code woocommerce-Price-amount amount text-center\">&#8377;"+sortar[x].pprice+"</p>"+          
            "</div>";
        }
      shop.innerHTML="";
      shop.innerHTML=filbody;
    }
    function mtFilter(priceFilter)
            {
               var x;
               var ch=priceFilter.value;
               fil1=[];
               fil2=[];
               fil3=[];
               fil4=[];
               switch(ch)
               {
                case '0': 
                    generateShop(arr);
                     break;
                  case '1': 
                     for(x=0;x<arr.length;x++)
                     {
                        if(arr[x].pprice>0 && arr[x].pprice<10000)
                        {
                          fil1.push(x);
                        }
                      }
                      filtercard(fil1);
                     break;
                case '2': 
                     for(x=0;x<arr.length;x++)
                     {
                        if(arr[x].pprice>10000 && arr[x].pprice<50000)
                        {
                          fil2.push(x);
                        }
                     }
                     filtercard(fil2);
                     break;
                case '3': 
                     for(x=0;x<arr.length;x++)
                     {
                        if(arr[x].pprice>50000 && arr[x].pprice<100000)
                        {
                          fil3.push(x);
                        }
                     }
                     filtercard(fil3);
                     break;
                case '4': 
                     for(x=0;x<arr.length;x++)
                     {
                        if(arr[x].pprice>100000)
                        {
                          fil4.push(x);
                        }
                     }
                     filtercard(fil4);
                     break;
                 default: 
                      alert("bye bye");      
               }
           }



// const btnCart=document.querySelector('#cart-icon');
// const cart=document.querySelector('.cart');
// const btnClose=document.querySelector('#cart-close');

// btnCart.addEventListener('click',()=>{
//   cart.classList.add('cart-active');
// });

// btnClose.addEventListener('click',()=>{
//   cart.classList.remove('cart-active');
// });

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

 // Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  // let cartBtns=document.querySelectorAll('.add-cart');
  // cartBtns.forEach((btn)=>{
  //   btn.addEventListener('click',addCart);
    
  // });
  // for(x=0;x<itemList.length;x++){
  //   let newProductElement= createCartProduct(itemList[x].prodid,itemList[x].nam,itemList[x].pric,itemList[x].pimg);
  //   let element=document.createElement('div');
  //   element.innerHTML=newProductElement;
  //   let cartBasket=document.querySelector('.cart-content');
  //   cartBasket.append(element);
  // }
  generateCart();
  updateTotal();
}


//Remove Item
let removeItem=(id)=>{
  // if(confirm('Are Your Sure to Remove')){
    alert(id);
    // let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter((el)=>el.prodid!==id);
    localStorage.setItem("data1",JSON.stringify(itemList));
    loadContent();

  // }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}
let itemList=JSON.parse(localStorage.getItem("data1"))||[];
//Add Cart
function addCart(proid){ 
  var l;
for (x = 0; x < arr.length; x++) {
  if (arr[x].pid == proid) {
     l = x;
  }
}
prodid=arr[l].pid;
nam=arr[l].pname;
pric=arr[l].pprice;
pimg="media/image/"+arr[l].imgpath1;

 let newProduct={prodid,nam,pric,pimg};
 itemList.push(newProduct);
 
 alert("Product Added in Cart.");
 localStorage.setItem("data1",JSON.stringify(itemList));
loadContent();
}
let cartBasket=document.querySelector('.cart-content');
let generateCart=()=>{
  if(itemList.length!=0){
    cartBasket.innerHTML=itemList.map((x)=>{
      return `<div class="cart_item">
      <div class="cart-box">
     <span id="${x.prodid}" style="display:none;">${x.prodid}</span>
      <div class="cart_img">
          <a href="#"><img src="${x.pimg}" alt=""></a>
      </div>
      <div class="cart_info">
      <div class="cart-food-title">${x.nam}</div>
          <input type="number" value="1" class="cart-quantity"/>
          <span class="cart-price cart_price">${x.pric}</span>
      </div>
      <ion-icon name="trash" onclick="removeItem(${x.prodid})" class="cart-remove"></ion-icon>
      </div>
    </div>
      `
    });
    
  }
}
generateCart();
// function createCartProduct(i,title,price,imgSrc){

//   return `
//   <div class="cart_item">
//   <div class="cart-box">
//  <span id="p${i}" style="display:none;">${i}</span>
//   <div class="cart_img">
//       <a href="#"><img src="${imgSrc}" alt=""></a>
//   </div>
//   <div class="cart_info">
//   <div class="cart-food-title">${title}</div>
//       <input type="number" value="1" class="cart-quantity"/>
//       <span class="cart-price cart_price">${price}</span>
//   </div>
//   <ion-icon name="trash" class="cart-remove"></ion-icon>
//   </div>
// </div>
//   `;
// }

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    // product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
  });

  totalValue.innerHTML='Rs.'+total;
  document.getElementById("amountofcart").innerHTML=total;
  document.getElementById("subtotal").innerHTML="";
  document.getElementById("subtotal").innerHTML='<span>SubTotal:</span><span style=\'color:golden\'> Rs.'+total+'</span>';
  var taxinclude=total+(total*5/100)
  document.getElementById("totalPrice").innerHTML='<span>Total: </span><span style=\'color:golden\'> Rs.'+taxinclude+'</span>';
  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }
}

const startBtn=document.querySelector('.btn-buy');
// const orderBtn=document.querySelector('.ordernow');
        const popupInfoPay=document.querySelector('.popup-info-payment')
         const popupInfo=document.querySelector('.popup-info');
         const exitBtn=document.querySelector('.exit-btn');
         const exitBtnPay=document.querySelector('.exit-btn-pay');
         const main1=document.querySelector('.main');
         const contineuBtn=document.getElementById('submit');
         const contineuBtnPay=document.getElementById('continue-btn-pay');
         const detailbox=document.querySelectorAll('.detail-box');
         const confirmOrder=document.querySelector('.confirmorder');

         function orderedpro(prodetail){
          var as=document.getElementById("orderedpro");
          var ordered_pro_detail="";
          //  popupInfo.classList.add('active');
          //  main1.classList.add('active');
          for(x=0;x<prodetail.length;x++){
            ordered_pro_detail=ordered_pro_detail+"<tr><td> <img src=\"" +prodetail[x].pimg + "\" class=\"img-fluid\" height=\"80px\" width=\"120px\" /></td><td><h6 style=\"font-family: 'Marcellus SC', sans-serif;margin-left:3%\">" + prodetail[x].nam + "</h6><span class=\"fa fa-star checked\" style=\"color:orange\"></span><span class=\"fa fa-star checked\" style=\"color:orange\"></span><span class=\"fa fa-star checked\" style=\"color:orange\"></span><span class=\"fa fa-star checked\" style=\"color:orange\"></span> <span class=\"fa fa-star\"></span><p style=\"margin-left:3%\"> &#8377; "
            + prodetail[x].pric + "</td></tr>" }
          as.innerHTML=ordered_pro_detail;   
         }
        
         startBtn.onclick = () => {
           if(itemList.length!=0){
             orderedpro(itemList);  
             document.getElementById("cartclose").click();
            }
             else
             alert("please purchase a Product");
         }
         function deliverpro(sp) {
          let directorder=[];
          var l;
          
        for (x = 0; x < arr.length; x++) {
          if (arr[x].pid == sp) {
             l = x;
          }
        }
       
        prodid=arr[l].pid;
        nam=arr[l].pname;
        pric=arr[l].pprice;
        pimg="media/image/"+arr[l].imgpath1;
         let newProduct={prodid,nam,pric,pimg}
          directorder.push(newProduct); 
        orderedpro(directorder);
        document.getElementById("modalclose").click();
        document.getElementById("subtotal").innerHTML='<span>SubTotal:</span><span style=\'color:golden\'> Rs.'+pric+'</span>';
        var taxinclude=pric+(pric*5/100)
        document.getElementById("totalPrice").innerHTML='<span>Total: </span><span style=\'color:golden\'> Rs.'+taxinclude+'</span>';
        

         }
        //  exitBtn.onclick = () => {
        //      popupInfo.classList.remove('active');
        //      main1.classList.remove('active');

        //  }


         exitBtnPay.onclick = () => {
          main1.classList.remove('active');
       popupInfoPay.classList.remove('active');

          
          }
          confirmOrder.onclick=()=>{
            document.getElementById("modalclose").click();
            main1.classList.remove('active');
       popupInfoPay.classList.remove('active');
       count=0;
       loadContent();
      }    
      var myorders=[];
        contineuBtnPay.onclick=()=>{
          
          for(x=0;x<itemList.length;x++){
            myorders.push(itemList[x]);
          }
          for(x=0;x<myorders.length;x++){
            itemList.shift();
          }
          localStorage.setItem("myorders",JSON.stringify(myorders));
          localStorage.removeItem("data1");
          let cartBasket=document.querySelector('.cart-content');
        cartBasket.innerHTML="";
        
        loadContent(); 
        }

         contineuBtn.onclick = () => {
          document.getElementById("modalclose1").click();
          popupInfoPay.classList.add('active');
          // popupInfo.classList.remove('active');
          // main1.classList.remove('active');
          // quizbox.classList.add('active');
          // showQuestions(0);
          // questionCounter(1);
          // headerScore();

      }
