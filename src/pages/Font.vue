<script lang="ts" setup="setup">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus/es";

// import Book from "./book";

const formSignIn = reactive(
    {
      name: '',
      password: ''
    }
);

const formSignUp = reactive(
    {
      name: '',
      password: ''
    }
);

const isShow = ref(true)

const labelPosition: string = 'top';

const rules = {
  name:
      {
        required: true,
        message: '请输入账户',
        trigger: blur
      },
  password:
      {
        required: true,
        message: '请输入密码',
        trigger: blur
      }
};

const rulesForm = ref()

const userRouter = useRouter()

const isExits = ref(false)

const clickSignIn = async () => {

  await rulesForm.value.validate().then((ok: boolean) => {

    if (ok) {
      localStorage.setItem('userInfo', JSON.stringify(formSignIn))
      isExits.value = true
      setTimeout(() => {
        isExits.value = false
        isShow.value = false
      }, 800)

    }
  }).catch((e: any) => {
    ElMessage.error('输入信息有误')
  })
}

const clickSignOn = async () => {
  await rulesForm.value.validate().then((ok: boolean) => {
    if (ok) {
      // let userInfo =JSON.parse( localStorage.getItem('userInfo'))
      // if (userInfo) {
      //   console.log(userInfo)
      // }
    }
  })

}
</script>

<template>
  <div v-if="isShow" class="app">
    <div :class="[isExits ? 'animate__animated animate__backOutLeft' : '']" class="loginBox">
      <h3>注册</h3>
      <el-form
          ref="rulesForm"
          :label-position="labelPosition"
          :model="formSignIn"
          :rules="rules"
          label-width="100px"
          size="small"
      >
        <el-form-item label="账户" prop="name">
          <el-input v-model:model-value="formSignIn.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model:model-value="formSignIn.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="clickSignIn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <div v-if="!isShow" class="app">
    <div :class="[!isExits ? 'animate__animated animate__backInRight' : '']" class="loginBox">
      <h3>登录</h3>
      <el-form
          ref="rulesForm"
          :label-position="labelPosition"
          :model="formSignUp"
          :rules="rules"
          label-width="100px"
          size="small"
      >
        <el-form-item label="账户" prop="name">
          <el-input v-model:model-value="formSignUp.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model:model-value="formSignUp.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="clickSignOn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  background: linear-gradient(45deg, rgba(254, 172, 94, 0.25), rgba(199, 121, 208, 0.25), rgba(75, 192, 200, 0.25));

}

.loginBox {


  max-width: 440px;
  height: 350px;
  width: calc(100% - 40px);
  text-align: center;
  background-color: white;
  padding: 40px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  border-radius: 5px;

}

::v-deep(.el-button) {

  min-width: 108px;
  font-size: inherit;
  background-color: #0067b8;
  border: #0067b8;

}
</style>