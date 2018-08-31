<template>
    <div class="controller">
        <div class="controller-row">
            <div class="controller-label">边缘控制器编号</div>
            <div class="controller-value">
                <input type="text" class="input input-larger">
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">灯杆编号</div>
            <div class="controller-value">
                <input type="text" class="input input-larger">
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">分组设置</div>
            <div class="controller-value">
                <select class="select select-mini">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">位置坐标</div>
            <div class="controller-value">
                经度：
                <input type="text" class="input input-mini"> 纬度：
                <input type="text" class="input input-mini">
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">通讯方式</div>
            <div class="controller-value">
                <select class="select select-mini">
                    <option value="无线连接"></option>
                </select>
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">SIM卡号</div>
            <div class="controller-value">
                <input type="text" class="input input-larger">
                <span class="tips">仅在无线连接时使用</span>
            </div>
        </div>
        <div class="controller-row">
            <div class="controller-label">选择工程</div>
            <div class="controller-value">
                <select class="select select-mini">
                    <option value="花园广场一期">花园广场一期</option>
                </select>
            </div>
        </div>
        <button class="btn">保存</button>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.controller {
    padding-top: 40px;
    .controller-row {
        width: 100%;
        height: 40px;
        position: relative;
        margin-bottom: 10px;
        .controller-label {
            width: 180px;
            height: 40px;
            position: absolute;
            left: 0;
            top: 0;
            line-height: 40px;
            color: #bfbfbf;
            text-align: right;
        }
        .controller-value {
            position: absolute;
            top: 0;
            right: 0;
            left: 190px;
            bottom: 0;
            color: #fff;
            .input,
            .select {
                height: 30px;
                box-sizing: border-box;
                margin-top: 5px;
            }
            .input-larger {
                width: 360px;
            }
            .select-mini,
            .input-mini {
                width: 200px;
            }
        }
    }
    .btn {
        margin-left: 190px;
        margin-top: 40px;
        background-color: #4877f8;
        margin-bottom: 170px;
        width: 120px;
        border-color: #4877f8;
    }
}
</style>
