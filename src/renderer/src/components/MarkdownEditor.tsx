import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'

//TODO add codeblock plugin and link pluging with configuration

export const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown={'# Hello from MDX Editor'}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:leading-relaxed prose-headings:my-4 prose-blockqoute:my-4 prose-ul:my-2 prose-li: my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-[''] transparancy"
    />
  )
}
