<template>
  <div class="container border-box">
      <header class="border-box">
          <!-- <div class="header-content">
              <h6 class="title">{{details.name}}</h6>
              <p>报名时间:<span>{{details.enrolStartDate}}~{{details.enrolEndDate}}</span></p>
              <p>培训时间:<span>{{details.trainStartDate}}~{{details.trainEndDate}}</span></p>
              <p>报名地址:<span>{{details.enrolAddress}}</span></p>
              <p>联系人:<span>{{details.contactMan}}</span></p>
              <p>联系方式:<span>{{details.contactPhone}}</span></p>
              <p class="tiaojian">报名条件:<span>{{details.enrolRequirement}}</span></p>
              <p class="jianjie">简介:<span>{{details.courseDesc}}</span></p>
          </div>  -->  
          <div class="header-content">
              <h6 class="title">{{details.name}}</h6>
              <div class="content-bg">
                <p class="timing">报名开始时间:<span>{{details.enrolStartDate}}</span></p>
                <p class="timing">报名结束时间:<span>{{details.enrolEndDate}}</span></p>
                <p class="timing">培训开始时间:<span>{{details.trainStartDate}}</span></p>
                <p class="timing">培训结束时间:<span>{{details.trainEndDate}}</span></p>
                <p class="timing">报名地址:<span>{{details.enrolAddress}}</span></p>
                <p>联系人:<span>{{details.contactMan}}</span></p>
                <p class="timing">联系方式:<span>{{details.contactPhone}}</span></p>
                <p class="tiaojian">报名条件:<span>{{details.enrolRequirement}}</span></p>
                <p class="jianjie">简介:<span>{{details.courseDesc}}</span></p>   
              </div>              
          </div>          
      </header>
      <!-- <div class="content-box">
          <div class="content border-box">
               {{details.courseDesc}}
             <p>人数限制35人，培训对象岗位必须是部门负责人。人数限制35人，培训对象岗位必须是部门负责人。人数限制35 人，培训对相岗位必须是部门负责人。</p>
             <img src="../../assets/1.png" alt="">
             <p>人数限制35人，培训对象岗位必须是部门负责人。人数限制35人，培训对象岗位必须是部门负责人。人数限制35 人，培训对相岗位必须是部门负责人。</p>
             <p>人数限制35人，培训对象岗位必须是部门负责人。人数限制35人，培训对象岗位必须是部门负责人。人数限制35 人，培训对相岗位必须是部门负责人。</p>
             <p>人数限制35人，培训对象岗位必须是部门负责人。人数限制35人，培训对象岗位必须是部门负责人。人数限制35 人，培训对相岗位必须是部门负责人。</p>
          </div>  
      </div>        -->
  </div>
</template>
<style lang="less" scoped>
    @r:50rem;
    .container{
        width: 100%;
        height: 100vh;
        // padding:40/@r;
        .btn-box{
            width:100%;
            padding:0 30/@r;
            // position: fixed;
            // bottom: 60/@r;
            // left: 0;
            .button{
                width:100%;
                background: url("../../assets/enrolbg.png") no-repeat;
                background-size:100% 100%;
                
            }
        }
        .content-box{
            overflow-y: auto;
        }
    }
    .content-box::-webkit-scrollbar {  
        -webkit-border-radius: 5px;  
        -moz-border-radius: 5px;  
        border-radius: 5px;  
    }  
    .content-box::-webkit-scrollbar-thumb {  
        // background: url("../../assets/scroll.png") no-repeat;
        // background-size:100% 100%;
        background: #f1f1f1;
        -webkit-border-radius: 5px;  
        -moz-border-radius: 5px;  
        border-radius: 5px;  
        width: 20/@r;  
    }  
    .content-box::-webkit-scrollbar-thumb:hover {  
        // background: url("../../assets/scroll.png") no-repeat;
        // background-size:100% 100%;
        background: #f1f1f1;
        -webkit-border-radius: 5px;  
        -moz-border-radius: 5px;  
        border-radius: 5px;  
    }  
    .title{
        font-size: 32/@r;
        line-height: 42/@r;
        padding: 15/@r 0 5/@r;
        font-weight: normal;
        text-overflow: ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color:#1B1B1B;
        margin-bottom: 20/@r;
    }
    header{
        height: auto;
        background: #fff;        
        // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        .header-content{
            padding: 20/@r 30/@r;
        }
        p{
            font-size:28/@r;
            color:#333;
            line-height: 50/@r;
            span{
                display: inline-block;
                vertical-align: top;
                margin-left:10/@r;
                color:#666;
            }
        }
        .tiaojian{
            span{
                max-width: 80%;
            }
        }
        .jianjie{
            span{
                max-width: 85%;
            }
        }
        .timing{
            span{
                max-width: 77%;
            }
        }
        .content-bg{
            width: 100%;
            height: auto;            
            background-image: url("../../assets/enrolbg2.png");
            background-repeat:no-repeat;
            background-color: #f1f1f1;
            background-size: 100% 100%;
            padding:50/@r;
            border-radius: 5px;
            box-sizing: border-box;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
    }
    .content{
        padding:20/@r 30/@r 20/@r 40/@r;
        background-color: #fff;
        overflow-y: auto;
        font-size:28/@r;
        color:#444444;
        line-height:40/@r;
        p{
            color: #444;
            font-size:28/@r;
            line-height: 50/@r;
            text-indent: 1em;
        }
        img{
            width: 100%;
        }
    }
</style>
<script>
    import $ from 'jquery';
    export default{
        data() {
            return {
                details:{}
            }
        },
        mounted(){
            
            this.detail()
        },
        methods:{
            detail(){
                let that=this
                let id=this.$route.query.id
                this.axios.get(this.biz.serverUrl+'rest/enrol/getEnrolById?id='+id,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (res) {
                    console.log(res)
                if(res.data.code == 200){
                    that.details=res.data.element
                    that.$nextTick(function() {
                        $(".content-box").height(document.documentElement.clientHeight-$("header").height());
                    });
                }
                }).catch(function (res) {
                    console.log(res)
                })
            }
        }
       
    }
</script>