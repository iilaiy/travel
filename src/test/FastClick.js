/**
 * 解决 fastclick 跟 input输入框聚焦冲突
 * 改写fastClick的focus事件，强制聚焦
 */
// var length
// // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
// if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
//     length = targetElement.value.length
//     targetElement.setSelectionRange(length, length)
//     //  修复ios 11.3以上不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出
//     targetElement.focus()
// } else {
//     targetElement.focus()
// }