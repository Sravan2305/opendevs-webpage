<template>
  <form class="contact-form">
    <p
      class="text-lg leading-relaxed mt-4 mb-4 text-gray-500 text-center justify-center"
    >
      or let's talk directly (we won't spam, promise):
    </p>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block tracking-wide text-green-700 font-bold mb-2"
          for="full-name"
        >
          name <sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="full-name"
          type="text"
          placeholder="full name"
          v-model="username"
          @change="changeHandler"
          name="username"
          autocomplete="name"
        />
        <p v-if="this.usernameErr" class="text-red-500 text-xs italic">
          entered name is not valid
        </p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block tracking-wide text-green-700 font-bold mb-2"
          for="mobile"
        >
          mobile
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="mobile"
          type="tel"
          placeholder="10 digit mobile no"
          v-model="mobile"
          @change="changeHandler"
          name="mobile"
          autocomplete="tel"
        />
        <p v-if="this.mobileErr" class="text-red-500 text-xs italic">
          invalid mobile number
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block tracking-wide text-green-700 font-bold mb-2"
          for="email"
        >
          e-mail<sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
          type="email"
          placeholder="enter your email"
          v-model="email"
          @change="changeHandler"
          name="email"
          autocomplete="email"
        />
        <p v-if="this.emailErr" class="text-red-500 text-xs italic">
          invalid email format
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block tracking-wide text-green-700 font-bold mb-2"
          for="subject"
        >
          subject<sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="enter the subject"
          id="subject"
          v-model="subject"
          @change="changeHandler"
          name="subject"
        />
        <p v-if="this.subjectErr" class="text-red-500 text-xs italic">
          subject line is not appropriate
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block tracking-wide text-green-700 font-bold mb-2"
          for="message"
        >
          description
        </label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
          id="message"
          placeholder="maximum limit 1024 characters"
          v-model="description"
          @change="changeHandler"
          name="description"
        ></textarea>
      </div>
    </div>
    <p v-if="this.descriptionErr" class="text-red-500 text-xs italic">
      description can be of maximum 1024 words
    </p>
    <div class="text-center">
      <button
        class="shadow bg-green-600 hover:bg-green-200 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="submit"
      >
        send
      </button>
      <SnackBar
        :display="display"
        :statusColor="statusColor"
        :message="message"
      />
    </div>
  </form>
</template>

<script>
import { validateEmail, validateMobile, validateName, validateDescription, validateSubject } from "../utils/InputValidations"
import SnackBar from "./SnackBar.vue"

export default {
  name: "ContactUs",
  components: { SnackBar },
  data: () => ({
    username: "",
    email: "",
    subject: "",
    text: "",
    statusColor: "",
    message: "",
    mobile: "",
    description: "",
    usernameErr: false,
    emailErr: false,
    subjectErr: false,
    texterr: false,
    mobileErr: false,
    descriptionErr: false,
    success: false,
    display: false,
  }),
  methods: {
    submit() {
      if (
        validateEmail(this.email) &&
        validateMobile(this.mobile) &&
        validateName(this.username) &&
        validateDescription(this.description) &&
        validateSubject(this.subject)
      ) {

        const sheetsData = {
          Name: this.username,
          Email: this.email,
          Mobile: this.mobile || "Not provided",
          Subject: this.subject,
          Description: this.description || "Not provided",
        }

        fetch(process.env.GRIDSOME_SHEET_BEST_URL, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetsData)
        })
          .then(() => this.handleResponse(true), () => this.handleResponse(false))
      } else {
        this.changeHandler()
      }
    },
    handleResponse(status) {
      status
        ? this.snackBarVisibility(
          "thanks for contacting us. our team will reach out shortly",
          true,
          "green"
        )
        : this.snackBarVisibility(
          "sorry! an error occured while submitting. try after some time",
          true
        )
    },
    snackBarVisibility(message, statusColor) {
      this.message = message
      this.statusColor = statusColor
    },
    changeHandler(event) {
      if (event) {
        if (event.target.name === "username")
          this.usernameErr = !InputValidations.validateName(this.username)
        else if (event.target.name === "email")
          this.emailErr = !InputValidations.validateEmail(this.email)
        else if (event.target.name === "mobile")
          this.mobileErr = !InputValidations.validateMobile(this.mobile)
        else if (event.target.name === "subject")
          this.subjectErr = !InputValidations.validateSubject(this.subject)
        else
          this.descriptionErr = !InputValidations.validateDescription(
            this.description
          )
      } else {
        this.usernameErr = !InputValidations.validateName(this.username)
        this.emailErr = !InputValidations.validateEmail(this.email)
        this.mobileErr = !InputValidations.validateMobile(this.mobile)
        this.subjectErr = !InputValidations.validateSubject(this.subject)
        this.descriptionErr = !InputValidations.validateDescription(
          this.description
        )
      }
    },
  },
}
</script>
