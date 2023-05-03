<script>
import myJson from '../data/oscars.json'

export default {
  name: 'OscarsPredic',

  data() {
    return {
      oscarYear: "2023",
      awards: myJson,
    }
  },
  methods: {
    countWins: function (awards, oscarYear) {
      let count = 0;

      Object.entries(awards[oscarYear]).forEach(award => {
        if (award[1].bet.toLowerCase() === award[1].winner.toLowerCase())
          count++;

      })
      return count + '/ ' + Object.keys(awards[oscarYear]).length;
    },

  }



};
</script>

<template >
  <div class="oscars-predictions">

    <div class="header">
    <div class="year">
      <label for="oscarYear">Select the Year</label>
      <select name="year" id="oscarYear" v-model="oscarYear">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>

    <div class="my-wins">Correct Bets: {{ countWins(awards, oscarYear) }} </div>

  </div>

    <div class="awards">
      <div v-for="award in awards[oscarYear]" :key="award">
        <h1>{{ award.category }}</h1>
        <ul>
          <li v-for="(movie, index) in award.movies" v-bind:key="index"
            :class="movie.toLowerCase() === award.winner.toLowerCase() ? 'winner' : ''">
            {{ movie }} <span class="bet" v-if="award.bet === movie"> ↙ </span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.oscars-predictions {
  display: flex;
  flex-direction: column;
  padding: 3vmin;
  width: 100%;
}

.header{
  display: flex;
  justify-content: space-between;
}

.my-wins {
  align-self: auto;
}

.year {
  padding-bottom: 1vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.awards {
  padding: 2vmin;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  text-transform: capitalize;
}

ul{
  list-style: none;
  padding:0;
}

span{
  position: relative;
  bottom: 7px;
  right: 3px;
  color: green;
  font-weight: 900;
  font-size: 3vmin;
}
.winner {
  color: goldenrod
}

</style>