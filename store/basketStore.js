export const state = () =>({
  products: [],
  orderSend:false,
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
    console.log(state.products.length)
  },
  setOrderSend(state,orderSaved){
    state.orderSend = orderSaved
  }
}
export const getters = {
  Products(state){
     return state.products
  },
  OrderSend(state){
    return state.orderSend
  }
}
export const actions = {
  refreshSavedState(context){
    if (!process.browser)
      return;
    let newProducts = JSON.parse(localStorage.getItem('basket'));
    if(newProducts)
      context.commit('setSavedBasket',newProducts)
  },
  SetOrderSend(context,orderSend){
    context.commit('setOrderSend',orderSend)
  },
  addProductState(context,product){
    context.commit('addProduct',product)
    localStorage.setItem('basket', JSON.stringify(context.getters.Products))
  },
  deleteProductState(context, id) {
    context.commit('deleteProduct',id)
    localStorage.setItem('basket', JSON.stringify(context.getters.Products))
  },
  deleteBasketState(context){
    context.commit('cleanBasket')
   localStorage.setItem('basket', JSON.stringify(context.getters.Products))
  }
}
