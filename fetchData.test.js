import { fetchData } from './fetchData'

// 回调类型异步函数的测试
// test('fecthData 返回结果', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         })
//         done()
//     })

// })

// test('fecthData 返回结果 {success: true}', () => {
//     return fetchData().then((res) => {
//         expect(res.data).toEqual({
//             success: true
//         })
//     })
// })

test('fecthData 返回结果 404', () => {
    expect.assertions(1)
    return fetchData().catch((e) => {
        console.log('错误信息', e.toString())
        expect(e.toString().indexOf('404')> -1).toBe(true)
    })
})