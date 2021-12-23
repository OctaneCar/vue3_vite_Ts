<script lang="ts" setup="setup">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus/es";
// import Book from "./book";

const formLabelAlign = reactive(
    {
      name: '',
      password: ''
    }
);

const labelPosition = 'top';

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

const loginUser = async () => {
  // const isLoading = ElLoading.service({
  //   lock: false,
  //   text: '登陆中',
  //   background: 'rgba(0, 0, 0, 0.7)',
  // })
  await rulesForm.value.validate().then((ok: boolean) => {
    if (ok) {
      localStorage.setItem('userInfo', JSON.stringify(formLabelAlign))
      userRouter.push({name: 'Login'})
    }
  }).catch((e: any) => {
    // isLoading.close()
    ElMessage.error('输入信息有误')
  })
}

</script>

<template>
  <el-form
      ref="rulesForm"
      :label-position="labelPosition"
      :model="formLabelAlign"
      :rules="rules"
      label-width="100px"
      size="small"
  >
    <el-form-item label="账户" prop="name">
      <el-input v-model:model-value="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model:model-value="formLabelAlign.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="loginUser">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>