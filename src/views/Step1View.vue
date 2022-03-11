<template>
  <main>
    <div class="container">

      <!-- Modal -->
      <div class="modal fade" id="wrongAnswerModal" tabindex="-1" role="dialog" aria-labelledby="wrongAnswerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="wrongAnswerModalLabel">Modal title</h5>
            </div>
            <div class="modal-body">
              Risposta non corretta, riprovare
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary w-100" data-dismiss="modal" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <h1>Indica il giorno della settimana corrente</h1>

      <div class="wrapper">
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(1)">Lunedì</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(2)">Martedì</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(3)">Mercoledì</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(4)">Giovedì</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(5)">Venerdì</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(6)">Sabato</button>
        <button class="mt-2 w-100 d-flex btn btn-primary mx-auto" @click="checkAnswer(0)">Domenica</button>
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
      const rightAnswer = (new Date()).getDay()
      if(answer === rightAnswer){
        console.log("Corretto")
        this.$router.push({name: 'step2'})
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