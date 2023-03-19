<template>
    <div class="login-conta page-margin">
        <!-- 返回 -->
        <Back></Back>
        <!-- 表单 -->
        <form  class="login-form">
          <InputGroup
              class="input-group"
              v-for="(item, index) in formMess"
              :key="index"
              :type="item.type"
              :placeholder="item.placeholder"
              :value="item.value"
              :icon="item.icon"
              @inputHandle="item.inputHandle"
              @switchType="item.switchType"
              :error="item.error"
              :btnTitle="item.btnTitle"
              :disabled="item.disabled"
              @btnClick="verifyCodeBtn"
          ></InputGroup>
          <div class="forget">
            <span>忘记密码?</span>
          </div>
          <div class="btn">
            <input class="bgc" type="button" @click="submitMessage" value="登录" />
            <input type="button" value="注册" />
          </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Back from "@/components/Back";
import InputGroup from "@/components/InputGroup";

/**
 * 表单数据
 */
const formMess = reactive({
  phone: {  //手机号
    value: '17818168369',
    placeholder: '请输入手机号',
    error: '',
    inputHandle: val => {
      formMess.phone.value = val
    }
  },
  password: {  //密码
    type: 'password',
    value: '',
    placeholder: '请输入密码',
    icon: 'icon-mimayincang1',
    /**
     * 控制密码显示隐藏
     */
    switchType: ()=> {
      if (formMess.password.type === 'password') {
        formMess.password.type = 'text'
        formMess.password.icon = 'icon-xianshi'
      } else {
        formMess.password.type = 'password'
        formMess.password.icon = 'icon-mimayincang1'
      }
    },
    inputHandle: val => {
      formMess.password.value = val
    },
    error: ''
  },
  verifyCode: {   //验证码
    type: 'number',
    value: '',
    placeholder: '请输入验证码',
    error: '',
    btnTitle: '获取验证码',
    disabled: false,
    inputHandle: val => {
      formMess.verifyCode.value = val
    }
  }
})

/**
 * 合法验证
 */
 // 密码正则验证
let passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// 手机号正则验证
let phoneReg = /^1[3456789]\d{9}$/
const Verify = (item, reg, error) => {
  if (item.value === '') {
    item.error = error.valNaN
    return false
  } else {
    item.error = ''
  }
  if (reg) {
    if(!reg.test(item.value)){
      item.error = error.valNoNaN
      return false
    } else {
      item.error = ''
    }
  }
  return true
}

/**
 * 请求发送手机号短信验证码
 */
const verifyCodeBtn = () => {
  if (Verify(formMess.phone, phoneReg, {valNaN: '手机号码不能为空', valNoNaN: '请输入正确的手机号'})) {
    // TODO: 请求手机短信验证码
    validateBtn()
    formMess.verifyCode.disabled = true
    setTimeout(() => {
      console.log('你的验证码是：2586')
    }, 3000)
  }
}

/**
 * 倒计时
 */
const validateBtn = () => {
  let time = 60;
  let timer = setInterval(() => {
    if(time === 0) {
      clearInterval(timer);
      formMess.verifyCode.code = ''
      formMess.verifyCode.disabled = false
      formMess.verifyCode.btnTitle = "获取验证码"
    } else {
      formMess.verifyCode.btnTitle = time + '秒后重试'
      time--
    }
  },1000)
}

/**
 * 验证登录信息
 */
const submitMessage = () => {
  console.log(formMess)
  if (!Verify(formMess.verifyCode, '', {valNaN: '验证码不能为空'})) {
    return false
  }
  if (
      Verify(formMess.phone, phoneReg, {valNaN: '手机号码不能为空', valNoNaN: '请输入正确的手机号'}) &&
      Verify(formMess.password, passwordReg, {valNaN: '密码不能为空', valNoNaN: '请输入正确的密码'})
  ) {
    console.log('信息无误')
    // TODO: 将信息提交后端验证
  } else {
    console.log('信息不合法')
  }
}

</script>

<style lang="scss" scoped>
/* 输入框&按钮字体大小 */
$input-btn-font-size: .38rem;

.login-conta {
    margin-top: .5rem;
    .login-form {
        padding: 0 .2rem;
        .input-group {
          margin-top: .5rem;
          padding-bottom: .1rem;
          border-bottom: 1px solid #f99c37;
        }
        .forget {
            text-align: right;
            span {
                line-height: 1rem;
                color: #757575;
            }
        }
        .btn {
            input {
                display: block;
                margin: .3rem auto 0 auto;
                border-radius: .7rem;
                width: 85%;
                height: 1.2rem;
                font-size: .4rem;
                background-color: transparent;
                border: 1px solid #f99c37;
            }
            .bgc {
                color: #ffffff;
                border: none;
                box-shadow: 0 2px 6px 0 rgba(253,60,113,.4);
                background-image: linear-gradient(156deg,#f99c37 0,#ff7f6a 100%);
            }
        }
    }
}

</style>