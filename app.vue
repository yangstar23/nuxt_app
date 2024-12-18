<template>
  <div class="container">
    <h1 class="text-center text-3xl font-semibold">Users List</h1>

    <div v-if="isLoading" class="flex justify-center items-center py-10">
      <div class="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>

    <div v-else>
      <ul v-if="users.length > 0" class="space-y-4">
        <li v-for="user in users" :key="user.id" class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md">
          <div>
            <h6 class="text-lg font-medium">{{ user.name }}</h6>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
          </div>
        </li>
      </ul>
      <p v-else class="text-center text-gray-500">No users found</p>
    </div>
  </div>
</template>

<script setup>
// 使用 useFetch 获取用户数据
import { ref, onMounted } from 'vue';
import { supabase } from '../src/lib/supabase'; // 引入 Supabase 客户端

const users = ref([]);
const isLoading = ref(true);

// 获取用户数据
const fetchUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('users') // 替换为你的表名
      .select('*');
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      users.value = data;
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoading.value = false; // 完成加载
  }
};

// 页面加载完成时调用 fetchUsers
onMounted(fetchUsers);
</script>

<style scoped>
/* 这里你可以添加自定义样式 */
</style>
