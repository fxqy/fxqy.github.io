#!/bin/ash

cdt=`date '+%Y-%m-%d %H:%M:%S'`

rdmmac=`lua /root/rdmstr.lua mac :`
echo $rdmmac

rdmstr=`lua /root/rdmstr.lua stra 5 18`
echo $rdmstr

echo "${cdt}  ${rdmmac}  ${rdmstr}" >> /tmp/crn-run.log

cat /root/network | sed "s/AnSpmVst8vEhyzYN12QX/$rdmstr/g" | sed "s/A2:B3:C5:D7:E9:FB/$rdmmac/g" > /etc/config/network

sleep 1
/etc/init.d/network restart


