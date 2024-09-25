



var product =document.querySelector(".products");


var productName= document.querySelector("#name");
var productdesc= document.querySelector("#desc");
var productprice= document.querySelector("#price");



//    group of products so array of object

var products=[

       

];


  product.onsubmit = function(e){

   e.preventDefault();



   // object

   var newProduct={
      name: productName.value,
       description: productdesc.value,
        price: productprice.value
      };


  

      // add product to the array

      products.push(newProduct);

      console.log(products);
      printData();

      // clear form inputs
      
    productName.value= " ";
    productdesc.value= " ";
    productprice.value= null;;
   
}


   function printData(){

      var data =``;

      for(var i=0; i<products.length; i++){

         data+=   `<tr>
      
         <td>${products[i].name}</td>
          <td>${products[i].description}</td>
           <td>${products[i].price}</td>
         
         </tr>`;
      }
      document.querySelector("tbody").innerHTML=data;
   }

      
      
      
   

