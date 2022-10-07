import { storeAddedProduct } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products.
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // console.log(products);

    //get stored data
    const savedCart = storeAddedProduct();
    // console.log(savedCart)
    const previousCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct)
        if (addedProduct) {
            const quantity = savedCart[id];
            // console.log(id, quantity)
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    // console.log(previousCart)


    return { products, previousCart };
}