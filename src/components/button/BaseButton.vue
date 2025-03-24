<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  class: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => ({
  "btn-primary": props.type === "primary",
  "btn-danger": props.type === "danger",
  "btn-success": props.type === "success",
  "btn-warning": props.type === "warning",
  "btn-secondary": props.type === "secondary",
  "btn-light": props.type === "light",
}));

</script>



<template>
  <button 
    :class="['base-button', buttonClass, props.class]" 
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>


<style scoped>
.base-button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary { background: #007bff; color: white; }
.btn-danger { background: #dc3545; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-warning { background: #ffc107; color: black; }

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}


</style>
