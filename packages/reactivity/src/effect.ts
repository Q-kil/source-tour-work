
let targetMap = new WeakMap() //就是个map，WeakMap性能会好一点，回收机制好一些
// 对象=>{
//   属性：[effect1, effect2]
//   key：[effect1, effect2]
// }
// set的好处可以去重

// obj:{}
let activeEffect
export function track(obj,key){
  console.log(obj,key);
  // dependents 依赖
  let depsMap = targetMap.get(obj)
  if(!depsMap){
    targetMap.set(obj,(depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if(!deps){
    depsMap.set(key, (deps = new Set()))
  }
  // deps.add(副作用)
  deps.add(activeEffect)
}

export function trigger(obj,key){
  let depsMap = targetMap.get(obj)
  if(!depsMap) return
  let deps = depsMap.get(key)
  if(deps){
    deps.forEach(effect => effect());
  }
}

export function effect(fn){
  activeEffect = fn
  fn() // 会触发Proxy的get方法，执行track，执行完重置 activeEffect
  console.log(targetMap);
  activeEffect = null
}

