import './index.css'

import axios from "axios";
import ProductCard from "@/components/ProductCard.ce.vue";
import {defineCustomElement} from "vue";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

const element = defineCustomElement(ProductCard)

customElements.define("product-card", element)