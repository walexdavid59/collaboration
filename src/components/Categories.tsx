import type { ICategory } from "../types/ICategory"
import Category from "./Category"
// import AllCategories  from "./AllCategories";

const Categories = () =>{

    // const categories: ICategories[] =[
      const categories: ICategories[] =[
        {
        name: "T-Shirt",
        image: "./images/btshitrt.jpg",
    }, {
        name: "Jacket",
        image: "./images/bjack.jpg",
    }, {
        name: "Skirt",
        image: "images/bjack.jpg",
    }, 
     {
        name: "Jean",
         image: "images/32.jpg",
    },{
        name: "Bags",
         image: "images/bbag.jpg",
    },{
        name: "Shoes",
        image:"images/bshoe.jpg",
    },{
        name: "Watches",
         image: "images/bwatches.jpg",
    },{
        name: "Caps",
         image: "images/bcap.jpg"
    },]

    return(
        <section className="flex justify-between">
            <div className="flex justify-between w-[90%] p-4">
                   {categories.map((category, key) => (
                    <Category {...category} key={key} />
                ))}
            </div>
            {/* <h1>Product</h1> */}
            {/* <div className='w-[10%] rounded-full border-1'> */}
                <a href="http://" className="rounded-full"><img src="./images/4dots.png" className="w-2/5  mt-13 ml-5"/></a>
            {/* </div> */}
            
        </section>
    )
}

export default Categories