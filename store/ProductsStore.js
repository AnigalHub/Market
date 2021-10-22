export const state = () =>({
    Products: []
})
export const mutations ={
  setProducts(state, savedProducts){
    state.Products = savedProducts
  },
}
export const getters = {
  ProductsAll(state){
    return state.Products
  },
}
export const actions = {
  SetProducts(context,newProducts){
    context.commit('setProducts',newProducts)
  },
  SortByPriceMin(context){
    let newProductsPriceMin = context.getters.ProductsAll.slice()
    console.log(newProductsPriceMin)
    let comparer = (a,b) => {
      if(Number(a.price)>Number(b.price)) {return 1}
      else if (Number(a.price)<Number(b.price)){return -1}
      else {return 0}
    }
    context.commit('setProducts',newProductsPriceMin.sort(comparer))
  },
  SortByRating(context){
    let newProductsRating = context.getters.ProductsAll.slice()
    console.log(newProductsRating)
    let comparer = (a,b) => {
      if(Number(a.rating)<Number(b.rating)) {return 1}
      else if (Number(a.price)>Number(b.rating)){return -1}
      else {return 0}
    }
    context.commit('setProducts',newProductsRating.sort(comparer))
  },
}
