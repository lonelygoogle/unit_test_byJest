// var result = add (3, 7)
// var expected = 10

// if (result !== 10) {
//     throw Error(`3+7 应该等于 ${expected}, 结果却是${result}`)
// }

// var result = minus (3, 3)
// var expected = 0

// if (result !== 0) {
//     throw Error(`3-3 应该等于 ${expected}, 结果却是${result}`)
// }

function expect (result) {
    return {
        toBe: function (actual) {
            if (result !== actual) {
                throw new Error(`预期值和实际值不相等, 预期${actual}, 结果却是${result}`)
                // throw Error(`3-3 应该等于 ${expected}, 结果却是${result}`)
            }
        }
    }
}

function test (desc, fn) {
    try {
        fn()
        console.log(`${desc}通过测试`)
    } catch(e) {
        console.log(`${desc}没有通过测试，${e}`)
    }
}

test('测试加法 3+3', () => {
    expect(add(3,3)).toBe(6)
})

test('测试减法 6-3', () => {
    expect(minus(6,3)).toBe(3)
})

test('测试乘法 3*3', () => {
    expect(multi(3,3)).toBe(9)
})
