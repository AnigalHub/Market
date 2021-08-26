export const state = () =>({
  products:[]
})
export const mutations ={
  addProduct(state, product){
    state.products.push(product)
  },
  deleteProduct(state,id){
    state.products.splice(id,1)
  },
  cleanBasket(state){
    state.products=[]
  }
}
export const getters ={
  Products(state){
    return state.products
  }
}
