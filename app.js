const products = [
    { 
        img: "https://www.czone.com.pk/Images/Thumbnails/2-czone.com.pk-1540-16358-060724112742.jpg", 
        name: "Laptop",
        brand: "lenovo", 
        category: "Electronics", 
        price: 999.99,
    },
    { 
        img: "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129", 
        name: "Smartphone",
        brand: "iphone", 
        category: "Electronics", 
        price: 699.99,
    },
    { 
        img: "https://www.mega.pk/items_images/ts_25645.webp", 
        name: "Coffee Maker",
        brand: "Westpoint", 
        category: "Kichen appliances", 
        price: 89.99,
    },
    { 
        img: "https://shoesclub.pk/wp-content/uploads/2024/10/ULTRA-NAVY-C-600x600.jpg", 
        name: "Running Shoes",
        brand: "Nike", 
        category: "Apparel", 
        price: 59.99,
    },
    { 
        img: "https://img.drz.lazcdn.com/static/pk/p/6963c2b8a1aab59742fcb93e0cffce58.jpg_200x200q80.jpg_.webp", 
        name: "Blender",
        brand: "Westpoint", 
        category: "Kichen appliances", 
        price: 49.99,
    },
    { 
        img: "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du7000usmm/gallery/pk-crystal-uhd-du7000-511088-ua50du7000usmm-542183024?$684_547_PNG$",
        name: "LED TV",
        brand: "Samsung", 
        category: "Electronics", 
        price: 499.99,
    },
    { 
        img: "https://m.media-amazon.com/images/I/71zgwmiHGDL._AC_UY218_.jpg", 
        name: "Backpack",
        brand: "Camel mountain", 
        category: "Accessories", 
        price: 39.99,
    },
    { 
        img: "https://m.media-amazon.com/images/I/51GTn-M-LEL._AC_SX425_.jpg", 
        name: "Guitar",
        brand: "Jackson guitar", 
        category: "Musical Instruments", 
        price: 199.99,
    },
    { 
        img: "https://thumbs.dreamstime.com/b/bass-drum-d-illustration-white-background-42820957.jpg", 
        name: "Drum",
        brand: "Kawai", 
        category: "Musical Instruments", 
        price: 300.99,
    },
    { 
        img: "https://yamahamrm.pk/wp-content/uploads/2022/02/YUS1-1.webp", 
        name: "Piano",
        brand: "kawai", 
        category: "Musical Instruments", 
        price: 119.99,
    },
    { 
        img: "https://img.drz.lazcdn.com/static/pk/p/261a999d9e16783876cc5fc718e0a8b6.jpg_200x200q80.jpg_.webp", 
        name: "Cap",
        brand: "adidas", 
        category: "Accessories", 
        price: 190.99,
    },
    { 
        img: "https://brandahub.com/cdn/shop/files/0_71_427ca860-4761-4dfd-9a1d-7db0c194a467.jpg?v=1712434784",
        name: "Trouser",
        brand: "Addidas",
        category: "Apparel", 
        price: 140.99,
    },
    { 
        img: "https://montivo.pk/cdn/shop/products/010-1_39f947ea-64be-4a23-8c2b-b9556c283b96_1024x1024.jpg?v=1650997342",
        name: "Black Pants",
        brand: "Gucci",
        category: "Apparel", 
        price: 100.99,
    },
    { 
        img: "https://img.drz.lazcdn.com/static/pk/p/d09c7cbd160f2429c8659dc553d3ad88.jpg_720x720q80.jpg_.webp", 
        name: "Cricket Bat",
        brand: "1x Bat", 
        category: "Sports", 
        price: 189.99,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Nitro_Cam002_V4_78aa0751-d553-4aaa-86a4-e02d8dd721ec.webp?v=1719580799",
        name: "smart watch",
        brand: "iphone",
        category: "Electronics",
        price: 1000.99
    },
    { 
        img: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/8265-02.jpg?v=1728056375", 
        name: "Wristwatch",
        brand: "rolex", 
        category: "Accessories", 
        price: 200.99,
    },
    { 
        img: "https://img.drz.lazcdn.com/static/pk/p/cc5c878654162b40163f7c76febcf459.jpg_720x720q80.jpg_.webp", 
        name: "Cricket bag",
        brand: "calaway", 
        category: "Sports", 
        price: 290.99,
    },
    { 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUI0jKOhTg7p-9FQCtyBw9dVEQRFsazuRGDw&s", 
        name: "Javelin rod",
        brand: "nordic", 
        category: "Sports", 
        price: 260.99,
    },
    { 
        img: "https://thumbs.dreamstime.com/b/bass-drum-d-illustration-white-background-42820957.jpg",
        name: "Drum",
        brand: "kawai", 
        category: "Musical Instrument", 
        price: 210.99,
    },
    { 
        img: "https://img.drz.lazcdn.com/static/pk/p/84c0be392191afcd29d5e7bb851af5d0.jpg_720x720q80.jpg_.webp", 
        name: "Football",
        brand: "fifa", 
        category: "Sports", 
        price: 220.99
    },
    { 
        img: "https://cdn.shopify.com/s/files/1/0551/1446/5418/files/smallch.jpg?v=1711784619", 
        name: "Knife",
        brand: "West point", 
        category: "Kicken appliances",
        price: 120.99
    },
    { 
        img: "https://static-01.daraz.pk/p/6676a3db2ec6816c59656eb9c5b010d6.jpg", 
        name: "Set of spones",
        brand: "west point", 
        category: "Kichen appliances", 
        price: 110.99,
    },
    { 
        img: "https://m.media-amazon.com/images/I/81bhumY3rBL._AC_UF894,1000_QL80_.jpg", 
        name: "Cutter",
        brand:"west point", 
        category: "Kichen appliances", 
        price: 300.99,
    },
    { 
        img: "https://mediaserver.goepson.com/ImConvServlet/imconv/704a8e47673be8bb64f8278505d047acd0a1a4f2/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=EB-2165W_02",
        name: "Projector",
        brand: "epson",
        category: "Electronics", 
        price: 300.99,
    }
  ];
  var div= document.querySelector(".container")
//   var button= document.querySelectorAll("#btn")
  const check=(button)=>{
    div.innerHTML=""
    console.log(button.innerHTML);
    
    var filter= products.filter((item)=>{
         return button.innerHTML===item.category
        })
console.log(filter);
  
  filter.map((item)=>{
    div.innerHTML += `<div class="container1">
        <img src="${item.img}" alt="..." class="image">
                <h1>Name: ${item.name}</h1>
                <h2>brand: ${item.brand} </h2>
                <h2>Category: ${item.category}</h2>
                <h1>Price: $${item.price}</h1>
                <Center>
                <button class = "cart" onclick = "cart()">Add to Cart</button>
                </center>
            </div>`
               
  }
)}
function cart() {
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your product is add to cart",
  showConfirmButton: false,
  timer: 1500
});
}