<template>
    <div class="px-5 ">
            <main class="main">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="#" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Shop
                    <span></span> Cart
                </div>
            </div>
        </div>
        <div class="container mb-80 mt-50">
            <div class="row">
                <div class="col-lg-12 mb-40">
                    <h1 class="heading-2 mb-10">Your Cart</h1>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-body">There are <span class="text-brand">3</span> products in your cart</h6>
                        <h6 class="text-body"><a href="#" class="text-muted"><i class="fi-rs-trash mr-5"></i>Clear Cart</a></h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-responsive shopping-summery">
                        <table class="table table-wishlist">        
                            <thead>
                                <tr class="main-heading">
                                    <th class="custome-checkbox start pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="">
                                        <label class="form-check-label" for="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colspan="2">Product</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col" class="end">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="pt-30" v-for="(item, index) in cartItems">
                                    <td class="custome-checkbox pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                                        <label class="form-check-label" for="exampleCheckbox1"></label>
                                    </td>
                                    <td class="image product-thumbnail pt-40"><img :src="item.image" alt="#"></td>
                                    <td class="product-des product-name">
                                        <h6 class="mb-5"><a class="product-name mb-10 text-heading" href="#">{{item.title}}</a></h6>
                                        <td class="text-left" width="200px">
                                        <div class="input-group btn-block quantity">
                                            <input type="number" min="1" v-model="item.qty" size="1" class="form-control">
                                            <span class="input-group-btn">
                                            <button style="padding: 12px 8px; background-color: antiquewhite; color: black;" class="btn"><a @click="removeItemFromCart(index)" href="javascript:void(0)" class="fa fa-times"></a></button>
                                            </span>
                                        </div>
                                        </td>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width:90%">
                                                </div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                    </td>
                                    <td class="price" data-title="Price">
                                        <p class="text-body"><i class="fa-solid fa-indian-rupee-sign"></i> {{item.price}}</p>
                                    </td>
                                    <td class="text-center detail-info" data-title="Stock">
                                        <div class="detail-extralink mr-15">
                                            <div class="detail-qty border radius" style="padding: 4px;">
                                                <!-- <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a> -->
                                                <span class="qty-val"> {{item.qty}} </span>
                                                <!-- <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a> -->
                                            </div>
                                        </div>
                                    </td>
                                    <td class="price" data-title="Price">
                                        <p class="text-brand"><i class="fa-solid fa-indian-rupee-sign"></i> {{ (item.qty * item.price) }} /-</p>
                                    </td>
                                    <td class="action text-center" data-title="Remove"><a @click="removeItemFromCart(index)" href="javascript:void(0)" class="text-body"><i class="fi-rs-trash"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="divider-2 mb-30"></div>
                    <div class="cart-action d-flex justify-content-between">
                        <a class="btn "><i class="fi-rs-arrow-left mr-10"></i>Continue Shopping</a>
                        <a class="btn  mr-10 mb-sm-15"><i class="fi-rs-refresh mr-10"></i>Update Cart</a>
                    </div>
                    <div class="row mt-50">
                        <div class="col-lg-7">
                            <div class="calculate-shiping p-40 border-radius-15 border">
                                <h4 class="mb-10">Calculate Shipping</h4>
                                <p class="mb-30"><span class="font-lg text-muted">Flat rate:</span><strong class="text-brand">5%</strong></p>
                                <form class="field_form shipping_calculator">
                                    <div class="form-row">
                                        <div class="form-group col-lg-12">
                                            <div class="custom_select">
                                                <select class="form-control select-active w-100">
                                                    <option value="">United Kingdom</option>
                                                    <option value="AX">Aland Islands</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row row">
                                        <div class="form-group col-lg-6">
                                            <input  placeholder="State / Country" name="name" type="text">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input  placeholder="PostCode / ZIP" name="name" type="text">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="p-40">
                                <h4 class="mb-10">Apply Coupon</h4>
                                <!-- <p class="mb-30"><span class="font-lg text-muted">Using A Promo Code?</p></soab> -->
                                <form action="#">
                                    <div class="d-flex justify-content-between">
                                        <input class="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon">
                                        <button class="btn"><i class="fi-rs-label mr-10"></i>Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="border p-md-4 cart-totals ml-30">
                        <div class="table-responsive">
                            <table class="table no-border">
                                <tbody>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">Subtotal</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h4 class="text-brand text-end"><i class="fa-solid fa-indian-rupee-sign"></i> {{ totalCartAmount }}/-</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colspan="2">
                                            <div class="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">Shipping</h6>
                                        </td>
                                        <td class="cart_total_label">
                                            <h6 class="text-brand text-end"><i class="fa-solid fa-indian-rupee-sign"></i> 0.00 /-</h6>
                                        </td>
                                    </tr> <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">Estimate for (18%):</h6>
                                        </td>
                                        <td class="cart_total_label">
                                            <h6 class="text-brand text-end"><i class="fa-solid fa-indian-rupee-sign"></i> {{ totalCartAmountGST }}/-</h6>
                                        </td>
                                        </tr> 
                                    <tr>
                                        <td scope="col" colspan="2">
                                            <div class="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">Total</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h4 class="text-brand text-end"><i class="fa-solid fa-indian-rupee-sign"></i> {{ totalCartAmount }}/-</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href="#" class="btn mb-20 w-100">Proceed To CheckOut<i class="fi-rs-sign-out ml-15"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>

	import { useCartStore } from '~~/stores/cart';

		export default {
			data(){
				return {
					quantity: 1,

				}

			},
			methods:{
				removeItemFromCart(index) {
					
					const cartStore = useCartStore();

					cartStore.removeProductFromCart(index);		
			},

		},

		computed: {
				cartItems() {
					const cartStore = useCartStore();
                    console.log(cartStore.cartList);
					return cartStore.cartList.reverse();	
				},

				totalCartAmount() {

					const cartStore = useCartStore();

					var amount = 0;
					cartStore.cartList.forEach((product) => {
						amount = amount + (product.qty * parseInt(product.price));

					})

					return amount;
				},
				totalCartAmountGST() {

					return (this.totalCartAmount *18) / 100;

				}
			},
		}

</script>