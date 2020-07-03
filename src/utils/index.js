/*
* 公共工具方法
* */
export function isCanUse() {
    return false
}

export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function () {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp

        // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function (...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}
/*
* @timestamp 时间戳 ；@formats 时间格式
* 其中formats格式包括
* 1. Y-m-d
* 2. Y-m-d H:i:s
* 3. Y年m月d日
* 4. Y年m月d日 H时i分
* */
export function dateFormat(timestamp, formats) {
    formats = formats || 'Y-m-d';
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    if (typeof (timestamp) === 'string') {
        if (timestamp.length === 10) {
            // 秒字符时间戳 转 毫秒 转 数字
            timestamp = (timestamp.toFixed()) * 1000
        } else if (timestamp.length === 13) {
            // 毫秒字符时间戳 转数字
            timestamp = timestamp.toFixed()
        }
    } else if (typeof (timestamp) === 'number') {
        if (timestamp.toString().length === 10) {
            timestamp = timestamp * 1000
        }
    }
    var myDate = timestamp ? new Date(timestamp) : new Date();

    var year = myDate.getFullYear();
    var month = zero(myDate.getMonth() + 1);
    var day = zero(myDate.getDate());

    var hour = zero(myDate.getHours());
    var minite = zero(myDate.getMinutes());
    var second = zero(myDate.getSeconds());

    return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minite,
            s: second
        })[matches];
    });
}
