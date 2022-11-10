import { describe, it, expect } from "vitest";
import { effect, reactive } from "../src";
describe('响应式', ()=>{
  it('reactive基本功能', ()=>{
    let obj = reactive({count: 1})
    let val
    // 真正的effect是 异步的；做了队列
    effect(()=>{
      val = obj.count
    })
    expect(val).toBe(1)

    obj.count++
    expect(val).toBe(2)
  })
})