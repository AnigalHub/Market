export const state = () =>({
  products: []
})
export const mutations ={
  addProduct(state, product){
    state.products.push(product);
  },
  deleteProduct(state,id){
    state.products.splice(id,1)
  },
  cleanBasket(state){
    state.products=[]
  },
  setSavedBasket(state, savedBasket){
    state.products = savedBasket
  }
}
export const getters = {
  Products(state){
     return state.products
  }
}
export const actions = {
  refreshSavedState(context){
    if (!process.browser)
      return;
    let newProducts = JSON.parse(localStorage.getItem('basket'));
    console.log(newProducts)
    if(newProducts)
      context.commit('setSavedBasket',newProducts)
  },
  addProductState(context,product){
    context.commit('addProduct',product)
    localStorage.setItem('basket', JSON.stringify(context.getters.Products))
  },
  deleteProductState(context, id) {
    context.commit('deleteProduct',id)
    localStorage.setItem('basket', JSON.stringify(context.getters.Products))
  }
}
