import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex px-6">
      <div className="py-6 w-28 border-neutral-200 border-r border-solid text-neutral-700">
        <span>图片加水印</span>
      </div>
      <div className="py-6 flex-1">{children}</div>
    </div>
  )
}
