<template>
    <div class="signup">

        <h1 class="is-size-1 has-text-centered">Sign Up</h1>

        <div class="field">
            <label class="label is-size-4">First Name</label>
            <div class="control">
                <input :class="['input', v$.firstName.$errors.length ? 'is-danger' : '']" type="text"
                    v-model="v$.firstName.$model">
            </div>
            <!-- <div class="has-text-danger" v-if="v$.firstName.$error">Field is required.</div> -->
            <div class="has-text-danger" v-for="error of v$.firstName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Last Name</label>
            <div class="control">
                <input :class="['input', v$.lastName.$errors.length ? 'is-danger' : '']" type="text"
                    v-model="v$.lastName.$model">
            </div>
            <div class="has-text-danger" v-for="error of v$.lastName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Email</label>
            <div class="control">
                <input :class="['input', v$.email.$errors.length ? 'is-danger' : '']" type="email"
                    v-model="v$.email.$model">
            </div>
            <div class="has-text-danger" v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Password</label>
            <div class="control">
                <input :class="['input', v$.password.$errors.length ? 'is-danger' : '']" type="password"
                    v-model="v$.password.$model">
            </div>
            <div class="has-text-danger" v-for="error of v$.password.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <div class="field">
            <label class="label is-size-4">Confirm Password</label>
            <div class="control">
                <input :class="['input', v$.confirmPassword.$errors.length ? 'is-danger' : '']" type="password"
                    v-model="v$.confirmPassword.$model">
            </div>
            <div class="has-text-danger" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <!-- <div class="field">
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
        </div> -->

        <div class="field">
            <div class="control">
                <button class="button is-success is-large is-fullwidth" @click="submitForm">Submit</button>
            </div>
        </div>

    </div>
</template>


<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'
import axios from 'axios';

const alpha = helpers.regex(/^[a-zA-Z]*$/)
const emailValid = helpers.regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

export default {
    name: "SignUp",
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    },
    validations() {
        return {
            firstName: {
                required,
                alpha: helpers.withMessage('This is alpha', alpha)
            },
            lastName: {
                required,
                alpha: helpers.withMessage('This is alpha', alpha)
            },
            email: {
                required,
                emailValid: helpers.withMessage('This email', emailValid)
            },
            password: {
                required,
                minLength: minLength(8)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs(this.password)
            },
        }
    },
    methods: {
        async submitForm() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            let data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
            }
            console.log(data)

            const res = await axios.post('http://localhost:3000/signup', data, {
                headers: {"Access-Control-Allow-Origin": "*"}
            });

            console.log(res)
        }
    }



}
</script>

<style scoped>
.signup {
    margin: auto;
    padding: 3em;
    width: 40%;
    background-color: white;
    /* border-style: solid;
    border-width: 5px; */
}

.field {
    margin-top: 2em;
}
</style>