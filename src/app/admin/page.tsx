"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [content, setContent] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from("posts").insert([
      { title, slug, content_md: content, published: true },
    ])
    if (!error) {
      setSuccess(true)
      setTitle("")
      setSlug("")
      setContent("")
    } else {
      alert(error.message)
    }
  }

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">Адмін-панель</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок статті"
          className="border p-2 w-full rounded"
        />
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="slug (латиницею)"
          className="border p-2 w-full rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Markdown контент"
          className="border p-2 w-full rounded h-40"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Опублікувати
        </button>
      </form>

      {success && <p className="text-green-600 mt-4">✅ Стаття успішно додана!</p>}
    </section>
  )
}
