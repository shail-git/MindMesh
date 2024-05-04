import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  MarkdownEditor,
  NotesPreviewList,
  RootLayout,
  Sidebar
} from '@/components'

const App = ({ ...props }) => {
  return (
    <div {...props}>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotesPreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 rounded-r-xl ">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </div>
  )
}

export default App
