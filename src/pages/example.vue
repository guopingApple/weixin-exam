<template>

  <div class="jumbotron">
    <h1>这里是首页11！</h1>
    <el-button  type="primary" icon="edit" ></el-button>
    <el-button  type="primary" icon="share" ></el-button>
    <el-button  type="primary" icon="delete" ></el-button>
    <el-button  type="primary" icon="search" ></el-button>
    <el-button  type="primary"  >上传<i class="el-icon-upload el-icon--right"/></el-button>

    <el-button-group>
      <el-button type="primary" icon="arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>

    <el-button-group>
      <el-button type="primary" icon="edit"></el-button>
      <el-button type="primary" icon="share"></el-button>
      <el-button type="primary" icon="delete"></el-button>
    </el-button-group>

    <el-button type="primary" :loading="true">加载中</el-button>

    <el-button type="primary" size="large">大型按钮</el-button>
    <el-button type="primary">正常按钮</el-button>
    <el-button type="primary" size="small">小型按钮</el-button>
    <el-button type="primary" size="mini">超小按钮</el-button>
    <p/>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="search">搜索</el-button>

    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

    <el-radio class="radio" disabled v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" disabled v-model="radio" label="2">备选项</el-radio>

    <el-radio-group v-model="radio2">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>

    <el-radio-group v-model="radio3">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <div style="margin: 15px 0;"></div>
    <el-radio-group v-model="radio4">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京" :disabled="true"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <div style="margin: 15px 0;"></div>
    <el-radio-group v-model="radio5" :disabled="true">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>

    <el-checkbox-group
      v-model="checkedCities1"
      :min="2"
      :max="3">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>


    <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
    <el-input
      placeholder="请选择日期"
      icon="search"
      v-model="input2"
      :on-icon-click="handleIconClick">
    </el-input>

    <div>
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input4">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input5">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>

    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" :step="2"></el-input-number>

    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="value5" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-switch
      v-model="value2"
      on-text="开启"
      off-text="关闭"
      on-color="#13ce66"
      off-color="#ff4949"
      >
    </el-switch>
    <el-slider v-model="value1" show-input></el-slider>

    <el-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
    </el-time-select>

    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value7"
        type="daterange"
        align="right"
        placeholder="选择日期范围"
        :picker-options="pickerOptions2">
      </el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value4"
        type="datetimerange"
        :picker-options="pickerOptions2"
        placeholder="选择时间范围"
        align="right">
      </el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>

    <el-table

      :data="tableValue4"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>


    <el-tag>标签一</el-tag>
    <el-tag type="gray">标签二</el-tag>
    <el-tag type="primary">标签三</el-tag>
    <el-tag type="success">标签四</el-tag>
    <el-tag type="warning">标签五</el-tag>
    <el-tag type="danger">标签六</el-tag>

    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      :closable="true"
      :close-transition="false"
      @close="handleClose(tag)"
    >
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>


    <el-button :plain="true" @click="open2">成功</el-button>

    <el-button type="text" @click="open3">点击打开 Message Box</el-button>


  </div>



</template>
<style>
  body {
    margin: 0;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-select .el-input {
    width: 110px;
  }
</style>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default {
    data () {
      return {
        loading: true,
        radio: '1',
        radio2: 3,
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        checkedCities1: ['上海', '北京'],
        cities: cityOptions,
        input: '',
        input2: '',
        input3: '',
        input4: '',
        inp5: 'ut',
        select: '',
        num1: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: '',
        value5: [],
        value7:'',
        value2: true,
        startTime: '',
        endTime: '',

        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
            const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
        }, {
            text: '最近一个月',
              onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
              onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      value4: '',
        tableValue4: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
  };
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      handleChange(value) {
        console.log(value);
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
