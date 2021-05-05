/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import pushNotification from "./pushNotification"
import DefaultLayout from "~/layouts/Default.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowLeft,
  faArrowRight,
  faSun,
  faMoon,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faMedium,
  faDev,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "~/assets/styles/reset.scss"
import "~/assets/styles/global.scss"

config.autoAddCss = false
library.add(
  faArrowLeft,
  faSun,
  faMoon,
  faEnvelope,
  faGithub,
  faMedium,
  faDev,
  faArrowRight,
  faLinkedin,
  faTwitter
)

const title = "open devs"
const description = [
  "open devs",
  "an organization of motivated developers, building open source enterprise level softwares to contribute to community",
  "TypeScript, JavaScript, React.js, Vue.js, CSS"
].join(" | ")

const metadata = [
  {
    name: "description",
    content: description
  },
  {
    name: "author",
    content: title
  }
]

const openGraph = [
  {
    name: "og:title",
    content: title
  },
  {
    name: "og:site_name",
    content: title
  },
  {
    name: "og:image",
    content: "/open-devs-white.png"
  },
  {
    name: "og:description",
    content: description
  }
]

export default function(Vue, { head, isClient }) {
  // if (isClient) {
  //   const vueSmoothScroll = require("vue2-smooth-scroll").default;
  //   const resize = require("vue-resize-directive");
  //   const { ObserveVisibility } = require("vue-observe-visibility");

  //   Vue.use(vueSmoothScroll);
  //   Vue.directive("resize", resize);
  //   Vue.directive("observe-visibility", ObserveVisibility);
  // }
  Vue.component("font-awesome", FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout)
  head.meta.push(...metadata.concat(openGraph))
}

pushNotification()
