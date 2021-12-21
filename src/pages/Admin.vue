<script lang="ts" setup="setup">
import {computed, ref} from "vue";
import {Menu as IconMenu} from '@element-plus/icons-vue';

const asideWidth = ref('200px')
const switchIcon = () => {
  asideWidth.value = asideWidth.value === '200px' ? '60px' : '200px'
}
const isCollapse = computed(() => {
  return asideWidth.value !== '200px'
})

</script>

<template>
  <el-container>
    <el-collapse-transition>
      <el-aside :width="asideWidth">
        <div style="height: 60px;background: black;text-align: center"><span
            style="color: white;line-height: 60px;font-size: large;font-weight: bold">后台模板</span></div>
        <el-menu
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            default-active="2"
            @close="handleClose"
            @open="handleOpen"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <document/>
            </el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting/>
            </el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-collapse-transition>
    <el-container>
      <el-header style="background: slategray;display: flex;justify-content: space-between;align-items: center">
        <el-icon @click="switchIcon">
          <d-arrow-left/>
        </el-icon>
        <el-dropdown>
          <span class="el-dropdown-link">
            <user style="width: 1.5em;height: 1.5em"></user>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100vh;

  .el-aside {
    background: antiquewhite;
  }

  .el-header {
    img {
      width: 50px;
      height: 30px;
    }
  }
}

</style>