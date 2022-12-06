<script setup>
</script>
<template>
    <div class="mt-5 " id="donation">
        <div>
            <div>
                <div>
                    <h3 class=" mt-3 text-center">Donation</h3>
                    <form class="d-flex flex-column justify-content-center align-item-center  border border-white rounded p-2 " style="background-color: #a9def9;">

                        <div>
                            <div class="d-flex flex-column justify-content-center align-item-center mt-2 p-1 gap-1">
                                <h3>Billing Address</h3>
                                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com">
                                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                                <label for="city"><i class="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York">

                                <div class="gap-1 ">
                                    <div >
                                        <label>State</label>
                                        <input type="text" name="state" placeholder="NY">
                                    </div>
                                    <div>
                                        <label>Zip</label>
                                        <input type="text" name="zip" placeholder="10001">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex flex-column justify-content-center align-item-center p-1 gap-1">
                                <h3>Payment</h3>
                                <label>Accepted Cards</label>
                                <!-- imagenes de tarjetas -->
                                <label>Name on Card</label>
                                <input type="text" placeholder="John More Doe">
                                <label>Credit card number</label>
                                <input type="text" placeholder="1111-2222-3333-4444">
                                <label>Exp Month</label>
                                <input type="text" placeholder="September">

                                <div>
                                    <div>
                                        <label>Exp Year</label>
                                        <input type="text" placeholder="2018">
                                    </div>
                                    <div>
                                        <label>CVV</label>
                                        <input type="text" placeholder="352">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <label>
                            <input type="checkbox" checked="checked"> Shipping address same as billing
                        </label>
                        <input type="submit" value="Continue to checkout" class="btn btn-dark">
                    </form>
                </div>
            </div>


        </div>
    </div>
</template>
<style scoped>
#donation {

    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
    /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
    background-size: cover;
    background-position: center;

}
</style>