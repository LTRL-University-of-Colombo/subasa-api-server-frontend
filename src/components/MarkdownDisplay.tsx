import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownDisplay = () => {

    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]}></Markdown>
        </div>
    )
}

export default MarkdownDisplay
