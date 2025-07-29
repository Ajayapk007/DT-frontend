import React from 'react'

const Posts = ({posts}) => {
  return (
    <div>
        <section className="max-w-4xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-3 gap-1">
          {posts?.map((p, idx) => (
            <img
              key={idx}
              src={p}
              alt={`Post ${idx + 1}`}
              className="w-full aspect-square object-cover hover:opacity-90"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Posts;