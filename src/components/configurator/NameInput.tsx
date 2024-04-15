import { useGenerator } from "@/providers/GeneratorProvider"
import { Input } from "../ui/input";

const NameInput = () => {
  const {dispatch,name} = useGenerator();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({set:"name",value:e.target.value});
  };
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      <label htmlFor="name" className='text-sm'>Provider Name</label>
      <Input id="name" value={name} placeholder="Name" onChange={handleNameChange} />
    </div>
  )
}

export default NameInput