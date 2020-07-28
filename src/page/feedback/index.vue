<template>
<div>
  <div v-if="!showScene">
    <div class="select-scene" @click="showScene = true">{{text1 || '请选择问题场景'}} <span style="font-size: 1rem;color: #909399;">{{text2}}</span><span class="select-icon">></span></div>
    <div class="line"></div>
    <div class="content">
      <div>
        <p class="feed-title">反馈内容</p>
        <div class="block1">
          <textarea class="text-area" row="3" resize: none placeholder="请填写6个字以上的问题描述或建议~" v-model="text"></textarea>
          <div class="rz-picter">
            <p class="upload-tip">上传图片最多<i style="color: blue;">4</i>张</p>
            <div style="display: flex;">
              <span class="img"  v-for="(item, index) in fileList" :key="index" >
                <img class="img" :src="item" />
                <img class="deleteIcon" @click="deleteImg(index)" src="../../assets/删除.svg" />
              </span>
              <span v-if="isShowInput" @click="chooseImage" class="imgBlock"><img class="img-avatar" src="../../assets/photo@3x.png" alt /></span>
            </div>
            <input type="file" name="avatar" id="uppic" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" style="display: none;">
          </div>
        </div>
      </div>
      <div style="margin-top: 3.2rem">
        <p class="feed-title">联系方式</p>
        <div class="block1">
          <input type="text" class="input-phone" placeholder="请输入联系电话/QQ/微信/邮箱" v-model="phone">
        </div>
      </div>
      <div class="submit-btn" @click="submit" :class="isDisabled ? 'opa5' : ''">提交{{isDisabled}}</div>
    </div>
  </div>
  <problem-scene v-else @selectProFun="selectProFun"></problem-scene>
</div>
</template>

<script>
  import problemScene from './component/problemScene'
  export default {
    data() {
      return {
        showScene: false,
        phone: '',
        text: '',
        text1: '',
        text2: '',
        fileList: [],
      }
    },
    components: {
      problemScene
    },
    computed: {
      isDisabled() {
        return !(this.text || (this.text1 || this.fileList.length) || this.phone)
      },
      isShowInput() {
        return !(this.fileList.length > 3)
      }
    },
    watch: {
      fileList: {
        handler(val) {
          if (val.length > 4) {
            this.fileList.splice(4)
          }
        }
      }
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
      selectProFun(text1, text2) {
        this.showScene = false
        this.text1 = text1
        this.text2 = text2
      },
      deleteImg(i) {
        this.fileList.splice(i, 1)
      },
      submit() {
        if (this.isDisabled) {
          return
        }
        console.log('TTT', this.fileList)
      }
    }
  }
</script>

<style scoped>
  .select-scene {
    padding: 12px 16px 18px;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    color: #303133;
  }
  .select-icon {
    float: right;
    color: #D5DBE6;
    font-size: 15px;
    font-weight: 600;
  }
  .line {
    height: 4px;
    background: #F5F7FA;
  }
  .content {
    padding: 17px 16px;
  }
  .feed-title {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
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
    padding: 16px;
    padding-bottom: 12px;
  }
  .upload-tip {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    color: #909399;
    padding-bottom: 3px;
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
  .input-phone {
    width: 92%;
    border: none;
    background: #FCFCFC;
    padding: 15px 16px;
    border-radius: 8px;
    padding-right: 0;
  }
  .submit-btn {
    background: linear-gradient(90deg, #693DFF 0%, #0D5EFF 100%);
    border-radius: 32.5px;  
    color: #FFFFFF;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    height: 6.5rem;
    text-align: center;
    line-height: 6.5rem;
    margin-top: 100px;
  }
  .opa5 {
    opacity: .5;
  }
</style>