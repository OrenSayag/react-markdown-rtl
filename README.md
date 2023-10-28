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

function App() {
    const [content, setContent] = useState('')
    const [dir, setDir] = useState<'ltr' | 'rtl'>('rtl')
    const onSwitchDir = () => setDir(dir === 'rtl' ? 'ltr' : 'rtl')

  return (
    <>
      <div>
          <MDEditor className={"w-[50vw] h-96 outline-none"} onSwitchDir={onSwitchDir} isRtl={dir==='rtl'} onChange={(e)=>setContent(e.target.value)} />
          <MDRenderer className={"w-[50vw]"}  dir={dir} content={content} />
      </div>
    </>
  )
}

export default App;
```

## Operators

symbol | meaning
-- | --
# text| xl title
## text| l title
### text| m title
**text** | bold
*text* | italic
++text++ | rtl
--text-- | ltr
~~text~~ | strike-through
_text_ | underline

