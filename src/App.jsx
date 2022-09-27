import Button from './components/button/Button'
import Checkbox from './components/checkbox/Checkbox'
import FileUpload from './components/fileUpload/FileUpload'
import TextInput from './components/textInput/TextInput'

const data = [
  {
    id: "checkMale",
    text: "Male",
  },
  {
    id: "checkFemale",
    text: "Female",
  },
  {
    id: "checkOther",
    text: "Other",
  }
]

function App() {

  return (
    <div className="h-screen bg-re">
      <Button>
        Login
      </Button>

      <Button type="submit" className="bg-red-400">
        Hello
      </Button>
      <TextInput label="First Name" placeholder="First Name" />
      <TextInput label="Last Name" placeholder="Last Name" inputClass="w-1/2" />
      <TextInput label="Url" placeholder="Last Name" inputClass="w-1/2" prefix="$" />
      <FileUpload />

      <Checkbox name="gender" options={data} />

    </div>
  )
}

export default App
