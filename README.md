# Markdown Components for React


#### Supports RTL

_Right to Left direction of text_

## Installation

`npm i react-markdown-rtl`

## Usage

_In this example, we use tailwindcss to style the package's components, which come unstylewd and should be styled externally by the user._

```
import {useState} from 'react'
import {MDEditor, MDRenderer} from "react-markdown-rtl";
import Switch from "./components/ui/Switch";

function App() {
    const [content, setContent] = useState('')
    const [dir, setDir] = useState<'ltr' | 'rtl'>('rtl')
    const onSwitchDir = () => setDir(dir === 'rtl' ? 'ltr' : 'rtl')

  return (
    <>
      <div className={"w-[100vw] flex items-center flex-col gap-4"}>
          <div>
            <span>RTL</span>
            <Switch value={dir ==='rtl'} onChange={onSwitchDir} />
          </div>
          <MDEditor className={"w-[50vw] h-96 outline-none"} isRtl={dir==='rtl'} onChange={(e)=>setContent(e.target.value)} />
          <MDRenderer className={"w-[50vw] border-2 rounded-md border-white p-4 "}  dir={dir} content={content} />
      </div>
    </>
  )
}

export default App
```

## Operators

symbol | meaning
-- | --
| # text | xl title
| ## text | l title
| ### text | m title
| \*\*text** | bold
| \*text* | italic
| ++text++ | rtl
| --text-- | ltr
| \~~text~~ | strike-through
| \_text_ | underline
| \{RED}text{RED} | red color
| \{BLUE}text{BLUE} | blue color
| \{GREEN}text{GREEN} | green color
| \{YELLOW}text{YELLOW} | yellow color
