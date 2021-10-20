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
  SortByName(context){
    let newProductsName = context.getters.ProductsAll.slice()
    let comparer = (a,b) => {
      if(a.name>b.name) {return 1}
      else if (a.name<b.name){return -1}
      else {return 0}
    }
    console.log(newProductsName.sort(comparer))
    context.commit('setProducts',newProductsName.sort(comparer))
  },
}
