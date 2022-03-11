<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="container">

      <!-- Modal -->
      <div class="modal fade" id="wrongAnswerModal" tabindex="-1" role="dialog" aria-labelledby="wrongAnswerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="wrongAnswerModalLabel">Aspetta</h5>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary w-100" data-dismiss="modal" @click="closeModal">Chiudi</button>
            </div>
          </div>
        </div>
      </div>

      <h1>Indica il numero del mese corrente</h1>

      <div class="row">
          <div class="col-md-2" v-for="day in Array.from({length:31},(v,k)=>k+1)">
            <button class="m-5 btn btn-primary w-100" @click="checkAnswer(day)">
              <span v-text="day"></span>
            </button>
          </div>
      </div>

    </div>
  </main>
</template>

<style scoped>

main{
  width: 100%;
}

</style>

<script>

export default {

  methods: {
    checkAnswer(answer){
      const rightAnswer = (new Date()).getDate()
      if(answer === rightAnswer){
        console.log("Corretto")
        this.$router.push({name: 'step4'})
        return;
      }

      const modalElement = document.getElementById('wrongAnswerModal')
      const modal = new bootstrap.Modal(modalElement)

      modal.toggle()
    },

    closeModal(){
      const modalElement = document.getElementById('wrongAnswerModal')
      const modal = bootstrap.Modal.getInstance(modalElement)

      modal.hide()
    }
  }
}
</script>