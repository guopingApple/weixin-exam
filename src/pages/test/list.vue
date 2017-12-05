<template>
  <div>

    <el-form ref="form" style="margin-top: 20px;" :model="form">
      <el-form-item label="关键字" label-width="75px" label-position="left">
        <el-input v-model="form.map.title" style="width: 200px"></el-input>
        <el-button type="primary" @click="list">查询</el-button>
        <!--<el-button type="success" @click="" style="margin-left:0;">新增</el-button>-->
        <router-link v-on:click.native="add" to="###" tag="el-button" class="yp_tip_button">新增</router-link>
      </el-form-item>
    </el-form>
    <div style="padding: 0 15px">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column
          prop="title"
          label="title"
          width="180">
        </el-table-column>
        <el-table-column
          prop="memo"
          label="memo"
          width="180">
        </el-table-column>
        <el-table-column
          prop="pkgCode"
          label="pkgCode">
        </el-table-column>
        <el-table-column header-align="left" label="操作">
          <template scope="datas">
            <el-button type="text" size="mini" @click="edit(datas.row.id)">编辑</el-button>
            <el-button type="text" size="mini" @click="del(datas.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length" style="margin:15px auto;text-align: center">
    </el-pagination>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data () {
      return {
        form: {
          map: {
            title: ''
          }
        },
        currentPage: 1,
        pageSize: 10,
        tableData: []
//        tableData: [{
//          date: '2016-05-02',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1518 弄'
//        }, {
//          date: '2016-05-04',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1517 弄'
//        }, {
//          date: '2016-05-01',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1519 弄'
//        }, {
//          date: '2016-05-03',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1516 弄'
//        }]
      }
    },
    mounted: function () {
      this.list()
    },
    methods: {
      list: function () {
        let _this = this
        this.axios.post(this.biz.serverUrl + '/ivvi/ivviAdList', this.form).then(function (res) {
          console.log(res)
          _this.tableData = res.data.datas
          _this.form = res.data.fsp
        }).catch(function (res) {
          console.log(res)
        })
      },
      add: function () {
//        alert('add')
        this.$router.push({path: '/add'})
      },
      del: function (id) {
        var that = this
        this.axios.post(this.biz.serverUrl + '/ivvi/ivviAdDel', qs.stringify({id: id}), this.biz.urlencodedConfig).then(function (res) {
          if (res.data.status) {
            that.$notify.success({message: res.data.msg})
            that.list()
          } else {
            that.$notify.error({message: res.data.msg})
          }
        }).catch(function (res) {
          console.log(res)
        })
      },
      edit: function (id) {
        this.$router.push({path: '/edit?id=' + id})
      },
      handleSizeChange: function (size) {
        this.pageSize = size
//        console.log(size)
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
        console.log(currentPage)
      }
    }
  }
</script>
