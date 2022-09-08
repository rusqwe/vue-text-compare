<template>
  <form @submit.prevent="submitHundler">
    <h2 class="mb-2 mt-2" style="text-align: center">Сравнение текстов онлайн</h2>
    <h3 style="text-align: center" class="mb-2 mt-2">
      Инструмент для сравнения двух текстов онлайн
    </h3>
    <div class="formgrid grid ml-2 mb-1">
      <div class="col-6">
        <label for="text1" class="ml-2" style="font-size: 1.1rem">Первый текст:</label>
      </div>

      <div class="col-6">
        <label for="text2" class="ml-2" style="font-size: 1.1rem">Второй текст:</label>
      </div>
    </div>
    <div class="formgrid grid">
      <div class="field col-6">
        <Textarea id="text1" required="true" rows="16" v-model="text1" class="w-full" />
      </div>
      <div class="field col-6">
        <Textarea id="text2" required="true" rows="16" v-model="text2" class="w-full" />
      </div>
    </div>
    <div class="ml-4 mt-1">
      <Button label=" Очистить" class="pi pi-replay p-button-sm" @click="clear" />
      <Button
        label=" Поменять местами"
        class="pi pi-sort-alt ml-2 mr-6 p-button-sm"
        @click="changeText"
      />
      <Button label=" Сравнить" class="pi pi-check ml-6" type="submit" />
    </div>
    <div class="formgrid grid mt-3 ml-4">
      <div class="field col-1">Удалено из текста</div>
      <div class="field col-1 ml-4">
        <div class="square_red"></div>
      </div>
      <div class="field col-1">Добавлено в текст</div>
      <div class="field col-1 ml-4">
        <div class="square_green"></div>
      </div>
      <div class="col-11" style="white-space: pre-wrap" v-if="answer">
        <b>Результат:</b><br />
        <span v-for="(item, index) in answer" :key="index">
          <del v-if="item.type === 'er'" style="background: rgb(221, 221, 13)">
            {{ item.text }}
          </del>
          <span v-if="item.type === 'norm'">
            {{ item.text }}
          </span>
          <ins v-if="item.type === 'new'" style="background: rgb(144, 194, 144)">
            {{ item.text }}
          </ins>
        </span>
      </div>
    </div>
  </form>
  <div id="footer">
    <a href="http://code.google.com/p/google-diff-match-patch/" style="font-size: 6pt"
      >Diff, Match and Patch</a
    >
  </div>
</template>

<script>
// @ is an alias to /src
import diff from "diff-match-patch";
export default {
  name: "Сompare",
  data() {
    return {
      answer: null,
      text1: null,
      text2: null
    };
  },
  methods: {
    submitHundler() {
      let diffService = new diff();
      //   let str = diffService.diff_main('Hello World.', 'Goodbye World.');
      let result = diffService.diff_main(this.text1, this.text2);
      diffService.diff_cleanupSemantic(result);

      let obj = [];

      for (let item of result) {
        if (item[0] === -1) {
          obj.push({ type: "er", text: item[1] });
        }
        if (item[0] === 0) {
          obj.push({ type: "norm", text: item[1] });
        }

        if (item[0] === 1) {
          obj.push({ type: "new", text: item[1] });
        }
      }
      //test = test.replace('/n','<br>')
      //console.log(test);
      this.answer = obj;
    },
    clear() {
      this.text1 = null;
      this.text2 = null;
      this.answer = null;
    },
    changeText() {
      let changeText = this.text2;
      this.text2 = this.text1;
      this.text1 = changeText;
      this.answer = null;
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
  margin-right: 20px;
  background: rgb(219, 219, 5);
}
.square_green {
  width: 1rem;
  height: 1rem;
  margin-right: 20px;
  border: 1px solid rgb(34, 33, 33);
  background: green;
}
</style>
