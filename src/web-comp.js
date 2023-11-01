import {defineCustomElement} from "vue";
import ProductCard from "@/components/ProductCard.ce.vue";

const productCard = defineCustomElement(ProductCard)

customElements.define('product-card', productCard)