<template>
  <div>
    <div>
      <form class="form-inline" @submit.prevent="checkTransaction">
        <input v-model="inputValue" type="text" placeholder="Введите SID" class="form-control">
        <button type="submit" class="btn btn-primary">Проверить голос</button>
      </form>
    </div>
    <!-- Display content below the button -->
    <div v-if="districtId">
      <div class="card">
        <div class="card-header">Summary</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-3"><strong>Status:</strong></div>
              <div class="col-sm-9">
                <code>{{ status }}</code>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-3"><strong>District Id:</strong></div>
              <div class="col-sm-9">
                <code>{{ districtId }}</code>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-3"><strong>decryptedChoices:</strong></div>
              <div class="col-sm-9">
                <code>{{ decryptedChoices }}</code>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="card mt-3">
        <div class="card-header">Content</div>
        <ul class="list-group list-group-flush">
          <li v-if="decryptTxHash" class="list-group-item">
            <div class="row">
              <div class="col-sm-3"><strong>decryptTxHash:</strong></div>
              <div class="col-sm-9">
                <div v-if="linkDecryptTxHash">
                  <a :href="linkDecryptTxHash" target="_blank">{{ linkDecryptTxHash }}</a>
                </div>
              </div>
            </div>
          </li>
          <li v-if="storeTxHash" class="list-group-item">
            <div class="row">
              <div class="col-sm-3"><strong>storeTxHash</strong></div>
              <div class="col-sm-9">
                <div v-if="linkStoreTxHash">
                  <a :href="linkStoreTxHash" target="_blank">{{ linkStoreTxHash }}</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '', // This will hold the current value of the text field
      districtId: '',
      decryptTxHash: '',
      storeTxHash: '',
      decryptedChoices: {},
      status: {},
      linkDecryptTxHash: '',
      linkStoreTxHash: '',
    };
  },
  methods: {
    logInputValue() {
      // This method logs the current value of the text field to the console
      console.log(this.inputValue);
    },
    checkTransaction: function() {
      const self = this;
      const voting_id = '9c65c4d4e66d6a299d4e49b56250112d91c0ed38b2f20aeaa8438da5820c00dc'; // Replace with your actual voting_id
      const sid = this.inputValue; // Replace with your actual sid

      this.$http.get(`/public/api/services/votings_service/v1/ballot-by-sid?voting_id=${voting_id}&sid=${sid}`).then(response => {
        const baseURL = '/#/transaction/';

        self.districtId = response.data.district_id;
        self.decryptTxHash = response.data.decrypt_tx_hash;
        self.storeTxHash = response.data.store_tx_hash;
        self.decryptedChoices = response.data.decrypted_choices;
        self.status = response.data.status;

        self.linkDecryptTxHash = `${baseURL}${encodeURIComponent(self.decryptTxHash)}`
        self.linkStoreTxHash = `${baseURL}${encodeURIComponent(self.storeTxHash)}`
        console.log(response);
      })// .catch(error => {
        // Handle any errors
      //  console.error("An error occurred:", error);
      // })
    }
  }
}
</script>

<style>
/* Add any styles for your page here */
input[type="text"] {
  margin-right: 10px;
}

button {
  cursor: pointer;
}

/* Style for displaying JSON content */
pre {
  white-space: pre-wrap; /* Since JSON is used, ensure proper formatting */
  word-wrap: break-word;
}

</style>
