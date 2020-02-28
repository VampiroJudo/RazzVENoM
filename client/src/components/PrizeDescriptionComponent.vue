<template>
  <div id="descriptions">
    <div class="row">
      <div class="col-lg-12">
        <div class="header">
          <div class="col-lg-6 left-header-block">
            <div class="row">
              <img class="guitar_image" src="../assets/guitar.png" alt="bullseye"/>
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
          <div class="inner-card-container">
            <div class="row">
              <div class="prize">
                <img class="prize_image" :src="require('@/assets/images/' +  prizes.image_url)" alt="people"/></div>
              <div class="prize-detail-container">
                <!-- <div v-for="prize in prizes" :key="prize.name"> -->
                  <div class="card_title">Win a {{ prizes.name }}</div>
                  <hr class="new1">
                  <button type="button" @click="showModal = true" class="btn btn-primary">{{ cards.btn_text }}</button>
                  <hr class="new2">
                <div class="prizes_remaining_text">{{ prizes.quantity}} left in stock</div>
               <!-- </div> -->
            </div>
            <hr class="new3">
            <div class="description-container">
              <div class="description_title">{{ cards.description_title }}</div>
              <div class="description_text">{{ prizes.description }}</div></div>
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
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="showModal = false">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <div class="modal_header_text">Are you Sure?</div>
                <img class="redeem_image" :src="require('@/assets/images/' +  prizes.image_url)" alt="people"/>
                <div class="modal_redeem_text">Redeem for {{ prizes.name }}?</div>
                </div>
                <div class="modal-footer">
                  <button type="button" id="reclamation_btn" class="btn btn-primary" @click="updatePrizeById();confirmationModal = true;showModal = false">Redeem</button>
                  <button type="button" id="close_btn" class="btn btn-secondary" @click="showModal = false">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="confirmationModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content" id="confirmation_modal_body">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="confirmationModal = false">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <div class="modal_congrats_text">Congratulations!</div>
                <div class="modal_flyaway_text">You redeemed a {{ prizes.name }}!</div>
                <router-link :to="{ name: 'PricesIndex' }"><button type="button" id="redeem_close_btn" class="btn btn-primary" @click="confirmationModal = false">More Prizes</button></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Prizesbyid',
  props: [
    'prizeId'
  ],
  data () {
    return {
      prizes: [],
      prize: {},
      showModal: false,
      confirmationModal: false,
      header: {
        logo: 'instru-win',
        user_name: 'John Smith'
      },
      rewards: {
        rewards_text: 'Rewards'
      },
      cards: {
        btn_text: 'Redeem >',
        description_title: 'Description'
      },
      footer: {
        terms: 'Terms & Conditions | Privacy Policy'
      }
    }
  },
  mounted () {
    this.getPrizeById()
    this.updatePrizeById()
    // this.noZeroAmount()
  },
  methods: {
    getPrizeById () {
      axios.get('http://localhost:3000/prizes/' + this.prizeId).then(response => {
        this.prizes = response.data
        console.log(response.data)
      })
    },
    updatePrizeById () {
      axios.post('localhost:3000/prizes/' + this.prizeId, { quantity: this.prizes.quantity - 1 }).then(response => {
        this.prizes.quantity = response.quantity
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

 .guitar_image{
  width: 70px;
  height: 70px;
}

.logo {
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 200;
  padding-left: 10px;
  padding-top: 10px;
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
  margin-top: 7px;
}

.user_name {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  margin-top: 24px;
  padding: 0px 0px 0px 10px;
}

.cards-container {
  background-color: #F3F3F3;
  /* height: 400px; */
  margin: 0px 70px 0px 70px;
}

.inner-card-container {
  padding: 35px 160px 90px 170px;
}

.prize_image {
  vertical-align: middle;
  border-style: none;
  padding-right: 30px;
  width:485px;
  height:400px;
}

.prize-detail-container {
  background-color: #fff;
  height: 290px;
  width: 470px;
  border-radius: 5px;
  padding-left: 10px;
}

.card_title {
  text-align: left;
  padding-top: 25px;
  padding-left: 20px;
  font-weight: 900;
  font-size: 28px;
}

.new1 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-right: 30px;
  margin-left: 20px;
  border: 0;
  border-top: 0.1em solid rgba(0,0,0,.1);
}

.new2 {
  margin-top: 7rem;
  margin-bottom: 4rem;
  margin-right: 30px;
  margin-left: 20px;
  border: 0;
  border-top: 0.1em solid rgba(0,0,0,.1);
  padding-top: 30px;
}

.new3 {
  margin-top: 35px;
  border: 0;
  border-top: 0.1em solid rgba(0,0,0,.1);
  padding-top: 30px;
}

.btn-primary {
  width: 200px;
  height: 42px;
  border-radius: 20px;
  background-color: #FFCF0B;
  border-color: #FFCF0B;
  color: #1F1F1F;
  font-size: 14px;
  margin-top: 18px;
  margin-left: 20px;
  float: left;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.prize {
  padding-left: 14px;
  padding-bottom: 20px;
}

.prizes_remaining_text {
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  margin-top: -6.7em;
  margin-left: 25px;
  font-size: 13px;
}

.description_title {
  text-align: left;
  font-size: 25px;
  font-weight: 900;
  padding-top: 70px;
  padding-left: 11px;
}

.description_text {
  text-align: left;
  float: right;
  margin-top: -2em;
  width: 800px;
  font-size: 17px;
  margin-left: 12em;
  padding-right: 40px;
}

.modal-header {
  border: none;
}

.modal-footer {
  border: none;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
  background-color: rgba(000, 000, 000, 0.8);
  /* margin-left: 70px;
  margin-right:70px; */
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding-right: 220px;
}

.modal-content {
  width: 700px;
  height: 500px;
}

.modal_header_text {
  font-weight: 900;
  font-size: 33px;
  text-align: center;
}

.redeem_image {
  vertical-align: middle;
  border-style: none;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.modal_redeem_text {
  margin-top: 20px;
}

#close_btn {
  background-color: #ebebeb;
  border: none;
  color: #000;
  width: 170px;
  height: 35px;
  border-radius: 20px;
  margin-right: 155px;
  margin-bottom: 32px;
}

#reclamation_btn {
  background-color: #FFCF0B;
  border: none;
  color: #000;
  width: 170px;
  height: 35px;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 43px;
}

#confirmation_modal_body{
  width: 700px;
  height: 300px;
}

#redeem_close_btn{
  background-color: #FFCF0B;
  margin-left: 235px;
  margin-top: 50px;
  border: none;
}

.modal_congrats_text {
  font-size: 30px;
  font-weight: 900;
  font-family: 'Open Sans', sans-serif;
}

.modal_flyaway_text {
  font-size: 18px;
  padding-top: 10px;
  font-family: 'Open Sans', sans-serif;
}

a { color: inherit; }

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
</style>
