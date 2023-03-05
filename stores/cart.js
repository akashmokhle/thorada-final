    // pinia Plugin
    
import axios from 'axios';
import { defineStore } from 'pinia'
import { apiBaseUrl, apiUrl, baseurl } from '~~/config/url';
// import Snackbar from 'awesome-snackbar';
// import { Setting } from '~~/config/setting';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


export const useCartStore = defineStore('cart', {

    state: () => ({
        cartList: [],
        user_id:'',
        product_id:'',
        Quantity:''

    }),
    
    getters: {

        getCartList(state) {
            return state.cartList;
        },
    
        getTotalItems(state) {
            return state.cartList.length;
        }
    
    },

    actions: {

        async addProductToCart(productData) {
            var isProductMatch = false;
            this.cartList.forEach((cart) => {
                if(cart.id == productData.id) {
                    // SHORT WAY
                    cart.qty++;
                    isProductMatch = true;
                }
            });

            if(!isProductMatch){
                this.cartList.push(productData);
                // new Snackbar('Added to card', Setting.snackbar('s'))
            }
           
            console.log(this.cartList);
            alert('Cart Updated');

            var formData = new FormData();

            formData.append('user_id', 0);
            formData.append('product_id', productData.id);
            formData.append('quantity', productData.qty);

            const response = await axios.post(apiUrl.addProductToCart, formData);

            if(response.status == 200) {

                console.log(response.data);

            }else{
                console.log('Response Error ' + response.status);
            }
        },

        removeProductFromCart(index) {
            this.cartList.splice(index, 1);
            // new Snackbar('Product removed from cart', Setting.snackbar('s'))
        },

    },
    persist: true
})

// thoradaadmin.sitentweb.com/api/add-item-to-cart

// user_id
// product_id
// Quantity