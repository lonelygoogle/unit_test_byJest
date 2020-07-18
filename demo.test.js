import { runCallback, creatObject, getData } from './demo'
import axios from 'axios'
jest.mock('axios')

test('测试 runCallback', () => {
    const func = jest.fn() // mock函数，捕获函数的调用
    func.mockReturnValue('Dell')
    runCallback(func)
    runCallback(func)
    runCallback(func)
    expect((func.mock.calls.length)).toBe(3)
    console.log(func.mock)
    // expect(runCallback(func)).toBe('hello')
})

test('测试 creatObject', () => {
    const func = jest.fn()
    creatObject(func)
    console.log(func.mock)
})

test.only('测试 getData', async () => {
    axios.get.mockResolvedValue({data: 'hello'})
    await getData().then((data) => {
        console.log(data)
        expect(data).toBe('hello')
    })
})