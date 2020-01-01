#!/usr/bin/python3
 
import smtplib
from email.mime.text import MIMEText
from email.header import Header
 
# 第三方 SMTP 服务
mail_host="smtp.sohu.com"  #设置服务器
mail_user="fxqyem@sohu.com"    #用户名
mail_pass="GLDYJZQ132R"   #口令 
 
 
sender = 'fxqyem@sohu.com'
receivers = ['cectdwf@126.com']  # 接收邮件
 
message = MIMEText('邮件发送测试...<br/><img src="http://img.netbian.com/file/2019/1221/541e78ce236d7ffb10b8d1348cbc70d6.jpg"/><br/>', 'html', 'utf-8')
message['From'] = Header("fxqy", 'utf-8')
message['To'] =  Header("dwf", 'utf-8')
 
subject = 'Python SMTP 邮件测试'
message['Subject'] = Header(subject, 'utf-8')
 
 
try:
    smtpObj = smtplib.SMTP()
    smtpObj.connect(mail_host, 25)   # 25 为 SMTP 端口号
    smtpObj.login(mail_user,mail_pass)
    smtpObj.sendmail(sender, receivers, message.as_string())
    print ("邮件发送成功")
except smtplib.SMTPException:
    print ("Error: 无法发送邮件")

input("Press any key to close...")