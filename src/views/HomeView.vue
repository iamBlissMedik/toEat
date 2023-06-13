<script setup lang="ts">
import { ref } from "vue";
import type { RestaurantStatus } from "@/types/restaurantStatus";
interface Restaurant {
  name?: string;

  status?: RestaurantStatus;
  dishes?: Dish[];
}

const restaurantList = ref(<Restaurant[]>[]);
const newRestaurant = ref<Restaurant>({});
const addRestaurant = () => {
  restaurantList.value.push({
    name: newRestaurant.value.name,

    status: newRestaurant.value.status,
    dishes: [],
  });
};
const statusList: RestaurantStatus[] = [
  "Want to try",
  "Recommended",
  "Do not recommend",
  "Want to try",
];
</script>

<template>
  <main>
    {{ restaurantList }}
    <!-- CREATE A FORM TO ALLOW USERS ADD A RESTAURANT TO THE LIST -->
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Restaurant Name</label>
        <input
          type="text"
          name=""
          id="restaurant-name"
          v-model="newRestaurant.name"
        />
      </div>

      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select
          name="restaurant-status"
          id="restaurant-status"
          v-model="newRestaurant.status"
        >
          <option v-for="status in statusList" :value="status" :key="status">
            {{ status }}
          </option>
        </select>
      </div>

      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        {{ restaurant.name }} - {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
