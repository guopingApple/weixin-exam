<template>
    <div class="container border-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm-info" label-position="top" inline-message status-icon>
            <el-form-item label="员工编号" prop="code">
                <el-input v-model="ruleForm.code" class="textInput" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" class="textInput" disabled></el-input>
            </el-form-item>
            
            <el-form-item label="所属公司" class="input code" prop="company">
                <el-select v-model="ruleForm.company"  @change = 'changeOptions' placeholder="请选择所属公司" style="border:0">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属部门" prop="department">
                <el-input v-model="ruleForm.department" class="textInput"></el-input>
            </el-form-item>
            <el-form-item label="岗位名称" prop="position">
                <el-input v-model="ruleForm.position" class="textInput"></el-input>
            </el-form-item>
            <el-form-item label="民族" prop="nation">
                <el-input v-model="ruleForm.nation" class="textInput"></el-input>
            </el-form-item>
            <el-form-item label="性别" class="sex" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="岗位年限" prop="postionYears">
                <el-input v-model="ruleForm.postionYears" class="textInput"></el-input>
            </el-form-item>
            <!-- <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" class="textInput"></el-input>
            </el-form-item> -->
            <el-form-item label="联系电话" prop="phone">
                <el-input v-model="ruleForm.phone" class="textInput"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" class="button">提 交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="less" scoped>
    @r:50rem;
    .container{
        width: 100%;
        height: auto;
        padding:20/@r 30/@r;
    }
    .el-form-item{
        margin-bottom:0;
    }
    .button{
        width:100%;
        background: url("../../assets/enrolbg.png") no-repeat;
        background-size:100% 100%;   
        margin-top: 40/@r;    
    }
</style>
<script>
    import './list.css'
    import qs from 'qs'
    import axios from 'axios'
    export default {
        data() {
            var checkPhone= (rule, value, callback) => {
                if (value === '') {
                    callback();
                }else{        
                let reg=/^1(3|4|5|7|8)\d{9}$/;
                    if(!reg.test(value)){
                        callback(new Error('请输入正确的电话号码'));
                    }
                callback();
                }
            };
            return {
                oid: this.$route.query.id, // 员工id
                element:qs.parse(this.$route.query.element),
                ruleForm: {
                    id: this.$route.query.id,
                    name:'',
                    code:'',
                    openid:'',
                    password:'',
                    phone:'',
                    company:'',
                    department:'',
                    position:'',
                    nation:'',
                    gender: '',
                    postionYears:'',
                    // email:''
                },
                options:[],
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 20 个字符之内', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入员工编码', trigger: 'blur' }
                    ],
                    department: [
                        { required: true, message: '请输入所属部门', trigger: 'blur' }
                    ],
                    company: [
                        {required: true, message: '请选择所属公司', trigger: 'blur'}
                    ],
                    position: [
                        { required: true, message: '请输入岗位名称', trigger: 'blur' },
                    ],
                    nation: [
                        { required: true, message: '请输入民族', trigger: 'blur' }
                    ],
                    // gender: [
                    //     { required: true, message: '请选择性别', trigger: 'blur' }
                    // ],
                    postionYears: [
                        {required: true, message: '请输入岗位年限', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        { validator: checkPhone, trigger: 'blur' }
                    ],
                    // email:[
                    //     { required: true, message: '请填写邮箱地址', trigger: 'blur' },
                    //     { type: 'email', message: '请填写正确的邮箱地址', trigger: 'blur'},
                    //     { min: 1, max: 50, message: '1-50位字符组成', trigger: 'blur' }
                    // ]
                }
            }
        },
        mounted() {
            console.log(this.element)
            this.ruleForm.code = this.element.code
            this.ruleForm.name = this.element.name
            this.ruleForm.department = this.element.department
            this.ruleForm.company = this.element.company
            this.ruleForm.gender =Number(this.element.gender)

            this.ruleForm.position = this.element.position
            this.ruleForm.nation = this.element.nation
            this.ruleForm.postionYears = this.element.postionYears
            this.ruleForm.phone = this.element.phone
            this.ruleForm.email = this.element.email

            this.companyList()
        },
        methods: { 
            changeOptions(value){
                console.log(this.userForm.companyId)
            },
            // 公司列表
            companyList(){ 
                let that = this
                let param = qs.stringify({'page':'1','rows': '10000'})
                this.axios.post(this.biz.serverUrl + 'rest/web/companyList',param, this.biz.urlencodedConfig)
                .then(function(res){
                // console.log(res);
                if (res.data.code == '200') {
                    that.options = res.data.datas
                    // console.log(res.data.datas)
                }
                }).catch(function (res) {
                console.log(res)
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {

                    // localStorage.setItem("person",'true');

                    let that = this
                    // if(this.ruleForm.gender=='男'){
                    //     this.ruleForm.gender = 1
                    // }else if(this.ruleForm.gender=='女'){
                    //     this.ruleForm.gender = 2
                    // }
                    this.ruleForm.id = this.oid

                    let param = qs.stringify(this.ruleForm)

                    console.log(param)

                    this.axios.post(this.biz.serverUrl +'rest/web/employeeUpdate',param,this.biz.urlencodedConfig).then(function (res) {
                    // console.log(res)
                    if(res.data.code == '200'){   
                        localStorage.setItem("isShowInfo","1")
                        that.$router.push({path: '/main',query:{id:that.oid}})
                    }
                    // _this.tableData = res.data.datas
                    // _this.form = res.data.fsp
                    }).catch(function (res) {
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            }
        }
    }
</script>