<template>
    <div class="signup">

        <h1 class="is-size-1 has-text-centered">Sign Up</h1>

        <div class="field">
            <label class="label is-size-4">First Name</label>
            <div class="control">
                <input class="input" type="text" v-model="firstName">
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Last Name</label>
            <div class="control">
                <input class="input" type="text" v-model="lastName">
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Email</label>
            <div class="control">
                <input class="input" type="email" v-model="email">
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Password</label>
            <div class="control">
                <input class="input" type="password" v-model="password">
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Confirm Password</label>
            <div class="control">
                <input class="input" type="text" v-model="confirmPassword">
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Gender</label>
            <div class="control">
                <div class="select">
                    <select v-model="gender">
                        <option value="">-- select --</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="U">Unknow</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-success is-large is-fullwidth">Submit</button>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "SignUp",
    data(){
        return{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            gender:""
        }
    }


}
</script>

<style scoped>
.signup {
    margin:auto;
    padding: 3em;
    width: 50%;
    background-color: white;
    /* border-style: solid;
    border-width: 5px; */
}

.field {
    margin-top: 2em;
}
</style>