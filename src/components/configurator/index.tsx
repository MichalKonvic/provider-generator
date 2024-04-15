import ContextPropsList from "./ContextPropsList"
import NameInput from "./NameInput"

const Configurator = () => {
  return (
    <div className='w-full px-4 pt-4 h-60 flex flex-col gap-8 sm:w-1/2'>
      <NameInput/>
      <ContextPropsList/>
    </div>
  )
}

export default Configurator