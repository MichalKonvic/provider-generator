import Configurator from "./components/configurator"
import Navigation from "./components/Navigation"
import PreviewEditor from "./components/PreviewEditor"
import Layout from "./Layout"

const App = () => {
  return (
    <div className='w-screen h-full dark:bg-zinc-950'>
      <Navigation/>
      <Layout>
        <Configurator/>
        <PreviewEditor/>
      </Layout>
    </div>
  )
}

export default App