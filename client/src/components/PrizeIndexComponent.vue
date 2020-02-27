<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-12">
        <div class="header">
          <div class="col-lg-6 left-header-block">
            <div class="row">
              <img class="bullseye_image" src="../assets/guitar.png" alt="bullseye" />
              <div class="text-capitalize logo">{{ header.logo}}</div>
            </div>
          </div>
          <div class="col-lg-6 right-header-block">
            <div class="right-header-container">
              <div class="row justify-content-head">
                <div class="user_image_placeholder"></div>
                <div class="user_name">{{ header.user_name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="rewards-container">
          <div class="rewards">
            <div class="text-capitalize rewards_text">{{ rewards.rewards_text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="cards-container">
          <div class="column">
            <div class="card_header_text">{{ rewards.card_header_text }}</div>
              <div class="inner-card-container">
                <div class="row">
                <div v-for="prize in prizes" :key="prize.id">
                  <div class="card_individual">
                    <div class="card-media-container">
                      <img class="card_image" :src="require('@/assets/images/' + prize.image_url)" alt="instruments"/></div>
                    <div class="card-detail-container">
                      <div class="card_title">Win a {{ prize.name }}</div>
                    </div>
                    <div class="modal-footer">
                      <router-link :to="{ name: 'PriceDetail', params: { prizeId: prize.id }}"><button type="button" class="btn btn-primary">{{ cards.btn_text }}</button></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="footer">
          <div class="text-capitalize footer_terms">{{ footer.terms }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Prizes',
  props: [
    'prizeId'
  ],
  data () {
    return {
      prizes: [],
      prize: {},
      header: {
        logo: 'instru-win',
        user_name: 'John Smith'
      },
      rewards: {
        rewards_text: 'Rewards',
        card_header_text: 'Here is the full list of instruments that you could win.'
      },
      cards: {
        card_title: 'Flyaway',
        btn_text: 'Redeem >'
      },
      footer: {
        terms: 'Terms & Conditions | Privacy Policy'
      }
    }
  },
  mounted () {
    this.getPrizes()
  },
  methods: {
    getPrizes () {
      axios.get('http://localhost:3000/prizes')
        .then(response => {
          this.prizes = response.data
          console.log(response.data)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.header {
  height: 55px;
  margin: 13px 70px 15px 70px;
}

.left-header-block {
  float:left;
  padding-left: 50px;
}

 .bullseye_image{
  width: 70px;
  height: 70px;
  padding-bottom: 3px;
}

.logo {
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: 200;
  padding-left: 10px;
  padding-top: 8px;
}

.rewards-container {
  background-color: #0274BB;
  height: 190px;
  margin: 0px 70px 0px 70px;
}

.rewards_text {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  font-size: 40px;
  padding-top: 65px;
  text-align: center;
}

.right-header-block {
  float: right;
  padding-right: 50px;
}

.right-header-container {
  float: right;
}

.user_image_placeholder {
  background-color: #E8E8E8;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 3px;
}

.user_name {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  margin-top: 21px;
  padding: 0px 0px 0px 10px;
}

.cards-container {
  background-color: #F3F3F3;
  /* height: 400px; */
  margin: 0px 70px 0px 70px;
}

.inner-card-container {
  padding: 60px 60px 65px 83px;
}

.card_header_text {
  color: #1F1F1F;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  padding-top: 50px;
  text-align: center;
}

.card_image {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 370px;
  height: 250px;
}

.card-detail-container {
  background-color: #fff;
  height: 240px;
  width: 370px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.card_title {
  text-align: center;
  padding-top: 55px;
  font-weight: 900;
  font-size: 20px;
}

.btn-primary {
  width: 160px;
  height: 40px;
  border-radius: 20px;
  background-color: #FFCF0B;
  border-color: #FFCF0B;
  color: #1F1F1F;
  font-size: 14px;
  margin-top: -180px;
  margin-right: 85px;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.card_individual {
  padding-left: 14px;
  padding-bottom: 20px;
  margin-bottom: -60px;
}

.footer {
  background-color: #1F1F1F;
  height: 190px;
  margin: 0px 70px 0px 70px;
}

.footer_terms {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  padding-top: 83px;
  text-align: center;
}

.modal-footer {
  border: none;
}

</style>
