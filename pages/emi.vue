<template>
    <div>
        <main class="main pages">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span><i class="fa-solid fa-indian-rupee-sign"></i> EMI
                </div>
            </div>
        </div>
        <div class=" emi" style="padding: 50px 70px;">
            <div class="row">
				<div id="content" class="col-sm-12 px-5">
					<h2 class="title"><i class="fa fa-indian-rupee-sign" style="color: orange;"></i> EMI Account</h2>
					<br />
					<form action="javascript:void(0)" @submit="doSubmit" enctype="multipart/form-data"
						class="form-horizontal account-register clearfix">

						<!-- Your Personal Details -->
						<fieldset >
							<div class="form-group required" style="display: none;">
								<label class="col-sm-2 control-label">Customer Group</label>
								<div class="col-sm-10">
									<div class="radio">
										<label>
											<input type="radio" name="customer_group_id" value="1" checked="true">
											Default
										</label>
									</div>
								</div>
							</div>
							<div class="col-12 px-3">
								<div class="row mb-3">
									<div class="required col-sm-6">
										<label class="control-label" for="input-firstname">First Name</label>
										<input type="text" v-model="personalDetails.firstName"  name="firstname" placeholder="First Name"
											class="form-control">
									</div>
									<div class="required col-sm-6">
										<label class="control-label" for="input-lastname">Last Name</label>
										<input type="text" v-model="personalDetails.lastName" name="lastname" placeholder="Last Name"
											class="form-control">

									</div>
								</div>
								<br />
								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="email">Emaill Address</label>
										<input type="email" v-model="personalDetails.emailId" placeholder="Email" class="form-control">
									</div>
									<div class="required col-sm-6">
										<label class="control-label" for="mobile_number">Mobile Number</label>
										<input type="tel" v-model="personalDetails.mobileNumber" placeholder="+91" class="form-control">

									</div>
								</div>
								<br />
								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="Date Of Birth">Date Of Birth</label>
										<input type="date" :max="personalDetails.maxDOB" v-model="personalDetails.dateOfBirth" placeholder="" class="form-control">
									</div>
								</div>
							</div>
							<br />
						</fieldset>
						<!-- Your Personal Details End	-->

                        <!-- Your KYC Details Start	-->
						<fieldset >
							<legend>Your KYC Details</legend>
							<div class="col-12 px-3">
								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="Aadhar Number">Choose One </label>
										<select v-model="kycDetails.choseOne" class="form-control">
											<option value=""> ---Select Your Salary Info---</option>
											<option value="salaried">Salaried</option>
											<option value="selfEmployeed">Self Employed/Business</option>
										</select>
									</div>
									<div class="required col-sm-6">
										<label class=" control-label" for="Aadhar Number">Company Name</label>
										<div class="">
											<input type="tel" v-model="kycDetails.companyName" name="Company Name"  placeholder="Company Name" class="form-control">
										</div>
									</div>
								</div>
								
								<br />
								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="input-postcode"> Company Address</label>
										<input type="text" name="Address" v-model="kycDetails.companyAddress" placeholder="Address" class="form-control">
									</div>

									<div class="required col-sm-6">
										<label class="control-label" for="input-country">Company Catagory</label>
										<select v-model="kycDetails.companyCatagory" name="country_id" class="form-control">
											<option value=""> ---Select Your Company Catagory---</option>
											<option value="244">Private/LLP/University</option>
											<option value="1">Proprietorship</option>
											<option value="2">Partnership/Other</option>
											<option value="3">Government</option>
											<option value="4">Public Ltd</option>
										</select>
									</div>
								</div>
								<br />

								<div class="row">
									<div class="required col-sm-6">
										<div v-if="kycDetails.aadhar_preview != ''" class="aadhar_preview">
											<img width="200" :src="kycDetails.aadhar_preview" alt="Aadhar Preview" srcset="">
										</div>
										<label class="control-label from-label" for="fromFIle">Aadhar Card
											Upload</label>
										<div class="">
											<input type="file"  ref="aadhar_card" name="Aadhar Number" placeholder="Aadhar Number" class="form-control">
										</div>
									</div>

									<div class="required col-sm-6">
										<div v-if="kycDetails.pancard_preview != ''">
											<img width="200" :src="kycDetails.pancard_preview" alt="Pan Card Preview">
										</div>
										<label class="control-label" for="file">Pan Card Number</label>
										<div class="">
											<input  ref="pan_Card" type="file" name="Pan Card Number" value=""
												placeholder="Pan Card Number" id="fromFile" class="form-control">
										</div>
									</div>
								</div>
							<br />
						</div>
							<br />
						</fieldset>
						<!-- Your KYC Details End	-->

                        <!-- Your Profession Details Start	-->
						<fieldset id="address">
							<legend>Your Profession Details</legend>
							<div class="form-group required" style="display: none;">
								<label class="col-sm-2 control-label">Customer Group</label>
								<div class="col-sm-10">
									<div class="radio">
										<label>
											<input type="radio" name="customer_group_id" value="1" checked="true">
											Default
										</label>
									</div>
								</div>
							</div>
							<div class="col-12 px-3">
								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="input-postcode">Address</label>
										<input type="text" name="Address" v-model="ProfessionDetails.Address" placeholder="Address" class="form-control">									
									</div>
									<div class="required col-sm-6">
										<label class="control-label" for="input-postcode">Residence Pin Code</label>
										<input type="text" name="Pin Code"  v-model="ProfessionDetails.pinCode" placeholder="Pin Code" class="form-control">
										<small>Enter pincode to auto fill the city & state</small>
									</div>
								</div>
								<br />

								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="input-city">City</label>
										<input type="text" name="city" v-model="ProfessionDetails.city" placeholder="City" class="form-control">
									</div>
									<div class="required col-sm-6">
											<label class="control-label" for="input-country">Country</label>
											<input type="text" name="Country" aria-label="readonly input example" readonly v-model="ProfessionDetails.country" placeholder="India" class="form-control">
									</div>
								</div>
								<br />

								<div class="row">
									<div class="required col-sm-6">
										<label class="control-label" for="input-zone">Region / State</label>
										<input name="text" v-model="ProfessionDetails.regionState" placeholder="State" class="form-control">
									</div>
								</div>
								<br />
							</div>
						</fieldset>
						<!-- Your Profession Details End  -->

						<div class="buttons px-5">
							 <div class="pull-right d-flex " style="justify-content: space-between;">
								<button class="btn">Previous</button>
                                <button class="btn">Submin</button>
							</div>
						</div>
					</form>
				</div>
			</div>
        </div>
        


    </main>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '~~/config/url';

export default {
	data() {
		return {
			personalDetails: {
				firstName: '',
				lastName: '',
				emailId: '',
				mobileNumber: '',
				dateOfBirth: '',
				maxDOB: '',
			},

			kycDetails: {
				choseOne:'',
				companyCatagory:'',
				companyAddress:'',
				aadhar_preview: '',
				pancard_preview: '',
				companyName:'',
			},

			ProfessionDetails: {
				Address:'',
				pinCode:'', 
				city:'',
				country:'India',
				regionState:'',
			},

		}

	},
	methods: {

     async doSubmit() {

			var formData = new FormData();

			formData.append('firstname',this.firstName);
			formData.append('lastname', this.lastName);
			formData.append('emailId', this.emailId);
			formData.append('mobileNumber',this.mobileNumber);
			formData.append('maxDOB', this.maxDOB);

			formData.append('choseOne', this.choseOne);
			formData.append('companyName', this.companyName);
			formData.append('companyAddress', this.companyAddress);
			formData.append('companyCatagory', this.companyCatagory);
			formData.append('aadhar', this.$refs.aadhar_card);
			formData.append('pan_Card', this.$refs.pan_Card);

			formData.append('Address', this.Address);
			formData.append('pinCode', this.pinCode);
			formData.append('city', this.city);
			formData.append('country', this.country);
			formData.append('regionState', this.regionState);

				const response = await axios.get('');
				console.log(response);

				if( response.status == 200){

					if(response.data.status){
						
						alert('Submit Successfully');
					}else{
						alert('Incorrect Information');
					}
				}else{
					alert('Error');
				}


		},	


	},
	mounted() {
	}
}
</script>