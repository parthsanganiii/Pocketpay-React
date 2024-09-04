import React from 'react'
import Data from '../Data/Data'

const Detail = () => {
  return (
    <>
      <section className='flex justify-center pt-[100px] pb-12 lg:px-14 md:px-3'>
        <div className='container md:m-0 m-3'>
          <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] text-center">Our Blog</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10'>
            {Data.Blogs.map(Blog => (
              <div className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl'>
                <img src={Blog.img} alt="Blog Post 1" class="w-full h-40 object-cover" />
                <div class="p-6">
                  <h2 class="text-xl font-semibold text-[#181945] mb-4">Post Title 1</h2>
                  <p class="text-[#181945] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic
                    quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem
                    dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque.
                    Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum
                    officiis ea autem dolor.</p>
                  <a href="#" class="text-[#0666EB] hover:underline flex items-center">
                    Read More <i class="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


// const Blogs = [
//   {
//     img: "img/blog1.avif",
//     title: "Post Title 1",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
//   {
//     img: "img/blog2.avif",
//     title: "Post Title 2",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
//   {
//     img: "img/blog3.avif",
//     title: "Post Title 3",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
//   {
//     img: "img/blog4.avif",
//     title: "Post Title 4",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
//   {
//     img: "img/blog5.avif",
//     title: "Post Title 5",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
//   {
//     img: "img/blog6.avif",
//     title: "Post Title 6",
//     decripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic quis, praesentium nam saepe dolores consectetur illo odit suscipit sit totam voluptatem dolore autem laborum vero aperiam dolorum id distinctio error dolorem ullam itaque. Praesentium, vero assumenda. Ad dolores quia nobis perferendis, quod tempore aut harum officiis ea autem dolor."
//   },
// ]


export default Detail