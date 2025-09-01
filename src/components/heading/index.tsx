import type { ParentProps } from 'solid-js'

export function H1(p: ParentProps) {
  return <h1 class='bg-red-200'>{p.children}</h1>
}
