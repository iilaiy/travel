<template>
    <div class="login-conta page-margin">
        <!-- 返回 -->
        <div class="back">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <!-- 表单 -->
        <form class="login-form">
            <div class="item">
                <p class="tip">请输入手机号</p>
                <input type="text" placeholder="请输入手机号" />
            </div>
            <div class="item">
                <input type="password" placeholder="请输入密码" />
            </div>
            <div class="item item-code">
                <div class="c-bot">
                    <p class="tip">请输入手机号</p>
                    <input type="text" placeholder="请输入右侧图形验证码" />
                </div>
                <!-- 验证码 -->
                <div class="code">
                    yzm
                </div>
            </div>
            <div class="forget">
                <span>忘记密码?</span>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login-conta {
    .back {
        margin-top: .5rem;
        i {
            font-size: .7rem;
            color: #686868;
        }
    }
    .login-form {
        .item {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            height: 1.3rem;
            margin: .1rem 0;
            padding-left: .2rem;
            border-bottom: 1px solid #d8d8d8;
            input, .tip {
                width: 100%;
            }
            input::-webkit-input-placeholder, input {
                font-size: .4rem;
                color: #757575;
            }
            .tip {
                color: #ff5465;
            }
        }
        .item-code {
            flex-direction: row;
            .c-bot {
                width: calc(80% - .4rem);
            }
            .code {
                height: 60%;
                width: 20%;
                margin-right: .2rem;
            }
        }
        .forget {
            text-align: right;
            span {
                line-height: 1rem;
                color: #757575;
            }
        }
    }
}

</style>