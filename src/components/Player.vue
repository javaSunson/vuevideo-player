<template>
    <div>
        <div class="bg"></div>
       <el-row>
            <el-col :span="12">
            <div class="input_video">
                <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">

                </video-player>
            </div>
            <div class="mycontrolbar">
                <el-button @click="onPlay" type="primary">播放</el-button>
                <el-button @click="onPause" type="primary">暂停</el-button>
                <el-button @click="nextFrame" type="primary">下一帧</el-button>
                <el-button @click="lastFrame" type="primary">上一帧</el-button>
                <!-- <el-button @click="drawFaceBorder" type="primary">人脸识别</el-button> -->
           </div>
        </el-col>
        <el-col :span="6">
            <el-collapse class="content" v-model="activeNames" change="handleChange">
                <el-collapse-item title="色情" name="1">
                    <div>这里渲染色情物料信息或者表格</div>
                </el-collapse-item>
                <el-collapse-item title="暴恐" name="2">
                    <div>这里渲染暴恐问题</div>
                </el-collapse-item>
                <el-collapse-item title="涉政" name="3">
                    <div>正面涉政</div>
                    <div>反面涉政</div>
                </el-collapse-item>
                <el-collapse-item title="敏感人物" name="4">
                    <div>劣迹明星</div>
                    <div>落马官员</div>
                </el-collapse-item>
            </el-collapse>
        </el-col>
       </el-row>
       <el-row>
           <div class="videoinfo">视频播放信息:
                <p>已播放时长:{{ lefttime }}</p>
                <!--
                <p>视频中的人脸</p>
                <canvas id="canvasId"></canvas>
                -->
           </div>
       </el-row>

    </div>
</template>
<script>
export default {
    data() {
        return {
            playerOptions: {
                playbackRates: [0.5,1.0,1.5,2.0,4.0,16.0,32.0],   //可选择播放速度
                autoplay: false,
                muted: false,   //默认会对音频静音
                loop: false,
                preload: 'auto',
                language: 'zh_CN',
                aspectRatio: '16:9',
                fluid: true,
                sources: [{
                    type: 'application/x-mpegURL',
                    src:"api/live/cctv1_2/index.m3u8"
                }],
                poster: '',
                notSupportedMessage : '此视频暂无法播放，请稍后再试',
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullsreenToggle: true
                }
            },
            activeNames: ['1'],
            lefttime: '' //当前播放时长
        }
    },methods: {
        handleChange(val){
            console.log(val);
        },
        onPlay(){
            this.$refs.videoPlayer.player.play();
        },
        onPause(){
            this.$refs.videoPlayer.player.pause();
            this.countTime();
        },
        nextFrame(){
            this.$refs.videoPlayer.player.currentTime(this.$refs.videoPlayer.player.currentTime()+1)
        },
        lastFrame(){

        },
        countTime(){
            this.lefttime = this.$refs.videoPlayer.player.currentTime() //已播放时长
        },
        progressChange(val){
               console.log("");
               this.player.currentTime(val);
               this.playerCtrl.currentTimeInt=val;
               this.playerCtrl.currentTime=timeUtil.secondToDate(val);
        },
        drawFaceBorder(){
            var img = this.$refs.videoPlayer.player;
            var canvas = document.getElementById("canvasId");
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.src = "http://47.106.69.227:888/mudan.jpg";
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
                ctx.strokeStyle = "#f00";
                ctx.strokeRect(30,20,100,100);
            }
        }
    },
}
</script>
<style scoped>
    .input_video{
        width: 600px;
        /* 暂时把高度设置为自动 */
        height: auto;
        margin: 0 auto;
        margin-left: 20px;
        margin-top: 20px;
    }
    .content{
        width: 400px;
        height: 400px;
        margin-left: 20px;
        margin-top: 20px;
     }
     .bg {

         height: 20px;
         width: auto;
         background-color: orange;
     }
     .mycontrolbar{
         padding: 5px;
         margin-left: 20px;
     }
     .videoinfo{
         margin-left: 20px;
         border: 1px dashed gray;
         padding: 5px;
     }
</style>
