<template>
  <div>
    <article>
      <p class="txtP">选择你想投诉的类型</p>
      <ul class="listUl">
        <li class="commonLi" :class="{active: commonLiItem.includes(item)}" v-for="(item, index) in commonLi" :key="index" @click="clickCommonLi(item)">{{item}}</li>
      </ul>
      <div class="line"></div>
      <section class="noteSec" v-if="commonLiItem.length > 0">
        <div>
          <p class="feed-title">补充说明</p>
          <div class="block1">
            <textarea class="text-area" row="3" resize: none placeholder="请详细填写并提供原内容的链接地址" v-model="text"></textarea>
            <div class="rz-picter">
              <!-- <p class="upload-tip">上传图片最多<i style="color: blue;">4</i>张</p> -->
            <div style="display: flex;">
              <span class="img"  v-for="(item, index) in fileList" :key="index" >
                <img class="img" :src="item" />
                <img class="deleteIcon" @click="deleteImg(index)" src="../../assets/删除.svg" />
              </span>
              <span @click="chooseImage" class="imgBlock"><img class="img-avatar" src="../../assets/photo@3x.png" alt /></span>
            </div>
            <input type="file" name="avatar" id="uppic" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" style="display: none;">
            </div>
          </div>
        </div>
      </section>
      <p class="remarkP">
        <img src="../../assets/Group_4@2x.png" alt /> 您的举报将在24小时内受理，请尽量提交完整的举报描述及材料，无需重复举报，感谢您的配合
      </p>
      <button class="btnSubmit" @click="submit">提交</button>
    </article>
    <div class="standardText">了解速播社区规范 <span style="color: #D5DBE6;"> ></span></div>
    <pop-up :textMap="textMap" :time="2" v-if="showDialog"></pop-up>
  </div>
</template>
<script>
import popUp from '../../components/popUp'
export default {
  data() {
    return {
      commonLi: [
        '不适内容',
        '色情低俗',
        '有害信息',
        '攻击谩骂',
        '诈骗信息',
        '政治敏感',
        '内容抄袭',
        '赌博',
        '其他'
      ],
      commonLiItem: [],
      fileList: [],
      text: '',
      textMap: {
        text1: '举报成功',
        text2: '我们会尽快处理哒~'
      },
      showDialog: false
    }
  },
  components: {
    popUp
  },
  methods: {
    chooseImage() {
      document.getElementById("uppic").click()
    },
    changeImage(e) {
      Object.entries(e.target.files).map(([key, value]) => {
        console.log(key)
        var reader = new FileReader()
        var that = this
        reader.readAsDataURL(value)
        reader.onload = function(e) {
          console.log(e)
          that.fileList.push(this.result)
        }
      })
    },
    deleteImg(i) {
      this.fileList.splice(i, 1)
    },
    clickCommonLi(i) {
      if (this.commonLiItem.includes(i)) {
        let ids = this.commonLiItem.findIndex(e => e === i)
        this.commonLiItem.splice(ids, 1)
      } else {
        this.commonLiItem.push(i)
      }
    },
    submit() {
      console.log(this.commonLiItem)
      this.showDialog = true
    }
  }
};
</script>

<style scoped>
.txtP {
  height: 56px;
  line-height: 56px;
  background: #f5f7fa;
  color: #303133;
  padding-left: 16px;
  font-size: 18px;
}
.listUl {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 0 16px;
}
.line {
  height: 2px;
  margin: 20px 16px 9px;
  background-color: #EDEFF2;
}
.commonLi {
  background: #f5f7fa;
  height: 37px;
  line-height: 37px;
  width: 107px;
  font-size: 16px;
  color: #303133;
  text-align: center;
  margin-top: 10px;
}
.remarkP {
  color: #909399;
  font-size: 12px;
  padding: 0 16px 0 40px;
  position: relative;
  margin-top: 44px;
}
.remarkP img {
  position: absolute;
  width: 12px;
  left: 16px;
  top: 3px;
}
textarea {
  border: none;
  width: 90%;
  margin: 10px auto;
  display: block;
  padding: 10px;
}
.noteSec {
  padding: 17px 16px;
  padding-top: 0;
}
.feed-title {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  margin-bottom: 4px;
}
.block1 {
  background: #FCFCFC;
  border-radius: 8px;
}
.text-area {
  resize: none;
  width: 96%;
  height: 70px;
  border: none;
  background-color: #FCFCFC;
  padding: 1.6rem;
  border-radius: 8px;
  padding-right: 0px;
}
.rz-picter {
  padding: 10px;
}
.img {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 5px;
    margin-right: 5px;
    position: relative;
  }
  .deleteIcon {
    height: 25px;
    width: 25px;
    top: -10px;
    right: -10px;
    position: absolute;
  }
.imgBlock {
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 5px;
  background: #EDEFF2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-avatar {
  height: 16px;
  width: 16px;
  border-radius: 2px;
}
.btnSubmit {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  height: 65px;
  border-radius: 33px;
  border: none;
  color: #fff;
  font-size: 18px;
  display: block;
  background: linear-gradient(
    90deg,
    rgba(105, 61, 255, 1) 0%,
    rgba(13, 94, 255, 1) 100%
  );
}
.active {
  color: #0D5EFF;
  font-size: 1.6rem;
}
.standardText {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  color: #0D5EFF;
  text-align: center;
  margin-top: 100px;
}
</style>