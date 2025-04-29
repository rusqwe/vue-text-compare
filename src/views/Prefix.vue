<template>
  <form @submit.prevent="submitHundler">
   <h2 class = "mb-2 mt-2" style="text-align: center">Добавление префиксов к каждой строке онлайн</h2>
    <h3 style="text-align: center" class = "mb-2 mt-2">
     Инструмент для добавления слова или символа в начало (префикс) или конец (суффикс) каждой строки списка
    </h3> 
    <div class="formgrid grid mt-3">
      <span class="col-6 p-float-label ml-5">
        <Textarea id="text1" required="true" rows="16"  v-model="text1"  class="w-full" />
        <label for="text1" class="ml-2">Введите текст</label>
      </span>
      <div class="col-2">
        <span class="p-float-label mb-4">
          <InputText id="prefix" class="w-full"  required="true" v-model="text2"  />
          <label for="prefix">Введите префикс</label>
        </span>
        <div class="mb-2">
          <Checkbox v-model="prefix" :binary="true" />
          <label class="ml-1">Префикс</label>
        </div>
        <div>
          <Checkbox v-model="postfix" :binary="true" />
          <label class="ml-1">Суффикс</label>
        </div>
        
        <!--<Button label=" Добавить" class="pi pi-plus mt-4" type="submit" />
        <Button label=" Очистить" class="pi pi-replay" @click="clear" />-->
  
      </div>
    </div>

    <div class="formgrid grid">
      <div class="col-2 ml-5 mt-2">
        <Button label=" Добавить" class="pi pi-plus" type="submit" />
      </div>
      <div class="col-3 mt-2 ">
          <p v-if="this.arrayLenght">Количество строк: {{ this.arrayLenght}}</p>
      </div>
      <div class="col-2 mt-2">
        <Button label=" Очистить" class="pi pi-replay" @click="clear" />
      </div>
    </div>
    <div class="formgrid grid mt-4">
      <span class="col-6 p-float-label ml-5">
        <Textarea id="text2"  rows="16"  v-model="answer" class="w-full" />
        <label for="text2" class="ml-2">Результат:</label>
      </span>
    </div>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Сompare",
  data() {
    return {
      text1: null,
      text2: null,
      answer: null,
      arrayLenght: null,
      postfix: false,
      prefix: true,
    };
  },
  methods: {
    submitHundler() {
      let elem = this.text2?this.text2:'';
      let array = this.text1.split("\n")
      this.arrayLenght = array.length;
      for (let i= 0; i < array.length; i++) {
       
        if (this.prefix) 
          array[i] = elem +' '+  array[i];
        if (this.postfix) 
          array[i] =  array[i]  +' '+ elem;    
      }          
       this.answer = array.join('\n');
    },
    clear() {
      this.text1 = null;
      this.text2 = null;
      this.answer = null;
      this.arrayLenght = null;
    },
  },
  components: {},
};
</script>

<style scoped>
#footer {
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0; 
  padding: 10px;
  color: #fff; 
  width: 100%; 
  justify-content: flex-end;
}
.square_red {
  width: 1rem;
  height: 1rem;
  border: 1px solid rgb(34, 33, 33);
  background: rgb(219, 219, 5);
}
.square_green {
  width: 1rem;
  height: 1rem;
  border: 1px solid rgb(34, 33, 33);
  background: green;
}
</style>
