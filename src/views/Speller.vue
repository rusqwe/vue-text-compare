<template>
  <form @submit.prevent="submitHundler">
    <h2 class="mb-2 mt-2" style="text-align: center">Проверка текста онлайн</h2>
    <h3 style="text-align: center" class="mb-2 mt-2">
      Инструмент для проверки орфографии(текста) онлайн
    </h3>
    <div class="formgrid grid">
      <span class="p-float-label col-8 col-offset-2 mt-4">
        <Editor
          ref="editor"
          v-model="value"
          editorStyle="height: 320px"
          @text-change="textChange"
        >
          <template #toolbar>
            <span class="ql-formats"> </span>
          </template>
        </Editor>
      </span>
    </div>

    <div class="card">
      <div class="flex card-container indigo-container">
        <div class="flex-1 font-bold text-center">
          <Button label="Проверить" type="submit" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// @ is an alias to /src
import SpellerService from "../SpellerService";
export default {
  name: "Сompare",
  data() {
    return {
      value: null,
      textArray: [],
      text: "",
      spellerService: null,
    };
  },
  created() {
    this.spellerService = new SpellerService("checkText");
  },
  methods: {
    submitHundler() {
      /*let text = "";
      for (let i = 0; i < this.textArray.length; i++) {
        text = text + "<p>" + this.textArray[i] + "</p>";
      }
*/
      let fragments = this.splitByLimit(this.text, 660);
      //et fragments = [this.text];
      let sendText = "";
      fragments.forEach((element) => {
        if (sendText !== "") sendText = sendText + "&";
        sendText = sendText + "text=" + element;
      });

      //console.log(text);

      this.spellerService
        .postData(sendText)
        .then((data) => {
          this.matchErrorText(data.data, fragments /*this.textArray*/);
        })
        .catch((er) => console.error(er));
    },
    splitByLimit(text, limit) {
      var fragments = [],
        words = text.split(" "),
        fragment = [],
        fragmentLen = 0;

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // one letter = 6 bytes: %D0%BA
        if (fragmentLen + word.length * 6 > limit) {
          fragments.push(fragment.join(" "));
          fragment = [];
          fragmentLen = 0;
        }
        fragment.push(word);
        fragmentLen += word.length * 6 + 3; // + space: %20 = 3 symbols

        // last word
        if (i == words.length - 1) {
          fragments.push(fragment.join(" "));
        }
      }
      return fragments;
    },
    matchErrorTexts(error, fragments) {
      console.log(error);
      let text = "";
      for (let i = 0; i < fragments.length; i++) {
        for (let j = 0; j < error[i].length; j++) {
          let sub1 = fragments[i].substring(0, error[i][j].pos);
          let sub2 = fragments[i].substring(
            error[i][j].pos + error[i][j].len,
            fragments[i].length - 1
          );
          fragments[i] =
            sub1 +
            '<span class="text-error ">' +
            error.data[i][j].word +
            "</span>" +
            sub2;
        }
        // console.log( fragments[i])

        //console.log(fragments[i].replaceAll("\n","<p>"));
        text = text + " " + fragments[i].replaceAll("\n", "<text-error>");
      }
      this.value = text;
      //   this.value = '<p><span style="color: rgb(56, 56, 56); background-color: rgb(255, 255, 255);">После принятия стандарта SQL92 к нему били&nbsp;</span><span style="color: rgb(56, 56, 56); background-color: rgb(255, 80, 120);">дабавлены</span><span style="color: rgb(56, 56, 56); background-color: rgb(255, 255, 255);">&nbsp;ещё несколько документов </span></p>'
    },
    matchErrorText(error, fragments) {
      console.log(error);
      let text = "";

      for (let i = 0; i < fragments.length; i++) {
        if (error.length > 0) {
          for (let j = 0; j < error[i].length; j++) {
            let sub1 = fragments[1].substring(0, error[i][j].pos);
            let sub2 = fragments[1].substring(
              error[i][j].pos + error[i][j].len,
              fragments[1].length - 1
            );
            fragments[i] =
              sub1 +
              '<span class="text-error ">' +
              error[i][j].word +
              "</span>" +
              sub2;
          }
        }
        //console.log(fragments[i].replaceAll("\n","<p>"));

        text = text + "<p>" + fragments[i] + "</p>";
      }
      this.value = text;
    },
    textChange(data) {
      this.text = data.textValue;
      this.textArray = data.textValue.split("\n");
    },
    clear() {},
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
.text-error {
  background-color: rgb(255, 80, 120);
}
</style>
