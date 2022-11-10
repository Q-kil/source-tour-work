import {track,trigger} from './effect'
export function reactive(obj:any){
  return new Proxy(obj, {
    get(target, key){
      // 收集依赖关系
      track(target,key) //监听
      return target[key]
      
    },
    set(target, key, val,receiver){
      // target[key] = val
      const ret = Reflect.set(target,key,val,receiver)
      trigger(target,key)
      return ret
      //数据修改完成，执行
      // trigger()
      // 修改数据，执行副作用函数
    },
    // deleteProperty , delete obj.count触发
    // has
    // ownKeys
  })
}