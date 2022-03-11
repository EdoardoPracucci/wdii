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

      <h1>Riepilogo</h1>

      <div class="wrapper">
        <h3>Oggi è il <div v-text="todayDate"></div> </h3>
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

  data(){
    return {
      todayDate: ''
    }
  },

  mounted(){
    this.todayDate = (new Date).getDate() +"/"+ ((new Date).getMonth() + 1) +"/"+(new Date).getFullYear()+
        " e sono le ore "+ (new Date).getHours()+"."+ (new Date).getMinutes()
  },

  methods: {

    closeModal(){
      const modalElement = document.getElementById('wrongAnswerModal')
      const modal = bootstrap.Modal.getInstance(modalElement)

      modal.hide()
    }
  }
}
</script>