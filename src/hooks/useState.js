// useState.js
import { useStore, mapState } from "vuex";
import { computed } from "vue";

export default function (mapper) {
    // 拿到store
    const store = useStore();

    // 获取相应的对象 : {name:function,gender:function}
    const storeStateFns = mapState(mapper);

    // 进行 $store 指向 ，并赋值
    const storeState = {};
    Object.keys(storeStateFns).forEach((Fnkey) => {
        // setup中无this指向
        // 在computed中计算state时需要  $store 指向 ,所以使用bind() 绑定 $store
        const fn = storeStateFns[Fnkey].bind({ $store: store });
        storeState[Fnkey] = computed(fn);
    });

    //返回
    return storeState;
}

