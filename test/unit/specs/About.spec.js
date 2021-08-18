import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '@/components/About';

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

let wrapper

beforeEach(() => {
  wrapper = mount(About, {
    stubs: ['router-link', 'router-view'],
    router
  })
})

describe('Testing App component', () => {
  it('About.vueの初期msgが表示されるか', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    wrapper.vm.showMsg()
    expect(wrapper.vm.showMsg()).toEqual('Hello World !!')
  })

  it('msgを上書きして反映されるか', () => {
    const wrapper = mount(About,{
      data(){
        return {
          msg: "test",
        }
      }
    });
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    //console.log(wrapper.vm.showMsg())
    expect(wrapper.vm.showMsg()).toEqual('test')
  })

})
