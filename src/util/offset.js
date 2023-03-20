const offset = (target) => {
    var top = 0,
        left = 0

    while(target.offsetParent) {
        top += target.offsetTop
        left += target.offsetLeft
        target = target.offsetParent
    }

    return {
        top: top,
        left: left,
    }
}

export default offset