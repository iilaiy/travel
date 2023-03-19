<template>
  <div class="text_group">
    <!-- 验证提示 -->
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <div class="input_group">
      <!-- 输入框 -->
      <input
          class="input_item"
          :type="type"
          :placeholder="placeholder"
          :name="name"
          :value="value"
          @input="$emit('inputHandle', $event.target.value)"
      >
      <i
          v-if="icon"
          :class="[ 'input-icon', 'iconfont', icon ]"
          @click="$emit('switchType')"
      ></i>
      <input
          class="input-btn"
          v-if="btnTitle"
          type="button"
          @click="$emit('btnClick')"
          :disabled="disabled"
          :value="btnTitle"
      />
    </div>
  </div>
</template>

<script>
// TODO: 输入限制
export default {
  name:"inputGroup",
  props:{
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    value: String,
    icon: String,
    name: String,
    disabled: Boolean,
    btnTitle: String,  //input框中的文字
    error: String  //验证不正确提示
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
$input-height: .8rem;
$input-size: .36rem;

.text_group {
  .input_group {
      height: $input-height;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .input_item {
          flex: 1;
          height: 100%;
          line-height: $input-height;
          font-size: $input-size;
          color: #000000;
      }
      .input_item::-webkit-input-placeholder {
          font-size: $input-size;
          color: #757575;
      }
      .input-icon {
          width: 10%;
          text-align: center;
          color: #a8a8a8;
      }
      .input-btn {
          width: 20%;
          height: 100%;
          font-size: .3rem;
          color: #ffffff;
          background-color: #f99c37;
          border-radius: .1rem;
      }
  }
  .invalid-feedback {
      color: #fe6862;
  }
}
</style>