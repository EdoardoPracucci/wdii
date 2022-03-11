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

      <h1>Indica il mese corrente</h1>

      <div class="wrapper">
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(0)">Gennaio</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(1)">Febbraio</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(2)">Marzo</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(3)">Aprile</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(4)">Maggio</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(5)">Giugno</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(6)">Luglio</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(7)">Agosto</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(8)">Settembre</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(9)">Ottobre</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(10)">Novembre</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(11)">Dicembre</button>
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
      const rightAnswer = (new Date()).getMonth()
      if(answer === rightAnswer){
        console.log("Corretto")
        this.$router.push({name: 'step3'})
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