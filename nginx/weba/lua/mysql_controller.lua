-- 导入mysql库
local mysql = require "resty.mysql"
local db, err = mysql:new()
if not db then
    ngx.say("failed to instantiate mysql : ", err)
    return
end
-- 设置超时时间
db:set_timeout(1000)
-- 连接mysql
local ok, err, errno, sqlState = db:connect {
    host = "127.0.0.1",
    port = 3306,
    database = "test",
    user = "root",
    password = "root",
    max_package_size = 1024
}
if not ok then
    ngx.say("failed to connect: ", err, " : ", errno, " ", sqlState)
    return
end
-- SQL操作
res, err, errno, sqlState = db:query("select mid, mname, mage,mphone from m_user limit 2")
if not res then
    ngx.say("bad request")
    return
end
-- json输出
local cjson = require "cjson"
--html 模板
local template = require("resty.template")
template.caching(false) 
local view = template.new "product.html"
view.message = cjson.encode(res[2]) --在 Lua 中，数组下标从 1 开始计数
view.sid = "mysql test"
view:render()
--ngx.say(cjson.encode(res))
