// pinia Plugin

import axios from "axios";
import { defineStore } from 'pinia'
import { apiBaseUrl, apiUrl, baseurl } from '~~/config/url';

export const useWishlistStore = defineStore('wishlist',{

    state: () => ({
        CartwishList:[],
        productStock:'',
        user_id: '',
        
    }),

    getters: {

        getWishList(state) {
            return state.CartwishList;
        }
    },

    actions: {

        async addProductToWishlist(productData) {
            var isProductMatch = false;
            this.CartwishList.forEach((wishlist, index) => {
                if(wishlist.id == productData.id) {
                    // SHORT WAY
                    isProductMatch = true;
                    // removeProductFromWishList(index);
                }
            });

            if(!isProductMatch){
                this.CartwishList.push(productData);
            }

        },

        removeProductFromWishList(index) {

            this.CartwishList.splice(index, 1);

        },
    },
    persist: true
})