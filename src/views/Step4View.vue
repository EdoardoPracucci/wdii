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

      <h1>Indica l'attuale parte della giornata</h1>

      <div class="wrapper">
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(5,12)">Mattina</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(11,18)">Pomeriggio</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(17,24)">Sera</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(23,5)">Notte</button>
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
    checkAnswer(min,max){
      const rightAnswer = (new Date()).getHours()

      if(min <= rightAnswer && max >= rightAnswer){
        console.log("Corretto")
        this.$router.push({name: 'step5'})
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