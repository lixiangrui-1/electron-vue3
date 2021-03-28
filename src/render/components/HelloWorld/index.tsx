import { defineComponent, ref } from 'vue'
import './index.styl'
export default defineComponent({
  props: {
    msg: String
  },
  setup({msg}) {
    const count = ref(0)
    const countAdd = () => {
      count.value++
    }
    return () => (
      <>
        <div>{msg}</div>
        <div class='num'>{count.value}</div>
        <button onClick={countAdd}>++</button>
      </>
    )
  }
})
