<script lang="ts" setup="setup">
import {computed, ref} from "vue";
import {useRouter} from "vue-router"; //vue-router提供的hooks函数

const asideWidth = ref('200px')
const switchIcon = () => {
  asideWidth.value = asideWidth.value === '200px' ? '60px' : '200px'
}
const isCollapse = computed(() => {
  return asideWidth.value !== '200px'
})
const router = useRouter()
const clickBack = (index: string) => {
  console.log(index)
  switch (index) {
    case '1':
      router.push({name: 'DashBoard'})
      break;
    case '2-1':
      router.push({name: 'UserList'})
      break;
  }
}


</script>

<template>

  <el-container>

    <el-aside :width="asideWidth" ontransitionend="">
      <div style="height: 60px;background: black;text-align: center"><span
          style="color: white;line-height: 60px;font-size: large;font-weight: bold">{{
          isCollapse ? '' : '后台模板'
        }}</span></div>
      <transition name=".el-fade-in-linear">
        <el-menu
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            default-active="2"
            @select="clickBack"
        >
          <el-menu-item index="1">
            <el-icon>
              <setting/>
            </el-icon>
            <span>系统设置</span>
          </el-menu-item>
          <!--          <el-sub-menu index="2">-->
          <!--            <template #default>-->
          <!--              <el-icon><user-filled/></el-icon>-->
          <!--              <span>用户管理</span>-->
          <!--            </template>-->
          <!--            <el-menu-item index="2-1">-->
          <!--              <span>用户列表</span>-->
          <!--            </el-menu-item>-->
          <!--          </el-sub-menu>-->
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <user-filled/>
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="2-1">
              <span>用户列表</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </transition>
    </el-aside>

    <el-container>
      <el-header style="background: slategray;display: flex;justify-content: space-between;align-items: center">
        <div @click="switchIcon">
          <el-icon v-show="!isCollapse">
            <d-arrow-left/>
          </el-icon>
          <el-icon v-show="isCollapse">
            <d-arrow-right/>
          </el-icon>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <avatar style="width: 1.5em;height: 1.5em"></avatar>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>用户资料</el-dropdown-item>
              <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
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

    .el-button {
      height: 60px;
    }
  }
}

</style>