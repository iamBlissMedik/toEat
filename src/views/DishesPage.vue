<script setup lang="ts">
import { ref } from "vue";

import type { Dish } from "@/types/dish";
import { statusList } from "@/types/constant";

const dishList = ref(<Dish[]>[]);
const newDish = ref<Dish>({
  status: "Want to try",
});
const addDish = () => {
  dishList.value.push({
    name: newDish.value.name,

    status: newDish.value.status,
    
  });
};
</script>

<template>
  <main>
    <!-- CREATE A FORM TO ALLOW USERS ADD A RESTAURANT TO THE LIST -->
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Dish Name</label>
        <input type="text" name="" id="dish-name" v-model="newDish.name" />
      </div>

      <div>
        <label for="dish-status">Dish Status</label>
        <select name="dish-status" id="dish-status" v-model="newDish.status">
          <option v-for="status in statusList" :value="status" :key="status">
            {{ status }}
          </option>
        </select>
      </div>

      <button type="submit">Add Dish</button>
    </form>
    <ul>
      <li v-for="dish in dishList" :key="dish.name">
        {{ dish.name }} - {{ dish.status }}
      </li>
    </ul>
  </main>
</template>
