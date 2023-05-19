import React from 'react'
import { Gallery } from "react-grid-gallery";

function ImagesGallery() {
  const images = [
    {
       src: "https://images.squarespace-cdn.com/content/v1/59444b0137c581806e35891b/1565899938897-1Z91TXZJYXY011XTUGQC/gumball+grab1.jpg?format=500w",
       width: 420,
       height: 312,  
    },
    {
       src: "https://static-01.daraz.com.bd/p/c7941f64875a7bd60f14e54a864d29be.jpg_720x720.jpg_.webp",
       width: 420,
       height: 312,
      
    },
  
    {
       src: "https://cdn.shopify.com/s/files/1/0326/2971/9176/collections/toys-games-444426.jpg?v=1645577311",
       width: 420,
       height: 312,
    },
    {
       src: "https://i.ytimg.com/vi/MF4XgNPpTbU/maxresdefault.jpg",
       width: 420,
       height: 312,
    },
    {
       src: "https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-october-6-260nw-1197291274.jpg",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hcyRDVj5Yyi0rbtWo1-pLNzD4q9FvUFNtg&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://images.news18.com/ibnlive/uploads/2022/02/happy-teddy-day-2022-2-1.jpg",
       width: 420,
       height: 312,
    },
    {
       src: "https://www.jiomart.com/images/product/420x420/rvpaqajkzb/deals-india-couple-love-teddy-bears-in-basket-30-cm-pink-product-images-orvpaqajkzb-p591730346-0-202205301727.jpg",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKMVLC08aLC-LhRm21ceyjMrSqPFVOzs4tw&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw7db3306f/images/VTB/vtb-22731-20worldssoftestbear-kbkf20001_feature1_20161227_1059.jpg?sw=600",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSFCdQT0XEb50hrAPOJfsq0FoGErjRyaelw&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8vGy5s_L7qgyDHorErr3F_-V6QBoHhyBxw&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://cdn11.bigcommerce.com/s-5kcaxd50lw/images/stencil/1280x1280/products/398306/6745524/67892c3a19d614dfd01288188ab4b9b47ad0954dcbb9b0934dcb8edee0b9fe41__82777.1642628932.jpg?c=2",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfn_T45l49Y2zfxqOSHp0i2CMEQFSmy3B2wQ&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEV2TWofidKRE8pHqiZ2aU59V6JqWheayVDA&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacm624PoY5F3uKQfHElH2wchrum2kgQIAsg&usqp=CAU",
       width: 420,
       height: 312,
    },
    {
       src: "https://i.ytimg.com/vi/nYFK4YJMNx0/maxresdefault.jpg",
       width: 420,
       height: 312,
    },
 ];
  
  return (
    <div className='text-center mt-11'> 
    <h1 className='text-4xl font-semibold  text-orange-600'>Kidz Toy Gallery</h1>
    <div className='mx-auto flex justify-center'>
    <hr className="w-48 mb-7 mt-2 font-semibold border-t-2 border-orange-600  "></hr>
    </div>
    <Gallery images={images} />

    </div>
  )
}

export default ImagesGallery