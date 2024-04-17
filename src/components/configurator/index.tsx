import PropsList from "./PropsList"
import NameInput from "./NameInput"
import { PropsProvider } from "@/providers/PropsProvider"

const Configurator = () => {
  return (
    <div className='w-full px-4 pt-4 h-fit flex flex-col gap-8 sm:w-1/2'>
      <NameInput/>
      <PropsProvider type="context">
        <PropsList/>
      </PropsProvider>
      <PropsProvider type="provider">
        <PropsList/>
      </PropsProvider>
    </div>
  )
}

export default Configurator