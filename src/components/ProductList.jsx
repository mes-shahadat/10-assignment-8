import { NavLink, useLoaderData, useParams } from "react-router-dom";

function ProdutctList() {

    const param = useParams();
    const allProducts = useLoaderData()
    let products;

    if (param.category === undefined) {
        products = allProducts;
    }
    else {
        products = allProducts.filter(
            prod => prod.category.includes(param.category)
        )
    }

    return (
        <>
        {
            products.length === 0 ? <h1 className="max-sm:mx-auto md:col-span-5 text-4xl font-bold text-[#8339c3]">No Data found</h1> : <div className="md:col-span-8 lg:col-span-9 xl:col-span-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">

            {
                products.map(
                    (product) => <div key={product.product_id} className="p-4 bg-white rounded-xl grid grid-cols-1 gap-2">
                    <img className="rounded-xl" src={product.product_image} alt="" />
                    <h3 className="text-xl font-bold">{product.product_title}</h3>
                    <p className="text-gray-500">Price: ${product.price}</p>
                    <NavLink className="text-[#8339c3] px-4 py-2 border-2 border-[#953ed0] border-b-[#de7eba] rounded-full inline-block mb-auto w-max" to={`/product-details/${product.product_id}`}>View Details</NavLink>
                </div>
                )
            }

        </div>
        }
        </>
    )
}

export default ProdutctList;