<template >
  <div class="oscars-predictions">

    <div class="year">
      <label for="oscarYear">Select the Year</label>
      <select name="year" id="oscarYear">
        <option selected value="2023">2023</option>
        <option value="2023">2022</option>
        <option value="2023">2021</option>
        <option value="2023">2020</option>
        <option value="2023">2019</option>
      </select>
    </div>
    <div class="awards">
      <div v-for="award in awards" :key="award.category">
        <h1>{{ award.category }}</h1>
        <ul>
          <li v-for="(movie, index) in award.movies" v-bind:key="index">
            {{ movie }}
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'OscarsPredic',
  props: {
    msg: String
  },
  data() {
    return {
      awards: [{
        category: 'Best Picture',
        movies: ['Everything, Everywhere, All at Once', 'Tár', 'All Quiet in the Western front']
      },
      {
        category: 'Directing',
        movies: ['Everything, Everywhere, All at Once', 'Triangle of sadness', 'Tár', 'The Fabelmans']
      }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.oscars-predictions {
  display: flex;
  flex-direction: column;
  padding: 2vw;
}

.year {
  padding-bottom: 1vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.awards {
  text-transform: capitalize;
}
</style>