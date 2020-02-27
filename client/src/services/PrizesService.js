import api from '@/services/api'

export default {
  fetchPrizes () {
    return api().get('prizes')
  }
}
