<template>
  <div class="home">

    <div class="tabs">Tab bar</div>

    <div class="image_content ">1</div>

    <div class="blogs_content">

      <div class="columns is-multiline">

        <div class="column is-2 ml-6 mt-3" v-for="blog, index in blogs" :key="index">
          <div class="card">

            <div class="card-content">
              <div class="card-image logo">
                <figure class="image is-3by1">
                  <img src="https://bulma.io/images/placeholders/720x240.png" alt="Placeholder image">
                </figure>
              </div>


              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>

              <div class="card-content">
                <div class="media-content">
                  <p class="title has-text-centered is-size-4">Tiltle {{ index }}</p>
                </div>
              </div>

              <div class="content ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris
              </div>
            </div>
          </div>
        </div>





      </div>

      <div class="test">
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a active href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      blogs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    paginate(array, page_size, page_number) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
  }
}
</script>

<style scoped>
.tabs {
  background-color: antiquewhite;
  width: 100%;
  height: 8%;
  margin: 0;
}

.blogs_content {
  background-color: white;
}

.image_content {
  background-color: aquamarine;
  width: 100%;
  height: 40%;
}

.logo {
  margin-bottom: 1em;
}

.content {
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.home {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 246, 193);
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.test{
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
}
</style>
