--加载Lua模块库   
local template = require("resty.template")
template.caching(false)  
--1、获取请求参数中的商品ID   
local sid = ngx.req.get_uri_args()["sid"]  

--template.render("product {* message *} {* skuId *}", { message = "Hello, World!",skuId = "dfgdfgdfgdfg"})

local view = template.new "product.html"
view.message = "Hello, World!"
view.sid = sid
view:render()