<template>
    <div class='bigBankReportDetail'>
      <el-row>
        <span class="">{{msg}}</span>
        <el-select v-model="value8" filterable placeholder="请选择劵商">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button>劵商管理</el-button>
        <span style="float: right;margin-right: 30px;">
          <a href="#">新增报告</a>
        </span>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="ID"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ID }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="标题"
            width="380">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="所属劵商"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </div>
</template>
<script>
    export default {
        name: 'bigBankReportDetail',
        data() {
          return {
            msg: '所属劵商：',
            options: [{
              value: '选项1',
              label: '全部'
            }, {
              value: '选项2',
              label: '时富金融'
            }, {
              value: '选项3',
              label: '敦沛金融'
            }, {
              value: '选项4',
              label: '国信证券香港'
            }, {
              value: '选项5',
              label: '汇业财经'
            }, {
              value: '选项6',
              label: '新鸿基金融'
            }, {
                value: '选项7',
                label: '群益金融'
            }, {
                value: '选项8',
                label: '交银国际'
            }, {
                value: '选项9',
                label: '第一上海'
            }, {
                value: '选项10',
                label: '华泰香港'
            }, {
                value: '选项11',
                label: '海通国际'
            }, {
                value: '选项12',
                label: '申银万国'
            }],
//            value8: '',
            tableData: [{
              ID: '6407',
              title: '每日港股通讯',
              date: '2016-05-02',
              name: '时富金融',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              ID: '6406',
              title: '每日商品新闻',
              date: '2016-05-04',
              name: '敦沛晨讯',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              ID: '6405',
              title: '敦沛晨讯',
              date: '2016-05-01',
              name: '敦沛金融',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              ID: '6404',
              title: '研究部晨讯',
              date: '2016-05-03',
              name: '群益金融',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              ID: '6403',
              title: '保险行业-利率市场化短期加剧转型阵痛，长期有利',
              date: '2013-09-25',
              name: '交银国际',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              ID: '6402',
              title: '晨早快讯',
              date: '2013-09-25',
              name: '交银国际',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              ID: '6401',
              title: '晨早快讯',
              date: '2013-09-24',
              name: '交银国际',
              address: '上海市普陀区金沙江路 1516 弄'
            }, {
              ID: '6400',
              title: '研究部晨讯',
              date: '2013-09-24',
              name: '群益金融',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
        },
        mounted() {
//          this.handleEdit()
//          this.handleDelete()
        },
        methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          }
        }
    }
</script>

<style>
  .bigBankReportDetail {
    margin-top: 20px;
    border: 1px solid #ccc;
  }
  .el-table th> .cell {
    text-align: center;
  }
</style>
