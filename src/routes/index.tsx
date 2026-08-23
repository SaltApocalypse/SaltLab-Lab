import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

const REDIRECT_URL = 'https://www.salta.top/'

export const Route = createFileRoute('/')({
  component: HomePage,
})

/**
 * 首页：重定向到主站 www.salta.top。
 * 静态主跳转由 index.html 的 meta refresh 完成（无需 JS）；
 * 此路由作为 JS 兜底，并在极端情况下展示跳转提示。
 */
function HomePage() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL)
  }, [])

  return (
    <main className="flex h-dvh items-center justify-center bg-base-100 text-base-content">
      <a href={REDIRECT_URL} className="link link-primary text-lg">
        Redirecting to www.salta.top…
      </a>
    </main>
  )
}
