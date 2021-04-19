<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0">
          <div class="hero-container">
            <img src="img/bgImg/bg-2.jpg" class="hero-img w-100" alt="" />
            <h1 class="overlay-text">About Us</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 text-center">
          <h1>About GC Aesthetics</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 order-2 order-md-1 col-md-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            neque officia sint dolore similique nisi ut! Cum quam quo sed
            voluptatibus recusandae perferendis ex totam consequatur, itaque
            eaque delectus, neque adipisci. Iure soluta reprehenderit eos error
            consequatur. Asperiores quis consectetur quae voluptatem nisi iusto
            vel nobis quos suscipit corrupti? Soluta laudantium iusto, ad neque
            eum nihil? Earum nulla at minus dolor, animi maiores pariatur!
            Veritatis itaque optio cumque voluptatem aspernatur tempore commodi
            culpa, consequuntur hic, quibusdam quasi quisquam saepe laboriosam
            possimus maiores? Explicabo error facilis nisi tempore soluta quis
            molestias iure, enim voluptatum. Esse ea sed molestiae dolor quo
            rerum!
          </p>
        </div>
        <div class="col-12 order-1 order-md-2 col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            neque officia sint dolore similique nisi ut! Cum quam quo sed
            voluptatibus recusandae perferendis ex totam consequatur, itaque
            eaque delectus, neque adipisci. Iure soluta reprehenderit eos error
            consequatur. Asperiores quis consectetur quae voluptatem nisi iusto
            vel nobis quos suscipit corrupti? Soluta laudantium iusto, ad neque
            eum nihil? Earum nulla at minus dolor, animi maiores pariatur!
            Veritatis itaque optio cumque voluptatem aspernatur tempore commodi
            culpa, consequuntur hic, quibusdam quasi quisquam saepe laboriosam
            possimus maiores? Explicabo error facilis nisi tempore soluta quis
            molestias iure, enim voluptatum. Esse ea sed molestiae dolor quo
            rerum!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from 'static/data/test.json'
export default {
  name: 'AboutPage',
  asyncData() {
    let result = JSON.parse(JSON.stringify(data))
    result = result.data
    return { result }
  },
}
</script>

<style></style>
