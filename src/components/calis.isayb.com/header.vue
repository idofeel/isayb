<template>
    <el-header id="header">

        <el-row class="header-fixed">
            <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="isayblogo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
            </el-col>
                <el-col :xs="12" :sm="18" :md="20">
                <el-menu :default-active="activeIndex" class="el-menu-demo hidden-xs-only " mode="horizontal" @select="handleSelect" text-color="#333" active-text-color="#4390ee">
                    <template v-for="(v,k) in nav">
                        <template v-if="v.child">
                            <el-submenu :index="k+''">
                                <template slot="title">{{v.title}}</template>
                                <template v-for="(vv,kk) in v.child">
                                    <template v-if="vv.child">
                                        <el-submenu :index="k+'-'+kk">
                                            <template slot="title">{{vv.title}}</template>
                                            <template v-for="(vvv,kkk) in vv.child">
                                                <el-menu-item :index="k+'-'+kk+'-'+kkk">{{vvv.title}}</el-menu-item>
                                            </template>
                                        </el-submenu>
                                    </template>
                                    <template v-else>
                                        <el-menu-item :index="k+'-'+kk">{{vv.title}}</el-menu-item>
                                    </template>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="k+''">
                                <router-link :to='v.to'>{{v.title}}</router-link>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
                
                <i class="el-icon-menu hidden-sm-and-up"></i>
            </el-col>


        </el-row>

    </el-header>
    
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '0',
            nav: [
                { to: '/index', title: '首页'},
                { to: '/course', title: '公共英语' },
                { to: '/shaoer', title: '少儿英语'},
                { to: '/match', title: '口语比赛' },
                { to: '/download', title: '下载中心'}]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);

            location.href = '#' + this.nav[key].to;
        }
    }
}
</script>
<style scoped>

    .header-fixed{
        background: #fff;
        border-bottom: solid 1px #e6e6e6;
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
    }

    .el-menu-demo{
        background: none;
        border:none;
    }
    
    .isayblogo{
        margin-top: 11px;
    }

</style>
